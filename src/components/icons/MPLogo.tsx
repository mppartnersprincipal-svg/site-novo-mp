import { cn } from "@/lib/utils";

type MPLogoProps = {
  /** dark = para fundos escuros (P branco) · light = para fundos claros (P preto) */
  variant?: "dark" | "light";
  withCaption?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const SIZES = {
  sm: { mark: "text-xl", caption: "text-[7px] tracking-[0.32em]" },
  md: { mark: "text-2xl", caption: "text-[8px] tracking-[0.36em]" },
  lg: { mark: "text-5xl", caption: "text-[13px] tracking-[0.42em]" },
} as const;

/**
 * Wordmark M|P recriado em texto (Montserrat) a partir do logo oficial:
 * "M" e pipe dourados, "P" em contraste, caption "ASSESSORIA" espaçada.
 */
export function MPLogo({
  variant = "dark",
  withCaption = true,
  size = "md",
  className,
}: MPLogoProps) {
  const s = SIZES[size];
  return (
    <span
      className={cn(
        "inline-flex select-none flex-col items-center leading-none",
        className
      )}
    >
      <span
        className={cn(
          "font-heading font-extrabold tracking-tight",
          s.mark,
          variant === "dark" ? "text-white" : "text-mp-ink"
        )}
      >
        <span className="text-mp-gold">M</span>
        <span className="mx-[0.06em] font-bold text-mp-gold">|</span>P
      </span>
      {withCaption && (
        <span
          className={cn(
            "mt-1 font-heading font-semibold uppercase",
            s.caption,
            variant === "dark" ? "text-white/80" : "text-mp-mid"
          )}
        >
          Assessoria
        </span>
      )}
    </span>
  );
}
