import type { Metadata } from "next";
import { site } from "@/lib/content";
import { JsonLd, absolute } from "@/lib/seo";
import { Hero } from "@/components/sections/hero";
import { Work } from "@/components/sections/work";
import { ServicesOrbit } from "@/components/sections/services-orbit";
import { Finale } from "@/components/sections/finale";
import { FieldNotes, Intro, Partners, ProcessRows } from "@/components/sections/home";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const services = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Gecko Media services",
  itemListElement: site.services.map((service, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.description,
      serviceType: service.tags.join(", "),
      provider: { "@id": absolute("/#organization") },
    },
  })),
};

export default function Home() {
  return (
    <>
      <JsonLd data={services} />
      <Hero />
      <Intro />
      <Partners />
      <Work />
      <ServicesOrbit />
      <ProcessRows />
      <FieldNotes />
      <Finale />
    </>
  );
}
