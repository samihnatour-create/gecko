"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let lenis: Lenis | null = null;
export const getLenis = () => lenis;

// Lenis inertia scrolling driven by GSAP's ticker so ScrollTrigger stays in sync.
export function SmoothScroll() {
  const pathname = usePathname();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    lenis = new Lenis({ lerp: 0.09, anchors: { offset: -80 } });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis?.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis?.destroy();
      lenis = null;
    };
  }, []);
  useEffect(() => {
    lenis?.resize();
    const hash = window.location.hash;
    lenis?.scrollTo(hash && document.querySelector(hash) ? hash : 0, { immediate: true, force: true, offset: hash ? -80 : 0 });
  }, [pathname]);
  return null;
}
