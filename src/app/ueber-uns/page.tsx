import type { Metadata } from "next";
import { Breadcrumb } from "@/components/blocks/Breadcrumb";
import { About } from "@/components/sections/About";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Über uns | Rohrretter24 – Rohrreinigung Berlin",
  description:
    "Rohrretter24 – zertifizierter Fachbetrieb für Rohrreinigung in Berlin und Umgebung. Über 10 Jahre Erfahrung, 24/7 Notdienst.",
};

export default function UeberUnsPage() {
  return (
    <>
      <Breadcrumb current="Über uns" />
      <About />
      <CTABanner />
    </>
  );
}
