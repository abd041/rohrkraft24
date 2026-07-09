"use client";

import { useEffect, useSyncExternalStore } from "react";
import Link from "next/link";

const CONSENT_KEY = "rk24_consent";
const CONSENT_CHANGE_EVENT = "rk24-consent-change";

function getConsent(): boolean {
  return localStorage.getItem(CONSENT_KEY) !== null;
}

function getServerConsent(): boolean {
  return true;
}

function subscribeToConsent(onStoreChange: () => void) {
  const handler = () => onStoreChange();
  window.addEventListener("storage", handler);
  window.addEventListener(CONSENT_CHANGE_EVENT, handler);
  return () => {
    window.removeEventListener("storage", handler);
    window.removeEventListener(CONSENT_CHANGE_EVENT, handler);
  };
}

export function CookieBanner() {
  const hasConsent = useSyncExternalStore(subscribeToConsent, getConsent, getServerConsent);

  useEffect(() => {
    if (hasConsent) return;
    document.body.classList.add("cookie-active");
    return () => document.body.classList.remove("cookie-active");
  }, [hasConsent]);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "all");
    window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
  };

  if (hasConsent) return null;

  return (
    <div className="cookie-overlay">
      <div className="cookie-modal">
        <div className="cookie-modal__icon">🍪</div>
        <h2 className="cookie-modal__title">Cookies & Datenschutz</h2>
        <p className="cookie-modal__desc">
          Wir verwenden technisch notwendige Speicherung, damit der Cookie-Hinweis nicht bei jedem
          Besuch erneut erscheint. Details finden Sie in unserer Datenschutzerklärung.
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
