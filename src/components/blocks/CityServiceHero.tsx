"use client";

import type { CityPageHero, CityPagePhone } from "@/lib/city-pages";
import { IMAGES as IMG, SITE } from "@/lib/constants";
import { CalendarIcon, PhoneIcon } from "@/components/icons";
import { useModal } from "@/components/providers/ModalProvider";

type CityServiceHeroProps = {
  hero: CityPageHero;
  phone: CityPagePhone;
};

export function CityServiceHero({ hero, phone }: CityServiceHeroProps) {
  const { openModal } = useModal();

  return (
    <section className="hero hero--premium">
      <div className="hero-premium__media" aria-hidden>
        <picture>
          <source media="(max-width:600px)" srcSet={`${IMG}/${hero.imageSm}`} />
          <img
            src={`${IMG}/${hero.image}`}
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
            {hero.titleLine2 ? (
              <>
                <br />
                {hero.titleLine2}
              </>
            ) : null}
          </h1>
          <p className="hero-premium__support">{hero.tagline}</p>
          <p className="hero-premium__body">{hero.body}</p>

          <div className="hero-premium__ctas">
            <a href={phone.href} className="btn btn-primary hero-premium__cta-primary">
              <PhoneIcon /> {phone.display} – Jetzt anrufen
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
