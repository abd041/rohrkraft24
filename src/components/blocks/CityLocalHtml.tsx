import { RichHtml } from "./RichHtml";

type CityLocalHtmlProps = {
  html: string;
};

export function CityLocalHtml({ html }: CityLocalHtmlProps) {
  if (!html.trim()) return null;
  return (
    <section className="local-premium">
      <div className="container local-premium__inner">
        <RichHtml html={html} />
      </div>
    </section>
  );
}
