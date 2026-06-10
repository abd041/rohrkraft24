import type { ServicePageData } from "./types";
import { ROHRREINIGUNG_PAGE } from "./rohrreinigung";
import { KANALREINIGUNG_PAGE } from "./kanalreinigung";
import { ABFLUSSREINIGUNG_PAGE } from "./abflussreinigung";
import { TOILETTEVERSTOPFT_PAGE } from "./toilette-verstopft";
import { ROHRSANIERUNG_PAGE } from "./rohrsanierung";
import { KANALSANIERUNG_PAGE } from "./kanalsanierung";
import { KAMERAINSPEKTION_PAGE } from "./kamerainspektion";
import { NOTDIENST_PAGE } from "./notdienst";

export type { ServicePageData, ServicePageHeroData } from "./types";

const SERVICE_PAGES: Record<string, ServicePageData> = {
  rohrreinigung: ROHRREINIGUNG_PAGE,
  kanalreinigung: KANALREINIGUNG_PAGE,
  abflussreinigung: ABFLUSSREINIGUNG_PAGE,
  "toilette-verstopft": TOILETTEVERSTOPFT_PAGE,
  rohrsanierung: ROHRSANIERUNG_PAGE,
  kanalsanierung: KANALSANIERUNG_PAGE,
  kamerainspektion: KAMERAINSPEKTION_PAGE,
  notdienst: NOTDIENST_PAGE,
};

export const SERVICE_PAGE_SLUGS = Object.keys(SERVICE_PAGES);

export function getServicePageData(slug: string): ServicePageData | undefined {
  return SERVICE_PAGES[slug];
}
