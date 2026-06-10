import type { Metadata } from "next";
import { BlogIndexTemplate } from "@/components/templates/BlogIndexTemplate";
import { getPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = getPageMetadata("blog");

export default function BlogIndexPage() {
  return <BlogIndexTemplate />;
}
