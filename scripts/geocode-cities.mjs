/**
 * One-off: geocode berlin-cities.json via Nominatim → city-coordinates.json
 * Usage: node scripts/geocode-cities.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const cities = JSON.parse(readFileSync(join(root, "src/data/berlin-cities.json"), "utf8"));
const outPath = join(root, "src/data/city-coordinates.json");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function geocode(name) {
  const query = encodeURIComponent(`${name}, Brandenburg, Germany`);
  const url = `https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=1`;
  const res = await fetch(url, {
    headers: { "User-Agent": "RohrRetter24-Geocoder/1.0 (contact@rohrretter24.de)" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${name}`);
  const data = await res.json();
  if (!data[0]) return null;
  return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
}

const results = [];
for (let i = 0; i < cities.length; i++) {
  const city = cities[i];
  process.stdout.write(`[${i + 1}/${cities.length}] ${city.name}… `);
  try {
    const coords = await geocode(city.name);
    if (coords) {
      results.push({ slug: city.slug, name: city.name, ...coords });
      console.log(`${coords.lat}, ${coords.lng}`);
    } else {
      console.log("NOT FOUND");
    }
  } catch (e) {
    console.log(`ERROR: ${e.message}`);
  }
  await sleep(1100);
}

writeFileSync(outPath, JSON.stringify(results, null, 2) + "\n");
console.log(`\nWrote ${results.length} coordinates to ${outPath}`);
