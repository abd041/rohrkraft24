import type { ServicePageData } from "./types";
import { IMAGES as IMG } from "@/lib/constants";

export const ABWASSERREINIGUNG_PAGE: ServicePageData = {
  slug: "abwasserreinigung",
  breadcrumbLabel: "Abwasserreinigung",
  mapKeyword: "abwasserreinigung",
  hero: {
    titleLine1: "Abwasserreinigung",
    titleLine2: "Grundreinigung von Leitungen",
    tagline: "Urinstein, Kalk & Fett entfernen",
    body: "Professionelle Grundreinigung von Abwasserleitungen – Entfernung von hartnäckigen Urinstein-, Kalk- und Fettablagerungen mit Hochdrucktechnik und Spezialgeräten.",
    image: {
      src: `${IMG}/kanalreinigung-hochdruck-rohr.webp`,
      srcSm: `${IMG}/kanalreinigung-hochdruck-rohr-sm.webp`,
      alt: "Abwasserreinigung – Rohrretter24 Berlin",
    },
  },
};
