import { SITE } from "@/lib/constants";
import type { CityPagePhone } from "@/lib/city-pages";
import { PhoneIcon } from "@/components/icons";
import { Logo } from "@/components/ui/Logo";

type CTABannerProps = {
  phone?: CityPagePhone;
  variant?: "default" | "premium";
};

export function CTABanner({ phone, variant = "default" }: CTABannerProps = {}) {
  const phoneHref = phone?.href ?? SITE.phoneHref;
  const phoneDisplay = phone?.display ?? SITE.phone;

  if (variant === "premium") {
    return (
      <section className="cta-premium">
        <div className="container cta-premium__inner">
          <div className="cta-premium__logo">
            <Logo variant="footer" height={40} href={null} />
          </div>
          <h2 className="cta-premium__title">
            Rohrproblem?
            <br />
            Wir lösen es sofort.
          </h2>
          <p className="cta-premium__sub">
            {SITE.reactionTime} Reaktionszeit · {SITE.travelFeeShort} · Festpreis vor Arbeitsbeginn
          </p>
          <a href={phoneHref} className="btn btn-primary cta-premium__btn">
            <PhoneIcon /> {phoneDisplay} – Jetzt anrufen
          </a>
        </div>
      </section>
    );
  }

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
