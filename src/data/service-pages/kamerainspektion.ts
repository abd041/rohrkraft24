import type { ServicePageData } from "./types";

import { IMAGES as IMG } from "@/lib/constants";

export const KAMERAINSPEKTION_PAGE: ServicePageData = {
  slug: "kamerainspektion",
  breadcrumbLabel: "Kamerainspektion",
  mapKeyword: "kamerainspektion",
  hero: {
    titleLine1: "Kamerainspektion",
    titleLine2: "schnell & zuverlässig",
    tagline: "HD-Kamerainspektion – Klarheit in Ihren Rohren",
    body: "Mit unserer HD-Kanalbefahrung sehen wir genau, wo das Problem liegt – bevor wir handeln. So zahlen Sie nur für das, was wirklich nötig ist.",
    image: {
      src: `${IMG}/kamerainspektion-kanal-garten.webp`,
      srcSm: `${IMG}/kamerainspektion-kanal-garten-sm.webp`,
      alt: "Kamerainspektion – Rohrkraft24 Fachbetrieb Hessen",
    },
  },
};
