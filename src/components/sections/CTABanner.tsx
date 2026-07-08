import { SITE } from "@/lib/constants";
import type { CityPagePhone } from "@/lib/city-pages";
import { PhoneIcon } from "@/components/icons";
import { Logo } from "@/components/ui/Logo";

type CTABannerProps = {
  phone?: CityPagePhone;
};

export function CTABanner({ phone }: CTABannerProps = {}) {
  const phoneHref = phone?.href ?? SITE.phoneHref;
  const phoneDisplay = phone?.display ?? SITE.phone;
  return (
    <section className="cta-section">
      <div className="cta-section__dots" />
      <div className="container relative text-center">
        <div className="cta-section__logo mb-4">
          <Logo variant="footer" height={38} href={null} />
        </div>
        <h2 className="cta-section__title mb-4">Rohrproblem? Wir lösen es sofort.</h2>
        <p className="cta-section__sub mb-8 mx-auto">
          {SITE.reactionTime} Reaktionszeit · {SITE.travelFeeShort} · Festpreis vor Arbeitsbeginn
        </p>
        <a href={phoneHref} className="btn-cta-white">
          <PhoneIcon /> {phoneDisplay} – Jetzt anrufen
        </a>
      </div>
    </section>
  );
}
