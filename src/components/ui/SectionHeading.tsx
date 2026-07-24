import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  overline?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

export function SectionHeading({
  overline,
  title,
  subtitle,
  align = "left",
  dark = false,
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center", className)}>
      {overline && (
        <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-mp-gold">
          {overline}
        </p>
      )}
      <h2
        className={cn(
          "text-[28px] font-extrabold leading-[34px] sm:text-4xl sm:leading-[44px]",
          dark ? "text-white" : "text-mp-ink"
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "mt-4 h-1 w-16 rounded-full bg-mp-gold",
          centered && "mx-auto"
        )}
      />
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            dark ? "text-mp-muted-dark" : "text-mp-mid"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
