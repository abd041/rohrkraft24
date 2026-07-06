import type { MetadataRoute } from "next";
import { SITE, SERVICE_LINKS } from "@/lib/constants";
import { BLOG_POSTS } from "@/data/blog";
import { getStaticSlugs } from "@/lib/pages";

/**
 * TODO (pre-launch): Set NEXT_PUBLIC_SITE_URL to the final production domain in your
 * Vercel / hosting environment variables before submitting the sitemap to Google Search Console.
 *
 * Example: NEXT_PUBLIC_SITE_URL=https://rohrretter24.de
 *
 * Until that env var is set, the sitemap defaults to SITE.website (https://rohrretter24.de),
 * which is already the planned production domain and is correct for the final launch.
 * On the Vercel preview environment you can override this to the preview URL for local testing only.
 */
const base = process.env.NEXT_PUBLIC_SITE_URL ?? SITE.website;
const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  // Core static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`,              lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/notdienst/`,    lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/einsatzgebiete/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/`,         lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/kontakt/`,      lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/ueber-uns/`,    lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/impressum/`,    lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/datenschutz/`,  lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
  ];

  // Service pages (all except /notdienst which is already above)
  const servicePages: MetadataRoute.Sitemap = SERVICE_LINKS
    .filter((s) => s.href !== "/notdienst")
    .map((s) => ({
      url: `${base}${s.href}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    }));

  // Blog post pages
  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${base}${post.href}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // City / service-area pages (762+ dynamic pages)
  const citySlugs = getStaticSlugs();
  const cityPages: MetadataRoute.Sitemap = citySlugs.map((slug) => ({
    url: `${base}/${slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...blogPages, ...cityPages];
}
