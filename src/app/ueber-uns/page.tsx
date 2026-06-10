import type { Metadata } from "next";
import { Breadcrumb } from "@/components/blocks/Breadcrumb";
import { About } from "@/components/sections/About";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Über uns | Rohrkraft24 – Rohrreinigung Rhein-Main",
  description:
    "Rohrkraft24 – zertifizierter Fachbetrieb für Rohrreinigung im Rhein-Main-Gebiet. Über 10 Jahre Erfahrung, 24/7 Notdienst.",
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
