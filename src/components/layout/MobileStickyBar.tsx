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
    <div className={`mobile-sticky-premium${visible ? " is-visible" : ""}`}>
      <a href={SITE.phoneHref} className="mobile-sticky-premium__call">
        Anrufen
      </a>
      <button
        type="button"
        className="mobile-sticky-premium__termin"
        onClick={() => openModal("callback")}
      >
        Termin
      </button>
    </div>
  );
}
