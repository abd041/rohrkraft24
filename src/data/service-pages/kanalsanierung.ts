import type { ServicePageData } from "./types";

import { IMAGES as IMG } from "@/lib/constants";

export const KANALSANIERUNG_PAGE: ServicePageData = {
  slug: "kanalsanierung",
  breadcrumbLabel: "Kanalsanierung",
  mapKeyword: "kanalsanierung",
  hero: {
    titleLine1: "Kanalsanierung",
    titleLine2: "schnell & zuverlässig",
    tagline: "Kanalsanierung – schnell, sauber, günstig",
    body: "Defekte Kanalrohre verursachen Feuchtigkeit, Gerüche und teure Folgeschäden. Wir sanieren Ihren Kanal mit modernsten grabenlosen Verfahren – zuverlässig und günstig.",
    image: {
      src: `${IMG}/kanalsanierung-liner-einbau.webp`,
      srcSm: `${IMG}/kanalsanierung-liner-einbau-sm.webp`,
      alt: "Kanalsanierung – Rohrkraft24 Fachbetrieb Hessen",
    },
  },
};
