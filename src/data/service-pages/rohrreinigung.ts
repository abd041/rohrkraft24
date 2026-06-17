import type { ServicePageData } from "./types";
import { IMAGES as IMG } from "@/lib/constants";

export const ROHRREINIGUNG_PAGE: ServicePageData = {
  slug: "rohrreinigung",
  breadcrumbLabel: "Rohrreinigung",
  mapKeyword: "rohrreinigung",
  hero: {
    titleLine1: "Rohrreinigung",
    titleLine2: "Verstopfungen beseitigen",
    tagline: "Ihr Fachbetrieb in Berlin und Umgebung",
    body: "Verstopfte Abflüsse in Küche, Bad oder WC? Wir beseitigen jede Verstopfung in Fall- und Grundleitungen – schnell, sauber und zum Festpreis. Auch nachts und am Wochenende.",
    image: {
      src: `${IMG}/rohrreinigung-fachmann-einsatz.webp`,
      srcSm: `${IMG}/rohrreinigung-fachmann-einsatz-sm.webp`,
      alt: "Rohrreinigung – Rohrretter24 Fachbetrieb Berlin",
    },
  },
};
