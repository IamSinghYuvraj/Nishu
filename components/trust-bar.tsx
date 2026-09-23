import { BUSINESS } from "@/lib/site";

// The track record, stated the same way on every product and industry page.
// Figures come from BUSINESS.stats so they cannot drift apart between pages.
const CLIENTS = ["Bisleri", "Bailey", "Campa", "McDonald's", "Mantra", "Meru Spring"];

export function TrustBar() {
  const { years, plants, clients, countries } = BUSINESS.stats;
  const stats = [
    { value: `${years} years`, label: `in water treatment, since ${BUSINESS.foundingYear}` },
    { value: `${plants}+`, label: "plants installed" },
    { value: `${clients}+`, label: "clients served" },
    { value: `${countries}`, label: "countries" },
  ];

  return (
    <section aria-label="Our track record" className="border-y border-border bg-card py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block text-3xl md:text-4xl font-bold text-foreground">{s.value}</span>
                <span className="block mt-1 text-sm text-muted-foreground">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Trusted by {CLIENTS.slice(0, -1).join(", ")} and {CLIENTS[CLIENTS.length - 1]}.
        </p>
      </div>
    </section>
  );
}
