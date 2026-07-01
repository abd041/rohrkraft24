import Link from "next/link";
import { SITE } from "@/lib/constants";
import type { ServicePageContent as ServiceContent } from "@/data/service-pages/types";
import { CheckIcon } from "@/components/icons";

type ServicePageContentProps = {
  content: ServiceContent;
  serviceLabel: string;
};

export function ServicePageContent({ content, serviceLabel }: ServicePageContentProps) {
  return (
    <section className="section service-content" style={{ background: "white" }}>
      <div className="container">
        <div className="service-content__inner">
          <p className="service-content__intro">{content.intro}</p>

          <div className="service-content__block">
            <h2>{content.whenNeeded.title}</h2>
            <ul className="service-content__list">
              {content.whenNeeded.items.map((item) => (
                <li key={item}>
                  <span className="service-content__check">
                    <CheckIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="service-content__block">
            <h2>{content.process.title}</h2>
            <ol className="service-content__steps">
              {content.process.steps.map((step, index) => (
                <li key={step.title}>
                  <span className="service-content__step-num">{index + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="service-content__block">
            <h2>{content.examples.title}</h2>
            <ul className="service-content__list">
              {content.examples.items.map((item) => (
                <li key={item}>
                  <span className="service-content__check">
                    <CheckIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="service-content__pricing">
            <h2>Preise & Anfahrt</h2>
            <p>{content.pricing}</p>
            <p className="service-content__pricing-note">
              {SITE.travelFeeShort} – {SITE.travelFeeNote} Reaktionszeit im Notfall:{" "}
              {SITE.reactionTime}.
            </p>
          </div>

          {content.related.length > 0 && (
            <div className="service-content__related">
              <h2>Passende Leistungen zu {serviceLabel}</h2>
              <div className="service-content__related-links">
                {content.related.map((link) => (
                  <Link key={link.href} href={link.href}>
                    {link.label} →
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
