import Link from "next/link";
import regions from "@/data/einsatzgebiete-regions.json";
import { Breadcrumb } from "@/components/blocks/Breadcrumb";
import { SITE } from "@/lib/constants";
import { PhoneIcon } from "@/components/icons";
import { CTABanner } from "@/components/sections/CTABanner";

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

export function EinsatzgebietePageTemplate() {
  return (
    <>
      <Breadcrumb current="Einsatzgebiete" />

      <section className="ez-hero">
        <div className="container">
          <div className="ez-hero__inner">
            <div className="ez-hero__text">
              <p className="section-label">Unser Einsatzgebiet</p>
              <h1 className="ez-hero__title">
                Rohrreinigung in <span className="text-orange">Berlin & Umgebung</span>
              </h1>
              <p className="ez-hero__sub">
                Von Berlin bis Potsdam, von Oranienburg bis Brandenburg – wir sind im Umkreis von 100 km für Sie da.
                Schnell, fair und rund um die Uhr.
              </p>
              <a href={SITE.phoneHref} className="btn btn-primary" style={{ display: "inline-flex", gap: "0.5rem", alignItems: "center" }}>
                <PhoneIcon /> Jetzt anrufen
              </a>
            </div>
            <div className="ez-hero__stats">
              <div className="ez-stat">
                <span className="ez-stat__num">85</span>
                <span className="ez-stat__label">Städte im Einsatz</span>
              </div>
              <div className="ez-stat">
                <span className="ez-stat__num">9</span>
                <span className="ez-stat__label">Dienstleistungen</span>
              </div>
              <div className="ez-stat">
                <span className="ez-stat__num">24/7</span>
                <span className="ez-stat__label">Notdienst</span>
              </div>
              <div className="ez-stat">
                <span className="ez-stat__num">60 Min.</span>
                <span className="ez-stat__label">Reaktionszeit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="eg-regions-section section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <div className="ez-intro">
            <p className="section-label">Alle Regionen</p>
            <h2 className="section-title">Wir sind in Berlin und Umgebung für Sie da</h2>
            <p className="section-subtitle mx-auto">
              Klicken Sie auf eine Stadt – wir zeigen Ihnen alle verfügbaren Leistungen und kommen schnellstmöglich zu
              Ihnen.
            </p>
          </div>

          <div className="eg-service-legend">
            <span className="eg-legend-label">Unsere Dienstleistungen:</span>
            {LEGEND.map((item) => (
              <span key={item} className="eg-legend-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>{" "}
                {item}
              </span>
            ))}
          </div>

          <div className="eg-regions-wrap">
            {regions.map((region) => (
              <div key={region.name} className="eg-region-block">
                <div className="eg-region-header">
                  <h2>{region.name.replace(/&amp;/g, "&")}</h2>
                  <span className="eg-region-count">{region.count}</span>
                </div>
                <div className="eg-cities-grid">
                  {region.cities.map((city) => (
                    <div key={`${region.name}-${city.name}`} className="eg-city-card">
                      <div className="eg-city-top">
                        <h3>{city.name}</h3>
                        <div className="eg-city-meta">
                          <span className="eg-plz">{city.plz}</span>
                          <span className="eg-distance">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                              <circle cx="12" cy="10" r="3" />
                            </svg>{" "}
                            {city.distance}
                          </span>
                        </div>
                      </div>
                      <div className="eg-city-links">
                        {city.links.map((link) => (
                          <Link key={link.href} href={link.href} title={link.label}>
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
