import type { Metadata } from "next";
import { site } from "@/lib/content";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(site.brand.url),
  title: site.brand.title,
  description: site.brand.description,
  icons: { icon: site.brand.logo },
  openGraph: {
    type: "website",
    siteName: "Gecko Media",
    title: site.brand.title,
    description: site.brand.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.brand.title,
    description: site.brand.description,
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
