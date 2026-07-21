"use client";

import { IMAGES, SITE } from "@/lib/constants";
import { CalendarIcon, PhoneIcon } from "@/components/icons";
import { useModal } from "@/components/providers/ModalProvider";

export function Hero() {
  const { openModal } = useModal();

  return (
    <section className="hero hero--premium">
      <div className="hero-premium__media" aria-hidden>
        <picture>
          <source
            media="(max-width:600px)"
            srcSet={`${IMAGES}/rohrretter24-team-berlin-einsatz-sm.webp`}
          />
          <img
            src={`${IMAGES}/rohrretter24-team-berlin-einsatz.webp`}
            alt=""
            width={1600}
            height={900}
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        <div className="hero-premium__veil" />
      </div>

      <div className="hero-premium__stage hero-premium__stage--solo">
        <div className="container hero-premium__content">
          <p className="hero-premium__brand">{SITE.name}</p>
          <h1 className="hero-premium__title">
            Rohr verstopft?
            <br />
            Kein Grund zur Panik.
          </h1>
          <p className="hero-premium__support">
            Wir sind in 30–60 Minuten bei Ihnen – in Berlin, Potsdam, Oranienburg und im
            gesamten Umkreis von 100 km.
          </p>

          <div className="hero-premium__ctas">
            <a href={SITE.phoneHref} className="btn btn-primary hero-premium__cta-primary">
              <PhoneIcon /> {SITE.phone} – Jetzt anrufen
            </a>
            <button
              type="button"
              className="btn btn-outline hero-premium__cta-secondary"
              onClick={() => openModal("callback")}
            >
              <CalendarIcon />
              Termin vereinbaren
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
