"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { SITE } from "@/lib/constants";
import { useModal } from "@/components/providers/ModalProvider";

export function CallbackModal() {
  const { activeModal, closeModal } = useModal();
  const [error, setError] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (activeModal === "callback") {
      document.body.classList.add("modal-open");
      const t = window.setTimeout(() => closeRef.current?.focus(), 0);
      return () => {
        window.clearTimeout(t);
        document.body.classList.remove("modal-open");
      };
    }
    document.body.classList.remove("modal-open");
    return () => document.body.classList.remove("modal-open");
  }, [activeModal]);

  useEffect(() => {
    if (activeModal !== "callback") return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeModal, closeModal]);

  if (activeModal !== "callback") return null;

  const handleClose = () => {
    setError(null);
    closeModal();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const vorname = String(data.get("vorname") ?? "").trim();
    const nachname = String(data.get("nachname") ?? "").trim();
    const telefon = String(data.get("telefon") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();

    const subject = encodeURIComponent(`Rückrufanfrage – ${vorname} ${nachname}`);
    const body = encodeURIComponent(
      [
        "Rückrufanfrage über die Website",
        "",
        `Name: ${vorname} ${nachname}`,
        `Telefon: ${telefon}`,
        email ? `E-Mail: ${email}` : null,
        "",
        "Bitte um Rückruf.",
      ]
        .filter(Boolean)
        .join("\n"),
    );

    try {
      window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
      handleClose();
    } catch {
      setError(`Bitte rufen Sie uns direkt an: ${SITE.phone}`);
    }
  };

  return (
    <div className="callback-premium" role="dialog" aria-modal="true" aria-labelledby="callback-title">
      <button type="button" className="callback-premium__backdrop" onClick={handleClose} aria-label="Schließen" />
      <div className="callback-premium__panel" ref={panelRef}>
        <button
          ref={closeRef}
          type="button"
          className="callback-premium__close"
          onClick={handleClose}
          aria-label="Schließen"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <p className="callback-premium__label">Rückruf</p>
        <h2 id="callback-title" className="callback-premium__title">
          Kostenlosen Rückruf anfordern
        </h2>
        <p className="callback-premium__sub">
          Wir rufen Sie in der Regel innerhalb von 30 Minuten zurück – kostenlos und unverbindlich.
          Ihre Anfrage öffnet Ihr E-Mail-Programm an {SITE.email}.
        </p>
        <form className="callback-premium__form" onSubmit={handleSubmit}>
          <div className="callback-premium__row">
            <div className="form-group">
              <label htmlFor="callback-vorname">Vorname *</label>
              <input id="callback-vorname" name="vorname" required type="text" autoComplete="given-name" />
            </div>
            <div className="form-group">
              <label htmlFor="callback-nachname">Nachname *</label>
              <input id="callback-nachname" name="nachname" required type="text" autoComplete="family-name" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="callback-telefon">Telefon *</label>
            <input id="callback-telefon" name="telefon" required type="tel" autoComplete="tel" />
          </div>
          <div className="form-group">
            <label htmlFor="callback-email">
              E-Mail <span className="form-optional">(optional)</span>
            </label>
            <input id="callback-email" name="email" type="email" autoComplete="email" />
          </div>
          {error && (
            <p className="form-feedback" role="alert">
              {error}
            </p>
          )}
          <button type="submit" className="btn btn-primary callback-premium__submit">
            Per E-Mail anfordern
          </button>
          <a href={SITE.phoneHref} className="callback-premium__phone">
            Oder direkt anrufen: {SITE.phone}
          </a>
        </form>
      </div>
    </div>
  );
}
