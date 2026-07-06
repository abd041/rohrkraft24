import { SITE } from "@/lib/constants";

export type FAQItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Wie lange dauert eine professionelle Rohrreinigung?",
    answer:
      "In der Regel dauert eine Standard-Rohrreinigung zwischen 30 und 60 Minuten. Bei hartnäckigen Verstopfungen oder mehreren betroffenen Stellen kann es auch etwas länger dauern. Dank unserer Erfahrung und Technik lösen wir die meisten Probleme beim ersten Einsatz.",
  },
  {
    question: "Wie schnell sind Sie vor Ort?",
    answer:
      "Unser Team ist bei akuten Notfällen innerhalb von 30 bis 60 Minuten bei Ihnen – im Raum Berlin und Umgebung (100 km). Wir bieten einen 24-Stunden-Notdienst, auch an Wochenenden und Feiertagen.",
  },
  {
    question: "Was kostet eine Rohrreinigung?",
    answer: `Die Kosten richten sich nach dem Aufwand, der Lage der Verstopfung und der gewählten Methode. Transparente Festpreise beginnen bei etwa 89 €. ${SITE.travelFeeShort} – bei Beauftragung verrechnet. Vor Beginn der Arbeit erhalten Sie immer eine klare Kostenübersicht.`,
  },
  {
    question: "Wie entsteht eine Rohrverstopfung?",
    answer:
      "Verstopfungen entstehen meist durch Fett, Haare, Seifenreste, Kalk, Hygieneartikel oder Fremdkörper, die sich im Rohr ansammeln. Auch eingewachsene Wurzeln oder fehlerhafte Rohrverlegung können Ursachen sein.",
  },
  {
    question: "Welche Reinigungsmethoden werden eingesetzt?",
    answer:
      "Wir nutzen je nach Situation mechanische Reinigung mit Spirale, Hochdruckspülung, Frästechnik bei festen Ablagerungen und Kamerainspektion zur genauen Lokalisierung. Alle Methoden sind schonend, effektiv und auf dem neuesten Stand der Technik.",
  },
  {
    question: "Kann man Rohre reparieren ohne aufzugraben?",
    answer:
      "Bei aufgrabungsfreien Reparaturen kommt es auf den Einzelfall an. Häufig lässt sich ein Rohrschaden gezielt lokalisieren und punktuell reparieren, ohne den gesamten Leitungsverlauf freizulegen. Sprechen Sie uns an, wir prüfen vor Ort, welche Lösung in Ihrem Fall sinnvoll ist.",
  },
  {
    question: "Sind Hausmittel oder Chemikalien zu empfehlen?",
    answer:
      "Viele Hausmittel wie Essig & Natron helfen nur bei leichten Ablagerungen. Chemische Rohrreiniger aus dem Handel sind oft aggressiv, schädigen Rohre und die Umwelt. Wir empfehlen, bei hartnäckigen Verstopfungen professionelle Hilfe zu rufen.",
  },
];
