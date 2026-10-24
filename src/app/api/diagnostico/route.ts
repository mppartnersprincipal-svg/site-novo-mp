import { NextResponse } from "next/server";
import { diagnosticoSchema } from "@/lib/schema";

/** Tamanho máximo aceito do corpo da requisição (~10 KB). */
const MAX_BODY_BYTES = 10 * 1024;

/** Rate limit: até RATE_LIMIT_MAX requisições por IP a cada RATE_LIMIT_WINDOW_MS. */
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60_000;
/** Teto de IPs guardados na memória, para o mapa não crescer sem limite. */
const RATE_LIMIT_MAX_KEYS = 5_000;

/*
 * Rate limit em memória, POR INSTÂNCIA da função: cada instância serverless
 * (Vercel) tem o próprio contador e ele zera em cold start. Serve para frear
 * abuso simples; para um limite global, usar um store compartilhado (ex.: Upstash/KV).
 */
const hits = new Map<string, number[]>();

function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip")?.trim() || "desconhecido";
}

function isRateLimited(ip: string, now: number): boolean {
  const recent = (hits.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  if (recent.length >= RATE_LIMIT_MAX) {
    hits.set(ip, recent);
    return true;
  }
  if (!hits.has(ip) && hits.size >= RATE_LIMIT_MAX_KEYS) {
    // Descarta a entrada mais antiga (Map mantém a ordem de inserção).
    const oldest = hits.keys().next().value;
    if (oldest !== undefined) hits.delete(oldest);
  }
  hits.set(ip, [...recent, now]);
  return false;
}

/** Lê o corpo como texto, abortando assim que passar de MAX_BODY_BYTES. */
async function readLimitedBody(req: Request): Promise<string | null> {
  const declared = Number(req.headers.get("content-length") ?? 0);
  if (declared > MAX_BODY_BYTES) return null;
  if (!req.body) return "";

  const reader = req.body.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    total += value.byteLength;
    if (total > MAX_BODY_BYTES) {
      await reader.cancel();
      return null;
    }
    chunks.push(value);
  }
  const bytes = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return new TextDecoder().decode(bytes);
}

export async function POST(req: Request) {
  if (isRateLimited(getClientIp(req), Date.now())) {
    return NextResponse.json(
      { ok: false, error: "rate_limited" },
      { status: 429, headers: { "Retry-After": "60" } }
    );
  }

  let raw: string | null;
  try {
    raw = await readLimitedBody(req);
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid_body" },
      { status: 400 }
    );
  }
  if (raw === null) {
    return NextResponse.json(
      { ok: false, error: "payload_too_large" },
      { status: 413 }
    );
  }

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid_json" },
      { status: 400 }
    );
  }

  const parsed = diagnosticoSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "invalid_data",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const lead = {
    ...parsed.data,
    origem: "site",
    timestamp: new Date().toISOString(),
  };

  // Só registra o evento, sem dados pessoais do lead.
  console.log("[lead] recebido", { faturamento: lead.faturamento });

  const webhookUrl = process.env.DIAGNOSTICO_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
        signal: AbortSignal.timeout(5000),
      });
      if (!res.ok) console.error("[lead] webhook respondeu", res.status);
    } catch (err) {
      // Falha de webhook nunca bloqueia o lead.
      console.error(
        "[lead] webhook falhou:",
        err instanceof Error ? err.message : "erro desconhecido"
      );
    }
  } else {
    console.error("[lead] DIAGNOSTICO_WEBHOOK_URL ausente: lead não foi encaminhado");
  }

  return NextResponse.json({ ok: true });
}
