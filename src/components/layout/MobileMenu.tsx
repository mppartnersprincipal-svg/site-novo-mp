"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { MPLogo } from "@/components/icons/MPLogo";
import { Button } from "@/components/ui/Button";
import { CTA_HREF, CTA_LABEL, NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type MobileMenuProps = { open: boolean; onClose: () => void };

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  // fecha ao trocar de rota
  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // trava o scroll do body enquanto aberto
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[55] bg-black/60 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            className="fixed inset-y-0 right-0 z-[60] flex w-[300px] max-w-[85vw] flex-col bg-mp-ink-deep p-6 lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
          >
            <div className="flex items-center justify-between">
              <MPLogo variant="dark" size="sm" />
              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar menu"
                className="-mr-2 p-2 text-white"
              >
                <X className="h-6 w-6" aria-hidden />
              </button>
            </div>

            <nav className="mt-10 flex flex-col gap-1" aria-label="Navegação móvel">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    "rounded-lg px-3 py-3 font-heading text-base font-semibold text-white/85 transition-colors hover:bg-white/5 hover:text-mp-gold",
                    pathname === link.href && "text-mp-gold"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto space-y-4 pt-8">
              <Button href={CTA_HREF} className="w-full" size="md">
                {CTA_LABEL}
              </Button>
              <p className="text-center text-xs text-white/40">
                {SITE.tagline} · {SITE.city}
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
