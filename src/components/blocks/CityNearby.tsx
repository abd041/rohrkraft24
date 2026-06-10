import Link from "next/link";
import type { CityNearbyLink } from "@/lib/city-pages";

type CityNearbyProps = {
  title: string;
  intro: string;
  links: CityNearbyLink[];
};

export function CityNearby({ title, intro, links }: CityNearbyProps) {
  if (links.length === 0) return null;

  return (
    <section className="section" style={{ background: "white" }}>
      <div className="container">
        <p className="section-label">Rohrreinigung in der Region</p>
        <h2 className="section-title mb-4">{title}</h2>
        <p style={{ color: "var(--gray-700)", lineHeight: 1.7, marginBottom: "1.5rem", maxWidth: "70ch" }}>{intro}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "var(--gray-50)",
                border: "1px solid var(--gray-200)",
                borderRadius: "9999px",
                padding: "0.5rem 1rem",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "var(--navy)",
                textDecoration: "none",
              }}
            >
              {link.label}
              {link.distance ? (
                <span style={{ color: "var(--gray-500)", fontWeight: 500, fontSize: "0.8rem" }}>{link.distance}</span>
              ) : null}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
