import { PageHero } from "@/components/layout/PageHero";
import { BlogList } from "@/components/sections/blog/BlogList";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { CTA_HREF } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "Artigos práticos sobre marketing digital, vendas, CRM, tráfego pago e IA para empresários que querem crescer com método.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        overline="Blog"
        title="Conteúdo para vender mais. Sem achismo."
        subtitle="Artigos práticos sobre marketing, vendas, CRM, tráfego pago e IA — escritos por quem opera isso todos os dias."
      />

      <Section bg="white">
        <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
          <Reveal>
            <BlogList />
          </Reveal>

          <Reveal delay={0.12}>
            <aside className="lg:sticky lg:top-28">
              <div className="rounded-2xl bg-mp-ink p-8 text-white">
                <h2 className="font-heading text-xl font-bold leading-snug">
                  Enquanto os artigos não chegam, o diagnóstico já funciona.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-mp-muted-dark">
                  Reunião estratégica gratuita com os sócios da M|P para
                  analisar o marketing e as vendas da sua empresa.
                </p>
                <Button href={CTA_HREF} size="md" className="mt-6 w-full">
                  Agendar diagnóstico
                </Button>
              </div>
            </aside>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
