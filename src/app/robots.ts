import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

/**
 * TODO (pre-launch): ensure NEXT_PUBLIC_SITE_URL is set to the final production domain
 * in Vercel environment variables before submitting to Google Search Console.
 */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? SITE.website;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Disallow API routes and any future internal/private paths
        disallow: ["/api/"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
