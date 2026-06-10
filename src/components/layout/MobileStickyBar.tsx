"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/constants";
import { useModal } from "@/components/providers/ModalProvider";

export function MobileStickyBar() {
  const { openModal } = useModal();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`mobile-sticky-bar${visible ? " visible" : ""}`}>
      <div className="mobile-sticky-inner">
        <div className="mobile-sticky-status">
          <span className="mobile-sticky-dot" />
          Jetzt Erreichbar
        </div>
        <div className="mobile-sticky-actions">
          <a href={SITE.phoneHref} className="mobile-sticky-btn mobile-sticky-btn--call">
            <span className="call-icon-wrap">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
              </svg>
            </span>
            Anrufen
          </a>
          <button
            type="button"
            className="mobile-sticky-btn mobile-sticky-btn--termin"
            onClick={() => openModal("callback")}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Termin vereinbaren
          </button>
        </div>
      </div>
    </div>
  );
}
