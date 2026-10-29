import Link from "next/link";
import type { ReactNode } from "react";
import { RevealWords } from "./reveal-words";

// Dark subpage header; the blob sits to the right while it's in view.
export function PageHero({
  eyebrow,
  title,
  accent,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  crumbs: { name: string; path: string }[];
  children?: ReactNode;
}) {
  const long = title.length > 40;
  return (
    <section className="page-hero" aria-labelledby="page-title" data-blob={long ? "0.78 -0.15 0.55 1" : "0.6 -0.05 0.72 1"}>
      <svg className="rings" viewBox="0 0 1000 1000" aria-hidden="true">
        <circle cx="720" cy="440" r="330" />
        <circle cx="560" cy="520" r="420" />
      </svg>
      <div className="wrap page-hero-inner">
        <nav aria-label="Breadcrumb" className="crumbs">
          <ol>
            <li><Link href="/">Home</Link></li>
            {crumbs.map((c, i) => (
              <li key={c.path}>
                {i === crumbs.length - 1 ? <span aria-current="page">{c.name}</span> : <Link href={c.path}>{c.name}</Link>}
              </li>
            ))}
          </ol>
        </nav>
        <p className="label">{eyebrow}</p>
        <h1 id="page-title" className={`mega blend ${long ? "is-long" : ""}`} data-words>
          <RevealWords text={title} />
          {accent && (
            <>
              {" "}
              <em><RevealWords text={accent} /></em>
            </>
          )}
        </h1>
        {children}
      </div>
    </section>
  );
}
