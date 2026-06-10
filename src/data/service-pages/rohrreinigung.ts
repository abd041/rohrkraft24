import type { ServicePageData } from "./types";

import { IMAGES as IMG } from "@/lib/constants";

export const ROHRREINIGUNG_PAGE: ServicePageData = {
  slug: "rohrreinigung",
  breadcrumbLabel: "Rohrreinigung",
  mapKeyword: "rohrreinigung",
  hero: {
    titleLine1: "Rohrreinigung",
    titleLine2: "schnell & zuverlässig",
    tagline: "Ihr 24h-Notdienst im Rhein-Main-Gebiet",
    body: "Rohr verstopft? Wir beseitigen jede Verstopfung in Abfluss, Kanal und Rohr – schnell, sauber und zum garantierten Festpreis. Gratis Anfahrt, kostenloser Schadenscheck.",
    image: {
      src: `${IMG}/rohrreinigung-fachmann-einsatz.webp`,
      srcSm: `${IMG}/rohrreinigung-fachmann-einsatz-sm.webp`,
      alt: "Rohrreinigung – Rohrkraft24 Fachbetrieb Hessen",
    },
  },
};
