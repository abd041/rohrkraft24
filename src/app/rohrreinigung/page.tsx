import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { getServicePageData } from "@/data/service-pages";
import { getPageMetadata } from "@/lib/metadata";

const SLUG = "rohrreinigung";

export const metadata: Metadata = getPageMetadata(SLUG);

export default function RohrreinigungPage() {
  const page = getServicePageData(SLUG);
  if (!page) notFound();
  return <ServicePageTemplate page={page} />;
}
