"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/content";
import { GeckoLogo } from "./logo";
import { getLenis } from "./smooth-scroll";

const menuLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Watch intro", href: "/watch" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const menuButton = useRef<HTMLButtonElement>(null);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("menu-open", menu);
    if (menu) getLenis()?.stop();
    else getLenis()?.start();
  }, [menu]);
  const isActive = (href: string) => !href.includes("#") && href !== "/" && pathname.startsWith(href);
  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <GeckoLogo />
          <nav className="top-nav" aria-label={site.labels.mainNav}>
            {site.nav.map((link) => (
              <Link key={link.href} href={link.href} aria-current={isActive(link.href) ? "page" : undefined}>
                {link.label} <ArrowUpRight size={12} aria-hidden="true" />
              </Link>
            ))}
          </nav>
          <Link href="/contact" className="pill pill-dark">
            {site.labels.project} <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </header>
      <button
        ref={menuButton}
        className={`menu-fab ${menu ? "is-open" : ""}`}
        aria-label={menu ? "Close menu" : site.labels.menu}
        aria-expanded={menu}
        aria-controls="site-menu"
        onClick={() => setMenu(!menu)}
      >
        <span /><span /><span />
      </button>
      <div
        id="site-menu"
        className={`site-menu ${menu ? "is-open" : ""}`}
        inert={!menu}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setMenu(false);
            menuButton.current?.focus();
          }
        }}
      >
        <nav aria-label={site.labels.mobileNav}>
          <ol>
            {menuLinks.map((link, i) => (
              <li key={link.href} style={{ transitionDelay: menu ? `${80 + i * 40}ms` : "0ms" }}>
                <Link href={link.href} onClick={() => setMenu(false)}>
                  <span>0{i + 1}</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
        <div className="site-menu-foot">
          <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
          <p>{site.footer.note}</p>
        </div>
      </div>
    </>
  );
}
