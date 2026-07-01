import { BadgeIcon } from "@/components/icons";
import { SITE } from "@/lib/constants";

const BADGES = [
  { title: "Google", sub: `${SITE.rating} · ${SITE.reviewCount}+ Bewertungen`, icon: "google" as const, googleTitle: true },
  { title: "Festpreis", sub: "100% Preisgarantie", icon: "dollar" as const, bg: "#2171D8" },
  { title: "24/7", sub: "Notdienst Berlin", icon: "shield" as const, bg: "#002854" },
  { title: "Seit 2014", sub: `${SITE.yearsExperience} Jahre Erfahrung`, icon: "award" as const, bg: "#2171D8" },
  { title: SITE.reactionTime, sub: "Reaktionszeit", icon: "wrench" as const, bg: "#001d3d" },
  { title: "Berlin", sub: "100 km Einsatzradius", icon: "craft" as const, bg: "#1a5aad" },
];

function BadgeItem({ badge, index }: { badge: (typeof BADGES)[number]; index: number }) {
  const isGoogle = badge.icon === "google";

  return (
    <div
      className="badge-item rk-reveal"
      style={{ transitionDelay: `${(index % 6) * 0.07}s` }}
    >
      <div
        className="badge-item__icon"
        style={{
          background: isGoogle ? "white" : badge.bg,
          border: isGoogle ? "1px solid #e2e8f0" : undefined,
        }}
      >
        <BadgeIcon type={badge.icon} />
      </div>
      <div>
        {badge.googleTitle ? (
          <p
            className="badge-item__title"
            style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}
          >
            {SITE.rating.toString().replace(".", ",")}{" "}
            <span style={{ color: "#FBBF24", fontSize: "0.75rem" }}>★★★★★</span>
          </p>
        ) : (
          <p className="badge-item__title">{badge.title}</p>
        )}
        <p className="badge-item__sub">{badge.sub}</p>
      </div>
    </div>
  );
}

export function TrustMarquee() {
  const items = [...BADGES, ...BADGES];

  return (
    <section className="badges-section">
      <div className="badges-label">Ihr Partner für Rohrreinigung in Berlin</div>
      <div className="badges-outer">
        <div className="badges-track">
          {items.map((badge, i) => (
            <BadgeItem key={i} badge={badge} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
