import { Reveal } from "@/components/ui/Reveal";

type PageHeroProps = {
  overline?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  children?: React.ReactNode;
};

/**
 * Faixa escura de abertura de TODA página interna — garante contraste
 * do header transparente e mantém a identidade preto + dourado.
 */
export function PageHero({
  overline,
  title,
  subtitle,
  center = false,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-mp-ink pb-16 pt-32 text-white lg:pb-20 lg:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-mp-gold/[0.07] blur-3xl"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className={center ? "mx-auto max-w-4xl text-center" : ""}>
          {overline && (
            <p className="mb-4 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-mp-gold">
              {overline}
            </p>
          )}
          <h1
            className={
              "max-w-4xl text-[36px] font-extrabold leading-[42px] lg:text-[52px] lg:leading-[62px]" +
              (center ? " mx-auto" : "")
            }
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={
                "mt-6 max-w-3xl text-base leading-relaxed text-mp-muted-dark sm:text-lg" +
                (center ? " mx-auto" : "")
              }
            >
              {subtitle}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
