"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site, type Project } from "@/lib/content";
import { motionSettings } from "@/lib/motion";
import { CampaignArt } from "../artwork";

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
    const overflow = document.body.style.overflow;
    el.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      el.close();
      document.body.style.overflow = overflow;
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
      <div className="dialog-inner">
        <button
          className="round-button dialog-close"
          onClick={onClose}
          aria-label={site.labels.close}
          autoFocus
        >
          <X />
        </button>
        <CampaignArt project={project} />
        <div className="dialog-copy">
          <p className="eyebrow">
            {project.sample ? site.labels.sample : site.workIntro.detailLabel} /{" "}
            {project.year}
          </p>
          <h2 id="project-title">{project.title}</h2>
          <p className="eyebrow">{site.labels.details}</p>
          <p>{project.brief}</p>
          <h3>{site.labels.deliverables}</h3>
          <div className="tags">
            {project.deliverables.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <a className="button button-dark" href="#contact" onClick={onClose}>
            {site.labels.project}
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </dialog>
  );
}

export function Work() {
  const [filter, setFilter] = useState(site.labels.allWork);
  const [selected, setSelected] = useState<Project | null>(null);
  const root = useRef<HTMLElement>(null);
  const categories = [
    site.labels.allWork,
    ...new Set(site.work.map((p) => p.category)),
  ];
  const filtered = site.work.filter(
    (p) => filter === site.labels.allWork || p.category === filter,
  );
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add(
      motionSettings.desktop,
      () => {
        const cards = gsap.utils.toArray<HTMLElement>(
          ".work-card",
          root.current!,
        );
        cards.forEach((card, i) => {
          const target = card.querySelector(".project-button");
          const direction = i % 2 === 0 ? -1 : 1;
          // Animate the content, not the grid cell used to measure scroll position.
          // No pin wrappers: category changes cannot leave orphaned spacing behind.
          gsap.fromTo(
            target,
            {
              x: direction * 38,
              y: i % 2 ? 80 : 45,
              rotation: direction * 2.5,
            },
            {
              x: -direction * 14,
              y: i % 2 ? -40 : -24,
              rotation: -direction * 0.5,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top 95%",
                end: "bottom 10%",
                scrub: 0.8,
                invalidateOnRefresh: true,
              },
            },
          );
        });
      },
      root,
    );
    ScrollTrigger.refresh();
    return () => mm.revert();
  }, [filter]);
  return (
    <section
      ref={root}
      className="work-section wrap"
      id="work"
      aria-labelledby="work-title"
    >
      <div className="section-heading">
        <div>
          <h2 id="work-title" data-reveal>
            {site.workIntro.title}
            <br />
            <em>{site.workIntro.accent}</em>
          </h2>
        </div>
        <p className="section-note">{site.workIntro.note}</p>
      </div>
      <div className="filters" aria-label={site.labels.filter}>
        {categories.map((category) => (
          <button
            key={category}
            aria-pressed={filter === category}
            onClick={() => setFilter(category)}
          >
            {category}
            <span>
              {category === site.labels.allWork
                ? site.work.length
                : site.work.filter((p) => p.category === category).length}
            </span>
          </button>
        ))}
      </div>
      <div className="work-grid">
        {filtered.map((project, i) => (
          <article
            className={`work-card work-position-${i % 6}`}
            key={project.id}
          >
            <button
              className="project-button"
              onClick={() => setSelected(project)}
              aria-label={`View ${project.client}: ${project.title}`}
            >
              <div className="work-art-frame">
                <CampaignArt project={project} />

                <span className="project-open" aria-hidden="true">
                  <ArrowUpRight />
                </span>
              </div>
              <div className="work-meta">
                <div>
                  <p>
                    {project.client}
                    <span> / {project.year}</span>
                  </p>
                  <h3>{project.title}</h3>
                </div>
                <span className="work-category">{project.category}</span>
              </div>
            </button>
          </article>
        ))}
      </div>
      {filtered.length === 0 && <p>{site.labels.emptyWork}</p>}
      {selected && (
        <ProjectDialog project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
