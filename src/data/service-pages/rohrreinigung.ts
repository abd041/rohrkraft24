import type { ServicePageBase } from "./types";
import { IMAGES as IMG } from "@/lib/constants";

export const ROHRREINIGUNG_PAGE: ServicePageBase = {
  slug: "rohrreinigung",
  breadcrumbLabel: "Rohrreinigung",
  mapKeyword: "rohrreinigung",
  hero: {
    titleLine1: "Rohrreinigung",
    titleLine2: "Verstopfungen beseitigen",
    tagline: "Ihr Rohrreinigungsservice in Berlin und Umgebung",
    body: "Verstopfte Abflüsse in Küche, Bad oder WC? Wir beseitigen jede Verstopfung in Fall- und Grundleitungen – schnell, sauber und zum Festpreis. Auch nachts und am Wochenende.",
    image: {
      src: `${IMG}/rohrreinigung-fachmann-einsatz.webp`,
      srcSm: `${IMG}/rohrreinigung-fachmann-einsatz-sm.webp`,
      alt: "Rohrreinigung – RohrRetter24 Berlin",
    },
  },
};
