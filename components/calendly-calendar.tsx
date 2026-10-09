"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { site } from "@/lib/content";

type CalendlyWindow = Window & {
  Calendly?: {
    initInlineWidget: (options: {
      url: string;
      parentElement: HTMLElement;
      resize: boolean;
    }) => void;
  };
};

export function CalendlyCalendar({ url }: { url: string }) {
  const container = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      const frame = container.current?.querySelector("iframe");
      if (
        event.origin === "https://calendly.com" &&
        frame && event.source === frame.contentWindow &&
        event.data?.event === "calendly.event_type_viewed"
      ) {
        setStatus("ready");
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  function initializeCalendar() {
    const parent = container.current;
    const calendly = (window as CalendlyWindow).Calendly;
    if (!parent || !calendly) {
      setStatus("error");
      return;
    }
    if (parent.querySelector("iframe")) return;

    const embedUrl = new URL(url);
    embedUrl.searchParams.set("hide_event_type_details", "1");
    const paper = getComputedStyle(parent).getPropertyValue("--paper").trim();
    embedUrl.searchParams.set("background_color", paper.replace(/^#/, ""));
    embedUrl.searchParams.set("text_color", "171a17");
    embedUrl.searchParams.set("primary_color", "1d4a26");

    try {
      calendly.initInlineWidget({
        url: embedUrl.href,
        parentElement: parent,
        // Keep the time list inside the widget instead of extending the page.
        resize: false,
      });
      const frame = parent.querySelector("iframe");
      if (frame) frame.title = site.contact.calendarTitle;
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {status !== "ready" && (
        <p className="calendar-status" role="status">
          {status === "error"
            ? "The calendar couldn’t load. Open the booking page below or email us."
            : "Loading available times…"}
        </p>
      )}
      <div
        ref={container}
        className="calendly-embed"
        hidden={status === "error"}
      />
      <Script
        id="calendly-widget"
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onReady={initializeCalendar}
        onError={() => setStatus("error")}
      />
      <div className="calendar-alternatives">
        <a href={url} target="_blank" rel="noreferrer">
          Open booking page <ArrowUpRight size={16} aria-hidden="true" />
        </a>
        <a href={`mailto:${site.contact.email}`}>
          <Mail size={16} aria-hidden="true" /> Prefer email?
        </a>
      </div>
    </>
  );
}
