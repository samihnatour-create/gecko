import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.brand.url, changeFrequency: "monthly", priority: 1 },
    { url: `${site.brand.url}/privacy`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
