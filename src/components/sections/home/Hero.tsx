import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CTA_HREF, HERO_SELOS, IMAGES } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-mp-ink pt-20 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-mp-gold/[0.05] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-mp-gold/[0.07] blur-3xl"
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_auto] lg:gap-16 lg:px-8">
        <Reveal className="max-w-2xl">
          <Badge color="dark">Assessoria de Marketing &amp; Vendas em Goiânia</Badge>

          <h1 className="mt-6 text-[36px] font-extrabold leading-[42px] lg:text-[56px] lg:leading-[64px]">
            Sua empresa vende.{" "}
            <span className="text-mp-gold">Mas será que ela cresce?</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-gray-300">
            A M|P Assessoria estrutura o marketing e as vendas da sua empresa
            com método, dados e previsibilidade de receita. Sem improviso. Sem
            promessa. Com resultado comprovado.
          </p>

          <div className="mt-8">
            <Button href={CTA_HREF} withArrow className="w-full sm:w-auto">
              Agendar diagnóstico gratuito
            </Button>
            <p className="mt-3 text-sm text-gray-400">
              Atendimento direto com os sócios. Sem intermediários.
            </p>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-400">
            {HERO_SELOS.map((selo) => (
              <li key={selo} className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rounded-full bg-mp-gold"
                />
                {selo}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15} className="hidden lg:block">
          <div className="relative aspect-[3/4] w-[26rem] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={IMAGES.sociosEscura}
              alt="Marcos e Pedro Goulart, sócios da M|P Assessoria, no escritório"
              fill
              priority
              sizes="(min-width: 1024px) 26rem, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-linear-to-t from-mp-ink/70 via-transparent to-transparent"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
