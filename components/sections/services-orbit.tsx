"use client";
import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/lib/content";
import { motionSettings } from "@/lib/motion";

const creatives = [...new Set([...site.hero.ads.map((a) => a.src), ...site.work.flatMap((p) => p.gallery?.map((g) => g.src) ?? [p.image])])];

// Pinned section: ad creatives orbit the blob while the three services take turns in focus.
export function ServicesOrbit() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add(motionSettings.desktop, () => {
      const el = root.current!;
      const cards = gsap.utils.toArray<HTMLElement>(".orbit-card", el);
      const state = { progress: 0, spin: 0 };
      const place = () => {
        const rx = Math.min(innerWidth * 0.36, 560);
        const ry = Math.min(innerHeight * 0.2, 170);
        cards.forEach((card, i) => {
          const a = (i / cards.length) * Math.PI * 2 + state.progress * Math.PI * 2.4 + state.spin;
          const depth = (Math.sin(a) + 1) / 2;
          gsap.set(card, {
            xPercent: -50,
            yPercent: -50,
            x: Math.cos(a) * rx,
            y: Math.sin(a) * ry,
            scale: 0.55 + depth * 0.55,
            opacity: 0.25 + depth * 0.75,
            zIndex: Math.round(depth * 100),
            rotation: Math.cos(a) * -8,
          });
        });
      };
      const tick = (_: number, dt: number) => { state.spin += dt * 0.00006; place(); };
      gsap.ticker.add(tick);
      const trigger = ScrollTrigger.create({
        trigger: el,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          state.progress = self.progress;
          setActive(Math.min(site.services.length - 1, Math.floor(self.progress * site.services.length)));
        },
      });
      el.classList.add("is-pinned");
      return () => {
        gsap.ticker.remove(tick);
        trigger.kill();
        el.classList.remove("is-pinned");
        gsap.set(cards, { clearProps: "all" });
      };
    }, root);
    return () => mm.revert();
  }, []);
  return (
    <section ref={root} className="orbit" id="services" aria-labelledby="services-title" data-blob="0 0.02 0.4 1">
      <div className="orbit-sticky">
        <div className="orbit-head wrap">
          <h2 id="services-title" className="label">{site.servicesIntro.eyebrow}</h2>
          <p className="orbit-count" aria-hidden="true">0{active + 1} / 0{site.services.length}</p>
        </div>
        <div className="orbit-ring" aria-hidden="true">
          {creatives.map((src) => (
            <div className="orbit-card" key={src}>
              <Image src={src} alt="" fill sizes="180px" />
            </div>
          ))}
        </div>
        <ol className="orbit-services wrap">
          {site.services.map((s, i) => (
            <li key={s.title} className={i === active ? "is-active" : ""}>
              <span className="label">0{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <p className="orbit-tags">{s.tags.join(" · ")}</p>
            </li>
          ))}
        </ol>
        <div className="orbit-foot wrap">
          <p className="mega orbit-statement">
            {site.servicesIntro.title} <em>{site.servicesIntro.accent}</em>
          </p>
          <Link href="/contact" className="pill pill-outline">
            {site.services[active].cta} <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
