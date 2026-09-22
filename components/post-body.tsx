import type { Block } from "@/lib/posts";

// Renders the typed article blocks from lib/posts.ts.
export function PostBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        switch (block.kind) {
          case "h2":
            return (
              <h2 key={i} className="text-2xl md:text-3xl font-bold text-foreground pt-6">
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="text-xl font-semibold text-foreground pt-3">
                {block.text}
              </h3>
            );
          case "p":
            return (
              <p key={i} className="text-base leading-relaxed text-muted-foreground">
                {block.text}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="list-disc pl-6 space-y-2 text-muted-foreground">
                {block.items.map((item, j) => (
                  <li key={j} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="list-decimal pl-6 space-y-2 text-muted-foreground">
                {block.items.map((item, j) => (
                  <li key={j} className="leading-relaxed">{item}</li>
                ))}
              </ol>
            );
          case "callout":
            return (
              <p
                key={i}
                className="border-l-4 border-primary bg-primary/10 px-5 py-4 rounded-r-lg text-foreground font-medium"
              >
                {block.text}
              </p>
            );
          case "table":
            return (
              <div key={i} className="overflow-x-auto">
                <table className="w-full text-sm border border-border rounded-lg">
                  <thead>
                    <tr className="bg-muted">
                      {block.head.map((h, j) => (
                        <th key={j} className="text-left font-semibold px-4 py-3 text-foreground">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, j) => (
                      <tr key={j} className="border-t border-border">
                        {row.map((cell, k) => (
                          <td key={k} className="px-4 py-3 align-top text-muted-foreground">
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
