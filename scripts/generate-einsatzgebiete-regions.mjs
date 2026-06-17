import { readFileSync, writeFileSync } from "fs";

const cities = JSON.parse(readFileSync("src/data/berlin-cities.json", "utf8"));
const serviceLinks = [
  { slug: "rohrreinigung", label: "Rohrreinigung" },
  { slug: "kamera-inspektion", label: "TV-Kamera-Inspektion" },
  { slug: "rohrreparatur", label: "Rohrreparatur" },
  { slug: "leckageortung", label: "Leckageortung" },
  { slug: "abwasserreinigung", label: "Abwasserreinigung" },
  { slug: "hebeanlage-wartung", label: "Hebeanlagen-Service" },
  { slug: "sanitaerarbeiten", label: "Sanitärarbeiten" },
  { slug: "wasserschaden", label: "Wasserschaden" },
  { slug: "notdienst", label: "Notdienst" },
];

const byRegion = new Map();
for (const city of cities) {
  if (!byRegion.has(city.region)) byRegion.set(city.region, []);
  byRegion.get(city.region).push(city);
}

const regions = [...byRegion.entries()].map(([name, regionCities]) => ({
  name,
  count: `${regionCities.length} ${regionCities.length === 1 ? "Ort" : "Orte"}`,
  cities: regionCities.map((city, index) => ({
    name: city.name,
    plz: "—",
    distance: index === 0 && name === "Berlin" ? "Hauptstandort" : "Im Einsatzgebiet",
    links: serviceLinks.map((s) => ({
      href: `/${s.slug}-${city.slug}/`,
      label: s.label,
    })),
  })),
}));

writeFileSync("src/data/einsatzgebiete-regions.json", JSON.stringify(regions, null, 2));
console.log("Regions:", regions.length, "Cities:", cities.length);
