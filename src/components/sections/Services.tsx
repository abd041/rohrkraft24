import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/data/services";
import { SITE } from "@/lib/constants";
import { CheckIcon } from "@/components/icons";
import { NotdienstBanner } from "@/components/sections/NotdienstBanner";

type ServicesProps = {
  cityLabel?: string;
  variant?: "default" | "premium";
};

export function Services({ cityLabel, variant = "default" }: ServicesProps = {}) {
  const titleFor = (title: string) => (cityLabel ? `${title} ${cityLabel}` : title);

  if (variant === "premium") {
    const featured = SERVICES.find((s) => s.bestseller) ?? SERVICES[0];
    const rest = SERVICES.filter((s) => s.id !== featured.id);

    return (
      <section className="services-premium" id="leistungen">
        <header className="services-premium__intro">
          <div className="container">
            <div className="services-premium__intro-inner">
              <p className="services-premium__label">Leistungen</p>
              <h2 className="services-premium__heading">
                {cityLabel ? (
                  <>Alle Leistungen in {cityLabel}</>
                ) : (
                  <>
                    Alles aus
                    <br />
                    einer Hand
                  </>
                )}
              </h2>
              <p className="services-premium__lede">
                Rohrreinigung, Kamera-Inspektion, Reparatur und Notfallhilfe – das komplette
                Leistungsspektrum für Berlin und Umgebung.
              </p>
            </div>
          </div>
        </header>

        <div className="container services-premium__body">
          <NotdienstBanner />

          <Link href={featured.href} className="services-premium__featured">
            <div className="services-premium__featured-media">
              <Image
                src={featured.image}
                alt={`${featured.title} – ${SITE.name} Berlin`}
                width={900}
                height={560}
                sizes="(max-width: 900px) 100vw, 55vw"
              />
            </div>
            <div className="services-premium__featured-body">
              <span className="services-premium__kicker">Bestseller</span>
              <h3 className="services-premium__featured-title">{titleFor(featured.title)}</h3>
              <p className="services-premium__featured-desc">{featured.description}</p>
              <ul className="services-premium__tags">
                {featured.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <span className="services-premium__more">Mehr erfahren →</span>
            </div>
          </Link>

          <div className="services-premium__grid">
            {rest.map((service, index) => (
              <Link
                key={service.id}
                href={service.href}
                className="services-premium__tile"
                style={{ animationDelay: `${0.08 + index * 0.06}s` }}
              >
                <div className="services-premium__tile-media">
                  <Image
                    src={service.image}
                    alt={`${service.title} – ${SITE.name}`}
                    width={640}
                    height={420}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="services-premium__tile-body">
                  <h3 className="services-premium__tile-title">{titleFor(service.title)}</h3>
                  <p className="services-premium__tile-desc">{service.description}</p>
                  <span className="services-premium__tile-more">
                    Mehr erfahren
                    <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

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
                  <span className="service-card__badge-overlay">
                    <span>Bestseller</span>
                  </span>
                )}
              </div>
              <div className="service-card__body">
                <h3 className="service-card__title">{titleFor(service.title)}</h3>
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
