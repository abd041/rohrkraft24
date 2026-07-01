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

export type ServiceContentStep = {
  title: string;
  text: string;
};

export type ServicePageContent = {
  intro: string;
  whenNeeded: {
    title: string;
    items: string[];
  };
  process: {
    title: string;
    steps: ServiceContentStep[];
  };
  examples: {
    title: string;
    items: string[];
  };
  pricing: string;
  related: { href: string; label: string }[];
};

export type ServicePageData = {
  slug: string;
  breadcrumbLabel: string;
  mapKeyword: string;
  hero: ServicePageHeroData;
  content: ServicePageContent;
};

export type ServicePageBase = Omit<ServicePageData, "content">;
