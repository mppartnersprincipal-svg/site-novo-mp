import { CTABanner } from "@/components/layout/CTABanner";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SOLUCOES_IA } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Soluções com IA para Empresas | M|P Assessoria",
  description:
    "Chatbots comerciais, agentes de IA, automações e sistemas próprios. A M|P aplica inteligência artificial no marketing e nas vendas da sua empresa.",
  path: "/inteligencia-artificial",
  absoluteTitle: true,
});

export default function InteligenciaArtificialPage() {
  return (
    <>
      <PageHero
        overline="Inteligência Artificial"
        title="IA não é mais tendência. É vantagem competitiva."
        subtitle="A maioria dos empresários sabe que inteligência artificial existe — mas não faz ideia de como aplicar no próprio negócio. A M|P resolve isso."
      />

      <Section bg="white">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SOLUCOES_IA.map((solucao, i) => {
            const Icon = solucao.icone;
            return (
              <Reveal key={solucao.titulo} delay={(i % 3) * 0.08}>
                <Card hover className="h-full p-6 lg:p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-mp-gold-soft">
                    <Icon className="h-6 w-6 text-mp-gold-deep" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-bold text-mp-ink">
                    {solucao.titulo}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-mp-mid">
                    {solucao.descricao}
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Frase de impacto */}
      <section className="bg-mp-ink py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="mx-auto max-w-3xl text-center font-heading text-2xl font-extrabold leading-snug text-white sm:text-3xl lg:text-4xl">
              A diferença entre usar e não usar IA não é tecnológica —{" "}
              <span className="text-mp-gold">é financeira.</span>
            </p>
          </Reveal>
        </div>
      </section>

      <CTABanner ctaLabel="Quero saber como a IA pode ajudar meu negócio" />
    </>
  );
}
