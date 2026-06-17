import { Hero } from "@/components/sections/Hero";
import { TrustMarquee } from "@/components/sections/TrustMarquee";
import { Features } from "@/components/sections/Features";
import { Services } from "@/components/sections/Services";
import { Equipment } from "@/components/sections/Equipment";
import { Pricing } from "@/components/sections/Pricing";
import { MiniCTA } from "@/components/sections/MiniCTA";
import { About } from "@/components/sections/About";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Blog } from "@/components/sections/Blog";
import { CTABanner } from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <Features />
      <Services />
      <Equipment />
      <Pricing />
      <MiniCTA />
      <About />
      <ServiceArea />
      <Testimonials />
      <FAQ />
      <Blog />
      <CTABanner />
    </>
  );
}
