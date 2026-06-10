"use client";

import { useState } from "react";
import Image from "next/image";
import { FAQ_ITEMS } from "@/data/faq";
import { IMAGES, SITE } from "@/lib/constants";
import { PhoneIcon } from "@/components/icons";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
                  key={index}
                  className={`faq__item rk-reveal${openIndex === index ? " open" : ""}`}
                  style={{ transitionDelay: `${(index % 6) * 0.07}s` }}
                >
                  <button
                    type="button"
                    className="faq__question"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    {item.question}
                    <span className="faq__icon">{openIndex === index ? "−" : "+"}</span>
                  </button>
                  <div className="faq__answer">{item.answer}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="faq__image">
            <Image
              src={`${IMAGES}/rohrkraft24-team-besprechung-faq.webp`}
              alt="Rohrkraft24 Team – Experten für Rohrreinigung & Kanalsanierung in Hessen"
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
