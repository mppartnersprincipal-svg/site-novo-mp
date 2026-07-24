import { Image as ImageIcon, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  /** o que deve entrar aqui quando o asset real existir */
  label: string;
  icon?: LucideIcon;
  ratio?: "4/3" | "16/9" | "1/1" | "3/4";
  dark?: boolean;
  className?: string;
};

const RATIOS = {
  "4/3": "aspect-[4/3]",
  "16/9": "aspect-video",
  "1/1": "aspect-square",
  "3/4": "aspect-[3/4]",
} as const;

/** Bloco cinza tracejado para fotos/prints ainda não disponíveis (zero CLS). */
export function ImagePlaceholder({
  label,
  icon: Icon = ImageIcon,
  ratio = "4/3",
  dark = false,
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed",
        RATIOS[ratio],
        dark
          ? "border-mp-line-dark bg-white/[0.03] text-mp-muted-dark"
          : "border-mp-line bg-mp-soft text-mp-mid",
        className
      )}
    >
      <Icon className="h-8 w-8 opacity-60" aria-hidden />
      <span className="max-w-[80%] text-center text-xs font-medium uppercase tracking-wide opacity-80">
        {label}
      </span>
    </div>
  );
}
