"use client";

import type { ServicePageHeroData } from "@/data/service-pages/types";
import { SITE } from "@/lib/constants";
import { CalendarIcon, PhoneIcon } from "@/components/icons";
import { useModal } from "@/components/providers/ModalProvider";

type ServicePageHeroProps = {
  hero: ServicePageHeroData;
};

export function ServicePageHero({ hero }: ServicePageHeroProps) {
  const { openModal } = useModal();

  return (
    <section className="hero hero--premium">
      <div className="hero-premium__media" aria-hidden>
        <picture>
          <source media="(max-width:600px)" srcSet={hero.image.srcSm} />
          <img
            src={hero.image.src}
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
            {hero.titleLine1}
            <br />
            {hero.titleLine2}
          </h1>
          <p className="hero-premium__support">{hero.tagline}</p>
          <p className="hero-premium__body">{hero.body}</p>

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
