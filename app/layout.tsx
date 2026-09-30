import type { Metadata } from "next";
import { site } from "@/lib/content";
import "./globals.css";
export const metadata: Metadata = {
  title: site.brand.title,
  description: site.brand.description,
  icons: { icon: site.brand.logo },
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
