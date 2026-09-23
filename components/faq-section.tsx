import { JsonLd } from "@/components/json-ld";
import { faqPageSchema } from "@/lib/schema";
import type { Faq } from "@/lib/product-content";

// Visible FAQ block plus matching FAQPage structured data. The schema must
// only ever describe questions that are visible on the page, so both are
// rendered from the same array here.
export function FaqSection({
  faqs,
  heading = "Frequently asked questions",
}: {
  faqs: Faq[];
  heading?: string;
}) {
  if (!faqs.length) return null;
  return (
    <section className="border-t border-border bg-linear-to-br from-secondary/5 to-secondary/10 py-16 md:py-20">
      <JsonLd data={faqPageSchema(faqs)} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-foreground">{heading}</h2>
        <dl className="space-y-6">
          {faqs.map((f) => (
            <div key={f.question} className="p-6 rounded-lg border border-border bg-card">
              <dt className="text-lg font-semibold text-foreground mb-2">{f.question}</dt>
              <dd className="text-muted-foreground leading-relaxed">{f.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
