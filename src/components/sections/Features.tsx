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

export function Features() {
  const stats = [
    { value: SITE.reactionTime, label: "Reaktionszeit" },
    { value: SITE.travelFeeShort, label: SITE.travelFeeNote },
    { value: "Festpreis", label: "Vor Arbeitsbeginn vereinbart" },
  ] as const;

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
          {stats.map((stat, i) => (
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
