import { CityFAQ } from "@/components/blocks/CityFAQ";
import { CityKwImage } from "@/components/blocks/CityKwImage";
import { CityLocalHtml } from "@/components/blocks/CityLocalHtml";
import { CityNearby } from "@/components/blocks/CityNearby";
import { CityServiceBreadcrumb } from "@/components/blocks/CityServiceBreadcrumb";
import { CityServiceHero } from "@/components/blocks/CityServiceHero";
import { JsonLd } from "@/components/seo/JsonLd";
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
import { getCityPageSchema } from "@/lib/schema";

type CityServicePageTemplateProps = {
  page: CityPageData;
};

export function CityServicePageTemplate({ page }: CityServicePageTemplateProps) {
  const phone = page.phone;

  return (
    <>
      <JsonLd
        data={getCityPageSchema({
          cityName: page.cityName,
          serviceLabel: page.serviceLabel,
          slug: page.slug,
          heroBrief: page.hero.body,
        })}
      />
      <CityServiceBreadcrumb
        serviceLabel={page.serviceLabel}
        serviceHref={page.serviceHref}
        current={page.breadcrumb}
      />
      <CityServiceHero hero={page.hero} phone={phone} />
      <TrustMarquee variant="premium" />
      <Features variant="premium" />
      <Services variant="premium" cityLabel={page.cityShort} />
      <Pricing variant="premium" cityLabel={page.cityShort} phone={phone} />
      <MiniCTA variant="premium" phone={phone} />
      <About variant="premium" />
      {page.localHtml ? <CityLocalHtml html={page.localHtml} /> : null}
      {page.kwImage ? (
        <CityKwImage src={page.kwImage.src} alt={page.kwImage.alt} caption={page.kwImage.caption} />
      ) : null}
      <Testimonials variant="premium" />
      <CityFAQ title={page.faqTitle} items={page.faq} phone={phone} />
      <CityNearby title={page.nearbyTitle} intro={page.nearbyIntro} links={page.nearby} />
      <ServiceArea
        variant="premium"
        mapKeyword={page.mapKeyword}
        currentCitySlug={page.currentCitySlug}
      />
      <CTABanner variant="premium" phone={phone} />
    </>
  );
}
