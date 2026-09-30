"use client";
import { useState } from "react";
import { ArrowUpRight, ArrowUp, Clock3, Video } from "lucide-react";
import { site } from "@/lib/content";
import { GeckoLogo } from "../logo";
import { GeckoHand } from "../artwork";
function bookingUrl(raw: string) {
  try {
    const url = new URL(raw);
    return url.protocol === "https:" && !url.pathname.includes("your-team")
      ? url.href
      : null;
  } catch {
    return null;
  }
}
function CalendarPreview() {
  const [today] = useState(() => new Date());

  const year = today?.getFullYear() ?? 2026,
    month = today?.getMonth() ?? 8;
  const days = new Date(year, month + 1, 0).getDate();
  const offset = (new Date(year, month, 1).getDay() + 6) % 7;
  return (
    <div className="calendar-preview" aria-label={site.contact.previewNote}>
      <div className="calendar-profile">
        <GeckoHand />
        <h3>{site.contact.meetingTitle}</h3>
        <p>
          <Clock3 size={16} /> {site.contact.duration}
        </p>
        <p>
          <Video size={16} /> {site.contact.meetingType}
        </p>
        <p className="calendar-description">
          {site.contact.meetingDescription}
        </p>
      </div>
      <div className="calendar-dates">
        <h3>{site.contact.selectDate}</h3>
        <p className="calendar-month">
          {new Date(year, month, 1).toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </p>
        <div className="calendar-week">
          {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
            <span key={i}>{day}</span>
          ))}
        </div>
        <div className="calendar-days">
          {Array.from({ length: offset }, (_, i) => (
            <span key={`blank-${i}`} />
          ))}
          {Array.from({ length: days }, (_, i) => (
            <span
              key={i}
              className={
                i + 1 >= (today?.getDate() ?? 24) && (i + offset) % 7 < 5
                  ? "calendar-day upcoming"
                  : "calendar-day"
              }
            >
              {i + 1}
            </span>
          ))}
        </div>
        <p className="calendar-connection-note">{site.contact.previewNote}</p>
      </div>
    </div>
  );
}
export function Contact() {
  const calendar = bookingUrl(site.contact.calendarUrl);
  return (
    <>
      <section
        className="contact contact-booking"
        id="contact"
        aria-labelledby="contact-title"
      >
        <div className="wrap booking-grid">
          <div className="booking-copy">
            <h2 id="contact-title" data-reveal>
              {site.contact.title}
              <br />
              <em>{site.contact.accent}</em>
            </h2>
            <p>{site.contact.description}</p>
            <GeckoHand className="contact-flower" />
          </div>
          <div className="calendar-container">
            {calendar ? (
              <>
                <iframe
                  title={site.contact.calendarTitle}
                  src={calendar}
                  loading="lazy"
                />
                <a href={calendar} target="_blank" rel="noreferrer">
                  {site.contact.cta}
                  <ArrowUpRight size={18} />
                </a>
              </>
            ) : (
              <CalendarPreview />
            )}
          </div>
        </div>
      </section>
      <footer className="footer wrap">
        <div className="footer-main">
          <GeckoLogo />
          <a className="back-top" href="#top" aria-label={site.labels.top}>
            <ArrowUp />
          </a>
        </div>
        <div className="footer-bottom">
          <small>
            © {new Date().getFullYear()} {site.footer.copyright}
          </small>
          <div>
            {site.footer.links.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
