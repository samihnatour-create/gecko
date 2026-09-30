import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/content";
import { GeckoHand } from "../artwork";

export function Studio() {
  return (
    <section className="studio wrap" aria-labelledby="studio-title">
      <div className="studio-side">
        <GeckoHand className="studio-hand" />
      </div>
      <div>
        <h2 id="studio-title" data-reveal>
          {site.manifesto.before}{" "}
          <em className="crossed">{site.manifesto.accent}</em>{" "}
          {site.manifesto.after}
        </h2>
        <p className="studio-description">{site.manifesto.description}</p>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section
      id="services"
      className="services"
      aria-labelledby="services-title"
    >
      <div className="wrap">
        <div className="services-top">
          <div>
            <h2 id="services-title" data-reveal>
              {site.servicesIntro.title}
              <br />
              <em>{site.servicesIntro.accent}</em>
            </h2>
          </div>
          <GeckoHand className="services-flower" />
          <p>{site.servicesIntro.description}</p>
        </div>
        <div className="service-list">
          {site.services.map((service, i) => (
            <article className="service-row" key={service.title} data-reveal>
              <span className="service-number">0{i + 1}</span>
              <h3>{service.title}</h3>
              <div>
                <p>{service.description}</p>
                <div className="tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <ArrowUpRight className="service-arrow" size={34} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
