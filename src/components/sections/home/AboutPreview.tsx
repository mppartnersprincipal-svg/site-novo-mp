import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IMAGES } from "@/lib/constants";

export function AboutPreview() {
  return (
    <Section bg="soft">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <SectionHeading title="Não somos agência. Somos assessoria de marketing e vendas." />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-mp-body sm:text-lg">
            <p>
              A M|P Assessoria existe para uma coisa:{" "}
              <strong className="text-mp-ink">
                fazer sua empresa vender mais com previsibilidade.
              </strong>
            </p>
            <p>
              Não vendemos promessa. Vendemos processo. Estruturamos o
              marketing, organizamos o comercial, implementamos CRM, treinamos
              seu time de vendas e acompanhamos cada resultado com dados.
            </p>
            <p>
              Tudo isso com atendimento direto dos sócios Marcos e Pedro
              Goulart — sem intermediário, sem estagiário.
            </p>
            <p>
              Atendemos um número reduzido e selecionado de empresas, porque
              personalização e resultado real não existem quando você tem 40,
              50 clientes na carteira.
            </p>
          </div>
          <div className="mt-8">
            <Button
              href="/metodologia"
              variant="outline"
              withArrow
              className="w-full sm:w-auto"
            >
              Conheça nossa metodologia
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl">
            <Image
              src={IMAGES.sociosClara}
              alt="Marcos e Pedro Goulart no escritório da M|P Assessoria"
              fill
              sizes="(min-width: 1024px) 28rem, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
