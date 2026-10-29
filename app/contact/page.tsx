import { Clock3, Mail, Video } from "lucide-react";
import { site } from "@/lib/content";
import { JsonLd, absolute, breadcrumbs, pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import { CalendlyCalendar } from "@/components/calendly-calendar";

export const metadata = pageMetadata({
  title: "Contact & Book a Call",
  description:
    "Book a free 30-minute call with Gecko Media to talk about your ad creative, media buying, or branding, or email hello@geckomedia.net.",
  path: "/contact",
});

function bookingUrl(raw: string) {
  try {
    const url = new URL(raw);
    return url.protocol === "https:" && url.hostname === "calendly.com" && !url.pathname.includes("your-team")
      ? url.href
      : null;
  } catch {
    return null;
  }
}

const schema = [
  breadcrumbs([{ name: "Contact", path: "/contact" }]),
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: absolute("/contact"),
    name: "Contact Gecko Media",
    mainEntity: {
      "@id": absolute("/#organization"),
      contactPoint: { "@type": "ContactPoint", contactType: "sales", email: site.contact.email, availableLanguage: "English" },
    },
  },
];

const steps = [
  "Pick a time that suits you. You’ll get a Microsoft Teams invitation right away.",
  "On the call, we’ll talk about your goals, your current ads, and where you’re stuck.",
  "If we’re a good fit, we’ll follow up with a recommendation. If we’re not, we’ll tell you.",
];

export default function ContactPage() {
  const calendar = bookingUrl(site.contact.calendarUrl);
  const subject = encodeURIComponent("Let’s talk growth — Gecko Media");
  return (
    <>
      <JsonLd data={schema} />
      <PageHero eyebrow={site.contact.eyebrow} title="Let’s talk" accent="growth." crumbs={[{ name: "Contact", path: "/contact" }]}>
        <p className="page-hero-lede">{site.contact.description}</p>
      </PageHero>
      <section className="contact-grid wrap" aria-label="Book a call">
        <aside className="contact-side">
          <div className="meeting-card">
            <p className="label">Free discovery call</p>
            <h2>{site.contact.meetingTitle}</h2>
            <p className="meeting-meta"><Clock3 size={16} aria-hidden="true" /> {site.contact.duration}</p>
            <p className="meeting-meta"><Video size={16} aria-hidden="true" /> {site.contact.meetingType}</p>
            <p>{site.contact.meetingDescription}</p>
          </div>
          <div className="next-steps">
            <h2 className="label">What happens next</h2>
            <ol>
              {steps.map((s) => <li key={s}>{s}</li>)}
            </ol>
          </div>
          <a className="email-card" href={`mailto:${site.contact.email}?subject=${subject}`}>
            <Mail size={20} aria-hidden="true" />
            <span>
              <small>Prefer email?</small>
              <strong>{site.contact.email}</strong>
            </span>
          </a>
        </aside>
        <div className="calendar-container">
          {calendar ? (
            <CalendlyCalendar key={calendar} url={calendar} />
          ) : (
            <p className="calendar-status">
              Online booking is unavailable right now. Email <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a> and we’ll arrange a time.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
