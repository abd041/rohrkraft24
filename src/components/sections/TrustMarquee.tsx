import { BadgeIcon } from "@/components/icons";

const BADGES = [
  { title: "Handwerkskammer", sub: "Frankfurt · RheinMain", icon: "craft" as const, bg: "#153A6B" },
  { title: "IHK Frankfurt", sub: "Zertifizierter Betrieb", icon: "ihk" as const, bg: "#0f2d52" },
  { title: "4,9", sub: "300+ Bewertungen", icon: "google" as const, googleTitle: true },
  { title: "Zertifizierter", sub: "Rohrreinigungsfachbetrieb", icon: "shield" as const, bg: "#059669" },
  { title: "Das Handwerk", sub: "Die Wirtschaftsmacht", icon: "wrench" as const, bg: "#c0392b" },
  { title: "Festpreis", sub: "100% Preisgarantie", icon: "dollar" as const, bg: "#315D9F" },
  { title: "Seit 2014", sub: "10+ Jahre Erfahrung", icon: "award" as const, bg: "#5AA0D3" },
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
            4,9{" "}
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
      <div className="badges-label">Zertifiziert und anerkannt</div>
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
