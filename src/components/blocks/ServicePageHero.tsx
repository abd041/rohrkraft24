"use client";

import type { ServicePageHeroData } from "@/data/service-pages/types";
import { SITE } from "@/lib/constants";
import { CalendarIcon, CheckIcon, PhoneIcon } from "@/components/icons";
import { useModal } from "@/components/providers/ModalProvider";

const STATS = [
  { num: "500+", label: "Einsätze" },
  { num: "10+", label: "Jahre Erfahrung" },
  { num: "98%", label: "Kundenzufriedenheit" },
  { num: "24/7", label: "Erreichbar" },
];

const TRUST = ["Zertifizierter Betrieb", "Meisterbetrieb", "Faire Festpreise"];

type ServicePageHeroProps = {
  hero: ServicePageHeroData;
};

export function ServicePageHero({ hero }: ServicePageHeroProps) {
  const { openModal } = useModal();

  return (
    <section className="hero">
      <div className="hero__inner container">
        <div className="hero__grid">
          <div className="hero__content">
            <h1 className="hero__title">
              {hero.titleLine1}
              <br />
              {hero.titleLine2}
            </h1>
            <p className="hero__tagline">{hero.tagline}</p>
            <p className="hero__body">{hero.body}</p>

            <div className="hero__trust">
              {TRUST.map((item) => (
                <span key={item} className="hero__trust-item">
                  <CheckIcon /> {item}
                </span>
              ))}
            </div>

            <div className="hero__ctas">
              <a href={SITE.phoneHref} className="btn btn-primary pulse">
                <PhoneIcon /> Jetzt kostenlos anfragen
              </a>
              <button type="button" className="btn btn-outline-dark" data-rueckruf onClick={() => openModal("callback")}>
                <CalendarIcon />
                Termin vereinbaren
              </button>
            </div>

            <div className="hero__stats">
              <div className="hero__stat">
                <span className="hero__stat-num">{STATS[0].num}</span>
                <span className="hero__stat-label">{STATS[0].label}</span>
              </div>
              <div className="hero__stat-divider" />
              <div className="hero__stat">
                <span className="hero__stat-num">{STATS[1].num}</span>
                <span className="hero__stat-label">{STATS[1].label}</span>
              </div>
              <div className="hero__stat-divider" />
              <div className="hero__stat">
                <span className="hero__stat-num">{STATS[2].num}</span>
                <span className="hero__stat-label">{STATS[2].label}</span>
              </div>
              <div className="hero__stat-divider" />
              <div className="hero__stat">
                <span className="hero__stat-num">{STATS[3].num}</span>
                <span className="hero__stat-label">{STATS[3].label}</span>
              </div>
            </div>
          </div>

          <div className="hero__photo">
            <picture>
              <source media="(max-width:600px)" srcSet={hero.image.srcSm} />
              <img
                src={hero.image.src}
                alt={hero.image.alt}
                width={900}
                height={600}
                loading="eager"
                fetchPriority="high"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </picture>
            <div className="hero__avail-badge">
              <span className="hero__dot" />
              Jetzt verfügbar
            </div>
            <div className="hero__stars">
              <div className="stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
              <div>
                <p style={{ fontWeight: 900, fontSize: "0.875rem", color: "var(--navy)", lineHeight: 1 }}>
                  4,9 / 5
                </p>
                <p style={{ fontSize: "0.72rem", color: "var(--gray-600)", marginTop: 2 }}>
                  127 Bewertungen
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
