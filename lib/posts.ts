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

/** Resources sections, in display order. */
export const POST_CATEGORIES = [
  { slug: "buying-and-cost", name: "Buying and cost" },
  { slug: "compliance", name: "Compliance" },
  { slug: "operations", name: "Operations and troubleshooting" },
  { slug: "industry-guides", name: "Industry guides" },
  { slug: "export", name: "Export" },
] as const;

export type PostCategory = (typeof POST_CATEGORIES)[number]["slug"];

export interface Post {
  slug: string;
  title: string;
  /** Search-result title when the headline is too long or misses the query. Under 60 chars. */
  seoTitle?: string;
  /** Meta description and listing subtitle. */
  description: string;
  /** The search phrase this article is written for. */
  targetQuery: string;
  published: string; // ISO date
  /** Last substantive edit (ISO date). Shown on the post and used for dateModified and the sitemap. */
  updated?: string;
  readingMinutes: number;
  image: string;
  imageAlt: string;
  /** Resources section the post is listed under and breadcrumbed to. */
  category: PostCategory;
  /**
   * Pillar page this article supports: linked near the top of the post and
   * again in its closing call to action.
   */
  cta: { label: string; href: string };
  /** Product pages that list this post under "Guides for buyers". */
  products: string[];
  /** Sibling posts that answer the reader's next question, in order. */
  related?: string[];
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
    category: "buying-and-cost",
    cta: { label: "See our RO plant range", href: "/products/reverse-osmosis" },
    products: ["reverse-osmosis"],
    related: ["compare-ro-plant-quotations", "ro-vs-dm-plant"],
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
    category: "buying-and-cost",
    cta: { label: "Compare RO and DM plants", href: "/products/demineralized" },
    products: ["demineralized", "reverse-osmosis"],
    related: ["ro-plant-capacity-for-your-factory", "hard-water-industrial-boilers-softener"],
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
    seoTitle: "Mineral Water Plant Setup Cost in India: What Drives It",
    description:
      "What drives mineral water plant setup cost in India: treatment line, bottling speed, FSSAI licensing and testing, utilities and space, and where budgets slip.",
    targetQuery: "mineral water plant setup cost india",
    published: "2026-09-22",
    updated: "2026-09-27",
    readingMinutes: 7,
    image: "/Complete-Mineral-Water-Project(5).webp",
    imageAlt: "Complete packaged drinking water plant with bottling line",
    category: "buying-and-cost",
    cta: {
      label: "Explore turnkey mineral water projects",
      href: "/products/mineral-water-project",
    },
    products: ["mineral-water-project", "rfc", "dosing-ozonation-uv"],
    related: ["ro-plant-capacity-for-your-factory"],
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
        text: "Packaged drinking water in India needs an FSSAI licence, an in-house laboratory and regular testing. BIS certification is no longer mandatory: FSSAI dropped that requirement in October 2024, made packaged drinking water a high-risk food category from November 2024 (with annual third-party audits for central licence holders), and brought in compulsory testing at FSSAI-notified NABL laboratories from January 2026. Compliance carries real costs — licence fees, laboratory equipment, a qualified chemist, testing charges and a plant layout that satisfies inspection — and it takes time. Projects usually slip on approvals rather than on equipment delivery. Rules in this category change, so confirm the current position with FSSAI or a compliance consultant before you budget.",
      },
      {
        kind: "ul",
        items: [
          "FSSAI manufacturing licence",
          "Testing at an FSSAI-notified NABL laboratory under the compulsory testing scheme",
          "Annual third-party food safety audit (central licence holders)",
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
        text: "We deliver complete turnkey packaged drinking water projects — raw water treatment through to bottling — built to FSSAI standards, and will quote against your source water and target output rather than a generic package.",
      },
    ],
  },

  {
    slug: "hard-water-industrial-boilers-softener",
    title: "What Hard Water Does to an Industrial Boiler",
    seoTitle: "Water Softener for Boilers: What Hard Water Does to a Boiler",
    description:
      "How scale forms in boilers and cooling systems, what it costs in fuel, and how an industrial water softener differs from RO for hardness removal.",
    targetQuery: "industrial water softener for boiler feed water",
    published: "2026-09-22",
    readingMinutes: 5,
    image: "/Water-Softening-Plant.jpg",
    imageAlt: "Industrial water softening plant with resin vessels",
    category: "industry-guides",
    cta: {
      label: "See water softening plants",
      href: "/products/water-softening",
    },
    products: ["water-softening", "demineralized"],
    related: ["ro-vs-dm-plant"],
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
  {
    slug: "compare-ro-plant-quotations",
    title: "How to Compare RO Plant Quotations: A Line-by-Line Checklist",
    seoTitle: "How to Compare RO Plant Quotations: A Buyer's Checklist",
    description:
      "Three RO plant quotes, three very different prices. The line-by-line checklist for putting quotations on the same basis before you choose a supplier.",
    targetQuery: "how to compare ro plant quotations",
    published: "2026-09-27",
    readingMinutes: 7,
    image: "/ro-img7.jpg",
    imageAlt: "Multi-stage RO plant with stainless steel membrane housings in series",
    category: "buying-and-cost",
    cta: { label: "Send us your quotes to review against this checklist", href: "/contact" },
    products: ["reverse-osmosis", "membrane-housing", "spares-consumables"],
    related: ["ro-plant-capacity-for-your-factory", "industrial-ro-plant-amc-guide"],
    body: [
      {
        kind: "p",
        text: "You asked three suppliers for a 2,000 LPH RO plant and the prices are far apart. Almost always, the quotes are not for the same plant: they assume different feed water, different pre-treatment, different membranes and different things left out. Put them on the same basis first, and the price gap usually explains itself.",
      },
      { kind: "h2", text: "Start with the design basis" },
      {
        kind: "p",
        text: "Every RO quotation rests on a few assumptions. If they are not written down, you cannot compare the quotes, and you cannot hold the supplier to the result after installation.",
      },
      {
        kind: "ul",
        items: [
          "Feed water analysis used: TDS, hardness, iron, silica and, for surface or tanker water, turbidity or SDI (silt density index, a measure of how quickly the water will foul a membrane).",
          "Rated output: permeate (treated water) in litres per hour, and the feed TDS and temperature at which that output is guaranteed. Membranes produce less in cold water, so a plant rated at 25 °C will give less in winter.",
          "Recovery: the share of feed water that becomes treated water. The rest goes to drain as reject. Higher recovery on hard or high-silica water needs antiscalant and careful design.",
          "Treated water quality promised: permeate TDS or conductivity, and what the water will be used for.",
          "Operating hours per day the plant was sized for.",
        ],
      },
      {
        kind: "callout",
        text: "Ask each supplier for the membrane projection: the output of the membrane maker's design software for your feed water. It shows the pressures, flows and permeate quality the chosen membranes should deliver. A supplier who cannot produce one is guessing.",
      },
      { kind: "h2", text: "Then compare the plant, line by line" },
      {
        kind: "table",
        head: ["Line item", "What to check", "Why it matters"],
        rows: [
          ["Pre-treatment", "Pressure sand filter, activated carbon filter, softener or antiscalant dosing, cartridge filter rating (usually 5 micron)", "Most RO failures start upstream. Skipping pre-treatment is the easiest way to cut a price."],
          ["Membranes", "Make, model, element size (4 inch or 8 inch) and number of elements", "Unbranded or too few membranes lower the price and shorten membrane life."],
          ["High-pressure pump", "Make, material (SS304 or SS316), flow, head and motor kW", "Sets both reliability and the power bill."],
          ["Membrane housings", "FRP or stainless steel, pressure rating", "Must suit the operating pressure with a margin."],
          ["Skid and piping", "MS painted or stainless steel frame; UPVC or SS on the high-pressure side", "Corrosion and leaks show up in the second year, not at commissioning."],
          ["Instruments and panel", "Pressure gauges, permeate and reject flow meters, conductivity or TDS meter, low- and high-pressure trips, dry-run protection", "Without instruments nobody can tell when the plant needs cleaning."],
          ["Dosing", "Antiscalant dosing; SMBS dosing if the feed is chlorinated", "Protects the membranes from scale and chlorine damage."],
          ["Cleaning (CIP) system", "Cleaning tank, pump and cartridge housing included or not", "Membranes need periodic chemical cleaning. Without a CIP set, each clean is a site improvisation."],
          ["Tanks", "Raw and treated water storage included or not", "Often left out of lower quotes."],
          ["Installation and commissioning", "Included, or supervision only", "Labour, piping to the point of use and cabling can be a large extra."],
          ["Taxes and freight", "GST, packing, freight, unloading and insurance", "A price without them is not the price you pay."],
          ["Warranty", "What is covered and for how long; how membranes are treated", "Membranes are commonly excluded or covered only against manufacturing defects."],
          ["Documents and training", "O&M manual, drawings, operator training, first-fill chemicals, spares", "Missing items become purchase orders later."],
        ],
      },
      { kind: "h2", text: "Red flags" },
      {
        kind: "ul",
        items: [
          "Output quoted with no feed TDS or temperature attached.",
          "No pre-treatment offered for water you know is hard, iron-bearing or turbid.",
          "\"All-inclusive\" with no list of what is included.",
          "High recovery promised on high-TDS or high-silica water with no antiscalant and no projection.",
          "Membrane make described only as \"imported\" or \"standard\".",
          "No instruments beyond a pressure gauge or two.",
        ],
      },
      { kind: "h2", text: "Compare running cost, not only price" },
      {
        kind: "p",
        text: "Over five years, the running cost of an industrial RO plant can exceed its purchase price. Ask each supplier for the expected power use per 1,000 litres of treated water, antiscalant and cleaning chemical use, cartridge replacement interval, reject volume per day and expected membrane life on your water. Then add purchase price and five years of running cost for each quote. The cheapest plant to buy is often not the cheapest to own.",
      },
      { kind: "h2", text: "Send the same brief to every supplier" },
      {
        kind: "p",
        text: "Quotes are only comparable when every supplier works from the same information. Send each one the same package:",
      },
      {
        kind: "ol",
        items: [
          "A recent water analysis from an accredited laboratory, ideally more than one if the source varies through the year.",
          "Treated water needed per day and per hour, and the hours the plant will run.",
          "What the treated water is for: drinking, boiler feed, process, bottling or pharmaceutical use.",
          "Site details: available floor area and height, power supply, and where reject water can go.",
          "What you want included: tanks, installation, piping to the point of use, AMC.",
        ],
      },
      {
        kind: "p",
        text: "With the design basis written down, a line-by-line table and a five-year running cost, the differences between quotes become visible and negotiable. The right choice is the one that meets your water and your hours at the lowest cost of ownership, not the lowest number on the first page.",
      },
    ],
  },
  {
    slug: "industrial-ro-plant-amc-guide",
    title: "Industrial RO Plant AMC: What It Should Cover and How to Choose One",
    seoTitle: "Industrial RO Plant AMC: What It Should Cover",
    description:
      "What an annual maintenance contract for an industrial RO plant should include: visit frequency, checks, cleaning triggers, exclusions and how the price is built.",
    targetQuery: "industrial ro plant amc",
    published: "2026-09-27",
    readingMinutes: 7,
    image: "/Ro-img3.jpg",
    imageAlt: "Technician working on site beside an installed industrial RO plant",
    category: "operations",
    cta: { label: "See our AMC and plant maintenance service", href: "/products/amc-maintenance" },
    products: ["amc-maintenance", "reverse-osmosis", "spares-consumables"],
    related: ["compare-ro-plant-quotations", "ro-plant-capacity-for-your-factory"],
    body: [
      {
        kind: "p",
        text: "Search for \"RO AMC\" and most results are for home water purifiers: a filter change and a visit a quarter. An industrial RO plant is a different machine. It runs for hours a day, feeds a process or a bottling line, and loses output slowly until someone notices. A useful AMC catches that decline early and keeps the plant at its rated output.",
      },
      { kind: "h2", text: "Comprehensive or non-comprehensive?" },
      {
        kind: "p",
        text: "Contracts come in two broad forms. Read the exclusions carefully in both.",
      },
      {
        kind: "table",
        head: ["", "Non-comprehensive (labour)", "Comprehensive"],
        rows: [
          ["Scheduled visits and checks", "Included", "Included"],
          ["Breakdown visits", "Usually included", "Included"],
          ["Replacement parts", "Charged separately", "Included, with listed exclusions"],
          ["Consumables (cartridges, chemicals)", "Charged separately", "Sometimes included; check"],
          ["Membranes and resin", "Charged separately", "Usually excluded or covered only in part"],
          ["Price", "Lower", "Higher, but predictable"],
        ],
      },
      { kind: "h2", text: "What each visit should cover" },
      {
        kind: "ul",
        items: [
          "Review of the operating log since the last visit.",
          "Feed, permeate and reject flows, and pressures across each stage and across the cartridge filter.",
          "Feed and permeate TDS or conductivity, and feed water temperature.",
          "Pre-treatment: backwash of sand and carbon filters, softener regeneration and hardness at the outlet, cartridge condition.",
          "Dosing pumps: stroke, chemical level and actual dose.",
          "High-pressure pump: noise, vibration, motor current and seal leaks.",
          "Instruments and trips: gauges, flow meters, conductivity meter and pressure switches checked or calibrated.",
          "A written visit report with readings, findings and anything needing action.",
        ],
      },
      { kind: "h2", text: "When membranes should be cleaned" },
      {
        kind: "p",
        text: "Membranes should be cleaned on evidence, not on a calendar. Readings must first be normalised, that is corrected for feed temperature and pressure, because cold water alone lowers output. Membrane makers commonly advise cleaning when, compared with the plant's own baseline:",
      },
      {
        kind: "ul",
        items: [
          "normalised permeate flow has fallen by about 10%;",
          "normalised salt passage (the share of dissolved solids getting through) has risen by 5 to 10%; or",
          "the pressure drop across a stage has risen by about 15%.",
        ],
      },
      {
        kind: "callout",
        text: "Cleaning late is expensive. Fouling that is left too long may not come off at all, and the membranes then have to be replaced early. A contract that tracks normalised readings every visit pays for itself here.",
      },
      { kind: "h2", text: "What the plant's own team has to do" },
      {
        kind: "p",
        text: "An AMC cannot replace daily attention. The operator should record, every shift: feed, permeate and reject flow; pressures before and after the cartridge filter and across the membranes; feed and permeate TDS; feed temperature; and any trips or alarms. Those log sheets are what let the service engineer see a trend rather than a snapshot.",
      },
      { kind: "h2", text: "What usually sits outside the contract" },
      {
        kind: "ul",
        items: [
          "Damage from a change in feed water source or quality that was not notified.",
          "Faults in the power supply, civil work or plumbing outside the plant.",
          "Membranes and resin, beyond what the contract states.",
          "Damage from running the plant dry, without pre-treatment or with dosing switched off.",
          "Modifications or capacity increases.",
        ],
      },
      { kind: "h2", text: "How the price is built" },
      {
        kind: "p",
        text: "AMC prices for industrial plants depend on plant size and type, the number of scheduled visits, the distance to site, the response time promised for breakdowns and which parts and consumables are included. When comparing offers, put these side by side rather than comparing the annual figure alone. A cheap contract with two visits a year and no readings recorded is not the same service as a monthly visit with a written report.",
      },
      { kind: "h2", text: "Questions to ask before you sign" },
      {
        kind: "ol",
        items: [
          "How many scheduled visits a year, and what is checked on each?",
          "What is the response time for a breakdown, and is it written into the contract?",
          "Will we receive a written report with readings after every visit?",
          "Which parts and consumables are included, and which are charged?",
          "How are membrane cleaning and membrane replacement handled?",
          "Are genuine spares used, and are common spares kept in stock?",
          "Will you survey a plant built by another supplier before quoting?",
        ],
      },
      {
        kind: "p",
        text: "A plant built by another company can usually be taken into a contract, but a good service provider will survey it first: check the pre-treatment, instruments and membrane condition, and agree a baseline before the contract starts. That baseline is what every later reading is measured against.",
      },
    ],
  },
  {
    slug: "water-softener-for-housing-society",
    title: "Water Softener for a Housing Society: Sizing, Salt Cost and What to Ask",
    seoTitle: "Water Softener for Housing Society: Sizing & Salt Cost",
    description:
      "How a housing society should size a central water softener: daily water use, hardness load, resin and salt, where to install it and what to ask suppliers.",
    targetQuery: "water softener for housing society",
    published: "2026-09-27",
    readingMinutes: 7,
    image: "/water-softeners.webp",
    imageAlt: "Row of blue pressure vessels for an industrial water softening plant",
    category: "industry-guides",
    cta: { label: "Water softeners for housing societies", href: "/industries/residential-societies" },
    products: ["water-softening"],
    related: ["hard-water-industrial-boilers-softener", "compare-ro-plant-quotations"],
    body: [
      {
        kind: "p",
        text: "White scale on every tap, geysers failing within a year and shower glass that never looks clean: in a society running on borewell or tanker water, the cause is usually hardness. A central softener treats the whole building at once. Sizing it properly decides whether it works and what it costs to run.",
      },
      { kind: "h2", text: "What a softener does, and what it does not" },
      {
        kind: "p",
        text: "A softener passes water through a bed of ion-exchange resin that swaps calcium and magnesium (the hardness) for sodium. It stops scale. It does not lower total dissolved solids, remove bacteria or improve salty taste. If the water is high in TDS as well as hard, drinking water needs an RO plant, and the softener protects the rest of the building.",
      },
      { kind: "h2", text: "Step 1: daily water use" },
      {
        kind: "p",
        text: "Start from the number of residents. India's urban planning norm (CPHEEO) for homes with sewerage is 135 litres per person per day. Your society's actual use may differ, and the society's pump running hours or tanker bills are the best check.",
      },
      {
        kind: "table",
        head: ["Example society", "Value"],
        rows: [
          ["Flats", "120"],
          ["Residents per flat (assumed)", "4"],
          ["Water per person per day", "135 litres"],
          ["Daily water use", "120 × 4 × 135 = 64,800 litres, about 65 m³"],
        ],
      },
      { kind: "h2", text: "Step 2: the hardness load" },
      {
        kind: "p",
        text: "Get a water test that reports total hardness in mg/L (ppm) as calcium carbonate. Multiply it by the daily volume to find how much hardness the softener must remove each day.",
      },
      {
        kind: "table",
        head: ["Example", "Value"],
        rows: [
          ["Total hardness", "400 mg/L as CaCO3 (assumed)"],
          ["Daily hardness load", "65 m³ × 400 g/m³ = 26,000 g, about 26 kg"],
        ],
      },
      { kind: "h2", text: "Step 3: resin and salt" },
      {
        kind: "p",
        text: "Resin volume and salt use follow from the hardness load and how often the softener regenerates. The figures below are typical design values used for illustration only; your supplier should show the calculation for your water with their resin and salt dose.",
      },
      {
        kind: "table",
        head: ["Example", "Value"],
        rows: [
          ["Resin operating capacity (typical)", "About 50 g of hardness per litre of resin"],
          ["Resin for one day between regenerations", "26,000 ÷ 50 = about 520 litres"],
          ["Salt dose (typical)", "About 150 g per litre of resin per regeneration"],
          ["Salt per day", "520 × 150 g = about 78 kg"],
          ["Salt per month", "About 2.3 tonnes"],
        ],
      },
      {
        kind: "callout",
        text: "Salt is the running cost that surprises committees. Multiply the salt per month by the local price of softener salt before approving a quote, and ask the supplier to state the salt dose they have designed for.",
      },
      {
        kind: "p",
        text: "Softening only the lines that need it can cut that cost sharply. Many societies soften the supply to bathrooms and geysers and keep drinking water on a separate line or an RO plant.",
      },
      { kind: "h2", text: "Where to install it" },
      {
        kind: "ul",
        items: [
          "Usually on the transfer line between the underground sump and the overhead tanks, where the transfer pump provides the pressure.",
          "With space for the vessels, a brine tank and a delivery of salt bags, plus a drain for regeneration water.",
          "With a bypass valve, so water keeps flowing during service.",
          "With a sampling point after the softener, so hardness can be checked with a simple test kit.",
        ],
      },
      { kind: "h2", text: "Automatic or manual regeneration?" },
      {
        kind: "p",
        text: "Manual regeneration depends on someone remembering to do it. For a society, an automatic valve that regenerates on a volume meter is the safer choice: it regenerates when the resin is actually exhausted, which saves salt compared with a fixed timer.",
      },
      { kind: "h2", text: "What about salt-free conditioners?" },
      {
        kind: "p",
        text: "Magnetic, electronic and other salt-free devices do not remove hardness. Some aim to change how scale forms, and results vary. If you are offered one, ask for independent test data on water like yours and for a written performance guarantee.",
      },
      { kind: "h2", text: "Questions for suppliers" },
      {
        kind: "ol",
        items: [
          "What daily volume and hardness did you design for, and on what water test?",
          "How much resin, what salt dose, and how much salt a month will we use?",
          "How is regeneration triggered: volume, timer or manual?",
          "Where will regeneration water drain, and how much is it per cycle?",
          "What does the AMC cover: valve servicing, resin checks, salt refilling?",
          "What outlet hardness do you guarantee, and how will we check it?",
        ],
      },
      {
        kind: "p",
        text: "A committee that asks these questions gets comparable quotes and a softener that is neither undersized and constantly regenerating, nor oversized and expensive to buy.",
      },
    ],
  },
];

