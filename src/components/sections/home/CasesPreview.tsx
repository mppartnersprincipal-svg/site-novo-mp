import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CASES_HOME } from "@/lib/constants";

export function CasesPreview() {
  return (
    <Section bg="white">
      <Reveal>
        <SectionHeading
          overline="Cases"
          title="Resultado não se promete. Se comprova."
          align="center"
        />
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
        {CASES_HOME.map((item, i) => (
          <Reveal key={item.cliente} delay={i * 0.08}>
            <Card hover className="flex h-full flex-col p-6">
              <div className="flex h-16 items-center">
                {item.logo ? (
                  <Image
                    src={item.logo}
                    alt={`Logo ${item.cliente}`}
                    width={140}
                    height={56}
                    className="h-auto max-h-12 w-auto max-w-[140px] object-contain"
                  />
                ) : (
                  <span className="font-heading text-lg font-bold text-mp-ink">
                    {item.cliente}
                  </span>
                )}
              </div>
              <Badge color="neutral" className="mt-4 self-start normal-case">
                {item.segmento.split(" — ")[0]}
              </Badge>
              <p className="mt-4 flex-1 font-heading text-xl font-bold leading-snug text-mp-ink">
                {item.home?.resultado}
              </p>
              <div aria-hidden className="mt-5 h-1 w-10 rounded-full bg-mp-gold" />
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 text-center">
        <Button href="/clientes" variant="outline" withArrow>
          Ver todos os cases e clientes
        </Button>
      </Reveal>
    </Section>
  );
}
