import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/data/services";
import { SITE } from "@/lib/constants";
import { CheckIcon } from "@/components/icons";

const SERVICE_DELAYS = ["0s", "0.07s", "0.14s", "0.21s", "0.28s", "0.35s", "0.07s", "0.14s"] as const;

type ServicesProps = {
  cityLabel?: string;
};

export function Services({ cityLabel }: ServicesProps = {}) {
  return (
    <section className="section" style={{ background: "var(--gray-50)" }} id="leistungen">
      <div className="container">
        <div className="text-center mb-12">
          <p className="section-label">Leistungen</p>
          <h2 className="section-title mb-4">
            {cityLabel ? `Alle Leistungen in ${cityLabel}` : "Alle Leistungen im Überblick"}
          </h2>
          <p className="section-subtitle mx-auto">
            Rohrreinigung, Kamera-Inspektion, Rohrreparatur, Sanitärarbeiten und mehr – das
            komplette Leistungsspektrum für Berlin und Umgebung.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map((service, index) => (
            <Link
              key={service.id}
              href={service.href}
              className="card service-card rk-reveal"
              style={{ transitionDelay: SERVICE_DELAYS[index] }}
            >
              <div className="service-card__img">
                <Image
                  src={service.image}
                  alt={`${service.title} – Rohrretter24 Fachbetrieb`}
                  width={400}
                  height={200}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                {service.bestseller && (
                  <span className="service-card__badge-overlay">Bestseller</span>
                )}
              </div>
              <div className="service-card__body">
                <h3 className="service-card__title">
                  {cityLabel ? `${service.title} ${cityLabel}` : service.title}
                </h3>
                <p className="service-card__desc">{service.description}</p>
                <ul className="service-card__bullets">
                  {service.tags.map((tag) => (
                    <li key={tag} className="service-card__bullet">
                      <span className="bullet-check">
                        <CheckIcon />
                      </span>
                      {tag}
                    </li>
                  ))}
                </ul>
                <span className="service-card__link">Mehr erfahren →</span>
              </div>
            </Link>
          ))}

          <a
            href={SITE.phoneHref}
            className="card service-card service-card--dark rk-reveal"
            style={{ transitionDelay: "0.21s" }}
          >
            <div className="service-card__body">
              <div className="service-icon-box">📞</div>
              <div>
                <p className="service-card__label">Rund um die Uhr</p>
                <h3 className="service-card__title">24h Notdienst</h3>
                <p className="service-card__desc">
                  Soforthilfe bei Verstopfungen, Rohrbruch und Sanitär-Notfällen – rund um die Uhr
                  in Berlin und Umgebung.
                </p>
              </div>
              <ul className="service-card__bullets">
                {[
                  "Kostenlose Vor-Ort-Beratung",
                  "Schriftlicher Festpreis",
                  "30–60 Min. Reaktionszeit",
                  "Festpreisgarantie",
                ].map((item) => (
                  <li key={item} className="service-card__bullet">
                    <span className="bullet-check">
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <span className="service-card__link">Jetzt anrufen →</span>
              <p className="service-card__phone">{SITE.phone}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
