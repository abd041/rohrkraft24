import { RichHtml } from "./RichHtml";

export type LegalBlock =
  | { type: "h2"; text: string }
  | { type: "p"; html: string }
  | { type: "ul"; items: string[] };

type LegalContentProps = {
  h1?: string;
  blocks: LegalBlock[];
  variant?: "default" | "premium";
};

export function LegalContent({ h1, blocks, variant = "default" }: LegalContentProps) {
  if (variant === "premium") {
    return (
      <section className="legal-premium">
        <div className="container legal-premium__inner">
          {h1 && <h1 className="legal-premium__title">{h1}</h1>}
          {blocks.map((block, index) => {
            if (block.type === "h2") {
              return (
                <h2 key={index} className="legal-premium__h2">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "ul") {
              return (
                <ul key={index} className="legal-premium__list">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={index} className="legal-premium__p">
                <RichHtml html={block.html} />
              </p>
            );
          })}
        </div>
      </section>
    );
  }

  return (
    <section className="section legal-content">
      <div className="container legal-content__inner">
        {h1 && <h1 className="legal-content__title">{h1}</h1>}
        {blocks.map((block, index) => {
          if (block.type === "h2") {
            return (
              <h2
                key={index}
                style={{ fontSize: "1.1rem", marginTop: index > 0 ? "2rem" : 0, marginBottom: "0.5rem" }}
              >
                {block.text}
              </h2>
            );
          }
          if (block.type === "ul") {
            return (
              <ul key={index} style={{ marginLeft: "1.5rem", marginTop: "0.5rem", lineHeight: 2 }}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          }
          return (
            <p key={index}>
              <RichHtml html={block.html} />
            </p>
          );
        })}
      </div>
    </section>
  );
}
