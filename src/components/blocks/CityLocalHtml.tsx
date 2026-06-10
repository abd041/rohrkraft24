import { RichHtml } from "./RichHtml";

type CityLocalHtmlProps = {
  html: string;
};

export function CityLocalHtml({ html }: CityLocalHtmlProps) {
  if (!html.trim()) return null;
  return <RichHtml html={html} />;
}
