import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join } from "path";
import { SERVICES } from "./services-config.mjs";

const BRAND = "RohrRetter24";
const AREA = "Berlin & Umgebung";
const TRAVEL = "Anfahrt pauschal 49 €";
const REACTION = "30–60 Min.";

const routes = JSON.parse(readFileSync("src/data/site-routes.json", "utf8"));
const cities = JSON.parse(readFileSync("src/data/berlin-cities.json", "utf8"));
const cityBySlug = Object.fromEntries(cities.map((c) => [c.slug, c]));
const serviceBySlug = Object.fromEntries(SERVICES.map((s) => [s.slug, s]));

const blogDir = "src/data/blog-posts";
const blogPosts = Object.fromEntries(
  readdirSync(blogDir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => {
      const post = JSON.parse(readFileSync(join(blogDir, f), "utf8"));
      return [post.slug, post];
    }),
);

const BLOG_EXCERPTS = {
  "rohrreinigung-kosten":
    "Realistische Preisspannen, Anfahrtspauschale und Spartipps – transparent erklärt für Berlin und Umgebung.",
  "rohrverstopfung-ursachen":
    "Fett, Haare, Kalk oder Wurzeln – die häufigsten Ursachen und was Sie im Alltag dagegen tun können.",
  "kanalinspektion-kamera":
    "TV-Kamera im Rohr – Ablauf, typische Befunde und Kosten für Eigentümer in Berlin und Brandenburg.",
};

const manifest = {};

function serviceTitle(service) {
  if (service.slug === "notdienst") {
    return `24h Rohrreinigung Notdienst ${AREA} | ${BRAND}`;
  }
  return `${service.label} ${AREA} ▷ 24h Notdienst | ${BRAND}`;
}

function serviceDescription(service) {
  if (service.slug === "notdienst") {
    return `24h Notdienst in ${AREA}: ${REACTION} Reaktionszeit, Festpreis vor Arbeitsbeginn. ${TRAVEL} – bei Beauftragung verrechnet. Jetzt anrufen.`;
  }
  return `${service.label} in ${AREA} (100 km). 24/7 erreichbar, ${REACTION} Reaktionszeit. ${TRAVEL} – bei Beauftragung verrechnet.`;
}

function serviceH1(service) {
  return `${service.label} – ${service.heroLine2}`;
}

function cityServiceTitle(service, city) {
  return `${service.label} ${city.name} ▷ 24h Notdienst | ${BRAND}`;
}

function cityServiceDescription(service, city) {
  return `${service.label} in ${city.name} und Umgebung. Schnell vor Ort, Festpreis, ${TRAVEL}. 24h Notdienst – ${BRAND}.`;
}

function cityServiceH1(service, city) {
  return `${service.label} ${city.name} – 24/7 Notdienst`;
}

const MAIN_PAGES = {
  kontakt: {
    title: `Kontakt | ${BRAND} – 24h Rohrreinigung Berlin`,
    description: `Kontakt zu ${BRAND}: Telefon 0176 2022 2200, E-Mail oder Anfrageformular. ${REACTION} Reaktionszeit in Berlin und Umgebung.`,
    h1: "Sofort Hilfe erhalten",
  },
  einsatzgebiete: {
    title: `Einsatzgebiete | ${BRAND} – ${cities.length} Standorte Berlin & Umgebung`,
    description: `Rohrreinigung in Berlin, Potsdam, Brandenburg und ${cities.length} Standorten im Umkreis von 100 km. Alle Einsatzgebiete von ${BRAND}.`,
    h1: "Rohrreinigung in Berlin & Umgebung",
  },
  impressum: {
    title: `Impressum | ${BRAND}`,
    description: `Impressum der ${BRAND} UG, Mühlenstr. 8a, 14167 Berlin.`,
    h1: "Impressum",
  },
  datenschutz: {
    title: `Datenschutzerklärung | ${BRAND}`,
    description: `Datenschutzerklärung der ${BRAND} UG – Informationen zur Verarbeitung personenbezogener Daten.`,
    h1: "Datenschutzerklärung",
  },
  "ueber-uns": {
    title: `Über uns | ${BRAND} – Rohrreinigung Berlin`,
    description: `${BRAND} – erfahrenes Team für Rohrreinigung in Berlin und Umgebung. 24/7 Notdienst, Festpreise, ${TRAVEL}.`,
    h1: "Über uns",
  },
};

for (const route of routes) {
  const { slug, path, type } = route;

  if (type === "service") {
    const service = serviceBySlug[slug];
    if (!service) continue;
    manifest[slug] = {
      path,
      title: serviceTitle(service),
      description: serviceDescription(service),
      type,
      h1: serviceH1(service),
    };
    continue;
  }

  if (type === "city-service") {
    const service = serviceBySlug[route.service];
    const city = cityBySlug[route.city];
    if (!service || !city) continue;
    manifest[slug] = {
      path,
      title: cityServiceTitle(service, city),
      description: cityServiceDescription(service, city),
      type,
      h1: cityServiceH1(service, city),
    };
    continue;
  }

  if (type === "main" && MAIN_PAGES[slug]) {
    manifest[slug] = {
      path,
      title: MAIN_PAGES[slug].title,
      description: MAIN_PAGES[slug].description,
      type,
      h1: MAIN_PAGES[slug].h1,
    };
    continue;
  }

  if (type === "blog-index") {
    manifest[slug] = {
      path,
      title: `Blog: Ratgeber Rohrreinigung Berlin | ${BRAND}`,
      description: `Ratgeber zu Rohrreinigung, Kosten und Schadensvermeidung – Tipps von ${BRAND} für Berlin und Brandenburg.`,
      type,
      h1: `${BRAND} Blog`,
    };
    continue;
  }

  if (type === "blog-post") {
    const post = blogPosts[route.blogSlug ?? slug];
    if (!post) continue;
    manifest[slug] = {
      path,
      title: `${post.hero.title} | ${BRAND}`,
      description: BLOG_EXCERPTS[post.slug] ?? post.hero.title,
      type,
      h1: post.hero.title,
    };
  }
}

writeFileSync("content/manifest.json", JSON.stringify(manifest, null, 2) + "\n");
console.log("Manifest entries:", Object.keys(manifest).length);
