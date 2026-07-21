"use client";

import { useEffect, useSyncExternalStore } from "react";
import Link from "next/link";

const CONSENT_KEY = "rk24_consent";
const CONSENT_CHANGE_EVENT = "rk24-consent-change";

function getConsent(): boolean {
  return localStorage.getItem(CONSENT_KEY) !== null;
}

/** SSR: show banner until client reads consent (avoids unprotected first paint). */
function getServerConsent(): boolean {
  return false;
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
    if (hasConsent) {
      document.body.classList.remove("cookie-active");
      return;
    }
    document.body.classList.add("cookie-active");
    return () => document.body.classList.remove("cookie-active");
  }, [hasConsent]);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "necessary");
    window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
  };

  if (hasConsent) return null;

  return (
    <div className="cookie-premium" role="dialog" aria-labelledby="cookie-title" aria-live="polite">
      <div className="cookie-premium__panel">
        <p className="cookie-premium__label">Datenschutz</p>
        <h2 id="cookie-title" className="cookie-premium__title">
          Cookies &amp; Speicherung
        </h2>
        <p className="cookie-premium__desc">
          Wir speichern nur technisch notwendige Informationen, damit dieser Hinweis nicht bei jedem
          Besuch erneut erscheint. Details finden Sie in unserer Datenschutzerklärung.
        </p>
        <p className="cookie-premium__links">
          <Link href="/datenschutz/">Datenschutzerklärung</Link>
          <Link href="/impressum/">Impressum</Link>
        </p>
        <button type="button" className="btn btn-primary cookie-premium__btn" onClick={accept}>
          Verstanden
        </button>
      </div>
    </div>
  );
}
