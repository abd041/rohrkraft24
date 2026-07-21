import { Fragment } from "react";
import { SITE } from "@/lib/constants";
import { FeatureCardIcon, FeatureStatIcon } from "@/components/icons";

const FEATURES = [
  {
    featured: true,
    title: "Modernstes Equipment",
    desc: "Mit innovativem Spezialwerkzeug lösen wir selbst hartnäckigste Verstopfungen schnell, sauber und ohne Schäden.",
  },
  {
    title: "Erfahrene Monteure",
    desc: "Unsere Techniker arbeiten präzise, effizient und hinterlassen Ihre Räume sauber.",
  },
  {
    title: "24/7 Persönlicher Service",
    desc: "Bei uns sprechen Sie direkt mit einem Experten – keine Warteschleifen, keine Umwege. Rund um die Uhr.",
  },
];

const STATS = [
  { value: SITE.reactionTime, label: "Reaktionszeit" },
  { value: SITE.travelFeeShort, label: SITE.travelFeeNote },
  { value: "Festpreis", label: "Vor Arbeitsbeginn vereinbart" },
] as const;

type FeaturesProps = {
  variant?: "default" | "premium";
};

export function Features({ variant = "default" }: FeaturesProps) {
  if (variant === "premium") {
    return (
      <section className="features-premium">
        <div className="container">
          <header className="features-premium__intro">
            <p className="features-premium__label">Warum RohrRetter24</p>
            <h2 className="features-premium__heading">
              Schnelle Hilfe.
              <br />
              Faire Preise. Saubere Arbeit.
            </h2>
            <p className="features-premium__lede">
              Drei Gründe, warum Kunden in Berlin und Umgebung uns bei Rohrproblemen anrufen.
            </p>
          </header>

          <ol className="features-premium__list">
            {FEATURES.map((feature, i) => (
              <li key={feature.title} className="features-premium__item">
                <span className="features-premium__index" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="features-premium__copy">
                  <h3 className="features-premium__title">{feature.title}</h3>
                  <p className="features-premium__desc">{feature.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="features-premium__metrics">
            {STATS.map((stat) => (
              <div key={stat.label} className="features-premium__metric">
                <p className="features-premium__metric-value">{stat.value}</p>
                <p className="features-premium__metric-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="features-section">
      <div className="container">
        <div className="features__grid">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className={`features__card${f.featured ? " features__card--featured" : ""}`}
            >
              <div className="features__icon-box">
                <FeatureCardIcon index={i} />
              </div>
              <p className={`features__title${f.featured ? " features__title--featured" : ""}`}>
                {f.title}
              </p>
              <p className="features__desc">{f.desc}</p>
              {f.featured && <span className="features__accent-line" />}
            </div>
          ))}
        </div>

        <div className="features__stats">
          {STATS.map((stat, i) => (
            <Fragment key={stat.label}>
              {i > 0 && <div className="features__stat-divider" />}
              <div className="features__stat">
                <div className="features__stat-icon">
                  <FeatureStatIcon index={i} />
                </div>
                <div>
                  <p className="features__stat-value">{stat.value}</p>
                  <p className="features__stat-label">{stat.label}</p>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
