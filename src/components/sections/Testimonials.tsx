import { TESTIMONIALS } from "@/data/testimonials";
import { SITE } from "@/lib/constants";
import { GoogleIcon, StarsRow } from "@/components/icons";

export function Testimonials() {
  return (
    <section className="section" style={{ background: "white" }}>
      <div className="container">
        <div className="text-center mb-12">
          <p className="section-label">Kundenstimmen</p>
          <h2 className="section-title mb-4">Was unsere Kunden sagen</h2>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "1rem",
              background: "white",
              border: "1px solid var(--gray-200)",
              borderRadius: "1rem",
              padding: "0.75rem 1.5rem",
              boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
              marginTop: "0.5rem",
            }}
          >
            <div className="stars">
              <StarsRow />
            </div>
            <div style={{ textAlign: "left" }}>
              <p
                style={{
                  fontWeight: 900,
                  fontSize: "1.1rem",
                  color: "var(--navy)",
                  lineHeight: 1,
                }}
              >
                4,9 / 5
              </p>
              <p style={{ fontSize: "0.75rem", color: "var(--gray-600)" }}>
                Über {SITE.reviewCount} Google-Bewertungen
              </p>
            </div>
          </div>
        </div>

        <div className="reviews__grid">
          {TESTIMONIALS.map((t, index) => (
            <div
              key={t.initials}
              className="review-card rk-reveal"
              style={{ transitionDelay: `${(index % 6) * 0.07}s` }}
            >
              <div className="review-card__header">
                <div className="review-avatar" style={{ background: t.avatarColor }}>
                  {t.initials}
                </div>
                <div style={{ flex: 1 }}>
                  <p className="review-card__name">{t.name}</p>
                  <p className="review-card__city">{t.city}</p>
                </div>
                <GoogleIcon size={18} />
              </div>
              <div className="stars" style={{ fontSize: "0.8rem" }}>
                <StarsRow />
              </div>
              <p className="review-card__text">{t.text}</p>
              <div className="review-card__footer">
                <span className="review-tag">{t.service}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
