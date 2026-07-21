"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { CONTACT_SERVICE_OPTIONS } from "@/data/contact";
import { SITE } from "@/lib/constants";

type ContactFormProps = {
  variant?: "default" | "premium";
};

export function ContactForm({ variant = "default" }: ContactFormProps) {
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const telefon = String(data.get("telefon") ?? "").trim();
    const stadt = String(data.get("stadt") ?? "").trim();
    const leistung = String(data.get("leistung") ?? "").trim();
    const nachricht = String(data.get("nachricht") ?? "").trim();
    const leistungLabel =
      CONTACT_SERVICE_OPTIONS.find((o) => o.value === leistung)?.label ?? leistung;

    const subject = encodeURIComponent(`Kontaktanfrage: ${leistungLabel}`);
    const body = encodeURIComponent(
      [
        "Kontaktanfrage über die Website",
        "",
        `Name: ${name}`,
        `E-Mail: ${email}`,
        `Telefon: ${telefon}`,
        stadt ? `Stadt / Region: ${stadt}` : null,
        `Leistung: ${leistungLabel}`,
        "",
        "Nachricht:",
        nachricht,
      ]
        .filter(Boolean)
        .join("\n"),
    );

    setFeedback(
      `Ihr E-Mail-Programm öffnet sich. Falls nicht, schreiben Sie an ${SITE.email} oder rufen Sie ${SITE.phone} an.`,
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  };

  const formBody = (
    <form
      className={variant === "premium" ? "kontakt-premium__form" : "kontakt-form"}
      id="kontaktForm"
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="form-row form-row--2">
        <div className="form-group">
          <label htmlFor="name">
            Name <span className="req-star">*</span>
          </label>
          <input type="text" id="name" name="name" placeholder="Max Mustermann" required autoComplete="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">
            E-Mail <span className="req-star">*</span>
          </label>
          <input type="email" id="email" name="email" placeholder="max@beispiel.de" required autoComplete="email" />
        </div>
      </div>

      <div className="form-row form-row--2">
        <div className="form-group">
          <label htmlFor="telefon">
            Telefon <span className="req-star">*</span>
          </label>
          <input type="tel" id="telefon" name="telefon" placeholder="z. B. 030 12345678" required autoComplete="tel" />
        </div>
        <div className="form-group">
          <label htmlFor="stadt">
            Stadt / Region <span className="form-optional">(optional)</span>
          </label>
          <input type="text" id="stadt" name="stadt" placeholder="z. B. Berlin" autoComplete="address-level2" />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="leistung">
          Leistung <span className="req-star">*</span>
        </label>
        <div className="select-wrap">
          <select id="leistung" name="leistung" required defaultValue="">
            <option value="" disabled>
              Bitte wählen …
            </option>
            {CONTACT_SERVICE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <svg className="select-chevron" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="nachricht">
          Nachricht <span className="req-star">*</span>
        </label>
        <textarea
          id="nachricht"
          name="nachricht"
          rows={5}
          placeholder="Beschreiben Sie kurz Ihr Problem: Wo ist der Abfluss verstopft? Seit wann? Gibt es Wasser-Rückstau? Je mehr Details, desto schneller können wir helfen …"
          required
        />
      </div>

      <div className="form-group form-group--check">
        <label className="checkbox-label">
          <input type="checkbox" id="datenschutz" name="datenschutz" required />
          <span className="checkbox-box" />
          <span className="checkbox-text">
            Ich habe die <Link href="/datenschutz/">Datenschutzerklärung</Link> gelesen und bin mit der
            Verarbeitung meiner Daten einverstanden. <span className="req-star">*</span>
          </span>
        </label>
      </div>

      <button type="submit" className="btn btn-primary btn--full btn--send">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
        Per E-Mail senden
      </button>

      {feedback && (
        <p className="form-feedback" role="status">
          {feedback}
        </p>
      )}
    </form>
  );

  if (variant === "premium") {
    return (
      <div className="kontakt-premium__form-wrap">
        <div className="kontakt-premium__form-header">
          <h2>Anfrage senden</h2>
          <p>
            Alle mit <span className="req-star">*</span> markierten Felder sind Pflichtfelder. Die Anfrage
            öffnet Ihr E-Mail-Programm.
          </p>
        </div>
        {formBody}
      </div>
    );
  }

  return (
    <div className="kontakt-form-card">
      <div className="kontakt-form-header">
        <h2>Anfrage senden</h2>
        <p>
          Alle mit <span className="req-star">*</span> markierten Felder sind Pflichtfelder. Die Anfrage
          öffnet Ihr E-Mail-Programm.
        </p>
      </div>
      {formBody}
    </div>
  );
}
