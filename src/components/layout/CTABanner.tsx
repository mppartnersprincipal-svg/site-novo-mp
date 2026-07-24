import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { CTA_HREF } from "@/lib/constants";

type CTABannerProps = {
  title?: string;
  text?: string;
  ctaLabel?: string;
  subtext?: string;
};

export function CTABanner({
  title = "Sua empresa merece mais do que improviso.",
  text = "Agende um diagnóstico gratuito com os sócios da M|P. Vamos analisar seu negócio, identificar oportunidades que você não está explorando e te mostrar exatamente onde sua empresa está perdendo dinheiro.",
  ctaLabel = "Agendar diagnóstico gratuito",
  subtext = "Sem compromisso. Sem custo. Direto com os donos.",
}: CTABannerProps) {
  return (
    <Section bg="dark">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="text-[28px] font-extrabold leading-[34px] text-white sm:text-4xl sm:leading-[44px]">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-mp-muted-dark sm:text-lg">
          {text}
        </p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <Button href={CTA_HREF} withArrow className="w-full sm:w-auto">
            {ctaLabel}
          </Button>
          <p className="text-sm text-white/50">{subtext}</p>
        </div>
      </Reveal>
    </Section>
  );
}
