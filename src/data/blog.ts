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
    title: "Rohrreinigung Kosten 2026: Preise, Faktoren & Spartipps",
    excerpt:
      "Was kostet eine professionelle Rohrreinigung? Alle Preise, Einflussfaktoren und wie Sie unnötige Kosten vermeiden – transparent erklärt.",
    category: "Kosten & Preise",
    date: "15. Januar 2026",
    href: "/blog/rohrreinigung-kosten/",
    image: `${IMG}/rohrreinigung-fachmann-einsatz-sm.webp`,
    alt: "Rohrreinigung Kosten – Fachmann im Einsatz",
  },
  {
    title: "Rohrverstopfung: 9 häufige Ursachen & wie Sie vorbeugen",
    excerpt:
      "Fettablagerungen, Wurzeln, Fremdkörper – die 9 häufigsten Ursachen für verstopfte Rohre und was Sie dagegen tun können.",
    category: "Ratgeber",
    date: "22. Januar 2026",
    href: "/blog/rohrverstopfung-ursachen/",
    image: `${IMG}/kanalreinigung-hochdruck-rohr-sm.webp`,
    alt: "Rohrverstopfung Ursachen – Inspektion im Rohr",
  },
  {
    title: "Kanalinspektion mit Kamera: Ablauf, Kosten & wann sie nötig ist",
    excerpt:
      "Die Kamerainspektion zeigt genau, was im Kanal falsch läuft. Wie sie abläuft, was sie kostet und wann sie sich lohnt.",
    category: "Leistungen",
    date: "29. Januar 2026",
    href: "/blog/kanalinspektion-kamera/",
    image: `${IMG}/kamerainspektion-kanal-garten-sm.webp`,
    alt: "Kanalinspektion Kamera – HD-Kamerawagen im Einsatz",
  },
];
