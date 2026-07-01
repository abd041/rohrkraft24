import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { getManifest } from "./pages";

export function getPageMetadata(slug: string, fallback?: string): Metadata {
  const entry = getManifest()[slug];
  if (!entry) {
    return { title: fallback ?? SITE.name };
  }

  const metadata: Metadata = { title: entry.title };
  if (entry.description) {
    metadata.description = entry.description;
    metadata.openGraph = {
      title: entry.title,
      description: entry.description,
      siteName: SITE.name,
      locale: "de_DE",
      type: "website",
    };
  }
  return metadata;
}
