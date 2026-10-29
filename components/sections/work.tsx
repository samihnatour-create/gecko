"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site, type Project } from "@/lib/content";
import { motionSettings } from "@/lib/motion";
import { ProjectGallery } from "../project-gallery";

function ProjectDialog({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const el = dialog.current!;
    const previous = document.activeElement as HTMLElement | null;
    el.showModal();
    return () => {
      el.close();
      previous?.focus({ preventScroll: true });
    };
  }, []);
  return (
    <dialog
      ref={dialog}
      className="project-dialog"
      aria-labelledby="project-title"
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <header className="project-dialog-header">
        <div><strong>{project.client}</strong><span>{project.niche}</span></div>
        <button
          className="round-button"
          onClick={onClose}
          aria-label={site.labels.close}
          autoFocus
        >
          <X />
        </button>
      </header>
      <div className="dialog-inner">
        <ProjectGallery key={project.id} project={project} />
        <div className="dialog-copy">
          <p className="label">{project.category}</p>
          <h2 id="project-title">{project.title}</h2>
          <h3>{site.labels.details}</h3>
          <p>{project.brief}</p>
          {project.message && <div className="project-message"><h3>The message</h3><p>{project.message}</p></div>}
          {project.contribution && (
            <dl className="project-context">
              <div><dt>Our contribution</dt><dd>{project.contribution}</dd></div>
            </dl>
          )}
          <h3>{project.results.length ? "Campaign results" : "Creative takeaway"}</h3>
          {project.results.length ? (
            <dl className="project-results">
              {project.results.map((result) => (
                <div key={result.label}><dt>{result.label}</dt><dd>{result.value}</dd><p>{result.context}</p></div>
              ))}
            </dl>
          ) : <p className="creative-takeaway">{project.takeaway}</p>}
          <h3>{site.labels.deliverables}</h3>
          <div className="tags">
            {project.deliverables.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <Link className="pill pill-lime" href="/contact">
            {site.labels.project}
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </dialog>
  );
}

export function Work() {
  const [selected, setSelected] = useState<Project | null>(null);
  const root = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    // The two columns travel at different speeds, like a slow vertical marquee.
    mm.add(motionSettings.desktop, () => {
      gsap.fromTo(".work-col-b", { yPercent: 6 }, {
        yPercent: -14,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: 0.8 },
      });
    }, root);
    return () => mm.revert();
  }, []);
  const columns = [site.work.filter((_, i) => i % 2 === 0), site.work.filter((_, i) => i % 2 === 1)];
  return (
    <section ref={root} className="work-section wrap" id="work" aria-labelledby="work-title" data-blob="-0.85 -0.55 0.9 1">
      <aside className="work-aside">
        <h2 id="work-title" className="label">{site.workIntro.eyebrow}</h2>
        <p className="work-count">0{site.work.length}</p>
        <p className="work-note">{site.workIntro.note}</p>
        <Link href="/contact" className="pill pill-outline">
          Start yours <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </aside>
      <div className="work-cols">
        {columns.map((col, c) => (
          <div className={`work-col ${c ? "work-col-b" : "work-col-a"}`} key={c}>
            {col.map((project) => (
              <article className="work-card" key={project.id}>
                <button
                  className="project-button"
                  data-cursor="View"
                  onClick={() => setSelected(project)}
                  aria-label={`View ${project.client}: ${project.title}`}
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 700px) 100vw, 33vw"
                  />
                  <span className="work-card-meta">
                    <span>
                      <strong>{project.client}</strong>
                      <small>{project.niche}</small>
                    </span>
                    <span className="work-plus" aria-hidden="true">+</span>
                  </span>
                </button>
              </article>
            ))}
          </div>
        ))}
      </div>
      {selected && (
        <ProjectDialog project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
