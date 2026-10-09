import type { Metadata } from "next";
import { LandingPage } from "@/components/landing-page";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  alternates: { canonical: site.brand.url },
};

export default function Home() {
  return <LandingPage />;
}
