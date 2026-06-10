import type { ServicePageData } from "./types";

import { IMAGES as IMG } from "@/lib/constants";

export const ROHRSANIERUNG_PAGE: ServicePageData = {
  slug: "rohrsanierung",
  breadcrumbLabel: "Rohrsanierung",
  mapKeyword: "rohrsanierung",
  hero: {
    titleLine1: "Rohrsanierung",
    titleLine2: "schnell & zuverlässig",
    tagline: "Rohrsanierung ohne Aufgraben – modern & günstig",
    body: "Defekte Rohre müssen nicht ausgegraben werden. Mit dem Inliner-Verfahren sanieren wir Ihre Rohrleitungen von innen – ohne Bauschäden, ohne Dreck, zum Festpreis.",
    image: {
      src: `${IMG}/rohrsanierung-inliner-verfahren.webp`,
      srcSm: `${IMG}/rohrsanierung-inliner-verfahren-sm.webp`,
      alt: "Rohrsanierung – Rohrkraft24 Fachbetrieb Hessen",
    },
  },
};
