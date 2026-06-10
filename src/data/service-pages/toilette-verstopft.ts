import type { ServicePageData } from "./types";

import { IMAGES as IMG } from "@/lib/constants";

export const TOILETTEVERSTOPFT_PAGE: ServicePageData = {
  slug: "toilette-verstopft",
  breadcrumbLabel: "Toilette verstopft",
  mapKeyword: "toilette-verstopft",
  hero: {
    titleLine1: "Toilette verstopft",
    titleLine2: "schnell & zuverlässig",
    tagline: "Toilette verstopft – wir sind in 30 Min. da",
    body: "Eine verstopfte Toilette ist ein Notfall. Wir kommen rund um die Uhr zu Ihnen – schnell, diskret und zum Festpreis. Kein Chaos, kein Stress.",
    image: {
      src: `${IMG}/toilette-verstopft-notfall-bad.webp`,
      srcSm: `${IMG}/toilette-verstopft-notfall-bad-sm.webp`,
      alt: "Toilette verstopft – Rohrkraft24 Fachbetrieb Hessen",
    },
  },
};
