import Image from "next/image";
import { TESTIMONIALS } from "@/data/testimonials";
import { StarsRow } from "@/components/icons";

type TestimonialsProps = {
  variant?: "default" | "premium";
};

export function Testimonials({ variant = "default" }: TestimonialsProps) {
  if (variant === "premium") {
    const [featured, ...rest] = TESTIMONIALS;

    return (
      <section className="reviews-premium">
        <header className="reviews-premium__intro">
          <div className="container">
            <div className="reviews-premium__intro-inner">
              <p className="reviews-premium__label">Kundenstimmen</p>
              <h2 className="reviews-premium__heading">
                Was unsere
                <br />
                Kunden sagen
              </h2>
              <p className="reviews-premium__count">
                Erfahrungen aus Einsätzen in Berlin und Umgebung – ausgewählte Stimmen unserer Kunden.
              </p>
            </div>
          </div>
        </header>

        <div className="container reviews-premium__body">
          <article className="reviews-premium__featured">
            <span className="reviews-premium__quote" aria-hidden>
              “
            </span>
            <p className="reviews-premium__featured-text">{featured.text}</p>
            <div className="reviews-premium__author">
              <div className="reviews-premium__avatar">
                <Image src={featured.avatar} alt="" width={56} height={56} />
              </div>
              <div>
                <p className="reviews-premium__name">{featured.name}</p>
                <p className="reviews-premium__meta">
                  {featured.city} · {featured.service}
                </p>
              </div>
            </div>
          </article>

          <div className="reviews-premium__grid">
            {rest.map((t, index) => (
              <article
                key={t.name}
                className="reviews-premium__item"
                style={{ animationDelay: `${0.1 + index * 0.06}s` }}
              >
                <div className="reviews-premium__item-stars" aria-hidden>
                  <StarsRow />
                </div>
                <p className="reviews-premium__item-text">{t.text}</p>
                <div className="reviews-premium__author reviews-premium__author--compact">
                  <div className="reviews-premium__avatar reviews-premium__avatar--sm">
                    <Image src={t.avatar} alt="" width={40} height={40} />
                  </div>
                  <div>
                    <p className="reviews-premium__name">{t.name}</p>
                    <p className="reviews-premium__meta">
                      {t.city} · {t.service}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section" style={{ background: "white" }}>
      <div className="container">
        <div className="text-center mb-12">
          <p className="section-label">Kundenstimmen</p>
          <h2 className="section-title mb-4">Was unsere Kunden sagen</h2>
          <p className="section-subtitle mx-auto">
            Erfahrungen aus Einsätzen in Berlin und Umgebung.
          </p>
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
