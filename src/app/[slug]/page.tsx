import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CityServicePageTemplate } from "@/components/templates/CityServicePageTemplate";
import { getCityPageData } from "@/lib/city-pages";
import { getPageMetadata } from "@/lib/metadata";
import {
  getRouteBySlug,
  getStaticSlugs,
} from "@/lib/pages";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getStaticSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return getPageMetadata(slug);
}

export default async function CityServicePage({ params }: Props) {
  const { slug } = await params;
  const route = getRouteBySlug(slug);
  if (!route || route.type !== "city-service") notFound();

  const cityPage = getCityPageData(slug);
  if (!cityPage) notFound();

  return <CityServicePageTemplate page={cityPage} />;
}
