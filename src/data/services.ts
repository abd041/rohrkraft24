export type Service = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  image: string;
  bestseller?: boolean;
};

import { IMAGES as IMG } from "@/lib/constants";

export const SERVICES: Service[] = [
  {
    id: "rohrreinigung",
    title: "Rohrreinigung",
    description:
      "Professionelle Entstopfung aller Rohrleitungen – schnell und ohne Beschädigungen.",
    tags: ["Hochdruckspülung", "Mechanische Entstopfung", "Alle Rohrarten"],
    href: "/rohrreinigung",
    bestseller: true,
    image: `${IMG}/rohrreinigung-fachmann-einsatz.webp`,
  },
  {
    id: "kanalreinigung",
    title: "Kanalreinigung",
    description:
      "Hochdruckspülung von Hausanschlüssen und Grundleitungen im Rhein-Main-Gebiet.",
    tags: ["Grundleitungsreinigung", "Hausanschlüsse", "HD-Spültechnik"],
    href: "/kanalreinigung",
    image: `${IMG}/kanalreinigung-hochdruck-rohr.webp`,
  },
  {
    id: "abflussreinigung",
    title: "Abflussreinigung",
    description:
      "Schnelle Hilfe bei verstopftem Abfluss in Küche, Bad, Dusche oder Waschmaschine.",
    tags: ["Küche & Bad", "Dusche & Wanne", "Waschmaschinenanschluss"],
    href: "/abflussreinigung",
    image: `${IMG}/abflussreinigung-kueche-profi.webp`,
  },
  {
    id: "toilette",
    title: "Toilette verstopft",
    description:
      "WC verstopft? Wir befreien Ihre Toilette hygienisch – auch nachts.",
    tags: ["Sofortiger Notdienst", "Hygienische Reinigung", "24/7 erreichbar"],
    href: "/toilette-verstopft",
    image: `${IMG}/toilette-verstopft-notfall-bad.webp`,
  },
  {
    id: "rohrsanierung",
    title: "Rohrsanierung",
    description:
      "Grabenlose Rohrsanierung mit Inliner-Verfahren – ohne Aufgraben, günstiger.",
    tags: ["Inliner-Verfahren", "Ohne Aufgraben", "20 Jahre Garantie"],
    href: "/rohrsanierung",
    image: `${IMG}/rohrsanierung-inliner-verfahren.webp`,
  },
  {
    id: "kanalsanierung",
    title: "Kanalsanierung",
    description:
      "Sanierung von Kanalrohren ohne Erdarbeiten – nachhaltig, dicht und langlebig.",
    tags: ["Ohne Erdarbeiten", "Verschiedene Materialien", "Förderfähig"],
    href: "/kanalsanierung",
    image: `${IMG}/kanalsanierung-liner-einbau.webp`,
  },
  {
    id: "kamera",
    title: "Kamerainspektion",
    description:
      "HD-Kamerabefahrung für präzise Schadensdiagnose – mit Bericht und Bildmaterial.",
    tags: ["HD-Kameratechnik", "Digitaler Bericht", "Exakte Diagnose"],
    href: "/kamerainspektion",
    image: `${IMG}/kamerainspektion-kanal-garten.webp`,
  },
];
