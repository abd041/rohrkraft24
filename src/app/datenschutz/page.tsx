import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StaticPageTemplate } from "@/components/templates/StaticPageTemplate";
import { getPageMetadata } from "@/lib/metadata";
import { getStaticPageData } from "@/lib/static-pages";

const SLUG = "datenschutz";

export const metadata: Metadata = getPageMetadata(SLUG);

export default function DatenschutzPage() {
  const page = getStaticPageData(SLUG);
  if (!page) notFound();
  return <StaticPageTemplate breadcrumb="Datenschutz" h1={page.h1} blocks={page.blocks} />;
}
