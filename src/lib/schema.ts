import { COPY, OPENING_HOURS, SERVICE_LINKS, SITE } from "@/lib/constants";

const ORG_ID = `${SITE.website}/#organization`;
const WEBSITE_ID = `${SITE.website}/#website`;

/**
 * Site-wide PlumbingService + WebSite @graph.
 * Injected on every page via the root layout.
 *
 * TODO (pre-launch):
 *   - geo: current coordinates point to Berlin city centre (52.520008, 13.404954).
 *     Replace with the exact lat/lng of Mühlenstr. 8a, 14167 Berlin once verified
 *     (Zehlendorf area – approx. 52.432, 13.258 but confirm via Google Maps).
 *   - aggregateRating: removed intentionally – the values in SITE.rating / SITE.reviewCount
 *     are static placeholders, not live data from Google Reviews API.
 *     Re-add this block only after connecting a real Google Business Profile / Places API
 *     integration so the numbers are verifiable.
 */
export function getSiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "PlumbingService",
        "@id": ORG_ID,
        name: SITE.name,
        legalName: SITE.legalName,
        url: SITE.website,
        logo: `${SITE.website}/images/logo.svg`,
        image: `${SITE.website}/images/logo.svg`,
        telephone: SITE.phoneHref.replace("tel:", ""),
        email: SITE.email,
        description:
          `Rohrreinigung, Kamera-Inspektion, Rohrreparatur und 24h Notdienst in Berlin und Umgebung (100 km). Festpreise und ${COPY.team}.`,
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.street,
          addressLocality: SITE.city,
          postalCode: SITE.zip,
          addressCountry: "DE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 52.520008,
          longitude: 13.404954,
        },
        areaServed: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: 52.520008,
            longitude: 13.404954,
          },
          geoRadius: 100000,
        },
        openingHoursSpecification: OPENING_HOURS.specs.map((s) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: s.dayOfWeek,
          opens: s.opens,
          closes: s.closes,
        })),
        priceRange: "€€",
        currenciesAccepted: "EUR",
        paymentAccepted: "Cash, Credit Card, Bank Transfer",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Leistungen",
          itemListElement: SERVICE_LINKS.filter((s) => s.href !== "/notdienst").map(
            (service, index) => ({
              "@type": "Offer",
              position: index + 1,
              itemOffered: {
                "@type": "Service",
                name: service.label,
                url: `${SITE.website}${service.href}/`,
              },
            }),
          ),
        },
        makesOffer: {
          "@type": "Offer",
          name: SITE.travelFeeLabel,
          description: SITE.travelFeeNote,
          price: SITE.travelFee,
          priceCurrency: "EUR",
        },
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE.website,
        name: SITE.name,
        inLanguage: "de-DE",
        publisher: { "@id": ORG_ID },
      },
    ],
  };
}

/**
 * Per-city-service-page JSON-LD.
 *
 * Outputs a Service node with:
 *  - city-specific areaServed
 *  - a back-reference to the global PlumbingService organisation via @id
 *
 * Injected only on /[service]-[city]/ pages via CityServicePageTemplate.
 */
export function getCityPageSchema(data: {
  cityName: string;
  serviceLabel: string;
  slug: string;
  heroBrief?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.website}/${data.slug}/#service`,
    name: `${data.serviceLabel} ${data.cityName}`,
    serviceType: data.serviceLabel,
    description:
      data.heroBrief ??
      `Professionelle ${data.serviceLabel} in ${data.cityName} und Umgebung – schnell, zuverlässig und zum Festpreis.`,
    provider: {
      "@type": "PlumbingService",
      "@id": ORG_ID,
      name: SITE.name,
      telephone: SITE.phoneHref.replace("tel:", ""),
    },
    areaServed: {
      "@type": "City",
      name: data.cityName,
    },
    url: `${SITE.website}/${data.slug}/`,
    offers: {
      "@type": "Offer",
      price: String(SITE.travelFee),
      priceCurrency: "EUR",
      description: SITE.travelFeeNote,
    },
  };
}
