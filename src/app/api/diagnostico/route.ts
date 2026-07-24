import { NextResponse } from "next/server";
import { diagnosticoSchema } from "@/lib/schema";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
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

  // Registro reserva — fica nos logs de função (Vercel) mesmo sem webhook.
  console.log("[lead]", JSON.stringify(lead));

  const webhookUrl = process.env.DIAGNOSTICO_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
        signal: AbortSignal.timeout(5000),
      });
    } catch (err) {
      // Falha de webhook nunca bloqueia o lead — o log acima é o backup.
      console.error("[lead] webhook falhou:", err);
    }
  }

  return NextResponse.json({ ok: true });
}
