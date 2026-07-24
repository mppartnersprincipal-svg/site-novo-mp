import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Analytics } from "@/components/seo/Analytics";
import { SITE } from "@/lib/constants";
import "@/styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "M|P Assessoria | Marketing e Vendas com Método para Empresas de Goiânia",
    template: "%s | M|P Assessoria",
  },
  description:
    "Assessoria de marketing e vendas que gera receita previsível para empresas de Goiânia. Tráfego pago, CRM, treinamento comercial e IA. Resultado comprovado em +15 segmentos.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "M|P Assessoria",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${inter.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
