import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/content";
import { JsonLd, absolute, breadcrumbs, pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import { VideoPlayer } from "@/components/video-player";
import { CtaBand } from "@/components/cta-band";

const description =
  "Watch a short introduction to Gecko Media: how we combine ad creative and media buying to help ecommerce brands test, learn, and grow.";

export const metadata = pageMetadata({ title: "Watch: Meet Gecko Media", description, path: "/watch" });

const { video } = site.hero;
const schema = [
  breadcrumbs([{ name: "Watch", path: "/watch" }]),
  ...(video.src
    ? [{
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: video.label,
        description,
        contentUrl: absolute(video.src),
        ...(video.poster && { thumbnailUrl: absolute(video.poster) }),
        publisher: { "@id": absolute("/#organization") },
      }]
    : []),
];

export default function WatchPage() {
  return (
    <>
      <JsonLd data={schema} />
      <PageHero eyebrow="Watch our intro" title="Meet" accent="Gecko Media." crumbs={[{ name: "Watch", path: "/watch" }]}>
        <p className="page-hero-lede">{site.hero.description}</p>
      </PageHero>
      <section className="vsl-section wrap" aria-label="Introduction video">
        <VideoPlayer />
      </section>
      <section className="chapters wrap" aria-labelledby="chapters-title">
        <div className="section-head">
          <div>
            <p className="label">In this video</p>
            <h2 id="chapters-title" className="mega" data-reveal>
              Three ideas <em>behind every ad.</em>
            </h2>
          </div>
          <Link href="/process" className="pill pill-outline">
            See how we work <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <ol className="chapter-list">
          {site.hero.chapters.map((chapter) => (
            <li key={chapter.title} data-reveal>
              <span className="label">{chapter.subtitle}</span>
              <h3>{chapter.title}</h3>
              <p>{chapter.description}</p>
            </li>
          ))}
        </ol>
      </section>
      <CtaBand />
    </>
  );
}
