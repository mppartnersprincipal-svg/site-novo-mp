import { CTABanner } from "@/components/layout/CTABanner";
import { AboutPreview } from "@/components/sections/home/AboutPreview";
import { CasesPreview } from "@/components/sections/home/CasesPreview";
import { CountersBar } from "@/components/sections/home/CountersBar";
import { Hero } from "@/components/sections/home/Hero";
import { PainPoints } from "@/components/sections/home/PainPoints";
import { SegmentsGrid } from "@/components/sections/home/SegmentsGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title:
    "M|P Assessoria | Marketing e Vendas com Método para Empresas de Goiânia",
  description:
    "Assessoria de marketing e vendas que gera receita previsível para empresas de Goiânia. Tráfego pago, CRM, treinamento comercial e IA. Resultado comprovado em +15 segmentos.",
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <PainPoints />
      <AboutPreview />
      <CountersBar />
      <CasesPreview />
      <SegmentsGrid />
      <CTABanner />
    </>
  );
}
