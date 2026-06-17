import type { ServicePageData } from "./types";
import { IMAGES as IMG } from "@/lib/constants";

export const NOTDIENST_PAGE: ServicePageData = {
  slug: "notdienst",
  breadcrumbLabel: "24h Notdienst",
  mapKeyword: "notdienst",
  hero: {
    titleLine1: "24h Notdienst",
    titleLine2: "Soforthilfe rund um die Uhr",
    tagline: "Verstopfung, Rohrbruch, Sanitär-Notfall",
    body: "Rohrverstopfung, Rohrbruch oder Sanitär-Notfall? Unser Notdienst ist 365 Tage im Jahr erreichbar – Soforthilfe bei Verstopfungen, Rohrbruch-Notdienst und Sanitär-Notfällen im Raum Berlin und Umgebung (100 km).",
    image: {
      src: `${IMG}/notdienst-rohrreinigung-sofort.webp`,
      srcSm: `${IMG}/notdienst-rohrreinigung-sofort-sm.webp`,
      alt: "24h Notdienst – Rohrretter24 Berlin",
    },
  },
};
