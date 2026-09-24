import { Plus } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { faqPageSchema } from "@/lib/schema";
import type { Faq } from "@/lib/product-content";

// FAQ accordion plus matching FAQPage structured data. The schema must only
// ever describe questions that are on the page, so both are rendered from
// the same array here. <details> keeps every answer in the HTML.
export function FaqSection({
  faqs,
  heading = "Frequently asked questions",
}: {
  faqs: Faq[];
  heading?: string;
}) {
  if (!faqs.length) return null;
  return (
    <section className="border-t border-border bg-mist py-16 md:py-24">
      <JsonLd data={faqPageSchema(faqs)} />
      <div className="max-w-7xl mx-auto grid gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_2fr] lg:px-8">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-3 text-3xl md:text-4xl text-foreground text-balance">{heading}</h2>
          <p className="mt-4 text-muted-foreground">
            Can&apos;t find your answer? Call or WhatsApp us and we&apos;ll answer it.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details
              key={f.question}
              open={i === 0}
              className="group rounded-xl border border-border bg-white transition-all duration-300 hover:border-primary/40 open:border-primary/40 open:shadow-lg open:shadow-ink/5"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-5 md:p-6 [&::-webkit-details-marker]:hidden">
                <span className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                  {f.question}
                </span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent text-primary transition-all duration-300 group-open:rotate-45 group-open:bg-primary group-open:text-white">
                  <Plus className="h-4 w-4" />
                </span>
              </summary>
              <p className="px-5 pb-6 leading-relaxed text-muted-foreground md:px-6">{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
