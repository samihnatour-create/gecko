"use client";
import { useLayoutEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/lib/content";
import { motionSettings } from "@/lib/motion";
import { GeckoLogo } from "./logo";
import { Hero } from "./sections/hero";
import { Results } from "./sections/results";
import { Studio, Services } from "./sections/studio";
import { Work } from "./sections/work";
import { Reviews } from "./sections/reviews";
import { Contact } from "./sections/contact";

export function LandingPage() {
  const root = useRef<HTMLDivElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const [menu, setMenu] = useState(false);
  const navigation = site.nav.filter(
    (link) => link.href !== "#reviews" || site.reviews.length > 0,
  );
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add(
      motionSettings.active,
      () => {
        gsap.utils
          .toArray<HTMLElement>("[data-words]", root.current!)
          .forEach((el) =>
            gsap.from(el.querySelectorAll("[data-word]"), {
              yPercent: 105,
              rotation: 3,
              duration: 1,
              stagger: 0.08,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 94%", once: true },
            }),
          );
        gsap.utils
          .toArray<HTMLElement>("[data-reveal]", root.current!)
          .forEach((el) =>
            gsap.from(el, {
              y: 32,
              opacity: 0,
              duration: motionSettings.revealDuration,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 94%", once: true },
            }),
          );
      },
      root,
    );
    return () => mm.revert();
  }, []);
  return (
    <div id="top" ref={root}>
      <a href="#main" className="skip-link">
        {site.labels.skip}
      </a>
      <header className="header wrap">
        <GeckoLogo />
        <nav className="desktop-nav" aria-label={site.labels.mainNav}>
          {navigation.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="button button-dark nav-cta">
          {site.labels.project}
          <ArrowUpRight size={17} />
        </a>
        <button
          ref={menuButton}
          className="menu-toggle round-button"
          aria-label={site.labels.menu}
          aria-expanded={menu}
          aria-controls="mobile-navigation"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
        {menu && (
          <nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label={site.labels.mobileNav}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setMenu(false);
                menuButton.current?.focus();
              }
            }}
          >
            {[
              ...navigation,
              { label: site.labels.project, href: "#contact" },
            ].map((link) => (
              <a
                href={link.href}
                key={link.href}
                onClick={() => setMenu(false)}
              >
                {link.label}
                <ArrowUpRight size={20} />
              </a>
            ))}
          </nav>
        )}
      </header>
      <main id="main">
        <Hero />
        <Results />
        <Studio />
        <Work />
        <Services />
        <Reviews />
        <Contact />
      </main>
    </div>
  );
}
