import { SITE } from "@/lib/constants";
import type { CityPagePhone } from "@/lib/city-pages";
import { CheckIcon, PhoneIcon } from "@/components/icons";

const NOTDienst_BULLETS = [
  "Für alle Leistungen erreichbar",
  "Schriftlicher Festpreis",
  `${SITE.reactionTime} Reaktionszeit`,
  SITE.travelFeeShort,
] as const;

type NotdienstBannerProps = {
  phone?: CityPagePhone;
};

export function NotdienstBanner({ phone }: NotdienstBannerProps = {}) {
  const phoneHref = phone?.href ?? SITE.phoneHref;
  const phoneDisplay = phone?.display ?? SITE.phone;

  return (
    <div className="notdienst-banner rk-reveal">
      <div className="notdienst-banner__content">
        <div className="notdienst-banner__icon" aria-hidden>
          <PhoneIcon />
        </div>
        <div>
          <p className="notdienst-banner__label">Rund um die Uhr</p>
          <h3 className="notdienst-banner__title">24h Notdienst</h3>
          <p className="notdienst-banner__desc">
            Für alle unsere Leistungen – rund um die Uhr erreichbar bei Verstopfungen, Rohrbruch
            und Sanitär-Notfällen in Berlin und Umgebung.
          </p>
        </div>
      </div>
      <ul className="notdienst-banner__bullets">
        {NOTDienst_BULLETS.map((item) => (
          <li key={item}>
            <span className="bullet-check">
              <CheckIcon />
            </span>
            {item}
          </li>
        ))}
      </ul>
      <a href={phoneHref} className="notdienst-banner__cta">
        <PhoneIcon /> {phoneDisplay} – Jetzt anrufen
      </a>
    </div>
  );
}
