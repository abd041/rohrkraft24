import { RichHtml } from "./RichHtml";

export type BlogBlock =
  | { type: "h2"; id?: string; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; html: string }
  | { type: "callout"; html: string }
  | { type: "table"; html: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

type BlogContentProps = {
  blocks: BlogBlock[];
};

export function BlogContent({ blocks }: BlogContentProps) {
  return (
    <>
      {blocks.map((block, index) => {
        if (block.type === "h2") {
          return (
            <h2 key={index} id={block.id}>
              {block.text}
            </h2>
          );
        }
        if (block.type === "h3") {
          return <h3 key={index}>{block.text}</h3>;
        }
        if (block.type === "callout") {
          return (
            <div key={index} className="blog-callout">
              <RichHtml html={block.html} />
            </div>
          );
        }
        if (block.type === "table") {
          return <RichHtml key={index} html={block.html} />;
        }
        if (block.type === "ul") {
          return (
            <ul key={index}>
              {block.items.map((item, i) => (
                <li key={i}>
                  <RichHtml html={item} />
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === "ol") {
          return (
            <ol key={index}>
              {block.items.map((item, i) => (
                <li key={i}>
                  <RichHtml html={item} />
                </li>
              ))}
            </ol>
          );
        }
        return (
          <p key={index}>
            <RichHtml html={block.html} />
          </p>
        );
      })}
    </>
  );
}
