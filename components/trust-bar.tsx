import { BUSINESS } from "@/lib/site";
import { CountUp } from "@/components/count-up";

// The track record, stated the same way on every product and industry page.
// Figures come from BUSINESS.stats so they cannot drift apart between pages.
const CLIENTS = ["Bisleri", "Bailey", "Campa", "McDonald's", "Mantra", "Meru Spring"];

export function TrustBar() {
  const { years, plants, clients, countries } = BUSINESS.stats;
  const stats = [
    { value: years, suffix: "", label: `years in water treatment, since ${BUSINESS.foundingYear}` },
    { value: plants, suffix: "+", label: "plants installed" },
    { value: clients, suffix: "+", label: "clients served" },
    { value: countries, suffix: "", label: "countries" },
  ];

  return (
    <section aria-label="Our track record" className="border-b border-border bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-px bg-border md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group bg-white px-2 py-8 text-center md:py-10"
            >
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="readout block text-4xl text-foreground transition-colors duration-300 group-hover:text-primary md:text-5xl">
                  <CountUp value={s.value} suffix={s.suffix} />
                </span>
                <span className="mt-2 block font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  {s.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
        <p className="border-t border-border py-4 text-center text-sm text-muted-foreground">
          Trusted by <span className="font-semibold text-foreground">{CLIENTS.slice(0, -1).join(", ")}</span> and{" "}
          <span className="font-semibold text-foreground">{CLIENTS[CLIENTS.length - 1]}</span>.
        </p>
      </div>
    </section>
  );
}
