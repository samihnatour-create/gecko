import { site } from "@/lib/content";
import { JsonLd, breadcrumbs, pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { ProcessVine } from "@/components/process-vine";

export const metadata = pageMetadata({
  title: "Our Process",
  description:
    "How Gecko Media works: a free discovery call, an audit and plan, creative production, structured ad testing, and plain-language reporting that improves every round.",
  path: "/process",
});

const schema = [
  breadcrumbs([{ name: "Process", path: "/process" }]),
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Gecko Media improves your ads",
    step: site.process.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.title,
      text: `${step.summary} ${step.outcome}`,
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: site.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  },
];

export default function ProcessPage() {
  return (
    <>
      <JsonLd data={schema} />
      <PageHero eyebrow="Our process" title="Five steps." accent="No guesswork." crumbs={[{ name: "Process", path: "/process" }]}>
        <p className="page-hero-lede">
          From the first call to the tenth round of creative, every step has a clear purpose and a clear output. You always know what we’re doing, and why.
        </p>
      </PageHero>

      <section className="process-steps wrap" aria-label="Process steps">
        <ProcessVine />
      </section>

      <section className="faq wrap" aria-labelledby="faq-title">
        <div className="faq-head">
          <p className="label">Questions</p>
          <h2 id="faq-title" className="mega" data-reveal>
            Good to <em>know.</em>
          </h2>
        </div>
        <div className="faq-list">
          {site.faq.map((item) => (
            <details key={item.q}>
              <summary>
                {item.q}
                <span aria-hidden="true" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
