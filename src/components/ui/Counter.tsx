"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type CounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

/** Count-up disparado uma vez ao entrar na viewport (easeOutExpo). */
export function Counter({
  value,
  prefix = "",
  suffix = "",
  duration = 1600,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setDisplay(Math.round(value * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, value, duration]);

  const final = `${prefix}${value.toLocaleString("pt-BR")}${suffix}`;

  return (
    <span
      ref={ref}
      className={cn("relative inline-block tabular-nums", className)}
    >
      {/* gêmeo invisível reserva a largura final — sem layout shift durante a contagem */}
      <span aria-hidden className="invisible">
        {final}
      </span>
      <span className="absolute inset-0 flex items-baseline justify-center">
        {prefix}
        {display.toLocaleString("pt-BR")}
        {suffix}
      </span>
    </span>
  );
}
