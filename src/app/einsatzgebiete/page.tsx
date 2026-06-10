import type { Metadata } from "next";
import { EinsatzgebietePageTemplate } from "@/components/templates/EinsatzgebietePageTemplate";
import { getPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = getPageMetadata("einsatzgebiete");

export default function EinsatzgebietePage() {
  return <EinsatzgebietePageTemplate />;
}
