"use client";
import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/lib/content";
import { motionSettings } from "@/lib/motion";
import { RevealWords } from "../reveal-words";

// Headline words float around the WebGL blob and drift apart as the page scrolls.
export function Hero() {
  const root = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add(motionSettings.active, () => {
      gsap.from(".hero-line [data-word]", { yPercent: 110, duration: 1.3, stagger: 0.12, ease: "expo.out", delay: 0.2 });
      gsap.from(".hero-foot > *, .hero-rings circle", { opacity: 0, y: 20, duration: 1, stagger: 0.08, delay: 0.8, ease: "power3.out" });
    }, root);
    // Lines drift apart only on desktop, where they're spread across the screen.
    mm.add(motionSettings.desktop, () => {
      const el = root.current!;
      const drift = [-14, 18, -10];
      el.querySelectorAll<HTMLElement>(".hero-line").forEach((line, i) => {
        gsap.to(line, {
          xPercent: drift[i],
          yPercent: -40 - i * 20,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: 0.6 },
        });
      });
    }, root);
    return () => mm.revert();
  }, []);
  const [first, second] = site.hero.headline;
  const [smarter, ...rest] = second.split(" ");
  return (
    <section ref={root} className="hero" aria-labelledby="hero-title" data-blob="0.06 0.04 0.66 1" data-blob-mobile="0.12 0.22 0.62 1">
      <svg className="rings hero-rings" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <circle cx="500" cy="500" r="390" />
        <circle cx="440" cy="540" r="470" />
      </svg>
      <h1 id="hero-title" className="hero-title blend">
        <span className="hero-line hero-line-1"><RevealWords text={first} /></span>{" "}
        <span className="hero-line hero-line-2"><em><RevealWords text={smarter} /></em></span>{" "}
        <span className="hero-line hero-line-3"><RevealWords text={rest.join(" ")} /></span>
      </h1>
      <div className="hero-foot wrap">
        <p className="hero-intro">{site.hero.description}</p>
        <Link href="/contact" className="pill pill-outline">
          {site.labels.project} <ArrowRight size={14} aria-hidden="true" />
        </Link>
        <a href="#intro" className="hero-scroll">Scroll <ArrowDown size={13} aria-hidden="true" /></a>
      </div>
    </section>
  );
}
