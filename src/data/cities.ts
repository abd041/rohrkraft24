import berlinCities from "./berlin-cities.json";

export type CityEntry = {
  name: string;
  slug: string;
  shortName?: string;
  region?: string;
  /** Main postal codes for the city (used in page copy and localHtml snippets) */
  postalCodes?: string[];
  /** Key districts or Ortsteile within the city */
  districts?: string[];
  /** Straight-line km from Berlin city centre – used for hero body text */
  distanceFromBerlinKm?: number;
  /** Nearby city names for natural copy context */
  nearbyAreas?: string[];
};

export const BERLIN_CITIES = berlinCities as CityEntry[];

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

export const CITY_COUNT = BERLIN_CITIES.length;

export const BUNDESLAENDER = [
  { name: "Berlin", count: CITY_COUNT, active: true },
  { name: "Brandenburg", active: false },
  { name: "Bayern", active: false },
  { name: "Hessen", active: false },
  { name: "Nordrhein-Westfalen", active: false },
  { name: "Niedersachsen", active: false },
  { name: "Sachsen", active: false },
  { name: "Hamburg", active: false },
] as const;
