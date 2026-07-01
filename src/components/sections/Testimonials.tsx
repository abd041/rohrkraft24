import Image from "next/image";
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
          <div className="reviews-summary">
            <div className="stars">
              <StarsRow />
            </div>
            <div>
              <p className="reviews-summary__score">
                {SITE.rating.toString().replace(".", ",")} / 5
              </p>
              <p className="reviews-summary__count">
                Basierend auf {SITE.reviewCount}+ Bewertungen in Berlin & Umgebung
              </p>
            </div>
          </div>
        </div>

        <div className="reviews__grid">
          {TESTIMONIALS.map((t, index) => (
            <div
              key={t.name}
              className="review-card rk-reveal"
              style={{ transitionDelay: `${(index % 6) * 0.07}s` }}
            >
              <div className="review-card__header">
                <div className="review-avatar review-avatar--photo">
                  <Image src={t.avatar} alt={t.name} width={48} height={48} />
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
                <span className="review-card__date">{t.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
