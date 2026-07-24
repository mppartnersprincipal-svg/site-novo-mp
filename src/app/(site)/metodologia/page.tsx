import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTA_HREF, METODOLOGIA_CHECKS, METODOLOGIA_ETAPAS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Nossa Metodologia | M|P Assessoria — Marketing e Vendas com Método",
  description:
    "Conheça a metodologia da M|P: validada em +50 segmentos ao longo de 4 anos. Processo completo de marketing e vendas para empresas que querem crescer com previsibilidade.",
  path: "/metodologia",
  absoluteTitle: true,
});

export default function MetodologiaPage() {
  return (
    <>
      <PageHero
        overline="Nossa Metodologia"
        title="4 anos. +50 segmentos. 1 metodologia validada."
        subtitle="A M|P desenvolveu uma metodologia própria de marketing e vendas que funciona para 95% dos segmentos do mercado. Não foi criada da noite pro dia — foram 4 anos atendendo mais de 170 empresas, testando, ajustando e validando em segmentos que vão de telhas a concessionárias, de confeitarias a clínicas odontológicas."
      >
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-mp-muted-dark sm:text-lg">
          O resultado? Um processo replicável que gera receita previsível para
          qualquer empresa que tenha um bom produto ou serviço e vontade de
          crescer.
        </p>
      </PageHero>

      {/* Por que metodologia própria */}
      <Section bg="white">
        <Reveal className="mx-auto max-w-3xl">
          <SectionHeading title="Marketing genérico não funciona. Por isso criamos o nosso método." />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-mp-body sm:text-lg">
            <p>
              A maioria das agências aplica a mesma fórmula para todos os
              clientes: faz um anúncio, gera uns leads e reza para alguém
              comprar. <strong className="text-mp-ink">Isso não é marketing. É sorte.</strong>
            </p>
            <p>
              Na M|P, percebemos que cada empresa tem um público diferente, uma
              jornada de compra diferente e um processo de vendas diferente.
              Por isso, desenvolvemos uma metodologia que se adapta ao negócio
              — mas mantém a estrutura que garante resultado.
            </p>
            <p>
              Ao longo de 4 anos, atendemos mais de 50 segmentos diferentes. De
              varejo a indústria, de serviço a atacado. Testamos, validamos e
              refinamos cada etapa. Hoje, podemos afirmar:{" "}
              <strong className="text-mp-ink">
                nossa metodologia funciona para 95% dos segmentos.
              </strong>
            </p>
          </div>
        </Reveal>
      </Section>

      {/* Timeline das 6 etapas */}
      <Section bg="soft">
        <Reveal>
          <SectionHeading
            overline="O método"
            title="As 6 etapas da metodologia M|P"
            align="center"
          />
        </Reveal>

        <div className="relative mx-auto mt-14 max-w-4xl lg:mt-20">
          <div
            aria-hidden
            className="absolute bottom-6 left-6 top-6 w-0.5 bg-mp-gold/30 lg:left-1/2 lg:-translate-x-1/2"
          />
          <ol className="space-y-10 lg:space-y-14">
            {METODOLOGIA_ETAPAS.map((etapa, i) => {
              const Icon = etapa.icone;
              const rightSide = i % 2 === 1;
              return (
                <li key={etapa.numero} className="relative">
                  <div className="absolute left-6 top-6 z-10 -translate-x-1/2 lg:left-1/2">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-mp-gold font-heading text-lg font-extrabold text-mp-ink-deep ring-4 ring-mp-soft">
                      {etapa.numero}
                    </span>
                  </div>
                  <Reveal
                    className={cn(
                      "ml-16 lg:ml-0 lg:w-[calc(50%-3rem)]",
                      rightSide && "lg:ml-auto"
                    )}
                  >
                    <Card className="p-6 lg:p-7">
                      <div className="flex items-center gap-3">
                        <Icon className="h-6 w-6 shrink-0 text-mp-gold-deep" aria-hidden />
                        <h3 className="font-heading text-lg font-bold text-mp-ink sm:text-xl">
                          {etapa.titulo}
                        </h3>
                      </div>
                      <p className="mt-3 text-base leading-relaxed text-mp-mid">
                        {etapa.descricao}
                      </p>
                    </Card>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </Section>

      {/* Por que funciona */}
      <Section bg="white">
        <Reveal className="mx-auto max-w-3xl">
          <SectionHeading title="De telhas a cirurgia plástica. De confeitaria a concessionária Ford." />
          <p className="mt-6 text-base leading-relaxed text-mp-body sm:text-lg">
            Nossa metodologia não é específica para um nicho. Ela é uma
            arquitetura de marketing e vendas que se adapta à realidade de cada
            empresa.
          </p>
          <ul className="mt-6 space-y-3">
            {METODOLOGIA_CHECKS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-mp-gold"
                  aria-hidden
                />
                <span className="text-base leading-relaxed text-mp-body">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base leading-relaxed text-mp-body sm:text-lg">
            É por isso que geramos resultado vendendo telhas, carnes, bombas
            d&apos;água, roupas, consultas odontológicas, cirurgias plásticas,
            carros e estruturas metálicas — com a mesma metodologia.
          </p>
          <div className="mt-8">
            <Button href={CTA_HREF} withArrow className="w-full sm:w-auto">
              Quero um diagnóstico do meu negócio
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
