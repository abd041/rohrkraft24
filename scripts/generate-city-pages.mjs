import { readFileSync, writeFileSync, readdirSync, unlinkSync } from "fs";
import { join } from "path";
import { SERVICES, PHONE } from "./services-config.mjs";

const cities = JSON.parse(readFileSync("src/data/berlin-cities.json", "utf8"));
const outDir = "src/data/city-pages";
const BRAND = "RohrRetter24";
const TRAVEL_FEE = "49 € Anfahrtspauschale";

function faqFor(service, city) {
  return [
    {
      question: `Wie schnell sind Sie in ${city.name} vor Ort?`,
      answer: `In ${city.name} und Umgebung sind wir in der Regel innerhalb von 30–60 Minuten bei Ihnen. Unser Notdienst ist 24 Stunden täglich erreichbar.`,
    },
    {
      question: `Was kostet ${service.label} in ${city.name}?`,
      answer:
        `Wir arbeiten mit transparenten Festpreisen. Nach der Vor-Ort-Diagnose erhalten Sie ein schriftliches Angebot – ohne versteckte Kosten. ${TRAVEL_FEE} – bei Beauftragung verrechnet.`,
    },
    {
      question: `Bieten Sie ${service.label} auch am Wochenende in ${city.name} an?`,
      answer:
        "Ja, wir sind 7 Tage die Woche im Einsatz – auch nachts, an Wochenenden und Feiertagen im Raum Berlin und Umgebung (100 km).",
    },
  ];
}

function nearbyCities(cityIndex) {
  const slice = [];
  for (let i = 1; i <= 4; i++) {
    const c = cities[(cityIndex + i) % cities.length];
    slice.push({
      href: `/rohrreinigung-${c.slug}/`,
      label: `Rohrreinigung ${c.shortName}`,
      distance: `· ca. ${10 + i * 8} km`,
    });
  }
  return slice;
}

function buildPage(service, city, cityIndex) {
  const slug = `${service.slug}-${city.slug}`;
  return {
    slug,
    service: service.slug,
    serviceLabel: service.label,
    serviceHref: `/${service.slug}/`,
    city: city.slug,
    cityName: city.name,
    cityShort: city.shortName,
    breadcrumb: `${service.label} ${city.name}`,
    mapKeyword: service.slug,
    currentCitySlug: city.slug,
    phone: PHONE,
    hero: {
      titleLine1: `${service.label} ${city.name}`,
      titleLine2: service.heroLine2,
      tagline: service.tagline,
      body: `${service.label} in ${city.name}? ${BRAND} ist Ihr lokaler Partner im Raum Berlin und Umgebung (100 km). Wir kommen schnell vor Ort – auch nachts und am Wochenende.`,
      image: service.image,
      imageSm: service.imageSm,
      alt: `${service.label} ${city.name} – ${BRAND} Team vor Ort`,
    },
    faqTitle: `Häufige Fragen zu ${service.label}`,
    faq: faqFor(service, city),
    nearbyTitle: `${service.label} auch in der Nähe von ${city.name}`,
    nearbyIntro: `Neben ${city.name} ist ${BRAND} in zahlreichen Nachbarorten im Einsatz:`,
    nearby: nearbyCities(cityIndex),
  };
}

for (const file of readdirSync(outDir)) {
  if (file.endsWith(".json")) unlinkSync(join(outDir, file));
}

let count = 0;
for (const service of SERVICES) {
  cities.forEach((city, cityIndex) => {
    const page = buildPage(service, city, cityIndex);
    writeFileSync(join(outDir, `${page.slug}.json`), JSON.stringify(page), "utf8");
    count++;
  });
}

console.log("Generated city pages:", count);
