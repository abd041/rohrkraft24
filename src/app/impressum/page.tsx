import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StaticPageTemplate } from "@/components/templates/StaticPageTemplate";
import { getImpressumBlocks } from "@/lib/impressum";
import { getPageMetadata } from "@/lib/metadata";
import { getStaticPageData } from "@/lib/static-pages";
import { SITE } from "@/lib/constants";

const SLUG = "impressum";

export const metadata: Metadata = getPageMetadata(SLUG);

export default function ImpressumPage() {
  const page = getStaticPageData(SLUG);
  if (!page) notFound();
  return (
    <StaticPageTemplate
      breadcrumb="Impressum"
      label="Rechtliches"
      h1={page.h1}
      subtitle={`Angaben gemäß § 5 TMG und Pflichtinformationen zu ${SITE.legalName}`}
      blocks={getImpressumBlocks()}
    />
  );
}
