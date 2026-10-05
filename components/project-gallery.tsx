"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/content";

export function ProjectGallery({ project }: { project: Project }) {
  const [active, setActive] = useState(0);
  const [failed, setFailed] = useState<string | null>(null);
  const images = project.gallery?.length ? project.gallery : [{ src: project.image, alt: project.imageAlt, width: 1024, height: 1280 }];
  const items = [
    ...(project.video ? [{ src: project.video, poster: project.image, alt: `${project.client} campaign video`, video: true }] : []),
    ...images.map((image, index) => ({ ...image, poster: image.src, video: false, label: `Image ${index + 1}` })),
  ];
  const item = items[active];
  const label = item.video ? "Campaign video" : `Image ${active + (project.video ? 0 : 1)} of ${images.length}`;
  const move = (direction: number) => setActive((value) => (value + direction + items.length) % items.length);

  return (
    <section className="campaign-gallery" aria-label={`${project.client} campaign media`}>
      <div className="gallery-stage" id="campaign-viewer">
        {failed === item.src ? (
          <p className="gallery-error">This media couldn’t load. <a href={item.src} target="_blank" rel="noreferrer">Open the original</a></p>
        ) : item.video ? (
          <video key={item.src} controls playsInline preload="none" poster={item.poster} aria-label={item.alt} onError={() => setFailed(item.src)}>
            <source src={item.src} type="video/mp4" />
          </video>
        ) : (
          <Image key={item.src} src={item.src} alt={item.alt} fill sizes="(max-width: 899px) 100vw, 650px" onError={() => setFailed(item.src)} />
        )}
      </div>
      <div className="gallery-toolbar">
        <span aria-live="polite">{label}</span>
        <div>
          <a className="gallery-original" href={item.src} target="_blank" rel="noreferrer" aria-label={`Open ${label.toLowerCase()} at full size`}>Full size <ExternalLink size={14} /></a>
          {items.length > 1 && <>
            <button className="round-button" onClick={() => move(-1)} aria-label="Previous media"><ChevronLeft size={18} /></button>
            <button className="round-button" onClick={() => move(1)} aria-label="Next media"><ChevronRight size={18} /></button>
          </>}
        </div>
      </div>
      {items.length > 1 && (
        <div className="gallery-thumbnails" role="group" aria-label="Choose campaign media">
          {items.map((media, index) => (
            <button key={media.src} aria-label={media.video ? "Show campaign video" : `Show image ${index + (project.video ? 0 : 1)}`} aria-pressed={active === index} aria-controls="campaign-viewer" onClick={() => setActive(index)}>
              <Image src={media.poster} alt="" fill sizes="72px" />
              {media.video && <span className="gallery-play"><Play size={18} fill="currentColor" /></span>}
              <span className="gallery-thumb-label">{media.video ? "Video" : `0${index + (project.video ? 0 : 1)}`}</span>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
