import type { ServicePageData } from "./types";

import { IMAGES as IMG } from "@/lib/constants";

export const ABFLUSSREINIGUNG_PAGE: ServicePageData = {
  slug: "abflussreinigung",
  breadcrumbLabel: "Abflussreinigung",
  mapKeyword: "abflussreinigung",
  hero: {
    titleLine1: "Abflussreinigung",
    titleLine2: "schnell & zuverlässig",
    tagline: "Abfluss verstopft? Wir helfen sofort",
    body: "Ob Küche, Bad oder Dusche – wir entstopfen jeden Abfluss schnell und zuverlässig. Mit modernster Technik und garantiertem Festpreis.",
    image: {
      src: `${IMG}/abflussreinigung-kueche-profi.webp`,
      srcSm: `${IMG}/abflussreinigung-kueche-profi-sm.webp`,
      alt: "Abflussreinigung – Rohrkraft24 Fachbetrieb Hessen",
    },
  },
};
