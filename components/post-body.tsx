import type { Block } from "@/lib/posts";

// Renders the typed article blocks from lib/posts.ts.
export function PostBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5 text-[1.0625rem]">
      {blocks.map((block, i) => {
        switch (block.kind) {
          case "h2":
            return (
              <h2 key={i} className="text-2xl md:text-3xl text-foreground pt-8 scroll-mt-28">
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="text-xl text-foreground pt-4">
                {block.text}
              </h3>
            );
          case "p":
            return (
              <p key={i} className="leading-[1.75] text-foreground/85">
                {block.text}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-2.5 text-foreground/85">
                {block.items.map((item, j) => (
                  <li key={j} className="relative pl-7 leading-relaxed before:absolute before:left-1 before:top-[0.6em] before:h-2 before:w-2 before:rounded-full before:bg-primary">
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="list-decimal space-y-2.5 pl-6 text-foreground/85 marker:font-mono marker:font-semibold marker:text-primary">
                {block.items.map((item, j) => (
                  <li key={j} className="leading-relaxed">{item}</li>
                ))}
              </ol>
            );
          case "callout":
            return (
              <p
                key={i}
                className="rounded-r-xl border-l-4 border-secondary bg-white px-6 py-5 font-medium text-foreground shadow-sm"
              >
                {block.text}
              </p>
            );
          case "table":
            return (
              <div key={i} className="overflow-x-auto rounded-xl border border-border bg-white shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-ink text-white">
                      {block.head.map((h, j) => (
                        <th key={j} className="px-4 py-3 text-left font-mono text-xs font-medium uppercase tracking-wider">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, j) => (
                      <tr key={j} className="border-t border-border transition-colors hover:bg-accent/60">
                        {row.map((cell, k) => (
                          <td key={k} className="px-4 py-3 align-top text-foreground/85">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
        }
      })}
    </div>
  );
}
