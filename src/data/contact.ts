export const CONTACT_SERVICE_OPTIONS = [
  { value: "rohrreinigung", label: "Rohrreinigung" },
  { value: "kanalreinigung", label: "Kanalreinigung" },
  { value: "abflussreinigung", label: "Abflussreinigung" },
  { value: "toilette-verstopft", label: "Toilette verstopft" },
  { value: "rohrsanierung", label: "Rohrsanierung" },
  { value: "kanalsanierung", label: "Kanalsanierung" },
  { value: "kamerainspektion", label: "Kamerainspektion" },
  { value: "notdienst", label: "24h Notdienst" },
  { value: "sonstiges", label: "Sonstiges / Noch unsicher" },
] as const;

export const CONTACT_TRUST_POINTS = [
  { title: "Gratis Anfahrt", text: "kein Mindestauftragswert" },
  { title: "0 € Schadenscheck", text: "kostenfreie Diagnose vor Ort" },
  { title: "Schriftlicher Festpreis", text: "keine versteckten Kosten" },
  { title: "30–45 Min. Reaktionszeit", text: "im Rhein-Main-Gebiet" },
] as const;

export const CONTACT_VORTEILE = [
  {
    title: "Schnelle Reaktion",
    text: "30–45 Minuten Reaktionszeit im gesamten Rhein-Main-Gebiet – auch nachts, an Wochenenden und Feiertagen.",
    featured: false,
    delay: "0s",
  },
  {
    title: "Persönliche Beratung",
    text: "Kein Callcenter – Sie sprechen direkt mit unserem erfahrenen Techniker-Team, das Ihr Problem sofort einschätzt.",
    featured: true,
    delay: "0.07s",
  },
  {
    title: "Festpreis-Angebot",
    text: "Transparente Kalkulation ohne Überraschungen – Ihr Festpreis steht schriftlich fest, bevor wir anfangen.",
    featured: false,
    delay: "0.14s",
  },
] as const;
