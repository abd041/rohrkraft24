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
      answer: `Wir arbeiten mit transparenten Festpreisen. Nach der Vor-Ort-Diagnose erhalten Sie ein schriftliches Angebot – ohne versteckte Kosten. ${TRAVEL_FEE} – bei Beauftragung verrechnet.`,
    },
    {
      question: `Bieten Sie ${service.label} auch am Wochenende in ${city.name} an?`,
      answer: "Ja, wir sind 7 Tage die Woche im Einsatz – auch nachts, an Wochenenden und Feiertagen im Raum Berlin und Umgebung (100 km).",
    },
  ];
}

// Fixed: use the current service slug, not always rohrreinigung-
function nearbyCities(service, cityIndex) {
  const slice = [];
  for (let i = 1; i <= 4; i++) {
    const c = cities[(cityIndex + i) % cities.length];
    slice.push({
      href: `/${service.slug}-${c.slug}/`,
      label: `${service.label} ${c.shortName}`,
      distance: `· ca. ${10 + i * 8} km`,
    });
  }
  return slice;
}

// Builds an optional localHtml snippet for cities that have enriched data
function buildLocalHtml(service, city) {
  const parts = [];

  if (city.postalCodes && city.postalCodes.length > 0) {
    const plzList = city.postalCodes.join(", ");
    parts.push(
      `<p>Wir sind in <strong>${city.name}</strong> und Umgebung tätig – einschließlich der Postleitzahlen <strong>${plzList}</strong>.</p>`
    );
  }

  if (city.districts && city.districts.length > 0) {
    const districtList = city.districts.join(", ");
    parts.push(
      `<p>Unsere Techniker kennen <strong>${city.name}</strong> gut: von ${districtList} – für schnelle Anfahrt und fachgerechte ${service.label}.</p>`
    );
  }

  if (city.distanceFromBerlinKm && city.distanceFromBerlinKm > 0) {
    const regionLabel = city.region && !city.region.startsWith("Berlin") ? city.region : "Berliner Umland";
    parts.push(
      `<p>${city.name} liegt ca. <strong>${city.distanceFromBerlinKm} km von Berlin</strong> entfernt im ${regionLabel}. ${BRAND} ist schnell vor Ort – 24/7 erreichbar.</p>`
    );
  }

  if (city.nearbyAreas && city.nearbyAreas.length > 0) {
    const nearbyList = city.nearbyAreas.join(", ");
    parts.push(
      `<p>Auch in den Nachbarorten <strong>${nearbyList}</strong> sind wir zuverlässig im Einsatz.</p>`
    );
  }

  return parts.length > 0 ? `<div class="city-local-info">${parts.join("\n")}</div>` : null;
}

function buildHeroBody(service, city) {
  if (city.distanceFromBerlinKm && city.distanceFromBerlinKm > 0) {
    const regionLabel = city.region && !city.region.startsWith("Landkreis")
      ? city.region
      : city.region?.replace("Landkreis ", "") ?? "Brandenburg";
    return `${service.label} in ${city.name} (${regionLabel}, ca. ${city.distanceFromBerlinKm} km von Berlin)? ${BRAND} ist schnell vor Ort – auch nachts und am Wochenende.`;
  }
  if (city.region && city.region !== "Berlin") {
    const regionLabel = city.region.replace("Landkreis ", "");
    return `${service.label} in ${city.name} (${regionLabel})? ${BRAND} ist Ihr lokaler Partner im Raum Berlin und Umgebung (100 km). Wir kommen schnell vor Ort – auch nachts und am Wochenende.`;
  }
  return `${service.label} in ${city.name}? ${BRAND} ist Ihr lokaler Partner im Raum Berlin und Umgebung (100 km). Wir kommen schnell vor Ort – auch nachts und am Wochenende.`;
}

function buildPage(service, city, cityIndex) {
  const slug = `${service.slug}-${city.slug}`;
  const localHtml = buildLocalHtml(service, city);

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
      body: buildHeroBody(service, city),
      image: service.image,
      imageSm: service.imageSm,
      alt: `${service.label} ${city.name} – ${BRAND} Team vor Ort`,
    },
    faqTitle: `Häufige Fragen zu ${service.label}`,
    faq: faqFor(service, city),
    nearbyTitle: `${service.label} auch in der Nähe von ${city.name}`,
    nearbyIntro: `Neben ${city.name} ist ${BRAND} in zahlreichen Nachbarorten im Einsatz:`,
    nearby: nearbyCities(service, cityIndex),
    ...(localHtml ? { localHtml } : {}),
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
