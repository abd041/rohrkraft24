"use client";

import { useState } from "react";
import Image from "next/image";
import { IMAGES, SITE } from "@/lib/constants";
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
    <section className="faq-premium">
      <header className="faq-premium__intro">
        <div className="container">
          <div className="faq-premium__intro-inner">
            <p className="faq-premium__label">FAQ</p>
            <h2 className="faq-premium__heading">{title}</h2>
          </div>
        </div>
      </header>

      <div className="container faq-premium__body">
        <div className="faq-premium__layout">
          <div className="faq-premium__list">
            {items.map((item, index) => (
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
              <a href={phone.href} className="btn btn-primary faq-premium__help-cta">
                <PhoneIcon /> {phone.display}
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
