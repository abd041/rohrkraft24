export const TESTIMONIALS = [
  {
    name: "Stefan Müller",
    city: "Berlin-Charlottenburg",
    avatar: "/images/avatars/stefan-mueller.svg",
    text: "Sonntagnacht Rohrbruch im Keller – innerhalb von 40 Minuten war jemand da. Sauber gearbeitet, Schaden begrenzt und der Festpreis wurde exakt eingehalten. So wünscht man sich Notdienst.",
    service: "24h Notdienst",
    date: "vor 3 Wochen",
  },
  {
    name: "Anna Schmidt",
    city: "Potsdam",
    avatar: "/images/avatars/anna-schmidt.svg",
    text: "Unser Küchenabfluss war komplett dicht. Freundliche Beratung am Telefon, schnelle Anfahrt und nach der Reinigung gleich eine Kamerakontrolle – jetzt wissen wir, dass alles frei ist.",
    service: "Rohrreinigung",
    date: "vor 1 Monat",
  },
  {
    name: "Marco Lehmann",
    city: "Oranienburg",
    avatar: "/images/avatars/marco-lehmann.svg",
    text: "Rohrreparatur im Garten ohne großen Aufwand. Team war pünktlich, hat alles erklärt und den Garten sauber hinterlassen. Preis vorab schriftlich bekommen – keine böse Überraschung.",
    service: "Rohrreparatur",
    date: "vor 5 Wochen",
  },
  {
    name: "Petra Wagner",
    city: "Bernau bei Berlin",
    avatar: "/images/avatars/petra-wagner.svg",
    text: "Toilette am Feiertag verstopft – binnen einer Stunde erledigt. Besonders gut: transparente Kosten inklusive Anfahrtspauschale, bevor die Arbeit begann.",
    service: "WC-Notdienst",
    date: "vor 2 Monaten",
  },
  {
    name: "Jürgen Hoffmann",
    city: "Falkensee",
    avatar: "/images/avatars/juergen-hoffmann.svg",
    text: "Kamerainspektion im Altbau hat den Riss genau gezeigt. Reparatur gleich am nächsten Tag, mit Videobericht für die Versicherung. Sehr strukturiert und professionell.",
    service: "Kamera-Inspektion",
    date: "vor 6 Wochen",
  },
  {
    name: "Lisa Krüger",
    city: "Königs Wusterhausen",
    avatar: "/images/avatars/lisa-krueger.svg",
    text: "Hebeanlage im Keller war ausgefallen – nach Starkregen kein schönes Thema. Schnelle Hilfe, Pumpe wieder fit, alles erklärt. Werde mich wieder melden.",
    service: "Hebeanlagen-Service",
    date: "vor 2 Wochen",
  },
] as const;

export type Testimonial = (typeof TESTIMONIALS)[number];
