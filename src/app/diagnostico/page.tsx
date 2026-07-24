import { CheckCircle2, Quote } from "lucide-react";
import { DiagnosticoForm } from "@/components/forms/DiagnosticoForm";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { DIAGNOSTICO_BULLETS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Diagnóstico Gratuito | M|P Assessoria — Análise do Seu Negócio",
  description:
    "Agende um diagnóstico gratuito com os sócios da M|P. Vamos analisar seu negócio, identificar oportunidades e mostrar como vender mais com método.",
  path: "/diagnostico",
  absoluteTitle: true,
});

export default function DiagnosticoPage() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 lg:pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-mp-gold/[0.07] blur-3xl"
      />
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Copy */}
        <Reveal>
          <h1 className="text-[32px] font-extrabold leading-[40px] lg:text-[44px] lg:leading-[54px]">
            Vamos analisar seu negócio —{" "}
            <span className="text-mp-gold">sem custo e sem compromisso.</span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-mp-muted-dark sm:text-lg">
            O diagnóstico da M|P é uma reunião estratégica direta com os sócios
            Marcos e Pedro Goulart. Em 30 a 45 minutos, vamos:
          </p>

          <ul className="mt-6 space-y-3.5">
            {DIAGNOSTICO_BULLETS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-mp-gold"
                  aria-hidden
                />
                <span className="text-base leading-relaxed text-white/90">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-base leading-relaxed text-mp-muted-dark">
            Sem pitch de vendas forçado. Sem pressão. Você sai da reunião com
            clareza — independente de fechar ou não.
          </p>

          <Badge color="gold" className="mt-6 normal-case">
            +170 empresas já passaram por esse diagnóstico.
          </Badge>

          <blockquote className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <Quote className="h-6 w-6 text-mp-gold" aria-hidden />
            <p className="mt-3 text-base italic leading-relaxed text-white/85">
              “Eu achava que marketing não funcionava pro meu segmento. Na
              reunião com o Marcos, vi que o problema era a falta de processo.
              Em 4 meses, geramos R$579 mil em vendas.”
            </p>
            <footer className="mt-4 text-sm font-semibold text-mp-muted-dark">
              — Dono da Pacheco Solar
            </footer>
          </blockquote>
        </Reveal>

        {/* Formulário */}
        <Reveal delay={0.12}>
          <div className="rounded-2xl bg-white p-6 shadow-2xl sm:p-8 lg:p-10">
            <h2 className="font-heading text-xl font-bold text-mp-ink">
              Agende seu diagnóstico gratuito
            </h2>
            <p className="mt-1.5 text-sm text-mp-mid">
              Preencha e receba o contato em até 24h úteis.
            </p>
            <div className="mt-6">
              <DiagnosticoForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
