import { COPY, SITE } from "@/lib/constants";

export const CONTACT_SERVICE_OPTIONS = [
  { value: "rohrreinigung", label: "Rohrreinigung" },
  { value: "kamera-inspektion", label: "TV-Kamera-Inspektion" },
  { value: "rohrreparatur", label: "Rohrreparatur" },
  { value: "leckageortung", label: "Leckageortung" },
  { value: "abwasserreinigung", label: "Abwasserreinigung" },
  { value: "hebeanlage-wartung", label: "Hebeanlagen-Service" },
  { value: "sanitaerarbeiten", label: "Sanitärarbeiten" },
  { value: "wasserschaden", label: "Wasserschaden" },
  { value: "notdienst", label: "24h Notdienst" },
  { value: "sonstiges", label: "Sonstiges / Noch unsicher" },
] as const;

export const CONTACT_TRUST_POINTS = [
  { title: SITE.travelFeeShort, text: "bei Beauftragung verrechnet" },
  { title: "Schriftlicher Festpreis", text: "keine versteckten Kosten" },
  { title: `${SITE.reactionTime} Reaktionszeit`, text: "in Berlin und Umgebung" },
  { title: "24/7 Notdienst", text: "auch an Wochenenden" },
] as const;

export const CONTACT_VORTEILE = [
  {
    title: "Schnelle Reaktion",
    text: `${SITE.reactionTime} Reaktionszeit im Raum Berlin und Umgebung (100 km) – auch nachts, an Wochenenden und Feiertagen.`,
    featured: false,
    delay: "0s",
  },
  {
    title: "Persönliche Beratung",
    text: `Kein Callcenter – Sie sprechen direkt mit unserem ${COPY.technicians}, das Ihr Problem sofort einschätzt.`,
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
