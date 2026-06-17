import type { ServicePageData } from "./types";
import { IMAGES as IMG } from "@/lib/constants";

export const LECKAGEORTUNG_PAGE: ServicePageData = {
  slug: "leckageortung",
  breadcrumbLabel: "Leckageortung",
  mapKeyword: "leckageortung",
  hero: {
    titleLine1: "Leckageortung",
    titleLine2: "& Rohrbruch-Reparatur",
    tagline: "Schäden finden, schnell beheben",
    body: "Undichte Leitungen oder Rohrbruch? Wir orten Schadstellen präzise, dokumentieren den Befund und führen die Reparatur fachgerecht durch – auch als Notfall.",
    image: {
      src: `${IMG}/rohrreinigung-fachmann-einsatz.webp`,
      srcSm: `${IMG}/rohrreinigung-fachmann-einsatz-sm.webp`,
      alt: "Leckageortung – Rohrretter24 Berlin",
    },
  },
};
