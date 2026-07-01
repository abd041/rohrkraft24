import type { Metadata } from "next";
import { SubpageHero } from "@/components/blocks/SubpageHero";
import { About } from "@/components/sections/About";
import { CTABanner } from "@/components/sections/CTABanner";
import { COPY, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Über uns | ${SITE.name} – Rohrreinigung Berlin`,
  description: `${SITE.name} – ${COPY.team} für Rohrreinigung in Berlin und Umgebung. ${COPY.experience}, 24/7 Notdienst.`,
};

export default function UeberUnsPage() {
  return (
    <>
      <SubpageHero
        breadcrumb="Über uns"
        label="Über uns"
        title={`Ihr ${COPY.partner}`}
        subtitle={`${SITE.name} – ${COPY.specialization}. ${COPY.experience} im Raum Berlin und Umgebung.`}
      />
      <About />
      <CTABanner />
    </>
  );
}
