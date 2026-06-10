"use client";

import { useEffect, useState } from "react";
import { useModal } from "@/components/providers/ModalProvider";

export function CallbackModal() {
  const { activeModal, closeModal } = useModal();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (activeModal === "callback") {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [activeModal]);

  if (activeModal !== "callback") return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id="rueckrufModal">
      <div className="rueckruf-overlay" onClick={closeModal} />
      <div className="rueckruf-box">
        <button type="button" className="rueckruf-close" onClick={closeModal} aria-label="Schließen">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {submitted ? (
          <div className="rueckruf-success">
            <strong>Vielen Dank!</strong>
            <span>Wir melden uns in Kürze bei Ihnen.</span>
          </div>
        ) : (
          <>
            <div className="rueckruf-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
              </svg>
            </div>
            <h2 className="rueckruf-title">Kostenlosen Rückruf anfordern</h2>
            <p className="rueckruf-sub">
              Wir rufen Sie innerhalb von 30 Minuten zurück – kostenlos und unverbindlich.
            </p>
            <form className="rueckruf-form" onSubmit={handleSubmit}>
              <div className="rueckruf-row">
                <div className="form-group">
                  <label htmlFor="vorname">Vorname *</label>
                  <input id="vorname" required type="text" />
                </div>
                <div className="form-group">
                  <label htmlFor="nachname">Nachname *</label>
                  <input id="nachname" required type="text" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="telefon">Telefon *</label>
                <input id="telefon" required type="tel" />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  E-Mail <span className="form-optional">(optional)</span>
                </label>
                <input id="email" type="email" />
              </div>
              <button type="submit" className="btn btn-primary btn--full">
                Jetzt Rückruf anfordern
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
