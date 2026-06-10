import type { ServicePageData } from "./types";

import { IMAGES as IMG } from "@/lib/constants";

export const NOTDIENST_PAGE: ServicePageData = {
  slug: "notdienst",
  breadcrumbLabel: "24h Notdienst",
  mapKeyword: "notdienst",
  hero: {
    titleLine1: "24h Notdienst",
    titleLine2: "schnell & zuverlässig",
    tagline: "24h Notdienst – wir helfen sofort, auch nachts",
    body: "Rohrbruch, Rückstau oder totale Verstopfung – unser Notdienst ist 365 Tage im Jahr, rund um die Uhr für Sie da. In 30–45 Minuten bei Ihnen im gesamten Rhein-Main-Gebiet.",
    image: {
      src: `${IMG}/notdienst-rohrreinigung-sofort.webp`,
      srcSm: `${IMG}/notdienst-rohrreinigung-sofort-sm.webp`,
      alt: "24h Notdienst – Rohrkraft24 Fachbetrieb Hessen",
    },
  },
};
