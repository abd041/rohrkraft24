import { Breadcrumb } from "@/components/blocks/Breadcrumb";
import { LegalContent, type LegalBlock } from "@/components/blocks/LegalContent";

type StaticPageTemplateProps = {
  breadcrumb: string;
  h1: string;
  blocks: LegalBlock[];
};

export function StaticPageTemplate({ breadcrumb, h1, blocks }: StaticPageTemplateProps) {
  return (
    <>
      <Breadcrumb current={breadcrumb} />
      <LegalContent h1={h1} blocks={blocks} />
    </>
  );
}
