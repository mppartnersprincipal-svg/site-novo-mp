import { cn } from "@/lib/utils";

type SectionProps = {
  bg?: "white" | "soft" | "dark";
  id?: string;
  /** classes extras no <section> */
  className?: string;
  /** classes extras no container interno */
  containerClassName?: string;
  /** false = sem container (conteúdo full-width) */
  container?: boolean;
  children: React.ReactNode;
};

const BG = {
  white: "bg-mp-paper",
  soft: "bg-mp-soft",
  dark: "bg-mp-ink text-white",
} as const;

export function Section({
  bg = "white",
  id,
  className,
  containerClassName,
  container = true,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-20 lg:py-28", BG[bg], className)}>
      {container ? (
        <div
          className={cn(
            "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
            containerClassName
          )}
        >
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}
