import { SITE } from "@/lib/constants";
import type { CityPagePhone } from "@/lib/city-pages";
import { PhoneIcon } from "@/components/icons";

type MiniCTAProps = {
  phone?: CityPagePhone;
};

export function MiniCTA({ phone }: MiniCTAProps = {}) {
  const phoneHref = phone?.href ?? SITE.phoneHref;
  const phoneDisplay = phone?.display ?? SITE.phone;
  return (
    <div className="mini-cta">
      <div className="container mini-cta__inner">
        <div className="mini-cta__text">
          <span className="mini-cta__headline">
            Jetzt anrufen – wir melden uns innerhalb von 15 Minuten!
          </span>
        </div>
        <div className="mini-cta__actions">
          <a href={phoneHref} className="mini-cta__btn mini-cta__btn--primary">
            <PhoneIcon /> {phoneDisplay}
          </a>
          <a href={phoneHref} className="mini-cta__btn mini-cta__btn--outline">
            Rückruf anfordern
          </a>
        </div>
      </div>
    </div>
  );
}
