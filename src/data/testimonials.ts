export type Testimonial = {
  name: string;
  city: string;
  initials: string;
  avatarColor: string;
  text: string;
  service: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Michael S.",
    city: "Frankfurt",
    initials: "MS",
    avatarColor: "#315D9F",
    text: "Um 23 Uhr Rohrbruch im Keller – Rohrretter24 war in 35 Minuten da. Absolut professionell, sauber und fair im Preis. Klare Empfehlung!",
    service: "Notdienst",
  },
  {
    name: "Sabine K.",
    city: "Wiesbaden",
    initials: "SK",
    avatarColor: "#153A6B",
    text: "Der Abfluss in unserer Küche war komplett verstopft. Das Team hat das Problem in 20 Minuten gelöst und sogar eine Kamerainspektion gemacht.",
    service: "Abflussreinigung",
  },
  {
    name: "Thomas W.",
    city: "Offenbach",
    initials: "TW",
    avatarColor: "#0f2d52",
    text: "Kanalsanierung ohne Aufgraben – hätte ich nicht für möglich gehalten. Keine Schäden am Garten, faire Kosten. Werde Rohrretter24 weiterempfehlen.",
    service: "Kanalsanierung",
  },
  {
    name: "Andrea M.",
    city: "Darmstadt",
    initials: "AM",
    avatarColor: "#5AA0D3",
    text: "Toilette verstopft am Sonntagmorgen – kein Problem für Rohrretter24. Innerhalb einer Stunde war alles erledigt. Sehr freundliches Team!",
    service: "WC Notdienst",
  },
  {
    name: "Klaus B.",
    city: "Frankfurt",
    initials: "KB",
    avatarColor: "#254a85",
    text: "Rohrsanierung im Altbau ohne großen Aufwand. Die Techniker wussten genau was sie tun und haben den Schaden mit der Kamera lokalisiert.",
    service: "Rohrsanierung",
  },
  {
    name: "Julia F.",
    city: "Hanau",
    initials: "JF",
    avatarColor: "#153A6B",
    text: "Schnell, zuverlässig, transparent. Ich hatte Angst vor hohen Kosten, aber der Festpreis wurde eingehalten. Sehr zu empfehlen!",
    service: "Kanalreinigung",
  },
];
