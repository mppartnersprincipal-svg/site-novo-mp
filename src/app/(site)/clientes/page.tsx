import Image from "next/image";
import { Camera, Smartphone, Video } from "lucide-react";
import { CTABanner } from "@/components/layout/CTABanner";
import { PageHero } from "@/components/layout/PageHero";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ClientLogo } from "@/components/ui/ClientLogo";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { CASES, CLIENTES } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Nossos Clientes e Resultados | M|P Assessoria — Cases de Sucesso",
  description:
    "Cases de sucesso com dados reais: Telhas Coral, Master Carnes, Grupo Sorriso, Pacheco Solar e mais. Resultado comprovado em +15 segmentos.",
  path: "/clientes",
  absoluteTitle: true,
});

function ProvaIcon({ prova }: { prova: string }) {
  const lower = prova.toLowerCase();
  const Icon = lower.includes("vídeo")
    ? Video
    : lower.includes("print")
      ? Smartphone
      : Camera;
  return <Icon className="h-4 w-4 text-mp-gold" aria-hidden />;
}

export default function ClientesPage() {
  return (
    <>
      <PageHero
        overline="Clientes e Resultados"
        title="Resultado não se promete. Se comprova."
        subtitle="Esses são alguns dos resultados reais que a M|P gerou para empresas de Goiânia e Goiás. Com dados, depoimentos e prints — porque aqui, cada número tem dono."
      />

      {/* Logos */}
      <Section bg="white">
        <Reveal>
          <SectionHeading
            title="Empresas que confiam na M|P"
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {CLIENTES.map((cliente, i) => (
            <Reveal key={cliente.nome} delay={(i % 5) * 0.05}>
              <ClientLogo nome={cliente.nome} logo={cliente.logo} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Cases detalhados */}
      <Section bg="soft">
        <Reveal>
          <SectionHeading
            overline="Cases detalhados"
            title="Cada número tem dono."
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16">
          {CASES.map((item, i) => (
            <Reveal key={item.cliente} delay={(i % 2) * 0.08}>
              <div className="flex h-full flex-col rounded-2xl bg-mp-ink p-6 text-white lg:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 items-center">
                    {item.logo ? (
                      <Image
                        src={item.logo}
                        alt={`Logo ${item.cliente}`}
                        width={140}
                        height={56}
                        className="h-auto max-h-12 w-auto max-w-[140px] object-contain brightness-0 invert"
                      />
                    ) : (
                      <span className="font-heading text-xl font-bold">
                        {item.cliente}
                      </span>
                    )}
                  </div>
                </div>

                <Badge color="dark" className="mt-4 self-start normal-case">
                  {item.segmento}
                </Badge>

                <p className="mt-6 font-heading text-3xl font-extrabold leading-tight text-mp-gold sm:text-4xl">
                  {item.resultadoPrincipal}
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-white/70">
                  {item.destaque}
                </p>

                <p className="mt-5 flex-1 text-base leading-relaxed text-mp-muted-dark">
                  {item.descricao}
                </p>

                {item.provas.length > 0 && (
                  <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                    {item.provas.map((prova) => (
                      <li
                        key={prova}
                        className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-white/70"
                      >
                        <ProvaIcon prova={prova} />
                        {prova}
                      </li>
                    ))}
                  </ul>
                )}

                <div
                  aria-hidden
                  className="mt-6 h-1 w-12 rounded-full bg-mp-gold"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Depoimentos */}
      <Section bg="white">
        <Reveal>
          <SectionHeading title="O que nossos clientes dizem." align="center" />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16">
          <Reveal>
            <TestimonialCard
              quote="Eu achava que marketing não funcionava pro meu segmento. Na reunião com o Marcos, vi que o problema era a falta de processo. Em 4 meses, geramos R$579 mil em vendas."
              author="Dono da Pacheco Solar"
              company="Pacheco Solar"
              video
              className="h-full"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <Card className="flex h-full flex-col">
              <ImagePlaceholder
                label="Vídeo de depoimento — Master Carnes"
                icon={Video}
                ratio="16/9"
                className="mb-6"
              />
              <p className="flex-1 text-lg leading-relaxed text-mp-body">
                O dono da Master Carnes confirma em vídeo mais de{" "}
                <strong className="text-mp-ink">R$300 mil de retorno</strong>{" "}
                com a estruturação de tráfego pago, CRM e treinamento comercial
                da M|P.
              </p>
              <div className="mt-6 border-t border-mp-line pt-4">
                <p className="font-heading font-bold text-mp-ink">
                  Master Carnes
                </p>
                <p className="text-sm text-mp-mid">
                  Atacado e distribuição de carnes
                </p>
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      <CTABanner ctaLabel="Quero esse resultado na minha empresa" />
    </>
  );
}
