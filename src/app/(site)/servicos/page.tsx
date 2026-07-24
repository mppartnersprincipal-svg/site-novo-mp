import { CTABanner } from "@/components/layout/CTABanner";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SERVICOS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title:
    "Nossos Serviços | M|P Assessoria — Marketing, Vendas e IA para Empresas",
  description:
    "Tráfego pago, gestão de Instagram, CRM, treinamento comercial, sites, SEO e soluções com IA. Conheça todos os serviços da M|P Assessoria em Goiânia.",
  path: "/servicos",
  absoluteTitle: true,
});

export default function ServicosPage() {
  return (
    <>
      <PageHero
        overline="Serviços"
        title="Tudo que sua empresa precisa para vender mais. Em uma assessoria só."
        subtitle="A M|P centraliza marketing, vendas e tecnologia em uma entrega única. Sem precisar contratar 5 fornecedores diferentes que não conversam entre si."
      />

      <Section bg="white">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICOS.map((servico, i) => {
            const Icon = servico.icone;
            return (
              <Reveal key={servico.titulo} delay={(i % 3) * 0.08}>
                <Card hover className="flex h-full flex-col p-6 lg:p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-mp-gold-soft">
                    <Icon className="h-6 w-6 text-mp-gold-deep" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-bold text-mp-ink">
                    {servico.titulo}
                  </h3>
                  <p className="mt-1 font-heading text-xs font-semibold uppercase tracking-[0.15em] text-mp-gold-deep">
                    {servico.subtitulo}
                  </p>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-mp-mid">
                    {servico.descricao}
                  </p>
                  <div className="mt-5 border-t border-mp-line pt-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-mp-ink">
                      Por que importa
                    </p>
                    <p className="mt-1.5 text-sm italic leading-relaxed text-mp-mid">
                      {servico.porqueImporta}
                    </p>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <CTABanner
        title="Não sabe por onde começar?"
        text="A gente analisa seu negócio e te mostra o que faz sentido para sua realidade."
        ctaLabel="Agendar diagnóstico gratuito"
      />
    </>
  );
}
