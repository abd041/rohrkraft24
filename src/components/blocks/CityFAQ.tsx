"use client";

import { useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import type { CityPageFaqItem, CityPagePhone } from "@/lib/city-pages";
import { PhoneIcon } from "@/components/icons";

type CityFAQProps = {
  title: string;
  items: CityPageFaqItem[];
  phone: CityPagePhone;
};

export function CityFAQ({ title, items, phone }: CityFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (items.length === 0) return null;

  return (
    <section className="section faq-section" style={{ background: "var(--gray-50)" }}>
      <div className="container">
        <div className="faq__layout">
          <div className="faq__content">
            <p className="section-label">FAQ</p>
            <h2 className="section-title mb-8">{title}</h2>
            <div className="faq__list">
              {items.map((item, index) => (
                <div
                  key={item.question}
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
              width={500}
              height={400}
              style={{ width: "100%", height: "auto" }}
            />
            <div className="faq__image-cta">
              <p style={{ fontWeight: 700, color: "var(--navy)", marginBottom: "0.75rem" }}>Noch Fragen? Wir helfen sofort!</p>
              <a href={phone.href} className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                <PhoneIcon /> {phone.display}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
