import type { ServicePageBase } from "./types";
import { IMAGES as IMG } from "@/lib/constants";

export const ROHRREPARATUR_PAGE: ServicePageBase = {
  slug: "rohrreparatur",
  breadcrumbLabel: "Rohrreparatur",
  mapKeyword: "rohrreparatur",
  hero: {
    titleLine1: "Rohrreparatur",
    titleLine2: "& Rohrsanierung",
    tagline: "Für alle Rohrmaterialien",
    body: "Wir reparieren und sanieren HT-, KG-, SML-, Kunststoff-, Kupfer- und Stahlrohre fachgerecht – mit Spezialwerkzeugen und langjähriger Erfahrung im Raum Berlin.",
    image: {
      src: `${IMG}/rohrsanierung-inliner-verfahren.webp`,
      srcSm: `${IMG}/rohrsanierung-inliner-verfahren-sm.webp`,
      alt: "Rohrreparatur – RohrRetter24 Berlin",
    },
  },
};
