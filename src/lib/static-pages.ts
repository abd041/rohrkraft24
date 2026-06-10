import impressumData from "@/data/static-pages/impressum.json";
import datenschutzData from "@/data/static-pages/datenschutz.json";
import type { LegalBlock } from "@/components/blocks/LegalContent";

export type StaticPageData = {
  slug: string;
  h1: string;
  blocks: LegalBlock[];
};

const PAGES: Record<string, StaticPageData> = {
  impressum: impressumData as StaticPageData,
  datenschutz: datenschutzData as StaticPageData,
};

export function getStaticPageData(slug: string): StaticPageData | undefined {
  return PAGES[slug];
}
