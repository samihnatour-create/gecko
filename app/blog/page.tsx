import { posts } from "@/lib/blog";
import { JsonLd, absolute, breadcrumbs, pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { PostGrid } from "@/components/sections/home";

export const metadata = pageMetadata({
  title: "Blog: Ad Creative & Media Buying Insights",
  description:
    "Practical guides on ad creative, creative testing, media buying, and branding for ecommerce brands and growing businesses, from the Gecko Media team.",
  path: "/blog",
});

const schema = [
  breadcrumbs([{ name: "Blog", path: "/blog" }]),
  {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Gecko Media Blog",
    url: absolute("/blog"),
    publisher: { "@id": absolute("/#organization") },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: absolute(`/blog/${p.slug}`),
      datePublished: p.published,
    })),
  },
];

export default function BlogPage() {
  return (
    <>
      <JsonLd data={schema} />
      <PageHero eyebrow="Blog" title="Field" accent="notes." crumbs={[{ name: "Blog", path: "/blog" }]}>
        <p className="page-hero-lede">
          Practical guides on ad creative, creative testing, media buying, and branding, written for founders and lean marketing teams.
        </p>
      </PageHero>
      <section className="blog-index wrap" aria-label="Articles">
        <PostGrid />
      </section>
      <CtaBand />
    </>
  );
}
