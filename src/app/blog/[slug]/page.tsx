import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostTemplate } from "@/components/templates/BlogPostTemplate";
import { BLOG_POST_SLUGS, getBlogPostData } from "@/lib/blog-posts";
import { getManifest } from "@/lib/pages";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return BLOG_POST_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = getManifest()[slug];
  const post = getBlogPostData(slug);
  if (entry?.title) return { title: entry.title };
  if (post) return { title: `${post.hero.title} | Rohrkraft24` };
  return { title: "Blog | Rohrkraft24" };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostData(slug);
  if (!post) notFound();
  return <BlogPostTemplate post={post} />;
}
