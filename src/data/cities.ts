import berlinCities from "./berlin-cities.json";

export type CityEntry = { name: string; slug: string; shortName?: string; region?: string };

export const BERLIN_CITIES = berlinCities as CityEntry[];

/** @deprecated Use BERLIN_CITIES */
export const HESSEN_CITIES = BERLIN_CITIES;

export const CITIES = BERLIN_CITIES.map((c) => c.name);

export const FOOTER_CITIES = [
  { label: "Berlin Mitte", slug: "berlin-mitte" },
  { label: "Potsdam", slug: "potsdam" },
  { label: "Oranienburg", slug: "oranienburg" },
  { label: "Bernau", slug: "bernau" },
  { label: "Strausberg", slug: "strausberg" },
  { label: "Fürstenwalde", slug: "fuerstenwalde" },
  { label: "Falkensee", slug: "falkensee" },
  { label: "Königs Wusterhausen", slug: "koenigs-wusterhausen" },
  { label: "Neuruppin", slug: "neuruppin" },
  { label: "Frankfurt (Oder)", slug: "frankfurt-oder" },
  { label: "Senftenberg", slug: "senftenberg" },
  { label: "Schwedt/Oder", slug: "schwedt-oder" },
] as const;

export const BUNDESLAENDER = [
  { name: "Berlin", count: BERLIN_CITIES.length, active: true },
  { name: "Brandenburg", active: false },
  { name: "Bayern", active: false },
  { name: "Hessen", active: false },
  { name: "Nordrhein-Westfalen", active: false },
  { name: "Niedersachsen", active: false },
  { name: "Sachsen", active: false },
  { name: "Hamburg", active: false },
] as const;
