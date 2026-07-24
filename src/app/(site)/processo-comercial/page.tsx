import { Check, X } from "lucide-react";
import { CTABanner } from "@/components/layout/CTABanner";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { COMPARATIVO, PROCESSO_BLOCOS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Processo Comercial | M|P Assessoria — CRM, Vendas e Treinamento",
  description:
    "CRM, treinamento de vendas, automações e clareza total sobre de onde vêm os leads e as vendas. A M|P estrutura o processo comercial da sua empresa.",
  path: "/processo-comercial",
  absoluteTitle: true,
});

export default function ProcessoComercialPage() {
  return (
    <>
      <PageHero
        overline="Processo Comercial"
        title="Gerar lead é só metade do caminho. A outra metade é vender."
        subtitle="A maioria das agências para no lead. A M|P vai até a venda — e estrutura todo o processo comercial para que cada oportunidade seja aproveitada."
      />

      {/* Blocos */}
      <Section bg="white">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROCESSO_BLOCOS.map((bloco, i) => {
            const Icon = bloco.icone;
            return (
              <Reveal key={bloco.titulo} delay={(i % 3) * 0.08}>
                <Card hover className="h-full p-6 lg:p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-mp-gold-soft">
                    <Icon className="h-6 w-6 text-mp-gold-deep" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-mp-ink sm:text-xl">
                    {bloco.titulo}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-mp-mid">
                    {bloco.descricao}
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Antes vs Depois */}
      <Section bg="soft">
        <Reveal>
          <SectionHeading
            overline="Antes vs Depois"
            title="O que muda quando o processo comercial existe"
            align="center"
          />
        </Reveal>

        <Reveal className="mt-12 lg:mt-16">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-mp-line bg-white shadow-sm">
            <div className="grid grid-cols-2">
              <div className="bg-mp-red px-4 py-4 text-center font-heading text-sm font-bold uppercase tracking-wider text-white sm:px-6 sm:text-base">
                Antes da M|P
              </div>
              <div className="bg-mp-green px-4 py-4 text-center font-heading text-sm font-bold uppercase tracking-wider text-white sm:px-6 sm:text-base">
                Depois da M|P
              </div>
            </div>
            {COMPARATIVO.map((row) => (
              <div
                key={row.antes}
                className="grid grid-cols-2 border-t border-mp-line"
              >
                <div className="flex items-start gap-2.5 border-r border-mp-line px-4 py-4 sm:px-6 sm:py-5">
                  <X
                    className="mt-0.5 h-4 w-4 shrink-0 text-mp-red"
                    aria-hidden
                  />
                  <span className="text-sm leading-relaxed text-mp-body sm:text-base">
                    {row.antes}
                  </span>
                </div>
                <div className="flex items-start gap-2.5 px-4 py-4 sm:px-6 sm:py-5">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-mp-green"
                    aria-hidden
                  />
                  <span className="text-sm leading-relaxed text-mp-body sm:text-base">
                    {row.depois}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <CTABanner ctaLabel="Quero estruturar meu processo comercial" />
    </>
  );
}
