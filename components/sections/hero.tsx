"use client";
import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/lib/content";
import { motionSettings } from "@/lib/motion";
import { GeckoHand } from "../artwork";
import { RevealWords } from "../reveal-words";

// Editorial VSL adaptation of the previously inspected 21st video hero.
// Creative previews frame the player; normal scrolling keeps the VSL immediately usable.
export function Hero() {
  const root = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const hasVideo = Boolean(site.hero.video.src) && !failed;
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add(
      motionSettings.desktop,
      () => {
        gsap.utils
          .toArray<HTMLElement>(".hero-creative", root.current!)
          .forEach((card, i) => {
            gsap.fromTo(
              card,
              { y: i % 2 ? 25 : -18, rotation: i % 2 ? 9 : -9 },
              {
                y: i % 2 ? -38 : 36,
                rotation: i % 2 ? 4 : -4,
                ease: "none",
                scrollTrigger: {
                  trigger: root.current,
                  start: "top top",
                  end: "bottom top",
                  scrub: 1,
                },
              },
            );
          });
      },
      root,
    );
    return () => mm.revert();
  }, []);
  const play = async () => {
    try {
      await video.current?.play();
    } catch {
      setFailed(true);
    }
  };
  return (
    <section ref={root} className="vsl-hero" aria-labelledby="hero-title">
      <div className="vsl-intro wrap">
        <h1 id="hero-title" data-words>
          {site.hero.headline.map((line, i) => (
            <span key={i} className={i % 2 ? "serif" : ""}>
              <RevealWords text={line} />
              {i === 0 ? " " : ""}
            </span>
          ))}
        </h1>
        <p>{site.hero.description}</p>
      </div>
      <div className="creative-stage" id="reel">
        <div className="hero-creative creative-left" aria-hidden="true">
          <Image
            src={site.hero.creatives.left}
            alt=""
            fill
            sizes="(max-width: 600px) 31vw, 22vw"
          />
        </div>
        <div className="hero-creative creative-right" aria-hidden="true">
          <Image
            src={site.hero.creatives.right}
            alt=""
            fill
            sizes="(max-width: 600px) 31vw, 22vw"
          />
        </div>
        <div className="hero-creative creative-bottom" aria-hidden="true">
          <Image
            src={site.hero.creatives.bottom}
            alt=""
            fill
            sizes="15vw"
          />
        </div>
        <div className={`vsl-player ${playing ? "is-playing" : ""}`}>
          {hasVideo ? (
            <video
              ref={video}
              src={site.hero.video.src}
              poster={site.hero.video.poster || undefined}
              controls={playing}
              playsInline
              preload="metadata"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onError={() => setFailed(true)}
              aria-label={site.hero.video.label}
            />
          ) : null}
          {!playing && (
            <div
              className="vsl-cover"
              style={
                hasVideo && site.hero.video.poster
                  ? { background: "transparent" }
                  : undefined
              }
            >
              {(!hasVideo || !site.hero.video.poster) && (
                <>
                  <div className="vsl-poster-type" aria-hidden="true">
                    {site.hero.posterTitle}
                  </div>
                  <GeckoHand className="vsl-hand" />
                  <span className="vsl-poster-subtitle">
                    {site.hero.posterSubtitle}
                  </span>
                </>
              )}
              <button
                className="vsl-play"
                onClick={play}
                disabled={!hasVideo}
                aria-label={
                  hasVideo ? site.hero.video.label : site.hero.video.pending
                }
              >
                <span>
                  <Play size={26} fill="currentColor" />
                </span>
                <strong>{site.hero.video.label}</strong>
              </button>
              {!hasVideo && (
                <span className="vsl-pending" role="status">
                  {failed
                    ? site.hero.video.unavailable
                    : site.hero.video.pending}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="vsl-actions">
        <a href="#contact" className="button button-dark">
          {site.labels.project}
          <ArrowUpRight size={18} />
        </a>
        <a className="text-link" href="#work">
          {site.labels.work}
          <ArrowUpRight size={17} />
        </a>
      </div>
      <div className="mobile-creative-showcase">
        <div className="mobile-creative-heading">
          <h2 id="creative-preview-title">Explore our ad creative</h2>
          <a className="text-link" href="#work">
            {site.labels.work}<ArrowUpRight size={16} />
          </a>
        </div>
        <div
          className="mobile-creative-strip"
          role="region"
          aria-labelledby="creative-preview-title"
        >
          <div className="mobile-creative-track">
          {[0, 1, 2].map((copy) => (
          <div className="mobile-creative-group" key={copy} aria-hidden={copy > 0 ? true : undefined}>
          {[
            { src: site.hero.creatives.left, name: "SHEKO", width: 1080, height: 1920 },
            { src: site.hero.creatives.right, name: "Ornevia", width: 1080, height: 1920 },
            { src: site.hero.creatives.bottom, name: "Moments & Candles", width: 1080, height: 1350 },
          ].map((creative) => (
            <figure className="mobile-creative-card" key={creative.src}>
              <div className="mobile-creative-image">
                <Image
                  src={creative.src}
                  alt={copy === 0 ? `${creative.name} static ad creative` : ""}
                  width={creative.width}
                  height={creative.height}
                  sizes="(max-width: 899px) 180px, 1px"
                />
              </div>
            </figure>
          ))}
          </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
