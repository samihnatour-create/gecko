import type { Metadata } from "next";
import { site } from "./content";

// Per-page metadata; the root opengraph-image is inherited by every route.
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      siteName: "Gecko Media",
      locale: "en_US",
      url: path,
      title: `${title} | Gecko Media`,
      description,
    },
    twitter: { card: "summary_large_image", title: `${title} | Gecko Media`, description },
  };
}

export const absolute = (path: string) => new URL(path, site.brand.url).href;

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  };
}

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
