import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/data/services";
import { SITE } from "@/lib/constants";
import { CheckIcon } from "@/components/icons";
import { NotdienstBanner } from "@/components/sections/NotdienstBanner";

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

        <NotdienstBanner />

        <div className="services__grid">
          {SERVICES.map((service, index) => (
            <Link
              key={service.id}
              href={service.href}
              className="card service-card rk-reveal"
              style={{ transitionDelay: `${(index % 6) * 0.07}s` }}
            >
              <div className="service-card__img">
                <Image
                  src={service.image}
                  alt={`${service.title} – ${SITE.name} Berlin`}
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
        </div>
      </div>
    </section>
  );
}
