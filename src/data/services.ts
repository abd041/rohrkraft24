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
    title: "Rohrreinigung & Verstopfungen",
    description:
      "Professionelle Beseitigung von Verstopfungen in Küche, Bad, WC, Fall- und Grundleitungen.",
    tags: ["Küchenabflüsse", "Badabflüsse", "WC-Verstopfungen", "Grundleitungen"],
    href: "/rohrreinigung",
    bestseller: true,
    image: `${IMG}/rohrreinigung-fachmann-einsatz.webp`,
  },
  {
    id: "kamera-inspektion",
    title: "TV-Kamera-Inspektion",
    description:
      "Kamerabefahrung von Rohrleitungen mit Foto-/Video-Dokumentation und präziser Rohrortung.",
    tags: ["Kamerabefahrung", "Foto & Video", "Rohrortung"],
    href: "/kamera-inspektion",
    image: `${IMG}/kamerainspektion-kanal-garten.webp`,
  },
  {
    id: "rohrreparatur",
    title: "Rohrreparatur & Sanierung",
    description:
      "Fachgerechte Reparatur und Sanierung von HT-, KG-, SML-, Kunststoff-, Kupfer- und Stahlrohren.",
    tags: ["HT- & KG-Rohre", "Kupfer & Stahl", "Kunststoffrohre"],
    href: "/rohrreparatur",
    image: `${IMG}/rohrsanierung-inliner-verfahren.webp`,
  },
  {
    id: "leckageortung",
    title: "Leckageortung & Rohrbruch",
    description:
      "Schadstellensuche, Leckageortung und Reparatur von Rohrbrüchen – schnell und präzise.",
    tags: ["Schadstellensuche", "Leckageortung", "Rohrbruch-Reparatur"],
    href: "/leckageortung",
    image: `${IMG}/rohrreinigung-fachmann-einsatz.webp`,
  },
  {
    id: "abwasserreinigung",
    title: "Abwasserreinigung",
    description:
      "Grundreinigung von Abwasserleitungen – Entfernung von Urinstein, Kalk- und Fettablagerungen.",
    tags: ["Urinstein", "Kalkablagerungen", "Fettablagerungen"],
    href: "/abwasserreinigung",
    image: `${IMG}/kanalreinigung-hochdruck-rohr.webp`,
  },
  {
    id: "hebeanlage-wartung",
    title: "Hebeanlagen & Rückstau",
    description:
      "Wartung, Reinigung und Störungsbeseitigung für Hebeanlagen und Rückstausysteme.",
    tags: ["Regelmäßige Wartung", "Reinigung", "Störungsbeseitigung"],
    href: "/hebeanlage-wartung",
    image: `${IMG}/kanalsanierung-liner-einbau.webp`,
  },
  {
    id: "sanitaerarbeiten",
    title: "Sanitärarbeiten",
    description:
      "WC-Montage, Spülkästen, Armaturen, Siphon-Service, Eckventile und Wasserleitungen.",
    tags: ["WC-Montage", "Armaturen & Siphon", "Wasserleitungen"],
    href: "/sanitaerarbeiten",
    image: `${IMG}/toilette-verstopft-notfall-bad.webp`,
  },
  {
    id: "wasserschaden",
    title: "Wasserschaden & Nasssaugen",
    description:
      "Wasserentfernung aus Kellern, Auspumpen überfluteter Bereiche und Hilfe bei Wasserschäden.",
    tags: ["Keller entwässern", "Überflutung pumpen", "Wasserschaden-Hilfe"],
    href: "/wasserschaden",
    image: `${IMG}/abflussreinigung-kueche-profi.webp`,
  },
];
