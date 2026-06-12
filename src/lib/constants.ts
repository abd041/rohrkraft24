export const IMAGES = "/images";

export const SITE = {
  name: "Rohrkraft24",
  phone: "0176 2022 2200",
  phoneHref: "tel:+4917620222200",
  email: "info@rohrretter24.de",
  address: "Ferdinand-Happ-Straße 53, 60314 Frankfurt am Main",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.5!2d8.6821!3d50.1109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd096f477096c5%3A0x422d4d510db4ec00!2sFerdinand-Happ-Stra%C3%9Fe%2053%2C%2060314%20Frankfurt%20am%20Main!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde",
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
  { label: "Kanalreinigung", href: "/kanalreinigung", icon: "kanalreinigung" },
  { label: "Abflussreinigung", href: "/abflussreinigung", icon: "abflussreinigung" },
  { label: "Toilette verstopft", href: "/toilette-verstopft", icon: "toilette" },
  { label: "Rohrsanierung", href: "/rohrsanierung", icon: "rohrsanierung" },
  { label: "Kanalsanierung", href: "/kanalsanierung", icon: "kanalsanierung" },
  { label: "Kamerainspektion", href: "/kamerainspektion", icon: "kamerainspektion" },
  { label: "24h Notdienst", href: "/notdienst", icon: "notdienst" },
] as const;
