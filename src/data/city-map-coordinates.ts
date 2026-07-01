import overrides from "@/data/city-coordinate-overrides.json";
import geocoded from "@/data/city-coordinates.json";
import berlinCities from "@/data/berlin-cities.json";

type CityCoord = {
  slug: string;
  name: string;
  lat: number;
  lng: number;
};

const overrideMap = overrides as Record<string, { lat: number; lng: number }>;
const geocodedMap = new Map((geocoded as CityCoord[]).map((c) => [c.slug, c]));

export const CITY_MAP_COORDINATES: CityCoord[] = (berlinCities as { slug: string; name: string }[]).map(
  (city) => {
    const override = overrideMap[city.slug];
    if (override) {
      return { slug: city.slug, name: city.name, ...override };
    }
    const found = geocodedMap.get(city.slug);
    if (found) return found;
    return { slug: city.slug, name: city.name, lat: 52.52, lng: 13.405 };
  },
);
