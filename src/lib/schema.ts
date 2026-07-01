import { COPY, SERVICE_LINKS, SITE } from "@/lib/constants";

const ORG_ID = `${SITE.website}/#organization`;
const WEBSITE_ID = `${SITE.website}/#website`;

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
        telephone: "+4917620222200",
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
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "07:00",
            closes: "20:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "08:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Sunday",
            opens: "10:00",
            closes: "16:00",
          },
        ],
        priceRange: "€€",
        currenciesAccepted: "EUR",
        paymentAccepted: "Cash, Credit Card, Bank Transfer",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: SITE.rating,
          bestRating: 5,
          ratingCount: SITE.reviewCount,
        },
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
