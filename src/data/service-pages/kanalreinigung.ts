import type { ServicePageData } from "./types";

import { IMAGES as IMG } from "@/lib/constants";

export const KANALREINIGUNG_PAGE: ServicePageData = {
  slug: "kanalreinigung",
  breadcrumbLabel: "Kanalreinigung",
  mapKeyword: "kanalreinigung",
  hero: {
    titleLine1: "Kanalreinigung",
    titleLine2: "schnell & zuverlässig",
    tagline: "Professionelle Kanalreinigung – schnell & günstig",
    body: "Verstopfte Kanalisation? Unsere Hochdruckspültechnik befreit Ihre Kanalrohre zuverlässig von Ablagerungen, Fett und Fremdkörpern – ohne Grabungsarbeiten.",
    image: {
      src: `${IMG}/kanalreinigung-hochdruck-rohr.webp`,
      srcSm: `${IMG}/kanalreinigung-hochdruck-rohr-sm.webp`,
      alt: "Kanalreinigung – Rohrkraft24 Fachbetrieb Hessen",
    },
  },
};
