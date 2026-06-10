import Link from "next/link";
import parse, { type DOMNode, Element, domToReact } from "html-react-parser";

type RichHtmlProps = {
  html: string;
  className?: string;
};

function replaceDomNode(domNode: DOMNode) {
  if (domNode instanceof Element && domNode.name === "a") {
    const href = domNode.attribs.href;
    if (href?.startsWith("/")) {
      return (
        <Link href={href}>{domToReact(domNode.children as DOMNode[], { replace: replaceDomNode })}</Link>
      );
    }
    if (href?.startsWith("http")) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {domToReact(domNode.children as DOMNode[], { replace: replaceDomNode })}
        </a>
      );
    }
  }
  return undefined;
}

export function RichHtml({ html, className }: RichHtmlProps) {
  return <>{parse(html, { replace: replaceDomNode })}</>;
}
