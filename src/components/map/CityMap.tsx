"use client";

import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";
import type { Map as LeafletMap, Marker as LeafletMarker } from "leaflet";
import { CITY_MAP_COORDINATES } from "@/data/city-map-coordinates";
import { SITE } from "@/lib/constants";

type CityMapProps = {
  highlightSlug?: string;
};

export function CityMap({ highlightSlug }: CityMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const markersRef = useRef<Map<string, LeafletMarker>>(new Map());

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    let cancelled = false;
    let removeSidebarListener: (() => void) | undefined;

    void import("leaflet").then((L) => {
      if (cancelled || !containerRef.current) return;

      const map = L.map(containerRef.current, {
        scrollWheelZoom: false,
        attributionControl: true,
      }).setView([52.52, 13.405], 9);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18,
      }).addTo(map);

      const makeIcon = (active: boolean) =>
        L.divIcon({
          className: `city-map-marker${active ? " city-map-marker--active" : ""}`,
          html: '<span class="city-map-marker__dot"></span>',
          iconSize: active ? [18, 18] : [14, 14],
          iconAnchor: active ? [9, 9] : [7, 7],
        });

      CITY_MAP_COORDINATES.forEach((city) => {
        const marker = L.marker([city.lat, city.lng], {
          icon: makeIcon(city.slug === highlightSlug),
          title: city.name,
        }).addTo(map);

        marker.bindPopup(
          `<strong>${city.name}</strong><br><a href="/rohrreinigung-${city.slug}/">Leistungen ansehen</a>`,
        );

        marker.on("click", () => {
          window.dispatchEvent(
            new CustomEvent("rk-map-city-select", { detail: { slug: city.slug, name: city.name } }),
          );
        });

        markersRef.current.set(city.slug, marker);
      });

      mapRef.current = map;

      const onSidebarSelect = (e: Event) => {
        const detail = (e as CustomEvent<{ slug: string }>).detail;
        const city = CITY_MAP_COORDINATES.find((c) => c.slug === detail.slug);
        if (!city || !mapRef.current) return;
        mapRef.current.setView([city.lat, city.lng], 11, { animate: true });
        markersRef.current.get(detail.slug)?.openPopup();
      };

      window.addEventListener("rk-map-city-select", onSidebarSelect);
      removeSidebarListener = () => window.removeEventListener("rk-map-city-select", onSidebarSelect);

      setTimeout(() => map.invalidateSize(), 100);
    });

    return () => {
      cancelled = true;
      removeSidebarListener?.();
      mapRef.current?.remove();
      mapRef.current = null;
      markersRef.current.clear();
    };
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;
    void import("leaflet").then((L) => {
      markersRef.current.forEach((marker, slug) => {
        const isActive = slug === highlightSlug;
        marker.setIcon(
          L.divIcon({
            className: `city-map-marker${isActive ? " city-map-marker--active" : ""}`,
            html: '<span class="city-map-marker__dot"></span>',
            iconSize: isActive ? [18, 18] : [14, 14],
            iconAnchor: isActive ? [9, 9] : [7, 7],
          }),
        );
      });
    });
  }, [highlightSlug]);

  return (
    <div
      ref={containerRef}
      className="city-map"
      role="img"
      aria-label={`${SITE.name} Einsatzgebiet – ${CITY_MAP_COORDINATES.length} Standorte in Berlin und Umgebung`}
    />
  );
}
