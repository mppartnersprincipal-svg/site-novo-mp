"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FATURAMENTO_OPTIONS, waLink } from "@/lib/constants";
import { diagnosticoSchema, type DiagnosticoData } from "@/lib/schema";
import { cn } from "@/lib/utils";

const INPUT =
  "w-full rounded-lg border border-mp-line bg-white px-4 py-3 text-mp-ink placeholder:text-mp-mid/60 transition-colors focus:border-mp-gold focus:outline-none focus:ring-2 focus:ring-mp-gold/25";
const INPUT_ERROR = "border-mp-red focus:border-mp-red focus:ring-mp-red/20";
const LABEL = "mb-1.5 block text-sm font-semibold text-mp-ink";
const ERROR = "mt-1.5 text-sm text-mp-red";

function formatPhone(value: string): string {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10)
    return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

export function DiagnosticoForm() {
  const router = useRouter();
  const [networkError, setNetworkError] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<DiagnosticoData>({
    resolver: zodResolver(diagnosticoSchema),
    defaultValues: { nome: "", empresa: "", segmento: "", whatsapp: "" },
  });

  async function onSubmit(data: DiagnosticoData) {
    setNetworkError(false);
    try {
      const res = await fetch("/api/diagnostico", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`status ${res.status}`);
      router.push("/diagnostico/obrigado");
    } catch {
      setNetworkError(true);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div>
        <label htmlFor="nome" className={LABEL}>
          Nome completo
        </label>
        <input
          id="nome"
          type="text"
          autoComplete="name"
          placeholder="Seu nome"
          className={cn(INPUT, errors.nome && INPUT_ERROR)}
          aria-invalid={!!errors.nome}
          {...register("nome")}
        />
        {errors.nome && <p className={ERROR}>{errors.nome.message}</p>}
      </div>

      <div>
        <label htmlFor="empresa" className={LABEL}>
          Nome da empresa
        </label>
        <input
          id="empresa"
          type="text"
          autoComplete="organization"
          placeholder="Sua empresa"
          className={cn(INPUT, errors.empresa && INPUT_ERROR)}
          aria-invalid={!!errors.empresa}
          {...register("empresa")}
        />
        {errors.empresa && <p className={ERROR}>{errors.empresa.message}</p>}
      </div>

      <div>
        <label htmlFor="segmento" className={LABEL}>
          Segmento de atuação
        </label>
        <input
          id="segmento"
          type="text"
          placeholder="Ex.: materiais de construção, clínica, atacado..."
          className={cn(INPUT, errors.segmento && INPUT_ERROR)}
          aria-invalid={!!errors.segmento}
          {...register("segmento")}
        />
        {errors.segmento && <p className={ERROR}>{errors.segmento.message}</p>}
      </div>

      <div>
        <label htmlFor="faturamento" className={LABEL}>
          Faturamento médio mensal
        </label>
        <select
          id="faturamento"
          defaultValue=""
          className={cn(
            INPUT,
            "cursor-pointer",
            errors.faturamento && INPUT_ERROR
          )}
          aria-invalid={!!errors.faturamento}
          {...register("faturamento")}
        >
          <option value="" disabled>
            Selecione a faixa
          </option>
          {FATURAMENTO_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.faturamento && (
          <p className={ERROR}>{errors.faturamento.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="whatsapp" className={LABEL}>
          WhatsApp para contato
        </label>
        <input
          id="whatsapp"
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          placeholder="(62) 99999-9999"
          className={cn(INPUT, errors.whatsapp && INPUT_ERROR)}
          aria-invalid={!!errors.whatsapp}
          {...register("whatsapp", {
            onChange: (e) =>
              setValue("whatsapp", formatPhone(e.target.value), {
                shouldValidate: false,
              }),
          })}
        />
        {errors.whatsapp && <p className={ERROR}>{errors.whatsapp.message}</p>}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 text-base"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
            Enviando...
          </>
        ) : (
          "Quero meu diagnóstico gratuito"
        )}
      </Button>

      {networkError && (
        <p role="alert" className="text-center text-sm text-mp-red">
          Não conseguimos enviar agora. Tente de novo ou{" "}
          <a
            href={waLink(
              "Olá! Tentei agendar um diagnóstico pelo site e o formulário falhou. Pode me ajudar?"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline"
          >
            chame direto no WhatsApp
          </a>
          .
        </p>
      )}

      <p className="text-center text-xs leading-relaxed text-mp-mid">
        Atendimento direto com Marcos e Pedro Goulart, sócios da M|P
        Assessoria. Sem intermediários.
      </p>
    </form>
  );
}
