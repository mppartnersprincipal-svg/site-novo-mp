import { SITE, WHATSAPP_NUMBER } from "@/lib/constants";

/** Schema.org LocalBusiness/ProfessionalService — montado apenas na Home. */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "M|P Assessoria",
    description:
      "Assessoria de marketing e vendas que gera receita previsível para empresas de Goiânia: tráfego pago, CRM, treinamento comercial e inteligência artificial.",
    url: SITE.url,
    telephone: `+${WHATSAPP_NUMBER}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Goiânia",
      addressRegion: "GO",
      addressCountry: "BR",
    },
    areaServed: ["Goiânia", "Goiás"],
    sameAs: [SITE.instagramUrl],
    foundingDate: "2021-07",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
