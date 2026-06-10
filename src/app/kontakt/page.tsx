import type { Metadata } from "next";
import { ContactPageTemplate } from "@/components/templates/ContactPageTemplate";
import { getPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = getPageMetadata("kontakt");

export default function KontaktPage() {
  return <ContactPageTemplate />;
}
