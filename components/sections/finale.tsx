"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motionSettings } from "@/lib/motion";
import { geckoHandPath, geckoHandViewBox } from "@/lib/gecko-hand";

export function Finale() {
  const root = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add(motionSettings.active, () => {
      const el = root.current!;
      el.classList.add("is-pinned");
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: { trigger: el, start: "top top", end: "bottom bottom", scrub: 0.6 },
      });
      tl.fromTo(".finale-hand", { scale: 0.32, rotation: -24 }, { scale: 16, rotation: 18, duration: 1 })
        .fromTo(".finale-intro", { opacity: 1 }, { opacity: 0, duration: 0.25 }, 0.3)
        .fromTo(".finale-fill", { opacity: 0 }, { opacity: 1, duration: 0.2 }, 0.62)
        .fromTo(".finale-outro", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.25 }, 0.72);
      return () => el.classList.remove("is-pinned");
    }, root);
    return () => mm.revert();
  }, []);
  return (
    <section ref={root} className="finale" aria-labelledby="finale-title" data-blob="0 0 0.2 0">
      <div className="finale-sticky">
        <svg className="finale-hand" viewBox={geckoHandViewBox} aria-hidden="true">
          <defs>
            <linearGradient id="finale-gradient" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0" stopColor="#f2f62b" />
              <stop offset="0.45" stopColor="#a3f600" />
              <stop offset="1" stopColor="#00edda" />
            </linearGradient>
          </defs>
          <path d={geckoHandPath} fill="url(#finale-gradient)" />
        </svg>
        <div className="finale-fill" aria-hidden="true" />
        <p className="finale-intro mega blend" aria-hidden="true">Where better ads begin.</p>
        <h2 id="finale-title" className="finale-outro mega">
          Better creative is the standard. <em>Choose Gecko Media.</em>
        </h2>
      </div>
    </section>
  );
}
