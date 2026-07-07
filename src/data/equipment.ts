export type EquipmentItem = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

const TOOLS = "/images/tools";

export const EQUIPMENT_ITEMS: EquipmentItem[] = [
  {
    title: "TV-Kamerasysteme",
    description:
      "Hochauflösende Kamerafahrten zur präzisen Schadenslokalisation im Rohrinneren – schnell, sauber und ohne Aufgraben.",
    image: `${TOOLS}/tv-kamerasysteme.png`,
    alt: "TV-Kamerasystem für professionelle Rohrinspektion",
  },
  {
    title: "Rohrortungsgeräte",
    description:
      "Elektronische Ortungsgeräte für die genaue Lagebestimmung von Rohren und Leckagen unter der Erde.",
    image: `${TOOLS}/rohrortungsgeraete.png`,
    alt: "Rohrortungsgerät zur Leitungslokalisation",
  },
  {
    title: "Rothenberger Rohrreinigungsmaschinen",
    description:
      "Professionelle Spiralmaschinen der Marke Rothenberger für hartnäckige Verstopfungen in Abwasser- und Entwässerungsleitungen.",
    image: `${TOOLS}/rothenberger-rohrreinigungsmaschinen.png`,
    alt: "Rothenberger Rohrreinigungsmaschine im Einsatz",
  },
  {
    title: "RIDGID FlexShaft-Systeme",
    description:
      "RIDGID FlexShaft-Technologie für maximale Reinigungsleistung bei engen Bögen und langen Leitungsstrecken.",
    image: `${TOOLS}/ridgid-flexshaft-systeme.png`,
    alt: "RIDGID FlexShaft-System für Rohrreinigung",
  },
  {
    title: "Nasssauger",
    description:
      "Industrielle Nasssauger für die schnelle Beseitigung von Wasser und Schmutz nach Rohrbruch oder Überflutung.",
    image: `${TOOLS}/nasssauger.png`,
    alt: "Industrieller Nasssauger für Notfalleinsätze",
  },
  {
    title: "Mobile Hochdruckspülung",
    description:
      "Mobile Hochdruckspülgeräte für die gründliche Reinigung von Kanal-, Abwasser- und Regenwasserleitungen.",
    image: `${TOOLS}/mobile-hochdruckspuelung.png`,
    alt: "Mobile Hochdruckspülung für Kanalleitungen",
  },
  {
    title: "Spezialwerkzeuge für Kunststoff-, Kupfer- und Stahlrohrarbeiten",
    description:
      "Passgenaues Werkzeug für alle gängigen Rohrmaterialien – für saubere Verbindungen und dauerhafte Reparaturen.",
    image: `${TOOLS}/spezialwerkzeuge-rohre.png`,
    alt: "Spezialwerkzeuge für unterschiedliche Rohrmaterialien",
  },
];
