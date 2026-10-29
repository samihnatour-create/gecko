"use client";
import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motionSettings } from "@/lib/motion";

// Page-wide entrance motion for [data-words], [data-reveal] and [data-count]; rebinds per route.
export function MotionReveals() {
  const pathname = usePathname();
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add(motionSettings.active, () => {
      gsap.utils.toArray<HTMLElement>("[data-words]").forEach((el) =>
        gsap.from(el.querySelectorAll("[data-word]"), {
          yPercent: 110,
          rotation: 4,
          duration: 1,
          stagger: 0.06,
          ease: "power4.out",
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        }),
      );
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) =>
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: motionSettings.revealDuration,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        }),
      );
      // Long statements light up word by word as they scroll through.
      const scrubbed = gsap.utils.toArray<HTMLElement>("[data-scrub-words]").map((el) => {
        const original = el.textContent ?? "";
        el.replaceChildren(...original.split(/(\s+)/).map((part) => {
          if (/^\s+$/.test(part)) return document.createTextNode(part);
          const span = document.createElement("span");
          span.className = "scrub-word";
          span.textContent = part;
          return span;
        }));
        gsap.fromTo(el.querySelectorAll(".scrub-word"), { opacity: 0.16 }, {
          opacity: 1,
          stagger: 0.1,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top 82%", end: "bottom 50%", scrub: true },
        });
        return { el, original };
      });
      const counters = gsap.utils.toArray<HTMLElement>("[data-count]");
      counters.forEach((el) => {
        const text = el.dataset.count!;
        const suffix = text.replace(/^[\d.]+/, "");
        const counter = { value: 0 };
        gsap.to(counter, {
          value: parseFloat(text),
          duration: 1.4,
          ease: "power2.out",
          onUpdate: () => { el.textContent = Math.round(counter.value) + suffix; },
          onComplete: () => { el.textContent = text; },
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        });
      });
      return () => {
        counters.forEach((el) => { el.textContent = el.dataset.count!; });
        scrubbed.forEach(({ el, original }) => { el.textContent = original; });
      };
    });
    ScrollTrigger.refresh();
    return () => mm.revert();
  }, [pathname]);
  return null;
}
