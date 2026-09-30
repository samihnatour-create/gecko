"use client";
import { useLayoutEffect, useRef, useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/lib/content";
import { motionSettings } from "@/lib/motion";
import { CampaignArt, GeckoHand } from "../artwork";
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
          {site.work[0] && <CampaignArt project={site.work[0]} />}
        </div>
        <div className="hero-creative creative-right" aria-hidden="true">
          {site.work[1] && <CampaignArt project={site.work[1]} />}
        </div>
        <div className="hero-creative creative-bottom" aria-hidden="true">
          {site.work[3] && <CampaignArt project={site.work[3]} />}
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
    </section>
  );
}
