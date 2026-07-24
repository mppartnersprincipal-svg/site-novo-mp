import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PAIN_POINTS } from "@/lib/constants";

export function PainPoints() {
  return (
    <Section bg="white">
      <Reveal>
        <SectionHeading title="Isso soa familiar?" align="center" />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16">
        {PAIN_POINTS.map((pain, i) => (
          <Reveal key={pain.quote} delay={i * 0.08}>
            <div className="h-full rounded-r-lg border-l-4 border-mp-gold bg-mp-soft p-6 lg:p-8">
              <p className="text-lg italic leading-relaxed text-mp-ink">
                “{pain.quote}”
              </p>
              <p className="mt-4 text-base leading-relaxed text-mp-mid">
                {pain.resposta}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 lg:mt-16">
        <p className="mx-auto max-w-3xl text-center text-lg font-semibold text-mp-ink sm:text-xl">
          Se você se identificou com alguma dessas situações, o problema não é
          o marketing. <span className="text-mp-gold-deep">É a falta de método.</span>
        </p>
      </Reveal>
    </Section>
  );
}
