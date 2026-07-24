import Link from "next/link";
import { Globe, Instagram } from "lucide-react";
import { MPLogo } from "@/components/icons/MPLogo";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { CTA_HREF, NAV_LINKS, SITE, waLink } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-mp-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Sobre */}
          <div>
            <Link href="/" aria-label="M|P Assessoria — página inicial">
              <MPLogo variant="dark" size="md" className="items-start" />
            </Link>
            <p className="mt-5 text-sm text-mp-muted-dark">{SITE.tagline}</p>
            <p className="mt-1 text-sm text-mp-muted-dark">{SITE.city}</p>
            <p className="mt-4 text-sm font-medium text-white/80">
              +170 empresas atendidas · Desde {SITE.foundedYear}
            </p>
          </div>

          {/* Páginas */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider">
              Páginas
            </h3>
            <ul className="mt-5 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-mp-muted-dark transition-colors hover:text-mp-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={CTA_HREF}
                  className="text-sm font-semibold text-mp-gold transition-colors hover:text-mp-gold-deep"
                >
                  Diagnóstico Gratuito
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider">
              Contato
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-mp-muted-dark transition-colors hover:text-mp-gold"
                >
                  <Instagram className="h-4 w-4 text-mp-gold" aria-hidden />
                  {SITE.instagramHandle}
                </a>
              </li>
              <li>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2.5 text-sm text-mp-muted-dark transition-colors hover:text-mp-gold"
                >
                  <Globe className="h-4 w-4 text-mp-gold" aria-hidden />
                  {SITE.domainLabel}
                </Link>
              </li>
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-mp-muted-dark transition-colors hover:text-mp-gold"
                >
                  <WhatsAppIcon className="h-4 w-4 text-mp-gold" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} M|P Assessoria. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
