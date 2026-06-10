import { RichHtml } from "./RichHtml";

export type LegalBlock =
  | { type: "h2"; text: string }
  | { type: "p"; html: string }
  | { type: "ul"; items: string[] };

type LegalContentProps = {
  h1: string;
  blocks: LegalBlock[];
};

export function LegalContent({ h1, blocks }: LegalContentProps) {
  return (
    <section className="section" style={{ background: "white" }}>
      <div className="container" style={{ maxWidth: 760 }}>
        <h1 style={{ marginBottom: "2rem" }}>{h1}</h1>
        {blocks.map((block, index) => {
          if (block.type === "h2") {
            return (
              <h2 key={index} style={{ fontSize: "1.1rem", marginTop: index > 0 ? "2rem" : 0, marginBottom: "0.5rem" }}>
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
