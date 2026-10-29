import Link from "next/link";
import type { ReactNode } from "react";
import type { Block } from "@/lib/blog";

// Renders the small inline syntax used in lib/blog.ts: [text](href), **bold**, *italic*.
function inline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const pattern = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*/g;
  let last = 0;
  for (const m of text.matchAll(pattern)) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const key = m.index;
    if (m[1]) parts.push(<Link key={key} href={m[2]}>{m[1]}</Link>);
    else if (m[3]) parts.push(<strong key={key}>{m[3]}</strong>);
    else parts.push(<em key={key}>{m[4]}</em>);
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

export const slugify = (text: string) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export function Prose({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return <h2 key={i} id={slugify(b.text)}>{b.text}</h2>;
          case "callout":
            return <aside key={i} className="callout"><p>{inline(b.text)}</p></aside>;
          case "ul":
            return <ul key={i}>{b.items.map((t, j) => <li key={j}>{inline(t)}</li>)}</ul>;
          case "ol":
            return <ol key={i}>{b.items.map((t, j) => <li key={j}>{inline(t)}</li>)}</ol>;
          default:
            return <p key={i}>{inline(b.text)}</p>;
        }
      })}
    </div>
  );
}
