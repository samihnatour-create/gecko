"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/lib/content";
import { motionSettings } from "@/lib/motion";

// Process timeline: a gradient line grows down the steps and each node lights up as it's reached.
export function ProcessVine() {
  const root = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add(motionSettings.active, () => {
      const el = root.current!;
      gsap.fromTo(el.querySelector(".timeline-grow"), { scaleY: 0 }, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top 70%", end: "bottom 70%", scrub: 0.5 },
      });
      el.querySelectorAll<HTMLElement>(".timeline-step").forEach((step) => {
        ScrollTrigger.create({
          trigger: step,
          start: "top 70%",
          onEnter: () => step.classList.add("is-reached"),
          onLeaveBack: () => step.classList.remove("is-reached"),
        });
      });
      el.classList.add("is-animated");
      return () => el.classList.remove("is-animated");
    }, root);
    return () => mm.revert();
  }, []);
  return (
    <div ref={root} className="timeline">
      <span className="timeline-line" aria-hidden="true"><span className="timeline-grow" /></span>
      <ol className="timeline-list">
      {site.process.map((step, i) => (
        <li className="timeline-step" key={step.title}>
          <span className="timeline-node" aria-hidden="true" />
          <span className="timeline-num">0{i + 1}</span>
          <div className="timeline-card">
            <h2>{step.title}</h2>
            <p>{step.summary}</p>
            <p className="timeline-outcome">
              <strong>You get:</strong> {step.outcome}
            </p>
          </div>
        </li>
      ))}
      </ol>
    </div>
  );
}
