import Image from "next/image";
import { cn } from "@/lib/utils";

type ClientLogoProps = {
  nome: string;
  logo?: string;
  className?: string;
};

/**
 * Logo real quando existe arquivo; chip de texto estilizado como fallback.
 * Ambos em grayscale/apagado com hover que "acende" (PRD §5.6).
 */
export function ClientLogo({ nome, logo, className }: ClientLogoProps) {
  if (logo) {
    return (
      <div
        title={nome}
        className={cn(
          "flex h-20 items-center justify-center px-4 opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0",
          className
        )}
      >
        <Image
          src={logo}
          alt={`Logo ${nome}`}
          width={160}
          height={64}
          className="h-auto max-h-14 w-auto max-w-full object-contain"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex h-20 items-center justify-center rounded-lg border border-mp-line bg-mp-paper px-4 text-center opacity-70 transition-opacity duration-300 hover:opacity-100",
        className
      )}
    >
      <span className="font-heading text-sm font-bold uppercase tracking-wider text-mp-mid">
        {nome}
      </span>
    </div>
  );
}
