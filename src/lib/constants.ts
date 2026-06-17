export const IMAGES = "/images";

export const SITE = {
  name: "Rohrretter24",
  phone: "0176 2022 2200",
  phoneHref: "tel:+4917620222200",
  email: "info@rohrretter24.de",
  address: "Berlin und Umgebung (100 km Radius)",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194473.69303802258!2d13.088345!3d52.520008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b35e9103!2sBerlin!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde",
  rating: 4.9,
  reviewCount: 300,
} as const;

export const NAV_LINKS = [
  { label: "Startseite", href: "/" },
  { label: "Über uns", href: "/ueber-uns/" },
  { label: "Einsatzgebiete", href: "/einsatzgebiete/" },
  { label: "Kontakt", href: "/kontakt/" },
  { label: "Blog", href: "/blog/" },
] as const;

export const SERVICE_LINKS = [
  { label: "Rohrreinigung", href: "/rohrreinigung", icon: "rohrreinigung" },
  { label: "TV-Kamera-Inspektion", href: "/kamera-inspektion", icon: "kamera-inspektion" },
  { label: "Rohrreparatur", href: "/rohrreparatur", icon: "rohrreparatur" },
  { label: "Leckageortung", href: "/leckageortung", icon: "leckageortung" },
  { label: "Abwasserreinigung", href: "/abwasserreinigung", icon: "abwasserreinigung" },
  { label: "Hebeanlagen-Service", href: "/hebeanlage-wartung", icon: "hebeanlage-wartung" },
  { label: "Sanitärarbeiten", href: "/sanitaerarbeiten", icon: "sanitaerarbeiten" },
  { label: "Wasserschaden", href: "/wasserschaden", icon: "wasserschaden" },
  { label: "24h Notdienst", href: "/notdienst", icon: "notdienst" },
] as const;

export const EQUIPMENT_ITEMS = [
  "TV-Kamerasysteme",
  "Rohrortungsgeräte",
  "Rothenberger Rohrreinigungsmaschinen",
  "RIDGID FlexShaft-Systeme",
  "Nasssauger",
  "Mobile Hochdruckspülung",
  "Spezialwerkzeuge für Kunststoff-, Kupfer- und Stahlrohrarbeiten",
] as const;
