import type { Metadata } from "next";

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  /** true = usa o título exatamente como está (sem o template "%s | M|P Assessoria") */
  absoluteTitle?: boolean;
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  noIndex = false,
}: BuildMetadataInput): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      locale: "pt_BR",
      siteName: "M|P Assessoria",
      // Declarada explicitamente: openGraph por página substitui o objeto do
      // pai por inteiro no merge do Next, o que descartaria a imagem injetada
      // pelo file convention app/opengraph-image.tsx.
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "M|P Assessoria — Marketing e Vendas com Método",
        },
      ],
    },
    twitter: { card: "summary_large_image" },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}
