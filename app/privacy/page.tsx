import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy — Gecko Media",
  description: "How Gecko Media handles information when you visit our website or contact our team.",
  alternates: { canonical: `${site.brand.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <main className="privacy-page wrap">
      <Link href="/" className="button button-outline">← Back to Gecko Media</Link>
      <h1>Privacy</h1>
      <p className="privacy-updated">Updated October 9, 2026</p>
      <p>This notice explains how Gecko Media handles information through geckomedia.net. For questions about your information, email <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.</p>
      <h2>When you contact us</h2>
      <p>If you email us, we receive your email address and the information you choose to share. We use it to respond, discuss your project, and arrange a conversation. Our business email is provided through Microsoft 365 from GoDaddy. Please avoid sending passwords, payment details, or sensitive personal information in an enquiry.</p>
      <h2>Website hosting</h2>
      <p>Vercel hosts this website and processes technical request information, such as your IP address and browser information, to deliver the site, diagnose problems, and protect the service. You can read more in <a href="https://vercel.com/legal/privacy-notice" target="_blank" rel="noreferrer">Vercel’s privacy notice</a>.</p>
      <h2>Booking a call</h2>
      <p>Our online booking calendar, when available, is provided by Calendly. Calendly processes the details you enter and may use cookies under <a href="https://calendly.com/legal/privacy-notice" target="_blank" rel="noreferrer">its privacy notice</a>. We use the booking details to arrange and attend your call. You can always contact us by email instead.</p>
      <h2>Your choices</h2>
      <p>You can contact us to ask about information you have shared with us, request a correction or deletion, or ask us to stop contacting you. We keep enquiry information for as long as needed to respond and manage the relationship, and where recordkeeping is required.</p>
    </main>
  );
}
