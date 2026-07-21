"use client";

import { useState } from "react";
import Image from "next/image";
import { FAQ_ITEMS } from "@/data/faq";
import { IMAGES, SITE } from "@/lib/constants";
import { PhoneIcon } from "@/components/icons";

type FAQProps = {
  variant?: "default" | "premium";
};

export function FAQ({ variant = "default" }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (variant === "premium") {
    return (
      <section className="faq-premium">
        <header className="faq-premium__intro">
          <div className="container">
            <div className="faq-premium__intro-inner">
              <p className="faq-premium__label">FAQ</p>
              <h2 className="faq-premium__heading">
                Häufige Fragen rund
                <br />
                um die Rohrreinigung
              </h2>
            </div>
          </div>
        </header>

        <div className="container faq-premium__body">
          <div className="faq-premium__layout">
            <div className="faq-premium__list">
              {FAQ_ITEMS.map((item, index) => (
                <div
                  key={item.question}
                  className={`faq__item faq-premium__item${openIndex === index ? " open" : ""}`}
                >
                  <button
                    type="button"
                    className="faq__question faq-premium__question"
                    aria-expanded={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    {item.question}
                    <span className="faq-premium__icon" aria-hidden>
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>
                  <div className="faq__answer">
                    <div className="faq__answer-inner faq-premium__answer">{item.answer}</div>
                  </div>
                </div>
              ))}
            </div>

            <aside className="faq-premium__aside">
              <div className="faq-premium__media">
                <Image
                  src={`${IMAGES}/rohrkraft24-team-besprechung-faq.webp`}
                  alt={`${SITE.name} Team – Experten für Rohrreinigung in Berlin`}
                  width={600}
                  height={450}
                  sizes="(max-width: 900px) 100vw, 40vw"
                />
              </div>
              <div className="faq-premium__help">
                <p className="faq-premium__help-title">Noch Fragen? Wir helfen sofort.</p>
                <p className="faq-premium__help-text">
                  Rufen Sie an – wir sind rund um die Uhr für Berlin und Umgebung erreichbar.
                </p>
                <a href={SITE.phoneHref} className="btn btn-primary faq-premium__help-cta">
                  <PhoneIcon /> {SITE.phone}
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <div className="faq__layout">
          <div className="faq__content">
            <p className="section-label">FAQ</p>
            <h2 className="section-title mb-4">Häufige Fragen rund um die Rohrreinigung</h2>
            <div className="faq__list">
              {FAQ_ITEMS.map((item, index) => (
                <div
                  key={item.question}
                  className={`faq__item${openIndex === index ? " open" : ""}`}
                >
                  <button
                    type="button"
                    className="faq__question"
                    aria-expanded={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    {item.question}
                    <span className="faq__icon">{openIndex === index ? "−" : "+"}</span>
                  </button>
                  <div className="faq__answer">
                    <div className="faq__answer-inner">{item.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="faq__image">
            <Image
              src={`${IMAGES}/rohrkraft24-team-besprechung-faq.webp`}
              alt={`${SITE.name} Team – Experten für Rohrreinigung in Berlin`}
              width={600}
              height={450}
              loading="lazy"
            />
            <div className="faq__image-cta">
              <p style={{ fontWeight: 700, color: "var(--navy)", marginBottom: "0.75rem" }}>
                Noch Fragen? Wir helfen sofort!
              </p>
              <a
                href={SITE.phoneHref}
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <PhoneIcon /> {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
