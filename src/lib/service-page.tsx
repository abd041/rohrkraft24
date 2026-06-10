import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { getServicePageData } from "@/data/service-pages";
import { getPageMetadata } from "@/lib/metadata";

export function createServicePage(slug: string) {
  const metadata: Metadata = getPageMetadata(slug);

  function ServicePage() {
    const page = getServicePageData(slug);
    if (!page) notFound();
    return <ServicePageTemplate page={page} />;
  }

  return { metadata, ServicePage };
}
