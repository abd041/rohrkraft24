import type { ServicePageBase } from "./types";
import { IMAGES as IMG } from "@/lib/constants";

export const KAMERA_INSPEKTION_PAGE: ServicePageBase = {
  slug: "kamera-inspektion",
  breadcrumbLabel: "TV-Kamera-Inspektion",
  mapKeyword: "kamera-inspektion",
  hero: {
    titleLine1: "TV-Kamera-Inspektion",
    titleLine2: "& Rohrortung",
    tagline: "Präzise Diagnose per Kamera",
    body: "Mit modernen TV-Kamerasystemen und Rohrortungsgeräten finden wir Schäden, Verstopfungen und Leckagen exakt – inklusive Foto- und Videodokumentation für Ihre Unterlagen.",
    image: {
      src: `${IMG}/kamerainspektion-kanal-garten.webp`,
      srcSm: `${IMG}/kamerainspektion-kanal-garten-sm.webp`,
      alt: "TV-Kamera-Inspektion – RohrRetter24 Berlin",
    },
  },
};
