import Link from "next/link";
import { SITE } from "@/lib/constants";
import type { ServicePageContent as ServiceContent } from "@/data/service-pages/types";

type ServicePageContentProps = {
  content: ServiceContent;
  serviceLabel: string;
};

export function ServicePageContent({ content, serviceLabel }: ServicePageContentProps) {
  return (
    <section className="svc-content">
      <div className="container svc-content__layout">
        <div className="svc-content__main">
          <p className="svc-content__intro">{content.intro}</p>

          <div className="svc-content__block">
            <h2 className="svc-content__heading">{content.whenNeeded.title}</h2>
            <ul className="svc-content__list">
              {content.whenNeeded.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="svc-content__block">
            <h2 className="svc-content__heading">{content.process.title}</h2>
            <ol className="svc-content__steps">
              {content.process.steps.map((step, index) => (
                <li key={step.title} className="svc-content__step">
                  <span className="svc-content__step-num" aria-hidden>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="svc-content__step-title">{step.title}</h3>
                    <p className="svc-content__step-text">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="svc-content__block">
            <h2 className="svc-content__heading">{content.examples.title}</h2>
            <ul className="svc-content__list">
              {content.examples.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="svc-content__aside">
          <div className="svc-content__panel">
            <p className="svc-content__panel-label">Preise &amp; Anfahrt</p>
            <p className="svc-content__panel-text">{content.pricing}</p>
            <p className="svc-content__panel-note">
              {SITE.travelFeeShort} – {SITE.travelFeeNote}
              <br />
              Reaktionszeit im Notfall: {SITE.reactionTime}.
            </p>
            <a href={SITE.phoneHref} className="btn btn-primary svc-content__panel-cta">
              Jetzt anrufen
            </a>
          </div>

          {content.related.length > 0 && (
            <div className="svc-content__related">
              <p className="svc-content__related-label">Passende Leistungen</p>
              <ul className="svc-content__related-list">
                {content.related.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}
