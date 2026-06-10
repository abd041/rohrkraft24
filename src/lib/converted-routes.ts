import { BLOG_POST_SLUGS } from "./blog-posts";
import { SERVICE_PAGE_SLUGS } from "@/data/service-pages";

/** Slugs served by dedicated React routes (not /[slug] city pages). */
export const REACT_PAGE_SLUGS = new Set<string>([
  "kontakt",
  "ueber-uns",
  "einsatzgebiete",
  "impressum",
  "datenschutz",
  ...SERVICE_PAGE_SLUGS,
]);

export const REACT_BLOG_SLUGS = new Set<string>(BLOG_POST_SLUGS);

export function isReactPageSlug(slug: string): boolean {
  return REACT_PAGE_SLUGS.has(slug);
}

export function isReactBlogSlug(slug: string): boolean {
  return REACT_BLOG_SLUGS.has(slug);
}
