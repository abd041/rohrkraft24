import type { ServicePageBase } from "./types";
import { IMAGES as IMG } from "@/lib/constants";

export const WASSERSCHADEN_PAGE: ServicePageBase = {
  slug: "wasserschaden",
  breadcrumbLabel: "Wasserschaden",
  mapKeyword: "wasserschaden",
  hero: {
    titleLine1: "Wasserschaden",
    titleLine2: "Nasssaugarbeiten",
    tagline: "Schnelle Hilfe bei Wassereinbruch",
    body: "Wasser im Keller oder überflutete Bereiche? Mit professionellen Nasssaugern pumpen wir Wasser ab und unterstützen Sie bei der ersten Schadensbeseitigung – schnell und zuverlässig.",
    image: {
      src: `${IMG}/abflussreinigung-kueche-profi.webp`,
      srcSm: `${IMG}/abflussreinigung-kueche-profi-sm.webp`,
      alt: "Wasserschaden Hilfe – RohrRetter24 Berlin",
    },
  },
};
