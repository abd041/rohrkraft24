import { SITE } from "@/lib/constants";
import type { CityPagePhone } from "@/lib/city-pages";
import { PhoneIcon } from "@/components/icons";

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
    <div className="notdienst-premium">
      <div className="notdienst-premium__copy">
        <p className="notdienst-premium__label">Rund um die Uhr</p>
        <h3 className="notdienst-premium__title">24h Notdienst</h3>
        <p className="notdienst-premium__desc">
          Für alle Leistungen – erreichbar bei Verstopfungen, Rohrbruch und Sanitär-Notfällen in
          Berlin und Umgebung.
        </p>
        <ul className="notdienst-premium__list">
          {NOTDienst_BULLETS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <a href={phoneHref} className="btn btn-primary notdienst-premium__cta">
        <PhoneIcon /> {phoneDisplay}
      </a>
    </div>
  );
}
