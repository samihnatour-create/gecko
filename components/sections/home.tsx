import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/content";
import { posts, readingMinutes } from "@/lib/blog";

export function Intro() {
  return (
    <section className="intro wrap" id="intro" aria-labelledby="intro-title" data-blob="0.86 0.2 1.3 1">
      <h2 id="intro-title" className="sr-only">{site.manifesto.eyebrow}</h2>
      <p className="scrub-text blend" data-scrub-words>
        {site.manifesto.description}
      </p>
      <div className="intro-grid">
        <div>
          <p className="label-lg">
            A founder-led ad creative, media buying &amp; branding agency for ecommerce brands and growing businesses.
          </p>
          <Link href="/about" className="arrow-link">
            About us <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
        <p className="intro-copy">
          {site.manifesto.before} <em>{site.manifesto.accent}</em> {site.hero.note} We keep feedback focused,
          explain every result in plain language, and decide together what to test next.
        </p>
      </div>
      <dl className="stats">
        {site.impact.stats.map((stat) => (
          <div key={stat.label} data-reveal>
            <dt>{stat.label}</dt>
            <dd>
              <span aria-hidden="true" data-count={stat.value}>{stat.value}</span>
              <span className="sr-only">{stat.value}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function Partners() {
  return (
    <section className="partners wrap" aria-labelledby="partners-title" data-blob="0.95 0.05 1.15 1">
      <div className="partners-label">
        <p className="label">Trusted by</p>
        <h2 id="partners-title" className="boxed-label">Partners</h2>
      </div>
      <ul className="partner-grid">
        {site.partners.map((brand, i) => (
          <li key={brand} data-reveal className={`partner partner-${i % 3}`}>
            <span>{brand}</span>
          </li>
        ))}
        <li className="partner partner-cta" data-reveal>
          <Link href="/contact">Your brand? <ArrowUpRight size={14} aria-hidden="true" /></Link>
        </li>
      </ul>
    </section>
  );
}

export function ProcessRows() {
  return (
    <section className="rows-section wrap" aria-labelledby="process-title" data-blob="0.9 0.1 0.6 0.85">
      <div className="rows-head">
        <h2 id="process-title" className="mega" data-reveal>
          Five steps. <em>No guesswork.</em>
        </h2>
        <Link href="/process" className="pill pill-outline">
          Our process <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>
      <ol className="rows">
        {site.process.map((step, i) => (
          <li key={step.title} className="row" data-reveal>
            <Link href="/process">
              <span className="row-num">0{i + 1}</span>
              <span className="row-title">{step.title}</span>
              <span className="row-copy">{step.summary}</span>
              <ArrowUpRight className="row-arrow" size={22} aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function FieldNotes() {
  return (
    <section className="rows-section wrap" aria-labelledby="notes-title" data-blob="-0.95 0.1 0.75 0.9">
      <div className="rows-head">
        <h2 id="notes-title" className="mega" data-reveal>
          Field <em>notes.</em>
        </h2>
        <Link href="/blog" className="pill pill-outline">
          All articles <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>
      <ul className="rows">
        {posts.map((post) => (
          <li key={post.slug} className="row row-post" data-reveal>
            <Link href={`/blog/${post.slug}`} data-cursor="Read">
              <span className="row-num">{post.category}</span>
              <span className="row-title">{post.title}</span>
              <span className="row-copy">{readingMinutes(post)} min read</span>
              <span className="row-preview" aria-hidden="true">
                <Image src={post.cover} alt="" fill sizes="260px" />
              </span>
              <ArrowUpRight className="row-arrow" size={22} aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function PostGrid({ exclude }: { exclude?: string }) {
  return (
    <div className="post-grid">
      {posts.filter((p) => p.slug !== exclude).map((post) => (
        <article className="post-card" key={post.slug} data-reveal>
          <Link href={`/blog/${post.slug}`} data-cursor="Read">
            <div className="post-media">
              <Image src={post.cover} alt={post.coverAlt} fill sizes="(max-width: 700px) 100vw, 33vw" />
            </div>
            <p className="label">{post.category} · {readingMinutes(post)} min read</p>
            <h3>{post.title}</h3>
            <p className="post-desc">{post.description}</p>
          </Link>
        </article>
      ))}
    </div>
  );
}
