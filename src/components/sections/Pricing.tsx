import { SITE } from "@/lib/constants";
import type { CityPagePhone } from "@/lib/city-pages";
import { CheckIcon, PhoneIcon, PricingCardIcon } from "@/components/icons";

const PRICING_DELAYS = ["0.28s", "0.35s", "0s"] as const;

const PLANS = [
  {
    price: "89",
    title: "Abflussreinigung",
    featured: false,
    features: [
      "Verstopfung beseitigen",
      "Waschbecken, Dusche, WC",
      "Mechanische Reinigung",
      SITE.travelFeeShort,
    ],
  },
  {
    price: "149",
    title: "Rohrreinigung",
    featured: true,
    features: [
      "Professionelle Spiralreinigung",
      "Hochdruckspülung",
      "Alle Rohrarten",
      "Festpreis-Garantie",
      "24h Notdienst inklusive",
      SITE.travelFeeShort,
    ],
  },
  {
    price: "199",
    title: "Abwasserreinigung",
    featured: false,
    features: [
      "Grundreinigung von Leitungen",
      "Urinstein & Kalk entfernen",
      "Fettablagerungen beseitigen",
      "Zustandsbericht",
      SITE.travelFeeShort,
    ],
  },
];

type PricingProps = {
  cityLabel?: string;
  phone?: CityPagePhone;
  variant?: "default" | "premium";
};

export function Pricing({ cityLabel, phone, variant = "default" }: PricingProps = {}) {
  const phoneHref = phone?.href ?? SITE.phoneHref;
  const titleFor = (title: string) => (cityLabel ? `${title} ${cityLabel}` : title);

  if (variant === "premium") {
    return (
      <section className="pricing-premium" id="preise">
        <header className="pricing-premium__intro">
          <div className="container">
            <div className="pricing-premium__intro-inner">
              <p className="pricing-premium__label">Faire Preise</p>
              <h2 className="pricing-premium__heading">
                Faire Festpreise –
                <br />
                ohne versteckte Kosten
              </h2>
              <p className="pricing-premium__lede">
                Bei uns wissen Sie vorher, was es kostet. {SITE.travelFeeShort} – bei Beauftragung
                verrechnet. Transparente Festpreise vor Arbeitsbeginn.
              </p>
            </div>
          </div>
        </header>

        <div className="container pricing-premium__body">
          <div className="pricing-premium__grid">
            {PLANS.map((plan, i) => (
              <article
                key={plan.title}
                className={`pricing-premium__plan${plan.featured ? " pricing-premium__plan--featured" : ""}`}
                style={{ animationDelay: `${0.08 + i * 0.08}s` }}
              >
                {plan.featured && (
                  <p className="pricing-premium__kicker">Am beliebtesten</p>
                )}
                <p className="pricing-premium__price">
                  <span className="pricing-premium__from">ab</span>
                  <span className="pricing-premium__amount">{plan.price}</span>
                  <span className="pricing-premium__currency">€</span>
                </p>
                <h3 className="pricing-premium__title">{titleFor(plan.title)}</h3>
                <ul className="pricing-premium__features">
                  {plan.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a
                  href={phoneHref}
                  className={`pricing-premium__cta${plan.featured ? " pricing-premium__cta--featured" : ""}`}
                >
                  <PhoneIcon /> Jetzt anfragen
                </a>
              </article>
            ))}
          </div>
          <p className="pricing-premium__disclaimer">
            * Alle Preise inkl. MwSt. Endpreis wird vor Arbeitsbeginn vereinbart – garantiert keine
            Überraschungen. {SITE.travelFeeNote}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="section pricing-section" style={{ background: "var(--gray-50)" }} id="preise">
      <div className="container">
        <div className="text-center mb-12">
          <p className="section-label">Faire Preise</p>
          <h2 className="section-title mb-4">Faire Festpreise – ohne versteckte Kosten</h2>
          <p className="section-subtitle mx-auto">
            Bei uns wissen Sie vorher, was es kostet. {SITE.travelFeeShort} – bei Beauftragung
            verrechnet. Transparente Festpreise vor Arbeitsbeginn.
          </p>
        </div>

        <div className="pricing__grid">
          {PLANS.map((plan, i) => (
            <div
              key={plan.title}
              className={`pricing-card rk-reveal${plan.featured ? " pricing-card--featured" : ""}`}
              style={{ transitionDelay: PRICING_DELAYS[i] }}
            >
              {plan.featured && (
                <div className="pricing-card__badge">
                  <span>Am beliebtesten</span>
                </div>
              )}
              <div className="pricing-card__icon-box">
                <PricingCardIcon index={i} />
              </div>
              <div className="pricing-card__price">
                <span className="pricing-card__from">ab</span>
                <span className="pricing-card__num">{plan.price}€</span>
              </div>
              <h3 className="pricing-card__title">{titleFor(plan.title)}</h3>
              <ul className="pricing-card__bullets">
                {plan.features.map((f) => (
                  <li key={f} className="pricing-card__bullet">
                    <span className="pricing-card__check">
                      <CheckIcon />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={phoneHref}
                className={`pricing-card__cta${plan.featured ? " pricing-card__cta--featured" : ""}`}
              >
                <PhoneIcon /> Jetzt anfragen
              </a>
            </div>
          ))}
        </div>

        <p className="pricing__disclaimer">
          * Alle Preise inkl. MwSt. Endpreis wird vor Arbeitsbeginn vereinbart – garantiert
          keine Überraschungen. {SITE.travelFeeNote}
        </p>
      </div>
    </section>
  );
}
