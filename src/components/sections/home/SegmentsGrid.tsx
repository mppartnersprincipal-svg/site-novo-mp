import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SEGMENTOS } from "@/lib/constants";

export function SegmentsGrid() {
  return (
    <Section bg="soft">
      <Reveal>
        <SectionHeading
          title="Nossa metodologia funciona para qualquer segmento."
          subtitle="Foram 4 anos e mais de 50 segmentos atendidos para validar isso."
          align="center"
        />
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-16 lg:grid-cols-4">
        {SEGMENTOS.map((segmento, i) => {
          const Icon = segmento.icon;
          return (
            <Reveal key={segmento.label} delay={(i % 4) * 0.06}>
              <div className="flex h-full items-center gap-3 rounded-lg border border-mp-line bg-mp-paper p-4 transition-colors duration-300 hover:border-mp-gold/50">
                <Icon className="h-6 w-6 shrink-0 text-mp-gold" aria-hidden />
                <span className="text-sm font-medium text-mp-body">
                  {segmento.label}
                </span>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
