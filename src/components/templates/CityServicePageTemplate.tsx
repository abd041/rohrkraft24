import { CityFAQ } from "@/components/blocks/CityFAQ";
import { CityKwImage } from "@/components/blocks/CityKwImage";
import { CityLocalHtml } from "@/components/blocks/CityLocalHtml";
import { CityNearby } from "@/components/blocks/CityNearby";
import { CityServiceBreadcrumb } from "@/components/blocks/CityServiceBreadcrumb";
import { CityServiceHero } from "@/components/blocks/CityServiceHero";
import { About } from "@/components/sections/About";
import { CTABanner } from "@/components/sections/CTABanner";
import { Features } from "@/components/sections/Features";
import { MiniCTA } from "@/components/sections/MiniCTA";
import { Pricing } from "@/components/sections/Pricing";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustMarquee } from "@/components/sections/TrustMarquee";
import type { CityPageData } from "@/lib/city-pages";

type CityServicePageTemplateProps = {
  page: CityPageData;
};

export function CityServicePageTemplate({ page }: CityServicePageTemplateProps) {
  const phone = page.phone;

  return (
    <>
      <CityServiceBreadcrumb
        serviceLabel={page.serviceLabel}
        serviceHref={page.serviceHref}
        current={page.breadcrumb}
      />
      <CityServiceHero hero={page.hero} phone={phone} />
      <TrustMarquee />
      <Features />
      <Services cityLabel={page.cityShort} />
      <Pricing cityLabel={page.cityShort} phone={phone} />
      <MiniCTA phone={phone} />
      <About />
      {page.localHtml ? <CityLocalHtml html={page.localHtml} /> : null}
      {page.kwImage ? (
        <CityKwImage src={page.kwImage.src} alt={page.kwImage.alt} caption={page.kwImage.caption} />
      ) : null}
      <Testimonials />
      <CityFAQ title={page.faqTitle} items={page.faq} phone={phone} />
      <CityNearby title={page.nearbyTitle} intro={page.nearbyIntro} links={page.nearby} />
      <CTABanner phone={phone} />
      <ServiceArea mapKeyword={page.mapKeyword} currentCitySlug={page.currentCitySlug} />
    </>
  );
}
