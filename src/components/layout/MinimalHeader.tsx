import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MPLogo } from "@/components/icons/MPLogo";

/** Header reduzido da página de diagnóstico: só logo + voltar (menos saídas). */
export function MinimalHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-mp-gold"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          <span className="hidden sm:inline">Voltar ao site</span>
          <span className="sm:hidden">Voltar</span>
        </Link>
        <Link href="/" aria-label="M|P Assessoria — página inicial">
          <MPLogo variant="dark" size="md" />
        </Link>
        <span aria-hidden className="hidden w-28 sm:block" />
      </div>
    </header>
  );
}
