import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/content";
import { JsonLd, absolute, breadcrumbs, pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Gecko Media is a creative and media buying agency for ecommerce brands, founded by two people with years of experience creating ads and supporting growing businesses.",
  path: "/about",
});

const schema = [
  breadcrumbs([{ name: "About", path: "/about" }]),
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: absolute("/about"),
    name: "About Gecko Media",
    about: { "@id": absolute("/#organization") },
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={schema} />
      <PageHero eyebrow="About us" title="A new agency." accent="Experienced founders." crumbs={[{ name: "About", path: "/about" }]}>
        <p className="page-hero-lede">{site.manifesto.description}</p>
      </PageHero>

      <section className="about-story wrap" aria-labelledby="story-title">
        <div className="about-story-head">
          <p className="label">Why we started</p>
          <h2 id="story-title" className="mega" data-reveal>
            {site.manifesto.before} <em>{site.manifesto.accent}</em>
          </h2>
        </div>
        <div className="about-story-copy" data-reveal>
          <p>
            Growing brands are often told they need a creative agency, a media buyer, a brand studio, and someone to manage all three. Every hand-off adds meetings, slows down learning, and leaves the founder in the middle.
          </p>
          <p>
            We started Gecko Media to close that gap. One team makes the ads, runs the campaigns, and reads the results, so each new round of creative is built on what the last one taught us.
          </p>
          <p>
            Like our namesake, we stick: to your goals, to a clear process, and to the long-term work of making your advertising better every month.
          </p>
          <Link href="/process" className="arrow-link">
            How we work <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="about-stats" aria-labelledby="about-stats-title">
        <div className="wrap">
          <h2 id="about-stats-title" className="label">{site.impact.label}</h2>
          <dl className="proof-stats">
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
        </div>
      </section>

      <section className="commitments wrap" aria-labelledby="commitments-title">
        <div className="section-head">
          <div>
            <p className="label">How we work with you</p>
            <h2 id="commitments-title" className="mega" data-reveal>
              Your business. <em>Our commitment.</em>
            </h2>
          </div>
          <p className="section-note">Client feedback is coming soon. Until then, here’s what you can hold us to.</p>
        </div>
        <div className="commitment-grid">
          {site.commitments.map((c, i) => (
            <figure className="chat-card" key={c.title} data-reveal>
              <div className="window-bar" aria-hidden="true">
                <span /><span /><span />
                <small>commitment_0{i + 1}.txt</small>
              </div>
              <blockquote>
                <p>{c.quote}</p>
              </blockquote>
              <figcaption>
                <span className="avatar" aria-hidden="true">GM</span>
                <span>
                  <strong>Gecko Media</strong>
                  <small>Our commitment to {c.title.toLowerCase()}</small>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="about-services wrap" aria-labelledby="about-services-title">
        <p className="label">What we do</p>
        <h2 id="about-services-title" className="sr-only">What we do</h2>
        <ul className="service-list">
          {site.services.map((s, i) => (
            <li key={s.title} data-reveal>
              <span className="service-index">0{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <span className="service-tags">{s.tags.join(" / ")}</span>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  );
}
