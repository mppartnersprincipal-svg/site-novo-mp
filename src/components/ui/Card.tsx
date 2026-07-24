import { cn } from "@/lib/utils";

type CardProps = {
  dark?: boolean;
  hover?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function Card({
  dark = false,
  hover = false,
  className,
  children,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-6 lg:p-8",
        dark
          ? "border-mp-line-dark bg-white/[0.04]"
          : "border-mp-line bg-mp-paper shadow-sm",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-mp-gold/40 hover:shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
}
