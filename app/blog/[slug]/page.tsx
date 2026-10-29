import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { getPost, posts, readingMinutes } from "@/lib/blog";
import { JsonLd, absolute, breadcrumbs, pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import { Prose, slugify } from "@/components/prose";
import { CtaBand } from "@/components/cta-band";
import { PostGrid } from "@/components/sections/home";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">) {
  const post = getPost((await params).slug);
  if (!post) return {};
  return pageMetadata({ title: post.title, description: post.description, path: `/blog/${post.slug}`, type: "article" });
}

const dateFormat = new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const headings = post.body.flatMap((b) => (b.type === "h2" ? [b.text] : []));
  const schema = [
    breadcrumbs([{ name: "Blog", path: "/blog" }, { name: post.shortTitle, path: `/blog/${post.slug}` }]),
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      image: absolute(post.cover),
      datePublished: post.published,
      dateModified: post.updated ?? post.published,
      mainEntityOfPage: absolute(`/blog/${post.slug}`),
      articleSection: post.category,
      author: { "@type": "Organization", name: "Gecko Media", url: absolute("/about") },
      publisher: { "@id": absolute("/#organization") },
    },
  ];
  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        eyebrow={post.category}
        title={post.title}
        crumbs={[{ name: "Blog", path: "/blog" }, { name: post.shortTitle, path: `/blog/${post.slug}` }]}
      >
        <p className="post-byline">
          By the Gecko Media team · <time dateTime={post.published}>{dateFormat.format(new Date(post.published))}</time> · {readingMinutes(post)} min read
        </p>
      </PageHero>
      <article className="post wrap">
        <div className="post-cover">
          <Image src={post.cover} alt={post.coverAlt} fill priority sizes="(max-width: 1100px) 100vw, 1100px" />
        </div>
        <div className="post-layout">
          <aside className="post-toc" aria-label="On this page">
            <p className="label">On this page</p>
            <ol>
              {headings.map((h) => (
                <li key={h}><a href={`#${slugify(h)}`}>{h}</a></li>
              ))}
            </ol>
            <Link href="/contact" className="pill pill-lime">
              Book a free call <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </aside>
          <Prose blocks={post.body} />
        </div>
      </article>
      <section className="related wrap" aria-labelledby="related-title">
        <p className="label">Keep reading</p>
        <h2 id="related-title" className="mega">More <em>field notes.</em></h2>
        <PostGrid exclude={post.slug} />
      </section>
      <CtaBand />
    </>
  );
}
