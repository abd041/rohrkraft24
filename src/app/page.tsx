import { Hero } from "@/components/sections/Hero";
import { TrustMarquee } from "@/components/sections/TrustMarquee";
import { Features } from "@/components/sections/Features";
import { Services } from "@/components/sections/Services";
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
      <TrustMarquee variant="premium" />
      <Features variant="premium" />
      <Services variant="premium" />
      <Pricing variant="premium" />
      <MiniCTA variant="premium" />
      <About variant="premium" />
      <ServiceArea variant="premium" />
      <Testimonials variant="premium" />
      <FAQ variant="premium" />
      <Blog variant="premium" />
      <CTABanner variant="premium" />
    </>
  );
}
