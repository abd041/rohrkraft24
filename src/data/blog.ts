import { IMAGES as IMG } from "@/lib/constants";

export type BlogPost = {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  href: string;
  image: string;
  alt: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Was kostet Rohrreinigung in Berlin? Preise & Festpreise 2026",
    excerpt:
      "Realistische Preisspannen, Anfahrtspauschale und Spartipps – transparent erklärt für Berlin und Umgebung.",
    category: "Kosten & Preise",
    date: "12. März 2026",
    href: "/blog/rohrreinigung-kosten/",
    image: `${IMG}/rohrreinigung-fachmann-einsatz-sm.webp`,
    alt: "Techniker bei Rohrreinigung in Berlin",
  },
  {
    title: "Rohrverstopfung: Ursachen erkennen und vorbeugen",
    excerpt:
      "Fett, Haare, Kalk oder Wurzeln – die häufigsten Ursachen und was Sie im Alltag dagegen tun können.",
    category: "Ratgeber",
    date: "5. März 2026",
    href: "/blog/rohrverstopfung-ursachen/",
    image: `${IMG}/kanalreinigung-hochdruck-rohr-sm.webp`,
    alt: "Rohrverstopfung in Berliner Leitung",
  },
  {
    title: "Rohrkamera-Inspektion: Wann sie sinnvoll ist und was sie kostet",
    excerpt:
      "TV-Kamera im Rohr – Ablauf, typische Befunde und Kosten für Eigentümer in Berlin und Brandenburg.",
    category: "Leistungen",
    date: "18. Februar 2026",
    href: "/blog/kanalinspektion-kamera/",
    image: `${IMG}/kamerainspektion-kanal-garten-sm.webp`,
    alt: "TV-Kamera-Inspektion einer Abwasserleitung",
  },
];
