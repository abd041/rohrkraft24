"use client";

import { SITE } from "@/lib/constants";
import type { CityPagePhone } from "@/lib/city-pages";
import { PhoneIcon } from "@/components/icons";
import { useModal } from "@/components/providers/ModalProvider";

type MiniCTAProps = {
  phone?: CityPagePhone;
  variant?: "default" | "premium";
};

export function MiniCTA({ phone, variant = "default" }: MiniCTAProps = {}) {
  const { openModal } = useModal();
  const phoneHref = phone?.href ?? SITE.phoneHref;
  const phoneDisplay = phone?.display ?? SITE.phone;

  if (variant === "premium") {
    return (
      <section className="mini-cta-premium">
        <div className="container mini-cta-premium__inner">
          <div className="mini-cta-premium__copy">
            <p className="mini-cta-premium__label">Schnelle Hilfe</p>
            <h2 className="mini-cta-premium__title">
              Jetzt anrufen – wir sind in {SITE.reactionTime} bei Ihnen
            </h2>
          </div>
          <div className="mini-cta-premium__actions">
            <a href={phoneHref} className="btn btn-primary mini-cta-premium__primary">
              <PhoneIcon /> {phoneDisplay}
            </a>
            <button
              type="button"
              className="btn btn-outline mini-cta-premium__secondary"
              onClick={() => openModal("callback")}
            >
              Rückruf anfordern
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="mini-cta">
      <div className="container mini-cta__inner">
        <div className="mini-cta__text">
          <span className="mini-cta__headline">
            Jetzt anrufen – wir sind in {SITE.reactionTime} bei Ihnen!
          </span>
        </div>
        <div className="mini-cta__actions">
          <a href={phoneHref} className="mini-cta__btn mini-cta__btn--primary">
            <PhoneIcon /> {phoneDisplay}
          </a>
          <button
            type="button"
            className="mini-cta__btn mini-cta__btn--outline"
            onClick={() => openModal("callback")}
          >
            Rückruf anfordern
          </button>
        </div>
      </div>
    </div>
  );
}
