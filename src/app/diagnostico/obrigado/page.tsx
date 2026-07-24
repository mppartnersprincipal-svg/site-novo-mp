import Script from "next/script";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Recebemos seus dados",
  description:
    "Em até 24 horas, Marcos ou Pedro vai entrar em contato pelo WhatsApp para agendar sua reunião de diagnóstico.",
  path: "/diagnostico/obrigado",
  noIndex: true,
});

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export default function ObrigadoPage() {
  return (
    <section className="relative overflow-hidden pb-24 pt-36 lg:pt-44">
      {(GTM_ID || PIXEL_ID) && (
        <Script id="lead-event" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:'lead_diagnostico'});${
            PIXEL_ID
              ? "typeof fbq==='function'&&fbq('track','Lead');"
              : ""
          }`}
        </Script>
      )}

      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-mp-gold/[0.08] blur-3xl"
      />

      <Reveal className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <CheckCircle2 className="mx-auto h-16 w-16 text-mp-gold" aria-hidden />

        <h1 className="mt-8 text-[32px] font-extrabold leading-[40px] lg:text-[44px] lg:leading-[54px]">
          Recebemos seus dados. O próximo passo é nosso.
        </h1>

        <p className="mt-6 text-base leading-relaxed text-mp-muted-dark sm:text-lg">
          Em até 24 horas, o Marcos ou Pedro vai entrar em contato pelo
          WhatsApp para agendar sua reunião de diagnóstico.
        </p>

        <p className="mt-10 text-sm font-semibold uppercase tracking-wider text-white/70">
          Enquanto isso, conheça mais sobre nosso trabalho:
        </p>

        <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Button href="/clientes" variant="outline" size="md">
            Ver nossos resultados
          </Button>
          <Button href="/metodologia" variant="outline" size="md">
            Conheça nossa metodologia
          </Button>
          <Button href={SITE.instagramUrl} external variant="outline" size="md">
            Siga no Instagram
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
