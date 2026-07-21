import type { Metadata } from "next";
import { SubpageHero } from "@/components/blocks/SubpageHero";
import { About } from "@/components/sections/About";
import { CTABanner } from "@/components/sections/CTABanner";
import { Equipment } from "@/components/sections/Equipment";
import { COPY, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Über uns | ${SITE.name} – Rohrreinigung Berlin`,
  description: `${SITE.name} – ${COPY.team} für Rohrreinigung in Berlin und Umgebung. ${COPY.experience}, 24/7 Notdienst.`,
};

export default function UeberUnsPage() {
  return (
    <>
      <SubpageHero
        variant="premium"
        breadcrumb="Über uns"
        label="Über uns"
        title={
          <>
            Ihr zuverlässiger Partner
            <br />
            für Rohrreinigung
          </>
        }
        subtitle={`${SITE.name} – ${COPY.specialization}. ${COPY.experience} im Raum Berlin und Umgebung.`}
      />
      <About variant="premium" />
      <Equipment variant="premium" />
      <CTABanner variant="premium" />
    </>
  );
}
