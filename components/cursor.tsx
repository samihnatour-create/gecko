"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// Small trailing dot for fine pointers; grows over links and shows a label over [data-cursor].
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el = dot.current!;
    el.classList.add("is-on");
    const x = gsap.quickTo(el, "x", { duration: 0.35, ease: "power3.out" });
    const y = gsap.quickTo(el, "y", { duration: 0.35, ease: "power3.out" });
    const move = (e: PointerEvent) => {
      x(e.clientX);
      y(e.clientY);
      const target = (e.target as Element).closest?.("a, button, [data-cursor], summary");
      el.classList.toggle("is-hover", Boolean(target));
      setLabel(target?.getAttribute("data-cursor") ?? "");
    };
    const leave = () => el.classList.remove("is-on");
    const enter = () => el.classList.add("is-on");
    window.addEventListener("pointermove", move);
    document.documentElement.addEventListener("pointerleave", leave);
    document.documentElement.addEventListener("pointerenter", enter);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
      document.documentElement.removeEventListener("pointerenter", enter);
    };
  }, []);
  return (
    <div ref={dot} className={`cursor ${label ? "has-label" : ""}`} aria-hidden="true">
      <span>{label}</span>
    </div>
  );
}
