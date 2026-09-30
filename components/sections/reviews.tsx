"use client";
import { useLayoutEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { site } from "@/lib/content";
import { GeckoHand } from "../artwork";
import { motionSettings } from "@/lib/motion";
export function Reviews() {
  const [index, setIndex] = useState(0);
  const quote = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(motionSettings.active, () => {
      gsap.fromTo(
        quote.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.4 },
      );
    });
    return () => mm.revert();
  }, [index]);
  if (!site.reviews.length) return null;
  const review = site.reviews[index % site.reviews.length];
  return (
    <section
      className="reviews wrap"
      id="reviews"
      aria-labelledby="reviews-title"
    >
      <div className="reviews-intro">
        <h2 id="reviews-title" data-reveal>
          {site.reviewsIntro.title}
          <br />
          <em>{site.reviewsIntro.accent}</em>
        </h2>
        <GeckoHand className="review-flower" />
        <small>{site.reviewsIntro.sampleLabel}</small>
      </div>
      <div className="review-content">
        <span className="quotation" aria-hidden="true">
          “
        </span>
        <div aria-live="polite" aria-atomic="true">
          <figure ref={quote}>
            <blockquote>{review.quote}</blockquote>
            <figcaption>
              <span className="avatar">{review.initials}</span>
              <span>
                <strong>{review.name}</strong>
                <span>{review.role}</span>
              </span>
            </figcaption>
          </figure>
        </div>
        <div className="review-controls">
          <span>
            {String(index + 1).padStart(2, "0")}{" "}
            <span>/ {String(site.reviews.length).padStart(2, "0")}</span>
          </span>
          <div>
            <button
              className="round-button"
              onClick={() =>
                setIndex(
                  (index + site.reviews.length - 1) % site.reviews.length,
                )
              }
              aria-label={site.labels.previous}
            >
              <ArrowLeft />
            </button>
            <button
              className="round-button"
              onClick={() => setIndex((index + 1) % site.reviews.length)}
              aria-label={site.labels.next}
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
