import type { Metadata, Viewport } from "next";
import { site } from "@/lib/content";
import { JsonLd, absolute } from "@/lib/seo";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BlobCanvas } from "@/components/blob-canvas";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Cursor } from "@/components/cursor";
import { MotionReveals } from "@/components/motion-reveals";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.brand.url),
  title: { default: site.brand.title, template: "%s | Gecko Media" },
  description: site.brand.description,
  applicationName: "Gecko Media",
  icons: { icon: site.brand.logo },
  openGraph: {
    type: "website",
    siteName: "Gecko Media",
    title: site.brand.title,
    description: site.brand.description,
    locale: "en_US",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: site.brand.title,
    description: site.brand.description,
  },
};

export const viewport: Viewport = { themeColor: "#171a17", colorScheme: "dark" };

const organization = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": absolute("/#organization"),
      name: "Gecko Media",
      url: site.brand.url,
      logo: absolute(site.brand.logo),
      email: site.contact.email,
      description: site.brand.description,
      knowsAbout: ["Ad creative", "Media buying", "Branding", "Creative testing", "Ecommerce advertising"],
    },
    {
      "@type": "WebSite",
      "@id": absolute("/#website"),
      name: "Gecko Media",
      url: site.brand.url,
      publisher: { "@id": absolute("/#organization") },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={organization} />
        <BlobCanvas />
        <a href="#main" className="skip-link">
          {site.labels.skip}
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <SmoothScroll />
        <Cursor />
        <MotionReveals />
      </body>
    </html>
  );
}
