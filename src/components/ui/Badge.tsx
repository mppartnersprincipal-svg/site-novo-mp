import { cn } from "@/lib/utils";

type BadgeProps = {
  color?: "gold" | "neutral" | "red" | "green" | "dark";
  className?: string;
  children: React.ReactNode;
};

const COLORS = {
  gold: "border border-mp-gold/40 bg-mp-gold-soft text-mp-ink",
  neutral: "border border-mp-line bg-mp-soft text-mp-mid",
  red: "bg-mp-red/10 text-mp-red",
  green: "bg-mp-green/10 text-mp-green",
  dark: "border border-mp-line-dark text-mp-muted-dark",
} as const;

export function Badge({ color = "gold", className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        COLORS[color],
        className
      )}
    >
      {children}
    </span>
  );
}
