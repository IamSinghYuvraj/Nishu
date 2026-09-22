// Long-form articles for /blog. Each targets a real search phrase that
// industrial buyers use before they ever search for a manufacturer by name.
// Keep the technical claims consistent with the specs on the product pages.

export type Block =
  | { kind: "p"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "ol"; items: string[] }
  | { kind: "table"; head: string[]; rows: string[][] }
  | { kind: "callout"; text: string };

export interface Post {
  slug: string;
  title: string;
  /** Meta description and listing subtitle. */
  description: string;
  /** The search phrase this article is written for. */
  targetQuery: string;
  published: string; // ISO date
  readingMinutes: number;
  image: string;
  imageAlt: string;
  /** Product page this article should send a qualified reader to. */
  cta: { label: string; href: string };
  body: Block[];
}

export const POSTS: Post[] = [
  {
    slug: "ro-plant-capacity-for-your-factory",
    title: "How to Choose the Right RO Plant Capacity for Your Factory",
    description:
      "Sizing an industrial RO plant by daily demand, feed water TDS and recovery rate — and the three mistakes that lead to an undersized or oversized plant.",
    targetQuery: "how to select ro plant capacity",
    published: "2026-09-22",
    readingMinutes: 6,
    image: "/ro-img11.jpeg",
    imageAlt: "Industrial reverse osmosis plant installed at a factory",
    cta: { label: "See our RO plant range", href: "/products/reverse-osmosis" },
    body: [
      {
        kind: "p",
        text: "Capacity is the first number anyone asks for and the one most often guessed. Get it wrong on the low side and the plant runs continuously without a maintenance window; too high and you have paid for membranes and pumps that idle. Both mistakes are avoidable with an afternoon of arithmetic before you request quotations.",
      },
      { kind: "h2", text: "Start with consumption, not with plant sizes" },
      {
        kind: "p",
        text: "Work out how much treated water your process genuinely consumes in a day, measured rather than estimated. Take meter readings across a normal production week, not a quiet one. Then add the water your process wastes: rejects, rinses, cleaning cycles and any line losses.",
      },
      {
        kind: "p",
        text: "Divide that daily figure by the hours the plant will actually run. Most industrial installations size for 16 to 20 hours of operation rather than 24, which leaves room for cleaning, membrane flushing and unplanned stoppages without interrupting production.",
      },
      {
        kind: "callout",
        text: "A plant sized for 24 hours a day has no maintenance window. The first CIP cycle stops your production line.",
      },
      { kind: "h2", text: "Then correct for your feed water" },
      {
        kind: "p",
        text: "Rated capacity assumes a particular feed quality. Your borewell or municipal supply will differ, and two figures change the sizing more than any other:",
      },
      {
        kind: "ul",
        items: [
          "Total Dissolved Solids (TDS). Higher TDS means higher operating pressure and lower recovery. A plant rated at a given output on 500 ppm feed will deliver noticeably less on 2,000 ppm feed.",
          "Recovery rate. This is the share of feed water that becomes product water — commonly 50 to 75 percent for industrial brackish water systems. At 60 percent recovery, 1,000 litres of product water requires roughly 1,650 litres of feed.",
          "Temperature. Membrane output falls as water gets colder. A plant commissioned in May can underperform in January if it was sized without a temperature correction.",
        ],
      },
      {
        kind: "p",
        text: "Get a full water analysis before specifying anything. Hardness, iron, silica, chlorides and turbidity all decide what pre-treatment sits ahead of the membranes, and pre-treatment failures — not membranes — cause most early plant problems.",
      },
      { kind: "h2", text: "A worked example" },
      {
        kind: "table",
        head: ["Step", "Figure"],
        rows: [
          ["Measured process demand", "24,000 litres/day"],
          ["Add 15% for rinses and losses", "27,600 litres/day"],
          ["Operating hours per day", "18 hours"],
          ["Required product flow", "≈ 1,530 LPH"],
          ["Round up for headroom and fouling", "1,750–2,000 LPH"],
        ],
      },
      {
        kind: "p",
        text: "The headroom at the end is not padding. Membrane output declines gradually with age and fouling, and a plant specified with no margin will fall below your requirement long before the membranes are due for replacement.",
      },
      { kind: "h2", text: "Three mistakes worth avoiding" },
      {
        kind: "ol",
        items: [
          "Sizing from peak demand instead of daily volume. Peaks are better handled with treated-water storage than with a larger plant — storage is far cheaper per litre than membranes.",
          "Ignoring future expansion. If a second line is planned within two years, specify the skid and piping to accept an additional membrane bank now. Retrofitting later costs more than building the headroom in.",
          "Specifying capacity without a water analysis. The same rated plant behaves differently on different feed water, and the pre-treatment is what changes.",
        ],
      },
      { kind: "h2", text: "What to send a manufacturer" },
      {
        kind: "p",
        text: "You will get a far more accurate quotation — and a comparable one across suppliers — if your enquiry includes daily requirement in litres, intended operating hours, a recent feed water analysis, the source (borewell, municipal or surface), available space, and the quality your process actually needs. Without those, every quotation you receive is an assumption.",
      },
      {
        kind: "p",
        text: "We manufacture industrial RO systems up to 10,000 LPH and beyond, and will size a plant against your water analysis before quoting.",
      },
    ],
  },

  {
    slug: "ro-vs-dm-plant",
    title: "RO vs DM Plant: Which One Does Your Industry Actually Need?",
    description:
      "Reverse osmosis and demineralisation solve different problems. A practical comparison by output purity, running cost and the industries each suits.",
    targetQuery: "difference between ro and dm plant",
    published: "2026-09-22",
    readingMinutes: 5,
    image: "/DM image 1.jpg",
    imageAlt: "Demineralisation plant with two-bed ion exchange vessels",
    cta: { label: "Compare RO and DM plants", href: "/products/demineralized" },
    body: [
      {
        kind: "p",
        text: "These two are regularly treated as interchangeable, and they are not. Reverse osmosis pushes water through a semi-permeable membrane under pressure, physically separating dissolved solids. Demineralisation passes water through ion exchange resin beds that swap dissolved mineral ions for hydrogen and hydroxyl ions. Different mechanisms, different outputs, different economics.",
      },
      { kind: "h2", text: "The practical difference" },
      {
        kind: "table",
        head: ["", "RO plant", "DM plant"],
        rows: [
          ["Method", "Membrane separation under pressure", "Ion exchange resin beds"],
          ["Typical output", "Low TDS, not mineral-free", "Very low conductivity, near mineral-free"],
          ["Removes bacteria and organics", "Yes, largely", "No — ion exchange targets dissolved ions"],
          ["Water wasted", "Yes, as reject stream", "Minimal, but resin needs regeneration"],
          ["Ongoing consumables", "Membrane replacement", "Acid and alkali for regeneration"],
          ["Best where", "Feed TDS is high", "Feed TDS is already low but purity must be very high"],
        ],
      },
      { kind: "h2", text: "When RO is the right answer" },
      {
        kind: "p",
        text: "Choose RO when your feed water carries a heavy dissolved load — borewell supplies, brackish water, or any source above roughly 500 ppm TDS. It is also the right choice wherever the water will be consumed or used in food and beverage production, because membranes reject bacteria and organic contaminants that ion exchange does not touch.",
      },
      {
        kind: "ul",
        items: [
          "Packaged drinking water and beverage production",
          "Food processing",
          "General process water where the supply is brackish",
          "Any application where reducing high TDS is the primary problem",
        ],
      },
      { kind: "h2", text: "When DM is the right answer" },
      {
        kind: "p",
        text: "Choose DM when the specification is about conductivity rather than contamination — where even trace minerals cause scaling, spotting or interference. Boiler feed water is the classic case: dissolved salts concentrate as steam is raised, and scale on a boiler tube is both an efficiency loss and a safety problem.",
      },
      {
        kind: "ul",
        items: [
          "Boiler feed water, particularly at higher pressures",
          "Pharmaceutical process water",
          "Laboratory and analytical use",
          "Electronics and component rinsing, where drying must leave no residue",
        ],
      },
      { kind: "h2", text: "Why many plants use both" },
      {
        kind: "p",
        text: "For high-purity applications on poor feed water, the two work in series rather than in competition. RO removes the bulk of the dissolved load first; a smaller DM unit polishes what remains. Placing RO ahead of DM sharply reduces the ion load reaching the resin, which means longer runs between regenerations and less acid and alkali consumed.",
      },
      {
        kind: "callout",
        text: "RO first, DM second. Running DM alone on high-TDS feed means constant regeneration and chemical cost that an RO stage would have avoided.",
      },
      { kind: "h2", text: "Deciding for your own site" },
      {
        kind: "p",
        text: "Two questions settle it in most cases. First, what does your process specification actually demand — a TDS figure, or a conductivity figure? A conductivity specification usually points to DM. Second, what is the feed water TDS? A high figure means RO belongs in the design regardless of what follows it.",
      },
      {
        kind: "p",
        text: "If the answer is genuinely unclear, send a water analysis and your process specification to a manufacturer and ask them to justify the recommendation against both. A supplier who cannot explain why one suits you better than the other is guessing.",
      },
    ],
  },

  {
    slug: "mineral-water-plant-setup-cost-india",
    title: "Mineral Water Plant Setup in India: What Actually Drives the Cost",
    description:
      "The cost components of a packaged drinking water plant — treatment line, bottling speed, BIS and FSSAI compliance, utilities and space — and where budgets usually slip.",
    targetQuery: "mineral water plant setup cost india",
    published: "2026-09-22",
    readingMinutes: 7,
    image: "/Complete-Mineral-Water-Project(5).webp",
    imageAlt: "Complete packaged drinking water plant with bottling line",
    cta: {
      label: "Explore turnkey mineral water projects",
      href: "/products/mineral-water-project",
    },
    body: [
      {
        kind: "p",
        text: "Anyone quoting a single figure for a packaged drinking water plant without asking questions first is guessing. The cost is driven by a handful of decisions, and understanding them is what lets you compare quotations that look wildly different on the surface.",
      },
      { kind: "h2", text: "The components you are actually buying" },
      {
        kind: "ol",
        items: [
          "Raw water treatment — pre-treatment, filtration and softening sized to your source water. A borewell with high hardness needs more here than a municipal supply.",
          "The RO system — the core treatment stage, sized by the output you intend to bottle.",
          "Disinfection — ozonation and UV, which keep the product safe through storage without chemical residue.",
          "Storage and distribution — treated water tanks, pumps and food-grade piping.",
          "The bottling line — rinsing, filling and capping. This is where costs diverge most.",
          "Ancillaries — shrink wrapping, labelling, coding, conveyors, crates.",
          "Utilities and civil work — power supply, flooring, drainage, and a room layout that will actually pass inspection.",
        ],
      },
      { kind: "h2", text: "Bottling speed is the biggest single lever" },
      {
        kind: "p",
        text: "Rinsing, filling and capping machines are rated in bottles per hour, and the jump from a modest line to a high-speed one changes the total project cost more than any other choice. Lines commonly run anywhere from a couple of thousand bottles per hour up to 24,000 BPH.",
      },
      {
        kind: "p",
        text: "The temptation is to specify for the market you hope to have in three years. The safer approach is to size the bottling line for realistic demand in year one and design the treatment and layout so a faster line can drop in later. Treated water storage is inexpensive; an idle high-speed filler is not.",
      },
      {
        kind: "callout",
        text: "Pack size matters as much as speed. A line configured for 1 litre bottles is not the same machine as one running 200 ml cups or 20 litre jars. Decide your pack mix before anyone quotes.",
      },
      { kind: "h2", text: "Compliance is a cost line, not an afterthought" },
      {
        kind: "p",
        text: "Packaged drinking water in India requires BIS certification, an FSSAI licence and a laboratory capable of the prescribed testing. These carry real costs — licence fees, laboratory equipment, a qualified chemist, and a plant layout that satisfies inspection — and they take time. Projects usually slip on approvals rather than on equipment delivery.",
      },
      {
        kind: "ul",
        items: [
          "BIS certification for packaged drinking water",
          "FSSAI manufacturing licence",
          "An in-house laboratory with the prescribed testing capability",
          "Water source approval and periodic testing",
          "Pollution control consent, depending on your state",
        ],
      },
      { kind: "h2", text: "What a supplier must ask before quoting" },
      {
        kind: "p",
        text: "Treat these questions as a test of the supplier. If a quotation arrives without them, it cannot be accurate:",
      },
      {
        kind: "table",
        head: ["Question", "Why it changes the price"],
        rows: [
          ["Source and water analysis", "Decides the entire pre-treatment design"],
          ["Target output per hour", "Sizes the RO plant and the bottling line"],
          ["Pack sizes and mix", "Different machines and change parts"],
          ["Shifts per day", "Decides whether one line is enough"],
          ["Available floor area and height", "Constrains layout and conveyor design"],
          ["Power availability", "May require a different pump and motor specification"],
        ],
      },
      { kind: "h2", text: "Where budgets usually slip" },
      {
        kind: "p",
        text: "Three items are routinely left out of first budgets and then appear later: civil and electrical work at the site, the laboratory and compliance costs, and working capital for preforms, caps, labels and film. Equipment is the visible cost; these are the ones that delay commissioning.",
      },
      {
        kind: "p",
        text: "We deliver complete turnkey packaged drinking water projects — raw water treatment through to bottling — built to BIS and FSSAI standards, and will quote against your source water and target output rather than a generic package.",
      },
    ],
  },

  {
    slug: "hard-water-industrial-boilers-softener",
    title: "What Hard Water Does to an Industrial Boiler",
    description:
      "How scale forms in boilers and cooling systems, what it costs in fuel, and how an industrial water softener differs from RO for hardness removal.",
    targetQuery: "industrial water softener for boiler feed water",
    published: "2026-09-22",
    readingMinutes: 5,
    image: "/Water-Softening-Plant.jpg",
    imageAlt: "Industrial water softening plant with resin vessels",
    cta: {
      label: "See water softening plants",
      href: "/products/water-softening",
    },
    body: [
      {
        kind: "p",
        text: "Hardness is dissolved calcium and magnesium. In a boiler, cooling tower or heat exchanger, those minerals come out of solution as the water heats and deposit on the hottest surfaces as scale. The damage is gradual, which is exactly why it is usually caught late.",
      },
      { kind: "h2", text: "Scale is a fuel problem before it is a failure" },
      {
        kind: "p",
        text: "Scale is a poor conductor of heat. A deposit on a boiler tube forces you to burn more fuel to transfer the same heat into the water, and that penalty compounds as the layer thickens. Long before anything fails, you are paying for it every day in gas or oil.",
      },
      {
        kind: "p",
        text: "It rarely stops there. Scale narrows tubes and restricts flow, it causes local overheating where deposits are thickest, and it shortens the life of pumps, valves and heat exchangers throughout the circuit. In severe cases, overheating under a scale layer becomes a tube failure and an unplanned shutdown.",
      },
      {
        kind: "callout",
        text: "The symptoms to watch for: fuel consumption creeping up at constant output, longer heat-up times, and scale visible on inspection of tubes or the sight glass.",
      },
      { kind: "h2", text: "How a softener works" },
      {
        kind: "p",
        text: "A water softener passes the feed through a bed of ion exchange resin that holds sodium ions. As hard water flows through, calcium and magnesium are taken up by the resin and sodium is released in their place. The water leaving the vessel carries no hardness, so there is nothing to deposit as scale.",
      },
      {
        kind: "p",
        text: "The resin eventually saturates and is regenerated with a brine solution, which strips the accumulated hardness and recharges the bed with sodium. Regeneration can be manual or automatic on a timer or a volume meter. For anything running continuously, automatic regeneration is worth the difference.",
      },
      { kind: "h2", text: "Softener or RO?" },
      {
        kind: "p",
        text: "They solve different problems and are often confused. A softener removes hardness only — it leaves total dissolved solids essentially unchanged. RO reduces dissolved solids across the board, hardness included.",
      },
      {
        kind: "table",
        head: ["If the problem is", "Use"],
        rows: [
          ["Scale in boilers, cooling towers, heat exchangers", "Water softener"],
          ["High TDS in the supply", "RO plant"],
          ["High-pressure boiler feed needing very low conductivity", "DM plant, often after RO"],
          ["Hard water feeding an RO plant", "Softener ahead of the RO, protecting the membranes"],
        ],
      },
      {
        kind: "p",
        text: "That last row matters. Hardness fouls RO membranes, so a softener is frequently installed as pre-treatment rather than as an alternative. The two are complementary far more often than they are competing.",
      },
      { kind: "h2", text: "Sizing one correctly" },
      {
        kind: "p",
        text: "Softener capacity depends on your feed hardness, daily volume, and how often you are willing to regenerate. A test report giving hardness in ppm as calcium carbonate, together with daily consumption and peak flow rate, is enough for a manufacturer to size a vessel and resin volume properly. Undersized softeners regenerate constantly and consume salt; oversized ones cost more than they need to.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
