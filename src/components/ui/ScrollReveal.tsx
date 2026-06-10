"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let cancelled = false;

    const frame = requestAnimationFrame(() => {
      if (cancelled) return;

      if (!("IntersectionObserver" in window)) {
        document.querySelectorAll(".rk-reveal").forEach((el) => {
          el.classList.add("rk-visible");
        });
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("rk-visible");
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
      );

      document.querySelectorAll(".rk-reveal:not(.rk-visible)").forEach((el) => {
        observer?.observe(el);
      });
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
