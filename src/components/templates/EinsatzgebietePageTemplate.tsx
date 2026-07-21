import Link from "next/link";
import regions from "@/data/einsatzgebiete-regions.json";
import { Breadcrumb } from "@/components/blocks/Breadcrumb";
import { CITY_COUNT } from "@/data/cities";
import { SITE } from "@/lib/constants";
import { PhoneIcon } from "@/components/icons";
import { CTABanner } from "@/components/sections/CTABanner";
import { ServiceArea } from "@/components/sections/ServiceArea";

const LEGEND = [
  "Rohrreinigung",
  "TV-Kamera-Inspektion",
  "Rohrreparatur",
  "Leckageortung",
  "Abwasserreinigung",
  "Hebeanlagen-Service",
  "Sanitärarbeiten",
  "Wasserschaden",
  "24h Notdienst",
];

const STATS = [
  { num: String(CITY_COUNT), label: "Städte im Einsatz" },
  { num: "9", label: "Dienstleistungen" },
  { num: "24/7", label: "Notdienst" },
  { num: SITE.reactionTime, label: "Reaktionszeit" },
] as const;

export function EinsatzgebietePageTemplate() {
  return (
    <>
      <Breadcrumb current="Einsatzgebiete" />

      <section className="areas-premium__hero">
        <div className="container">
          <div className="areas-premium__hero-grid">
            <div className="areas-premium__hero-copy">
              <p className="areas-premium__label">Unser Einsatzgebiet</p>
              <h1 className="areas-premium__title">
                Rohrreinigung in
                <br />
                Berlin &amp; Umgebung
              </h1>
              <p className="areas-premium__lede">
                Von Berlin bis Potsdam, von Oranienburg bis Brandenburg – wir sind im Umkreis von
                100&nbsp;km für Sie da. Schnell, fair und rund um die Uhr.
              </p>
              <a href={SITE.phoneHref} className="btn btn-primary areas-premium__cta">
                <PhoneIcon /> {SITE.phone} – Jetzt anrufen
              </a>
            </div>

            <div className="areas-premium__metrics">
              {STATS.map((stat) => (
                <div key={stat.label} className="areas-premium__metric">
                  <span className="areas-premium__metric-num">{stat.num}</span>
                  <span className="areas-premium__metric-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceArea variant="premium" />

      <section className="areas-premium__regions">
        <header className="areas-premium__regions-intro">
          <div className="container">
            <div className="areas-premium__regions-intro-inner">
              <p className="areas-premium__label">Alle Regionen</p>
              <h2 className="areas-premium__regions-title">
                Wir sind in Berlin und
                <br />
                Umgebung für Sie da
              </h2>
              <p className="areas-premium__regions-lede">
                Wählen Sie Ihre Stadt – wir zeigen alle verfügbaren Leistungen und kommen
                schnellstmöglich zu Ihnen.
              </p>
            </div>
          </div>
        </header>

        <div className="container areas-premium__regions-body">
          <div className="areas-premium__legend">
            <span className="areas-premium__legend-label">Leistungen</span>
            <div className="areas-premium__legend-items">
              {LEGEND.map((item) => (
                <span key={item} className="areas-premium__legend-item">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="areas-premium__regions-wrap">
            {regions.map((region) => (
              <div key={region.name} className="areas-premium__region">
                <div className="areas-premium__region-header">
                  <h2>{region.name.replace(/&amp;/g, "&")}</h2>
                  <span className="areas-premium__region-count">{region.count}</span>
                </div>
                <div className="areas-premium__cities">
                  {region.cities.map((city) => (
                    <article
                      key={`${region.name}-${city.name}`}
                      className="areas-premium__city"
                    >
                      <div className="areas-premium__city-top">
                        <h3>{city.name}</h3>
                        <div className="areas-premium__city-meta">
                          <span>{city.plz}</span>
                          <span>{city.distance}</span>
                        </div>
                      </div>
                      <div className="areas-premium__city-links">
                        {city.links.map((link) => (
                          <Link key={link.href} href={link.href} title={link.label}>
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner variant="premium" />
    </>
  );
}
