"use client";

import { CityMap } from "@/components/map/CityMap";

type ServiceAreaMapProps = {
  highlightSlug?: string;
};

export function ServiceAreaMap({ highlightSlug }: ServiceAreaMapProps) {
  return <CityMap highlightSlug={highlightSlug} />;
}
