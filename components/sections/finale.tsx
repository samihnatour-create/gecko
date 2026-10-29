"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motionSettings } from "@/lib/motion";

// Same silhouette as /gecko-hand-black.svg, so the logo mark can grow to fill the screen.
const hand =
  "M244 35C224 35 209 48 207 67C204 86 215 105 222 124C230 145 237 164 235 181C234 194 230 203 221 205C209 208 194 197 183 183C173 170 170 155 154 147C137 137 120 141 110 151C98 163 97 181 103 195C110 210 126 216 145 219C164 222 181 229 193 241C208 256 214 275 218 296L225 334C228 353 236 367 250 374C264 381 281 380 296 374C307 370 314 361 312 351C311 341 303 331 303 321C303 310 315 299 329 294C348 287 367 290 387 292C405 295 421 291 431 279C441 266 440 251 432 241C423 229 409 228 395 233C380 238 367 248 349 252C339 255 329 254 326 247C321 237 332 214 343 199C356 182 370 173 387 165C404 158 419 145 421 128C424 111 415 96 400 89C384 81 366 85 354 98C342 111 339 127 334 145C329 164 321 183 309 193C299 202 287 202 279 193C270 183 268 166 269 150C270 132 274 115 280 97C286 80 285 65 278 52C271 41 258 35 244 35Z";

export function Finale() {
  const root = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add(motionSettings.active, () => {
      const el = root.current!;
      el.classList.add("is-pinned");
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: { trigger: el, start: "top top", end: "bottom bottom", scrub: 0.6 },
      });
      tl.fromTo(".finale-hand", { scale: 0.32, rotation: -24 }, { scale: 16, rotation: 18, duration: 1 })
        .fromTo(".finale-intro", { opacity: 1 }, { opacity: 0, duration: 0.25 }, 0.3)
        .fromTo(".finale-fill", { opacity: 0 }, { opacity: 1, duration: 0.2 }, 0.62)
        .fromTo(".finale-outro", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.25 }, 0.72);
      return () => el.classList.remove("is-pinned");
    }, root);
    return () => mm.revert();
  }, []);
  return (
    <section ref={root} className="finale" aria-labelledby="finale-title" data-blob="0 0 0.2 0">
      <div className="finale-sticky">
        <svg className="finale-hand" viewBox="0 0 505 390" aria-hidden="true">
          <defs>
            <linearGradient id="finale-gradient" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0" stopColor="#f2f62b" />
              <stop offset="0.45" stopColor="#a3f600" />
              <stop offset="1" stopColor="#00edda" />
            </linearGradient>
          </defs>
          <path d={hand} fill="url(#finale-gradient)" />
        </svg>
        <div className="finale-fill" aria-hidden="true" />
        <p className="finale-intro mega blend" aria-hidden="true">Where better ads begin.</p>
        <h2 id="finale-title" className="finale-outro mega">
          Better creative is the standard. <em>Choose Gecko Media.</em>
        </h2>
      </div>
    </section>
  );
}
