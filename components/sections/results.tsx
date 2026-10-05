"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/lib/content";
import { motionSettings } from "@/lib/motion";
import "./results.css";

export function Results() {
  const root = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add(motionSettings.active, () => {
      const section = root.current!;
      const counters = section.querySelectorAll<HTMLElement>("[data-result-count]");
      section.querySelectorAll<HTMLElement>("[data-result-reveal]").forEach((el, i) => {
        gsap.from(el, { y: 18, opacity: 0, duration: motionSettings.revealDuration,
          delay: i * 0.09, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 94%", once: true } });
      });
      counters.forEach((el, i) => {
        const text = site.impact.stats[i].value;
        const counter = { value: 0 };
        const suffix = text.replace(/^[\d.]+/, "");
        gsap.to(counter, { value: parseFloat(text), duration: 1.2, ease: "power2.out",
          onUpdate: () => { el.textContent = counter.value.toFixed(text.includes(".") ? 1 : 0) + suffix; },
          onComplete: () => { el.textContent = text; },
          scrollTrigger: { trigger: el, start: "top 94%", once: true } });
      });
      const clients = section.querySelector<HTMLElement>(".results-clients")!;
      clients.classList.add("is-moving");
      // Two equal-width copies wrap seamlessly while moving to the right.
      const loop = gsap.fromTo(section.querySelector(".results-logo-track"),
        { xPercent: -50 }, { xPercent: 0, duration: 36, repeat: -1, ease: "none", paused: true });
      const trigger = ScrollTrigger.create({ trigger: clients, start: "top bottom", end: "bottom top",
        onToggle: self => { loop.paused(!self.isActive); } });
      loop.paused(!trigger.isActive);
      return () => {
        clients.classList.remove("is-moving");
        counters.forEach((el, i) => { el.textContent = site.impact.stats[i].value; });
      };
    }, root);
    return () => mm.revert();
  }, []);
  return <section id="results" ref={root} className="results-section wrap" aria-labelledby="results-title">
    <div className="results-inner">
      <div className="results-heading">
        <p className="eyebrow">Our founders’ experience</p>
        <h2 id="results-title">A new agency.<br /><em>Experienced founders.</em></h2>
      </div>
      <dl className="results-metrics">{site.impact.stats.map((stat, i) => <div className="results-metric" key={stat.label} data-result-reveal>
        <dt>{stat.label}</dt>
        <dd><span className="results-sr">{stat.value}</span><span aria-hidden="true" data-result-count={i}>{stat.value}</span></dd>
        {i === 2 && <span className="results-caption">Creative strategy & media buying</span>}
      </div>)}</dl>
      <div className="results-clients">
        <div className="results-client-heading">
          <p className="eyebrow">Our Partners</p>
        </div>
        <div className="results-logo-window" data-result-reveal><div className="results-logo-track">
          {[0, 1].map(copy => <ul key={copy} className="results-logos" aria-label={copy === 0 ? "Our Partners" : undefined} aria-hidden={copy === 1 ? true : undefined}>
            {["Amazon", "PepsiCo", "Johnson’s", "Cruncho", "Lume", "Solv", "Morf"].map(brand => <li key={brand}><span className="results-logo-slot">{brand}</span></li>)}
          </ul>)}
        </div></div>
      </div>
    </div>
  </section>;
}
