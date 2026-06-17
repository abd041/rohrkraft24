import type { ServicePageData } from "./types";
import { IMAGES as IMG } from "@/lib/constants";

export const HEBEANLAGE_WARTUNG_PAGE: ServicePageData = {
  slug: "hebeanlage-wartung",
  breadcrumbLabel: "Hebeanlagen-Service",
  mapKeyword: "hebeanlage-wartung",
  hero: {
    titleLine1: "Hebeanlagen",
    titleLine2: "& Rückstausysteme",
    tagline: "Wartung, Reinigung, Reparatur",
    body: "Regelmäßige Wartung, Reinigung und Störungsbeseitigung für Hebeanlagen und Rückstausysteme – damit Ihre Entwässerung zuverlässig funktioniert.",
    image: {
      src: `${IMG}/kanalsanierung-liner-einbau.webp`,
      srcSm: `${IMG}/kanalsanierung-liner-einbau-sm.webp`,
      alt: "Hebeanlagen-Service – Rohrretter24 Berlin",
    },
  },
};
