import { readFileSync, existsSync } from "fs";
import { join } from "path";
import siteRoutes from "@/data/site-routes.json";
import { isReactBlogSlug } from "./converted-routes";

export type SiteRoute = {
  path: string;
  slug: string;
  type: string;
  service?: string;
  city?: string;
  blogSlug?: string;
};

export type PageManifestEntry = {
  path: string;
  title: string;
  type: string;
  h1: string;
};

let manifestCache: Record<string, PageManifestEntry> | null = null;

export function getManifest(): Record<string, PageManifestEntry> {
  if (!manifestCache) {
    const manifestPath = join(process.cwd(), "content", "manifest.json");
    manifestCache = existsSync(manifestPath)
      ? (JSON.parse(readFileSync(manifestPath, "utf8")) as Record<string, PageManifestEntry>)
      : {};
  }
  return manifestCache;
}

export function getAllRoutes(): SiteRoute[] {
  return siteRoutes as SiteRoute[];
}

export function getRouteBySlug(slug: string): SiteRoute | undefined {
  return getAllRoutes().find((r) => r.slug === slug);
}

export function getStaticSlugs(): string[] {
  return getAllRoutes()
    .filter((r) => r.type === "city-service")
    .map((r) => r.slug);
}

export function getBlogSlugs(): string[] {
  return getAllRoutes()
    .filter((r) => r.type === "blog-post")
    .map((r) => r.blogSlug ?? r.slug)
    .filter((slug) => !isReactBlogSlug(slug));
}
