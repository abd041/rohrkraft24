import { LegalContent, type LegalBlock } from "@/components/blocks/LegalContent";
import { SubpageHero } from "@/components/blocks/SubpageHero";
import type { ReactNode } from "react";

type StaticPageTemplateProps = {
  breadcrumb: string;
  label?: string;
  h1: ReactNode;
  subtitle?: string;
  blocks: LegalBlock[];
  hideHero?: boolean;
};

export function StaticPageTemplate({
  breadcrumb,
  label,
  h1,
  subtitle,
  blocks,
  hideHero,
}: StaticPageTemplateProps) {
  return (
    <>
      {!hideHero && (
        <SubpageHero
          variant="premium"
          breadcrumb={breadcrumb}
          label={label ?? breadcrumb}
          title={h1}
          subtitle={subtitle}
        />
      )}
      <LegalContent blocks={blocks} variant="premium" />
    </>
  );
}
