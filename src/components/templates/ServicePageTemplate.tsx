import { Breadcrumb } from "@/components/blocks/Breadcrumb";
import { ServicePageContent } from "@/components/blocks/ServicePageContent";
import { ServicePageHero } from "@/components/blocks/ServicePageHero";
import { About } from "@/components/sections/About";
import { CTABanner } from "@/components/sections/CTABanner";
import { Equipment } from "@/components/sections/Equipment";
import { FAQ } from "@/components/sections/FAQ";
import { Features } from "@/components/sections/Features";
import { MiniCTA } from "@/components/sections/MiniCTA";
import { Pricing } from "@/components/sections/Pricing";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustMarquee } from "@/components/sections/TrustMarquee";
import type { ServicePageData } from "@/data/service-pages/types";

type ServicePageTemplateProps = {
  page: ServicePageData;
};

export function ServicePageTemplate({ page }: ServicePageTemplateProps) {
  return (
    <>
      <Breadcrumb current={page.breadcrumbLabel} />
      <ServicePageHero hero={page.hero} />
      <TrustMarquee variant="premium" />
      <ServicePageContent content={page.content} serviceLabel={page.breadcrumbLabel} />
      <Features variant="premium" />
      <Services variant="premium" />
      <Equipment variant="premium" />
      <Pricing variant="premium" />
      <MiniCTA variant="premium" />
      <About variant="premium" />
      <Testimonials variant="premium" />
      <FAQ variant="premium" />
      <ServiceArea variant="premium" mapKeyword={page.mapKeyword} />
      <CTABanner variant="premium" />
    </>
  );
}
