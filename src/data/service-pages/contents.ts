import type { ServicePageContent } from "./types";
import { SITE } from "@/lib/constants";

const pricingBase = `Bei ${SITE.name} erhalten Sie vor Arbeitsbeginn einen schriftlichen Festpreis – transparent und ohne versteckte Positionen.`;

export const SERVICE_CONTENTS: Record<string, ServicePageContent> = {
  rohrreinigung: {
    intro:
      "Verstopfte Rohre sind mehr als ein Ärgernis: Stehendes Wasser in der Küche, übelriechende Abflüsse im Bad oder eine blockierte Toilette können schnell zum akuten Problem werden. In Berlin und im Umkreis von 100 km beseitigen wir Verstopfungen in Haushalts- und Grundleitungen mit modernster Spirale, Hochdrucktechnik und Kamera – schnell, sauber und zum vereinbarten Festpreis.",
    whenNeeded: {
      title: "Wann ist eine professionelle Rohrreinigung nötig?",
      items: [
        "Wasser steht im Waschbecken, in der Dusche oder im Küchenabfluss",
        "Toilette spült nicht ab oder läuft über",
        "Unangenehmer Geruch aus Abfluss oder Keller",
        "Gluckernde Geräusche in Leitungen beim Abfließen",
        "Wiederkehrende Verstopfungen trotz Hausmitteln",
        "Mehrere Abflüsse betroffen – Hinweis auf Grundleitung",
      ],
    },
    process: {
      title: "So läuft unsere Rohrreinigung ab",
      steps: [
        {
          title: "Anfrage & Ersteinschätzung",
          text: "Sie schildern das Problem telefonisch. Wir schätzen Dringlichkeit und Technik ein – bei Notfällen sind wir in der Regel innerhalb von 30–60 Minuten vor Ort.",
        },
        {
          title: "Vor-Ort-Diagnose",
          text: "Unser Techniker prüft betroffene Abflüsse, Leitungsverlauf und Zugänglichkeit. Bei unklarer Ursache empfehlen wir eine Kamerainspektion.",
        },
        {
          title: "Festpreis-Angebot",
          text: "Sie erhalten ein schriftliches Angebot mit Festpreis vor Beginn der Arbeiten – inklusive transparenter Angabe der Anfahrtspauschale.",
        },
        {
          title: "Reinigung & Funktionsprüfung",
          text: "Je nach Befund: Spirale, Hochdruckspülung oder Frästechnik. Abschließend prüfen wir den freien Abfluss und dokumentieren das Ergebnis.",
        },
      ],
    },
    examples: {
      title: "Typische Einsätze in Berlin & Umgebung",
      items: [
        "Küchenabfluss nach Fett- und Speiseresten",
        "Haarverstopfung in Dusche und Badewanne",
        "WC-Verstopfung in Mietwohnung oder Einfamilienhaus",
        "Grundleitung in Altbau mit engen Rohrbögen",
        "Fallleitung im Mehrfamilienhaus nach Sanierung",
      ],
    },
    pricing: `${pricingBase} Einfache Abflussreinigungen beginnen ab etwa 89 €, umfangreichere Rohrreinigungen mit Hochdruck ab etwa 149 € – abhängig von Aufwand und Zugang.`,
    related: [
      { href: "/kamera-inspektion/", label: "TV-Kamera-Inspektion" },
      { href: "/abwasserreinigung/", label: "Abwasserreinigung" },
      { href: "/notdienst/", label: "24h Notdienst" },
    ],
  },

  "kamera-inspektion": {
    intro:
      "Wenn der Abfluss immer wieder verstopft oder Feuchtigkeit im Keller auftritt, reicht Raten nicht aus. Mit einer TV-Kamera-Inspektion sehen wir direkt im Rohr: Risse, Wurzeleinwuchs, Ablagerungen oder Versatz – millimetergenau dokumentiert per Foto und Video. Ideal vor größeren Reparaturen, nach Wasserschäden oder beim Kauf älterer Immobilien in Berlin und Umgebung.",
    whenNeeded: {
      title: "Wann lohnt sich eine Kamerainspektion?",
      items: [
        "Wiederholte Verstopfungen ohne erkennbare Ursache",
        "Verdacht auf Rohrbruch, Undichtigkeit oder Leckage",
        "Vor Sanierung oder Modernisierung der Leitung",
        "Nach Wasserschaden zur Schadensdokumentation",
        "Bei Immobilienkauf oder Übergabeprotokoll",
        "Zur Kontrolle nach Rohrreparatur oder Reinigung",
      ],
    },
    process: {
      title: "Ablauf der TV-Kamera-Inspektion",
      steps: [
        {
          title: "Vorbereitung der Leitung",
          text: "Bei starken Ablagerungen spülen wir die Leitung vor, damit die Kamera uneingeschränkt einfahren kann.",
        },
        {
          title: "Kamerabefahrung",
          text: "Ein flexibles Kamerakabel wird ins Rohr eingeführt. Live-Bild auf dem Monitor zeigt Zustand, Material und Schadstellen.",
        },
        {
          title: "Ortung & Dokumentation",
          text: "Schadstellen werden mit Rohrortungsgerät markiert. Sie erhalten Foto-/Videobericht für Versicherung oder Handwerker.",
        },
        {
          title: "Beratung & nächste Schritte",
          text: "Wir erklären den Befund verständlich und empfehlen Reinigung, Reparatur oder Sanierung – ohne unnötige Zusatzleistungen.",
        },
      ],
    },
    examples: {
      title: "Typische Befunde bei Inspektionen",
      items: [
        "Wurzeleinwuchs in Außenleitungen",
        "Rohrversatz nach Setzung im Altbau",
        "Fett- und Kalkschicht in Küchenleitungen",
        "Korrosion an Metallrohren",
        "Undichte Muffen oder Anschlüsse",
      ],
    },
    pricing: `${pricingBase} Kamerainspektionen beginnen typischerweise ab etwa 100 €, Kombination mit Reinigung ab etwa 250 €.`,
    related: [
      { href: "/rohrreinigung/", label: "Rohrreinigung" },
      { href: "/leckageortung/", label: "Leckageortung" },
      { href: "/rohrreparatur/", label: "Rohrreparatur" },
    ],
  },

  rohrreparatur: {
    intro:
      "Undichte Rohre, Risse oder beschädigte Anschlüsse können schnell teuer werden – von Feuchtigkeit im Mauerwerk bis zum Wasserschaden. Wir reparieren und sanieren HT-, KG-, Kunststoff-, Kupfer- und Stahlrohre fachgerecht: von punktuellen Reparaturen bis zur grabenlosen Inliner-Sanierung im Raum Berlin und Umgebung.",
    whenNeeded: {
      title: "Anzeichen für eine nötige Rohrreparatur",
      items: [
        "Feuchte Stellen an Wänden, Decken oder Böden",
        "Druckverlust oder tropfende Leitungen",
        "Sichtbare Korrosion oder Risse am Rohr",
        "Nach Kamerainspektion mit Schadensnachweis",
        "Wiederholte Leckagen an derselben Stelle",
        "Alte Leitungen vor Sanierung oder Verkauf",
      ],
    },
    process: {
      title: "Unser Reparatur-Ablauf",
      steps: [
        {
          title: "Schadensanalyse",
          text: "Kamera-Inspektion und Leckageortung lokalisieren die Schadstelle präzise – ohne unnötiges Aufgraben.",
        },
        {
          title: "Lösungsvorschlag",
          text: "Je nach Schaden: lokale Reparatur, Muffentausch, Inliner oder Leitungsabschnitt. Festpreis vor Start.",
        },
        {
          title: "Durchführung",
          text: "Reparatur mit Spezialwerkzeug und passendem Material für Ihren Rohrtyp – sauber und dokumentiert.",
        },
        {
          title: "Abschlusskontrolle",
          text: "Dichtheitsprüfung und erneute Kamerakontrolle bei Bedarf. Übergabe mit kurzem Protokoll.",
        },
      ],
    },
    examples: {
      title: "Häufige Reparatur-Einsätze",
      items: [
        "Riss in KG-Rohr im Gartenbereich",
        "Undichte Siphon- oder WC-Anschlüsse",
        "Korrosion an Warmwasserleitung im Keller",
        "Beschädigung nach Bohrarbeiten",
        "Grabenlose Sanierung mit Inliner-Verfahren",
      ],
    },
    pricing: `${pricingBase} Kleine Reparaturen ab etwa 150 €, umfangreichere Sanierungen nach individuellem Angebot.`,
    related: [
      { href: "/kamera-inspektion/", label: "TV-Kamera-Inspektion" },
      { href: "/leckageortung/", label: "Leckageortung" },
      { href: "/wasserschaden/", label: "Wasserschaden" },
    ],
  },

  leckageortung: {
    intro:
      "Ein Wasserfleck an der Wand, steigende Wasserrechnung oder feuchter Keller – ohne sichtbare Quelle ist schnelles Handeln gefragt. Mit akustischer Ortung, Feuchtemessung und Kameratechnik finden wir versteckte Lecks in Berlin und Umgebung, bevor der Schaden größer wird.",
    whenNeeded: {
      title: "Wann sollten Sie Leckageortung beauftragen?",
      items: [
        "Feuchtigkeit ohne erkennbare Ursache",
        "Verdacht auf Rohrbruch unter Estrich oder in der Wand",
        "Plötzlich hoher Wasserverbrauch",
        "Nach Frostschäden an Außenleitungen",
        "Vor Renovierung bei unklarem Feuchtebefund",
        "Versicherungsfall – Dokumentation gewünscht",
      ],
    },
    process: {
      title: "So orten wir Leckagen",
      steps: [
        {
          title: "Erstgespräch & Sichtprüfung",
          text: "Wir klären Symptome, Gebäudeteil und Leitungsverlauf. Sichtbare Anschlüsse werden zuerst geprüft.",
        },
        {
          title: "Technische Ortung",
          text: "Je nach Fall: akustische Ortung, Feuchtemessung, Druckprüfung oder Kamerainspektion.",
        },
        {
          title: "Markierung der Schadstelle",
          text: "Die Leckage wird exakt markiert – für gezielte Reparatur mit minimaler Aufbruchfläche.",
        },
        {
          title: "Reparatur oder Empfehlung",
          text: "Auf Wunsch führen wir die Reparatur direkt durch oder übergeben einen klaren Befundbericht.",
        },
      ],
    },
    examples: {
      title: "Typische Leckage-Szenarien",
      items: [
        "Warmwasserleitung unter Fliesen im Bad",
        "Frostschaden an Außenwasserhahn",
        "Undichtigkeit in Hebeanlage",
        "Leck in Grundleitung zum Kanal",
        "Feuchte Decke nach Nachbarleitung",
      ],
    },
    pricing: `${pricingBase} Leckageortung ab etwa 120 €, in Kombination mit Reparatur oft günstiger als Einzelauftrag.`,
    related: [
      { href: "/kamera-inspektion/", label: "TV-Kamera-Inspektion" },
      { href: "/rohrreparatur/", label: "Rohrreparatur" },
      { href: "/wasserschaden/", label: "Wasserschaden" },
    ],
  },

  abwasserreinigung: {
    intro:
      "Urinstein, Kalk und Fett bilden mit der Zeit harte Ablagerungen in Abwasserleitungen – besonders in Gewerbe, Mehrfamilienhäusern und älteren Bestandsgebäuden. Mit Hochdruckreinigung und Spezialgeräten entfernen wir Ablagerungen gründlich und stellen den vollen Rohrquerschnitt wieder her.",
    whenNeeded: {
      title: "Wann ist eine Abwasserreinigung sinnvoll?",
      items: [
        "Langsam ablaufende Abflüsse trotz normaler Reinigung",
        "Wiederkehrende Verstopfungen in derselben Leitung",
        "Übler Geruch aus Abwasserrohren",
        "Vor Vermietung oder Eigentümerwechsel",
        "Nach längerer Leerstandzeit einer Wohnung",
        "In Gastronomie und Gewerbe mit Fettbelastung",
      ],
    },
    process: {
      title: "Ablauf der Abwasserreinigung",
      steps: [
        {
          title: "Bestandsaufnahme",
          text: "Wir prüfen Leitungslänge, Zugänge und Verschmutzungsgrad – oft mit Kamera vorab.",
        },
        {
          title: "Hochdruckreinigung",
          text: "Spezialdüsen lösen Urinstein, Kalk und Fett von den Rohrwänden. Ablauf in Richtung Kanal.",
        },
        {
          title: "Nachkontrolle",
          text: "Kamerabefahrung oder Durchflusstest bestätigt das Ergebnis.",
        },
        {
          title: "Empfehlung zur Vorbeugung",
          text: "Wartungsintervalle und Verhaltenshinweise für dauerhaft freie Leitungen.",
        },
      ],
    },
    examples: {
      title: "Typische Einsatzorte",
      items: [
        "Fallleitung in Berliner Altbau",
        "Gastronomie-Küche mit Fettabscheider",
        "Keller-Grundleitung mit Urinstein",
        "Mehrfamilienhaus nach Jahren ohne Wartung",
        "Gewerbeobjekt vor Hygiene-Inspektion",
      ],
    },
    pricing: `${pricingBase} Grundreinigung ab etwa 199 €, abhängig von Leitungslänge und Verschmutzung.`,
    related: [
      { href: "/rohrreinigung/", label: "Rohrreinigung" },
      { href: "/kamera-inspektion/", label: "TV-Kamera-Inspektion" },
      { href: "/hebeanlage-wartung/", label: "Hebeanlagen-Service" },
    ],
  },

  "hebeanlage-wartung": {
    intro:
      "Hebeanlagen und Rückstausicherungen sind unverzichtbar, wenn Abwasser unterhalb der Rückstauebene abgeführt werden muss – etwa in Kellern oder Souterrainwohnungen. Wir warten, reinigen und reparieren Hebeanlagen in Berlin und Umgebung, damit Ihre Entwässerung zuverlässig funktioniert.",
    whenNeeded: {
      title: "Wann brauchen Sie Hebeanlagen-Service?",
      items: [
        "Pumpe läuft dauerhaft oder gar nicht",
        "Alarm oder Störungsmeldung am Gerät",
        "Unangenehmer Geruch aus der Hebeanlage",
        "Wasser staut sich im Kellerabfluss",
        "Jährliche Wartung laut Herstellervorgabe",
        "Nach Rückstauereignis oder Starkregen",
      ],
    },
    process: {
      title: "Unser Hebeanlagen-Service",
      steps: [
        {
          title: "Funktionsprüfung",
          text: "Schwimmerschalter, Rückstauklappe, Pumpe und Steuerung werden geprüft.",
        },
        {
          title: "Reinigung",
          text: "Ablagerungen im Sammelbecken und an beweglichen Teilen werden entfernt.",
        },
        {
          title: "Wartung & Einstellung",
          text: "Verschleißteile prüfen, Schaltpunkte einstellen, Dichtungen kontrollieren.",
        },
        {
          title: "Protokoll",
          text: "Kurzer Wartungsbericht für Eigentümer oder Hausverwaltung.",
        },
      ],
    },
    examples: {
      title: "Typische Anlagen",
      items: [
        "Keller-WC mit Hebeanlage",
        "Waschküche unter Rückstauebene",
        "Gastronomie-Küche mit Fettabscheider-Pumpe",
        "Rückstauklappe in Einfamilienhaus",
        "Mehrfachpumpenanlage im Gewerbe",
      ],
    },
    pricing: `${pricingBase} Wartung und Störungsbeseitigung ab etwa 120 €, Reparaturen nach Aufwand mit Festpreis vorab.`,
    related: [
      { href: "/rohrreparatur/", label: "Rohrreparatur" },
      { href: "/wasserschaden/", label: "Wasserschaden" },
      { href: "/notdienst/", label: "24h Notdienst" },
    ],
  },

  sanitaerarbeiten: {
    intro:
      "Neben Rohrreinigung und Notfalleinsätzen übernehmen wir Sanitärarbeiten im kleinen und mittleren Umfang: WC-Montage, Spülkasten, Armaturen, Siphons und Wasserleitungen. Ideal, wenn nach einer Verstopfung oder Reparatur auch der Austausch von Bauteilen ansteht – aus einer Hand in Berlin und Umgebung.",
    whenNeeded: {
      title: "Welche Sanitärarbeiten wir übernehmen",
      items: [
        "WC oder Stand-WC montieren und anschließen",
        "Spülkasten reparieren oder austauschen",
        "Armaturen und Mischbatterien wechseln",
        "Siphon reinigen, tauschen oder neu montieren",
        "Eckventile und flexible Anschlussschläuche",
        "Kleinere Arbeiten an Warm- und Kaltwasserleitungen",
      ],
    },
    process: {
      title: "Ablauf unserer Sanitärarbeiten",
      steps: [
        {
          title: "Beratung vor Ort",
          text: "Wir prüfen Anschlüsse, Zustand der Leitung und passendes Material.",
        },
        {
          title: "Angebot",
          text: "Festpreis für Material und Arbeitszeit – transparent vor Beginn.",
        },
        {
          title: "Montage",
          text: "Fachgerechter Einbau nach DIN-Norm, Dichtheitsprüfung inklusive.",
        },
        {
          title: "Übergabe",
          text: "Kurze Einweisung und saubere Hinterlassung der Baustelle.",
        },
      ],
    },
    examples: {
      title: "Häufige Aufträge",
      items: [
        "WC-Tausch nach Wasserschaden im Bad",
        "Undichter Siphon unter Waschbecken",
        "Neue Armatur nach Renovierung",
        "Spülkasten defekt – Wasser läuft nach",
        "Kombination mit Rohrreinigung im selben Termin",
      ],
    },
    pricing: `${pricingBase} Einfache Montagen ab etwa 80 € zzgl. Material, komplexere Arbeiten nach Besichtigung.`,
    related: [
      { href: "/rohrreinigung/", label: "Rohrreinigung" },
      { href: "/rohrreparatur/", label: "Rohrreparatur" },
      { href: "/notdienst/", label: "24h Notdienst" },
    ],
  },

  wasserschaden: {
    intro:
      "Rohrbruch, überlaufende Toilette oder Starkregen – wenn Wasser in Keller oder Wohnung eindringt, zählt jede Minute. Wir pumpen Wasser ab, trocknen betroffene Bereiche mit Nasssaugern vor und unterstützen bei der ersten Schadensbegrenzung in Berlin und Umgebung – auch als Notdienst rund um die Uhr.",
    whenNeeded: {
      title: "Wann Sie uns bei Wasserschaden rufen sollten",
      items: [
        "Stehendes Wasser im Keller oder Flur",
        "Überflutung nach Rohrbruch oder Leck",
        "Wasser aus Hebeanlage oder Rückstau",
        "Nach Löschwasser oder Sturmschaden",
        "Feuchte Böden nach unbekannter Ursache",
        "Sofortige Entwässerung vor Trocknungsfirma nötig",
      ],
    },
    process: {
      title: "Unsere Sofortmaßnahmen",
      steps: [
        {
          title: "Schnelle Anfahrt",
          text: "Notdienst-Team mit Nasssaugern und Pumpen – Ziel: Wassermenge sofort reduzieren.",
        },
        {
          title: "Wasserentfernung",
          text: "Auspumpen von Kellern, Souterrain und betroffenen Räumen. Grobe Verschmutzung mitnehmen.",
        },
        {
          title: "Leckage lokalisieren",
          text: "Wenn Ursache unklar: Leckageortung und ggf. provisorische Abdichtung.",
        },
        {
          title: "Weiteres Vorgehen",
          text: "Empfehlung für Trocknung, Versicherung und dauerhafte Reparatur – dokumentiert für Ihre Unterlagen.",
        },
      ],
    },
    examples: {
      title: "Typische Wasserschaden-Einsätze",
      items: [
        "Keller unter Wasser nach Rohrbruch",
        "Überlaufende Waschmaschine im Mehrfamilienhaus",
        "Hebeanlagen-Ausfall bei Starkregen",
        "Leck in Warmwasserleitung über Nacht",
        "Erste Hilfe vor Fachfirma für Bautrocknung",
      ],
    },
    pricing: `${pricingBase} Notfall-Einsätze nach Aufwand mit Festpreis vor Ort – Versicherungsrelevante Dokumentation auf Wunsch.`,
    related: [
      { href: "/leckageortung/", label: "Leckageortung" },
      { href: "/rohrreparatur/", label: "Rohrreparatur" },
      { href: "/notdienst/", label: "24h Notdienst" },
    ],
  },

  notdienst: {
    intro:
      "Rohrverstopfung mitten in der Nacht, Rohrbruch am Wochenende oder eine überlaufende Toilette am Feiertag – unser 24h-Notdienst ist für alle Leistungen von RohrRetter24 erreichbar. Im Raum Berlin und Umgebung (100 km) sind wir in der Regel innerhalb von 30–60 Minuten bei Ihnen.",
    whenNeeded: {
      title: "Typische Notdienst-Situationen",
      items: [
        "Toilette läuft über und kann nicht genutzt werden",
        "Keller läuft voll – Wasser steigt schnell",
        "Kein Abfluss im gesamten Haus funktioniert",
        "Rohrbruch mit aktivem Wasserfluss",
        "Hebeanlage ausgefallen bei Rückstau",
        "Gewerbebetrieb kann nicht öffnen wegen Verstopfung",
      ],
    },
    process: {
      title: "So funktioniert unser Notdienst",
      steps: [
        {
          title: "Anruf",
          text: "Sie erreichen uns direkt – kein Callcenter. Kurze Schilderung des Notfalls.",
        },
        {
          title: "Anfahrt",
          text: "Techniker mit vollständiger Ausrüstung macht sich sofort auf den Weg.",
        },
        {
          title: "Soforthilfe vor Ort",
          text: "Schadensbegrenzung, Reinigung oder Reparatur – je nach Situation.",
        },
        {
          title: "Festpreis",
          text: "Auch nachts und an Feiertagen: Preis vor Arbeitsbeginn schriftlich vereinbaren.",
        },
      ],
    },
    examples: {
      title: "Notdienst für alle Leistungen",
      items: [
        "Rohrreinigung & Verstopfung",
        "Rohrbruch & Leckageortung",
        "Wasserschaden & Nasssaugen",
        "Hebeanlagen-Störung",
        "Sanitär-Notfall am Wochenende",
      ],
    },
    pricing: `${pricingBase} Notdienst-Zuschläge nachts und an Feiertagen kommunizieren wir transparent vor dem Einsatz – keine Überraschung auf der Rechnung.`,
    related: [
      { href: "/rohrreinigung/", label: "Rohrreinigung" },
      { href: "/wasserschaden/", label: "Wasserschaden" },
      { href: "/leckageortung/", label: "Leckageortung" },
    ],
  },
};
