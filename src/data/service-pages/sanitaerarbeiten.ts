import type { ServicePageBase } from "./types";
import { IMAGES as IMG } from "@/lib/constants";

export const SANITAERARBEITEN_PAGE: ServicePageBase = {
  slug: "sanitaerarbeiten",
  breadcrumbLabel: "Sanitärarbeiten",
  mapKeyword: "sanitaerarbeiten",
  hero: {
    titleLine1: "Sanitärarbeiten",
    titleLine2: "Montage & Reparatur",
    tagline: "Alles rund um Bad und WC",
    body: "WC-Montage, Einbau und Reparatur von Spülkästen, Armaturen, Siphon-Service, Eckventile und Arbeiten an Wasserleitungen – aus einer Hand in Berlin und Umgebung.",
    image: {
      src: `${IMG}/toilette-verstopft-notfall-bad.webp`,
      srcSm: `${IMG}/toilette-verstopft-notfall-bad-sm.webp`,
      alt: "Sanitärarbeiten – RohrRetter24 Berlin",
    },
  },
};
