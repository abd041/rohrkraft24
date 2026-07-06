// TODO: Replace placeholder images with final matching photos from the client ZIP file.
// Place the final images in: public/images/equipment/
// Expected filenames (webp preferred):
//   tv-kamerasysteme.webp
//   rohrortungsgeraete.webp
//   rothenberger-rohrreinigungsmaschinen.webp
//   ridgid-flexshaft-systeme.webp
//   nasssauger.webp
//   mobile-hochdruckspuelung.webp
//   spezialwerkzeuge-rohre.webp
//
// Once the ZIP images are placed, update each `image` path below to:
//   /images/equipment/<filename>.webp

export type EquipmentItem = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const EQUIPMENT_ITEMS: EquipmentItem[] = [
  {
    title: "TV-Kamerasysteme",
    description:
      "Hochauflösende Kamerafahrten zur präzisen Schadenslokalisation im Rohrinneren – schnell, sauber und ohne Aufgraben.",
    // TODO: replace with /images/equipment/tv-kamerasysteme.webp
    image: "/images/kamerainspektion-kanal-garten.webp",
    alt: "TV-Kamerasystem für professionelle Rohrinspektion",
  },
  {
    title: "Rohrortungsgeräte",
    description:
      "Elektronische Ortungsgeräte für die genaue Lagebestimmung von Rohren und Leckagen unter der Erde.",
    // TODO: replace with /images/equipment/rohrortungsgeraete.webp
    image: "/images/rohrreinigung-fachmann-einsatz.webp",
    alt: "Rohrortungsgerät zur Leitungslokalisation",
  },
  {
    title: "Rothenberger Rohrreinigungsmaschinen",
    description:
      "Professionelle Spiralmaschinen der Marke Rothenberger für hartnäckige Verstopfungen in Abwasser- und Entwässerungsleitungen.",
    // TODO: replace with /images/equipment/rothenberger-rohrreinigungsmaschinen.webp
    image: "/images/rohrreinigung-fachmann-einsatz.webp",
    alt: "Rothenberger Rohrreinigungsmaschine im Einsatz",
  },
  {
    title: "RIDGID FlexShaft-Systeme",
    description:
      "RIDGID FlexShaft-Technologie für maximale Reinigungsleistung bei engen Bögen und langen Leitungsstrecken.",
    // TODO: replace with /images/equipment/ridgid-flexshaft-systeme.webp
    image: "/images/kanalreinigung-hochdruck-rohr.webp",
    alt: "RIDGID FlexShaft-System für Rohrreinigung",
  },
  {
    title: "Nasssauger",
    description:
      "Industrielle Nasssauger für die schnelle Beseitigung von Wasser und Schmutz nach Rohrbruch oder Überflutung.",
    // TODO: replace with /images/equipment/nasssauger.webp
    image: "/images/notdienst-rohrreinigung-sofort.webp",
    alt: "Industrieller Nasssauger für Notfalleinsätze",
  },
  {
    title: "Mobile Hochdruckspülung",
    description:
      "Mobile Hochdruckspülgeräte für die gründliche Reinigung von Kanal-, Abwasser- und Regenwasserleitungen.",
    // TODO: replace with /images/equipment/mobile-hochdruckspuelung.webp
    image: "/images/kanalreinigung-hochdruck-rohr.webp",
    alt: "Mobile Hochdruckspülung für Kanalleitungen",
  },
  {
    title: "Spezialwerkzeuge für Kunststoff-, Kupfer- und Stahlrohre",
    description:
      "Passgenaues Werkzeug für alle gängigen Rohrmaterialien – für saubere Verbindungen und dauerhafte Reparaturen.",
    // TODO: replace with /images/equipment/spezialwerkzeuge-rohre.webp
    image: "/images/rohrretter24-team-berlin-einsatz.webp",
    alt: "Spezialwerkzeuge für unterschiedliche Rohrmaterialien",
  },
];
