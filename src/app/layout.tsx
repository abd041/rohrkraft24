import type { Metadata, Viewport } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { ModalProvider } from "@/components/providers/ModalProvider";
import { CallbackModal } from "@/components/modals/CallbackModal";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { geistSans, nexa } from "./fonts";
import "./globals.css";

import { JsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/constants";
import { getSiteStructuredData } from "@/lib/schema";

export const metadata: Metadata = {
  title: `Rohrreinigung Berlin ▷ 24h Notdienst | ${SITE.name}`,
  description:
    `Rohrreinigung Berlin ✔ 24/7 Notdienst ✔ ${SITE.reactionTime} Reaktionszeit ✔ Kamera-Inspektion, Rohrreparatur & Sanitär in Berlin und Umgebung (100 km). ${SITE.travelFeeShort}.`,
  icons: {
    icon: "/images/logo.svg",
    apple: "/images/logo.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#002854",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${geistSans.variable} ${nexa.className}`}>
        <JsonLd data={getSiteStructuredData()} />
        <ModalProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <MobileStickyBar />
          <CallbackModal />
          <CookieBanner />
          <ScrollReveal />
        </ModalProvider>
      </body>
    </html>
  );
}
