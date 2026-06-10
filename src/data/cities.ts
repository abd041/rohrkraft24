import hessenCities from "./hessen-cities.json";

export type CityEntry = { name: string; slug: string };

export const HESSEN_CITIES = hessenCities as CityEntry[];

export const CITIES = HESSEN_CITIES.map((c) => c.name);

export const FOOTER_CITIES = [
  { label: "Frankfurt", slug: "frankfurt" },
  { label: "Wiesbaden", slug: "wiesbaden" },
  { label: "Offenbach", slug: "offenbach" },
  { label: "Darmstadt", slug: "darmstadt" },
  { label: "Hanau", slug: "hanau" },
  { label: "Mainz", slug: "mainz" },
  { label: "Bad Homburg", slug: "bad-homburg" },
  { label: "Dreieich", slug: "dreieich" },
  { label: "Neu-Isenburg", slug: "neu-isenburg" },
  { label: "Rüsselsheim", slug: "ruesselsheim" },
  { label: "Eschborn", slug: "eschborn" },
  { label: "Oberursel", slug: "oberursel" },
] as const;

export const BUNDESLAENDER = [
  { name: "Hessen", count: 48, active: true },
  { name: "Bayern", active: false },
  { name: "Baden-Württemberg", active: false },
  { name: "Nordrhein-Westfalen", active: false },
  { name: "Rheinland-Pfalz", active: false },
  { name: "Niedersachsen", active: false },
  { name: "Sachsen", active: false },
  { name: "Berlin", active: false },
] as const;
