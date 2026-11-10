import Link from "next/link";
import { PRODUCT_SYMPTOMS } from "@/lib/product-symptoms";

// "Is this your problem?" block near the top of a product page. Renders
// nothing for a product without an entry in lib/product-symptoms.ts.
export function ProductSymptoms({ product }: { product: string }) {
  const data = PRODUCT_SYMPTOMS[product];
  if (!data) return null;

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="eyebrow">Is this your problem?</p>
        <h2 className="mt-3 text-3xl md:text-4xl mb-10 text-foreground text-balance">{data.heading}</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {data.signs.map((s) => (
            <div key={s.sign} className="card-lift card-rule rounded-xl border border-border bg-card p-6">
              <h3 className="text-xl text-foreground mb-4">{s.sign}</h3>
              <dl className="space-y-3 leading-relaxed">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.12em] text-primary">Usual cause</dt>
                  <dd className="mt-1 text-muted-foreground">{s.cause}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.12em] text-primary">What fixes it</dt>
                  <dd className="mt-1 text-foreground">{s.fix}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-r-xl border-l-4 border-secondary bg-white px-6 py-5 text-foreground shadow-sm">
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-primary mb-1">When you may not need this</p>
          <p className="font-medium">
            {data.notFor.text}
            {data.notFor.link && (
              <>
                {" "}
                <Link href={data.notFor.link.href} className="link-arrow inline-flex">
                  {data.notFor.link.label} <span className="arrow">→</span>
                </Link>
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