/**
 * Byline for every post. Replace with the engineer who wrote or reviewed each
 * article once named authors are agreed; a named, experienced author is a
 * trust signal for readers and search engines alike.
 */
export const POST_AUTHOR = {
  name: "Nishu Enterprises engineering team",
  description: `Water treatment plant engineers at Nishu Enterprises, Vasai, designing and building plants since 1996.`,
};

/** Date the post last changed: the update date if there is one, else publication. */
export function postLastModified(post: Post) {
  return post.updated ?? post.published;
}

export function getCategory(slug: PostCategory) {
  return POST_CATEGORIES.find((c) => c.slug === slug)!;
}

/** Posts listed under "Guides for buyers" on a product page. */
export function postsForProduct(productSlug: string) {
  return POSTS.filter((p) => p.products.includes(productSlug));
}

/**
 * "Keep reading" picks: the post's chosen siblings first, then others from the
 * same section, then anything else.
 */
export function relatedPosts(post: Post, count = 2) {
  const others = POSTS.filter((p) => p.slug !== post.slug);
  const chosen = (post.related ?? [])
    .map((s) => others.find((p) => p.slug === s))
    .filter((p): p is Post => Boolean(p));
  const rest = [
    ...others.filter((p) => p.category === post.category),
    ...others.filter((p) => p.category !== post.category),
  ].filter((p) => !chosen.includes(p));
  return [...chosen, ...rest].slice(0, count);
}

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
