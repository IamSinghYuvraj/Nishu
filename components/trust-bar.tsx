import { BUSINESS } from "@/lib/site";
import { FEATURED_COUNTRIES } from "@/lib/countries";

// The track record, stated the same way on every product and industry page.
// Only facts we can stand behind: the founding year, named countries and
// named clients. No counts.
const CLIENTS = ["Bisleri", "Bailey", "Campa", "McDonald's", "Mantra", "Meru Spring"];

export function TrustBar() {
  return (
    <section aria-label="Our track record" className="border-b border-border bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-px bg-border md:grid-cols-[1fr_1.6fr_1.6fr]">
          <div className="group bg-white px-2 py-8 text-center md:py-10">
            <dt className="sr-only">Established</dt>
            <dd>
              <span className="readout block text-4xl text-foreground transition-colors duration-300 group-hover:text-primary md:text-5xl">
                {BUSINESS.foundingYear}
              </span>
              <span className="mt-2 block font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                Established in Vasai, Mumbai
              </span>
            </dd>
          </div>
          <div className="group flex items-center justify-center bg-white px-4 py-8 text-center md:py-10">
            <dt className="sr-only">Countries</dt>
            <dd>
              <span className="block font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">Plants running in</span>
              <span className="mt-2 block text-lg font-semibold text-foreground md:text-xl">
                <span className="transition-colors duration-300 group-hover:text-primary">{FEATURED_COUNTRIES.join(" · ")}</span>
                <span className="text-muted-foreground"> &amp; many more</span>
              </span>
            </dd>
          </div>
          <div className="group flex items-center justify-center bg-white px-4 py-8 text-center md:col-span-1 md:py-10">
            <dt className="sr-only">Clients</dt>
            <dd>
              <span className="block font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">Trusted by</span>
              <span className="mt-2 block text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary md:text-xl">
                {CLIENTS.join(" · ")}
              </span>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
