import type { MetadataRoute } from "next";
import { site } from "@/lib/content";
import { posts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${site.brand.url}${path}`;
  const pages: [string, number, MetadataRoute.Sitemap[number]["changeFrequency"]][] = [
    ["", 1, "monthly"],
    ["/about", 0.8, "monthly"],
    ["/process", 0.8, "monthly"],
    ["/contact", 0.8, "yearly"],
    ["/watch", 0.6, "monthly"],
    ["/blog", 0.7, "weekly"],
    ["/privacy", 0.2, "yearly"],
  ];
  return [
    ...pages.map(([path, priority, changeFrequency]) => ({ url: url(path), priority, changeFrequency })),
    ...posts.map((p) => ({
      url: url(`/blog/${p.slug}`),
      lastModified: p.updated ?? p.published,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
