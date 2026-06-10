import type { Metadata } from "next";
import { getManifest } from "./pages";

export function getPageMetadata(slug: string, fallback?: string): Metadata {
  const entry = getManifest()[slug];
  if (entry?.title) return { title: entry.title };
  return { title: fallback ?? "Rohrkraft24" };
}
