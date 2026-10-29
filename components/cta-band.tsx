import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/content";

// Full-gradient closing panel used at the end of subpages.
export function CtaBand({ title = "Better ads start with", accent = "one conversation." }: { title?: string; accent?: string }) {
  return (
    <section className="gradient-panel" aria-labelledby="cta-title" data-blob="0 0.2 0 0">
      <div className="wrap gradient-panel-inner">
        <p className="label">{site.contact.eyebrow}</p>
        <h2 id="cta-title" className="mega" data-reveal>
          {title} <em>{accent}</em>
        </h2>
        <div className="gradient-panel-foot">
          <p>{site.contact.description}</p>
          <Link href="/contact" className="pill pill-dark pill-lg">
            {site.labels.project} <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
