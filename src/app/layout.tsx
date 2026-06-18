import type { Metadata, Viewport } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { ModalProvider } from "@/components/providers/ModalProvider";
import { CallbackModal } from "@/components/modals/CallbackModal";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { inter } from "./inter";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rohrreinigung Berlin ▷ 24h Notdienst | Rohrretter24",
  description:
    "Rohrreinigung Berlin ✔ 24/7 Notdienst ✔ 30–60 Min. Reaktionszeit ✔ Kamera-Inspektion, Rohrreparatur & Sanitär in Berlin und Umgebung (100 km). Gratis Anfahrt!",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#153A6B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <ModalProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <MobileStickyBar />
          <CallbackModal />
          <CookieBanner />
          <WhatsAppButton />
          <ScrollReveal />
        </ModalProvider>
      </body>
    </html>
  );
}
