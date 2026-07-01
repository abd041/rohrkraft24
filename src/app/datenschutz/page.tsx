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
  return <StaticPageTemplate breadcrumb="Datenschutz" label="Rechtliches" h1={page.h1} subtitle="Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO" blocks={page.blocks} />;
}
