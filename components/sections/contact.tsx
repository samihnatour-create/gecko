"use client";
import { ArrowUpRight, ArrowUp, Clock3, Video, Mail } from "lucide-react";
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
function EmailContact() {
  const subject = encodeURIComponent("Let’s talk growth — Gecko Media");
  return (
    <div className="calendar-preview">
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
      <div className="calendar-dates contact-email">
        <h3>Start with a quick introduction.</h3>
        <p>Tell us about your business and what you want to improve. We’ll reply and arrange a time to talk.</p>
        <a className="button button-dark" href={`mailto:${site.contact.email}?subject=${subject}`}>
          <Mail size={18} /> Email Gecko Media <ArrowUpRight size={18} />
        </a>
        <a className="contact-email-address" href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
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
              <EmailContact />
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
