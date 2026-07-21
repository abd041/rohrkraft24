import { BadgeIcon } from "@/components/icons";
import { SITE } from "@/lib/constants";

const BADGES = [
  { title: "Festpreis", sub: "100% Preisgarantie", icon: "dollar" as const, bg: "#2171D8" },
  { title: "24/7", sub: "Notdienst Berlin", icon: "shield" as const, bg: "#002854" },
  { title: "Seit 2014", sub: `${SITE.yearsExperience} Jahre Erfahrung`, icon: "award" as const, bg: "#2171D8" },
  { title: SITE.reactionTime, sub: "Reaktionszeit", icon: "wrench" as const, bg: "#001d3d" },
  { title: "Berlin", sub: "100 km Einsatzradius", icon: "craft" as const, bg: "#1a5aad" },
  { title: "Schriftlich", sub: "Festpreis vor Start", icon: "dollar" as const, bg: "#002854" },
];

const PREMIUM_ITEMS = [
  { primary: "Festpreis", secondary: "schriftlich vor Arbeitsbeginn" },
  { primary: "24/7", secondary: "Notdienst Berlin & Umgebung" },
  { primary: "Seit 2014", secondary: `${SITE.yearsExperience} Jahre Erfahrung` },
  { primary: SITE.reactionTime, secondary: "Reaktionszeit vor Ort" },
  { primary: "100 km", secondary: "Einsatzradius Berlin" },
  { primary: "49 €", secondary: "Anfahrtspauschale" },
] as const;

type TrustMarqueeProps = {
  variant?: "default" | "premium";
};

function BadgeItem({ badge }: { badge: (typeof BADGES)[number] }) {
  return (
    <div className="badge-item">
      <div className="badge-item__icon" style={{ background: badge.bg }}>
        <BadgeIcon type={badge.icon} />
      </div>
      <div>
        <p className="badge-item__title">{badge.title}</p>
        <p className="badge-item__sub">{badge.sub}</p>
      </div>
    </div>
  );
}

export function TrustMarquee({ variant = "default" }: TrustMarqueeProps) {
  if (variant === "premium") {
    const loop = [...PREMIUM_ITEMS, ...PREMIUM_ITEMS];

    return (
      <section className="trust-premium" aria-label="Vertrauenssignale">
        <div className="trust-premium__label">Ihr Partner für Rohrreinigung in Berlin</div>
        <div className="trust-premium__rail">
          <div className="trust-premium__track">
            {loop.map((item, i) => (
              <div key={`${item.primary}-${i}`} className="trust-premium__slot">
                <div className="trust-premium__item">
                  <span className="trust-premium__primary">{item.primary}</span>
                  <span className="trust-premium__secondary">{item.secondary}</span>
                </div>
                <span className="trust-premium__rule" aria-hidden />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const items = [...BADGES, ...BADGES];

  return (
    <section className="badges-section">
      <div className="badges-track">
        {items.map((badge, i) => (
          <BadgeItem key={`${badge.title}-${i}`} badge={badge} />
        ))}
      </div>
    </section>
  );
}
