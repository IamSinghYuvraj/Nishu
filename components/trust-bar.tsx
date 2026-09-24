import { BUSINESS } from "@/lib/site";
import { CountUp } from "@/components/count-up";

// The track record, stated the same way on every product and industry page.
// Only figures we can stand behind: the founding year and the countries our
// plants are installed in. Both come from BUSINESS so they cannot drift.
const CLIENTS = ["Bisleri", "Bailey", "Campa", "McDonald's", "Mantra", "Meru Spring"];

export function TrustBar() {
  return (
    <section aria-label="Our track record" className="border-b border-border bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-px bg-border md:grid-cols-[1fr_1fr_2fr]">
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
          <div className="group bg-white px-2 py-8 text-center md:py-10">
            <dt className="sr-only">Countries</dt>
            <dd>
              <span className="readout block text-4xl text-foreground transition-colors duration-300 group-hover:text-primary md:text-5xl">
                <CountUp value={BUSINESS.stats.countries} />
              </span>
              <span className="mt-2 block font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                Countries with our plants
              </span>
            </dd>
          </div>
          <div className="group col-span-2 flex items-center justify-center bg-white px-4 py-8 text-center md:col-span-1 md:py-10">
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
