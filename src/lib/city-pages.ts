import { existsSync, readFileSync } from "fs";
import { join } from "path";

export type CityPagePhone = {
  href: string;
  display: string;
};

export type CityPageHero = {
  titleLine1: string;
  titleLine2: string;
  tagline: string;
  body: string;
  image: string;
  imageSm: string;
  alt: string;
};

export type CityPageFaqItem = {
  question: string;
  answer: string;
};

export type CityNearbyLink = {
  href: string;
  label: string;
  distance?: string;
};

export type CityPageData = {
  slug: string;
  service: string;
  serviceLabel: string;
  serviceHref: string;
  city: string;
  cityName: string;
  cityShort: string;
  breadcrumb: string;
  mapKeyword: string;
  currentCitySlug: string;
  phone: CityPagePhone;
  hero: CityPageHero;
  kwImage?: { src: string; alt: string; caption: string } | null;
  faqTitle: string;
  faq: CityPageFaqItem[];
  nearbyTitle: string;
  nearbyIntro: string;
  nearby: CityNearbyLink[];
  localHtml?: string;
};

const DATA_DIR = join(process.cwd(), "src", "data", "city-pages");

export function getCityPageData(slug: string): CityPageData | null {
  const file = join(DATA_DIR, `${slug}.json`);
  if (!existsSync(file)) return null;
  return JSON.parse(readFileSync(file, "utf8")) as CityPageData;
}

export function isCityServiceSlug(slug: string): boolean {
  return existsSync(join(DATA_DIR, `${slug}.json`));
}
