import type { ServicePageBase, ServicePageData } from "./types";
import { SERVICE_CONTENTS } from "./contents";
import { ROHRREINIGUNG_PAGE } from "./rohrreinigung";
import { KAMERA_INSPEKTION_PAGE } from "./kamera-inspektion";
import { ROHRREPARATUR_PAGE } from "./rohrreparatur";
import { LECKAGEORTUNG_PAGE } from "./leckageortung";
import { ABWASSERREINIGUNG_PAGE } from "./abwasserreinigung";
import { HEBEANLAGE_WARTUNG_PAGE } from "./hebeanlage-wartung";
import { SANITAERARBEITEN_PAGE } from "./sanitaerarbeiten";
import { WASSERSCHADEN_PAGE } from "./wasserschaden";
import { NOTDIENST_PAGE } from "./notdienst";

export type { ServicePageData, ServicePageBase, ServicePageHeroData, ServicePageContent } from "./types";

const SERVICE_PAGES: Record<string, ServicePageBase> = {
  rohrreinigung: ROHRREINIGUNG_PAGE,
  "kamera-inspektion": KAMERA_INSPEKTION_PAGE,
  rohrreparatur: ROHRREPARATUR_PAGE,
  leckageortung: LECKAGEORTUNG_PAGE,
  abwasserreinigung: ABWASSERREINIGUNG_PAGE,
  "hebeanlage-wartung": HEBEANLAGE_WARTUNG_PAGE,
  sanitaerarbeiten: SANITAERARBEITEN_PAGE,
  wasserschaden: WASSERSCHADEN_PAGE,
  notdienst: NOTDIENST_PAGE,
};

export const SERVICE_PAGE_SLUGS = Object.keys(SERVICE_PAGES);

export function getServicePageData(slug: string): ServicePageData | undefined {
  const page = SERVICE_PAGES[slug];
  const content = SERVICE_CONTENTS[slug];
  if (!page || !content) return undefined;
  return { ...page, content };
}
