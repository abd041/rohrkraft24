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
      "Keine Anfahrtskosten",
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
    ],
  },
];

type PricingProps = {
  cityLabel?: string;
  phone?: CityPagePhone;
};

export function Pricing({ cityLabel, phone }: PricingProps = {}) {
  const phoneHref = phone?.href ?? SITE.phoneHref;
  return (
    <section className="section pricing-section" style={{ background: "var(--gray-50)" }} id="preise">
      <div className="container">
        <div className="text-center mb-12">
          <p className="section-label">Faire Preise</p>
          <h2 className="section-title mb-4">Faire Festpreise – ohne versteckte Kosten</h2>
          <p className="section-subtitle mx-auto">
            Bei uns wissen Sie vorher, was es kostet. Keine Anfahrtskosten, keine
            Wochenendzuschläge.
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
                <div className="pricing-card__badge">Am beliebtesten</div>
              )}
              <div className="pricing-card__icon-box">
                <PricingCardIcon index={i} />
              </div>
              <div className="pricing-card__price">
                <span className="pricing-card__from">ab</span>
                <span className="pricing-card__num">{plan.price}€</span>
              </div>
              <h3 className="pricing-card__title">
                {cityLabel ? `${plan.title} ${cityLabel}` : plan.title}
              </h3>
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
          keine Überraschungen.
        </p>
      </div>
    </section>
  );
}
