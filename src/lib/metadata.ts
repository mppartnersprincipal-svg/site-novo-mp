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
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}
