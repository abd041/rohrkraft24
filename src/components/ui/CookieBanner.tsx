"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("rk24_consent");
    if (!accepted) {
      setVisible(true);
      document.body.classList.add("cookie-active");
    }
  }, []);

  const accept = () => {
    localStorage.setItem("rk24_consent", "all");
    setVisible(false);
    document.body.classList.remove("cookie-active");
  };

  if (!visible) return null;

  return (
    <div className="cookie-overlay">
      <div className="cookie-modal">
        <div className="cookie-modal__icon">🍪</div>
        <h2 className="cookie-modal__title">Cookies & Datenschutz</h2>
        <p className="cookie-modal__desc">
          Wir verwenden Cookies für Google Ads und Analysen, um Ihnen die bestmögliche
          Erfahrung zu bieten und relevante Angebote anzuzeigen. Mit einem Klick auf „Alle
          akzeptieren" stimmen Sie der Nutzung zu.
        </p>
        <p className="cookie-modal__links">
          <Link href="/datenschutz">Datenschutzerklärung</Link>
          {" · "}
          <Link href="/impressum">Impressum</Link>
        </p>
        <button type="button" className="cookie-modal__btn" onClick={accept}>
          Alle akzeptieren
        </button>
      </div>
    </div>
  );
}
