export type ServicePageHeroData = {
  titleLine1: string;
  titleLine2: string;
  tagline: string;
  body: string;
  image: {
    src: string;
    srcSm: string;
    alt: string;
  };
};

export type ServicePageData = {
  slug: string;
  breadcrumbLabel: string;
  mapKeyword: string;
  hero: ServicePageHeroData;
};
