import rohrreinigungKosten from "@/data/blog-posts/rohrreinigung-kosten.json";
import rohrverstopfungUrsachen from "@/data/blog-posts/rohrverstopfung-ursachen.json";
import kanalinspektionKamera from "@/data/blog-posts/kanalinspektion-kamera.json";
import type { BlogBlock } from "@/components/blocks/BlogContent";

export type BlogFaqItem = {
  question: string;
  answer: string;
};

export type BlogPostData = {
  slug: string;
  hero: {
    category: string;
    title: string;
    meta: string[];
    image: string;
    imageSm: string;
    alt: string;
  };
  blocks: BlogBlock[];
  faq: BlogFaqItem[];
  toc: { id: string; label: string }[];
};

const POSTS: Record<string, BlogPostData> = {
  "rohrreinigung-kosten": rohrreinigungKosten as BlogPostData,
  "rohrverstopfung-ursachen": rohrverstopfungUrsachen as BlogPostData,
  "kanalinspektion-kamera": kanalinspektionKamera as BlogPostData,
};

export const BLOG_POST_SLUGS = Object.keys(POSTS);

export function getBlogPostData(slug: string): BlogPostData | undefined {
  return POSTS[slug];
}

export function getRelatedBlogPosts(currentSlug: string): { href: string; title: string }[] {
  return BLOG_POST_SLUGS.filter((slug) => slug !== currentSlug).map((slug) => ({
    href: `/blog/${slug}/`,
    title: POSTS[slug].hero.title,
  }));
}
