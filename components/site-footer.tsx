import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/content";
import { posts } from "@/lib/blog";

const sitemap = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Watch intro", href: "/watch" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer" data-blob="0.95 0.55 1.1 1">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-cta">
            <h2 className="mega">
              How about we <br />grow something <br />
              <span className="footer-cta-row">
                <span>to<span className="plus">+</span>gether</span>
                <Link href="/contact" className="pill pill-outline footer-pill">
                  Get in touch <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </span>
            </h2>
          </div>
          <div className="footer-cols">
            <nav className="footer-col" aria-label="Sitemap">
              <p className="label">Sitemap</p>
              {sitemap.map((p) => (
                <Link key={p.href} href={p.href}>{p.label} <ArrowRight size={12} aria-hidden="true" /></Link>
              ))}
            </nav>
            <div className="footer-col">
              <p className="label">Reading</p>
              {posts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`}>{p.shortTitle} <ArrowUpRight size={12} aria-hidden="true" /></Link>
              ))}
            </div>
            <div className="footer-col">
              <p className="label">Contact</p>
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
              <Link href="/contact">Book a free call <ArrowRight size={12} aria-hidden="true" /></Link>
              <p className="label footer-sublabel">Admin</p>
              <Link href="/privacy" className="small">Privacy</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <small>© {new Date().getFullYear()} {site.footer.copyright}</small>
          <p className="footer-wordmark" aria-hidden="true">gecko media.</p>
        </div>
      </div>
    </footer>
  );
}
