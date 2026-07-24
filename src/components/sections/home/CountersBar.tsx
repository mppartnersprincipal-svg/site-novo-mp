import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { COUNTERS } from "@/lib/constants";

export function CountersBar() {
  return (
    <section className="bg-mp-ink py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {COUNTERS.map((counter, i) => (
            <Reveal key={counter.label} delay={i * 0.08} className="text-center">
              <p className="font-heading text-4xl font-extrabold text-mp-gold sm:text-5xl">
                <Counter
                  value={counter.value}
                  prefix={counter.prefix}
                  suffix={counter.suffix}
                />
              </p>
              <p className="mt-3 text-sm font-medium uppercase tracking-wide text-gray-400">
                {counter.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
