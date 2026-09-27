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
    related: ["boiler-feed-water-softener-ro-dm", "dm-plant-regeneration-process"],
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
    related: ["mineral-water-plant-machinery-list", "ro-plant-capacity-for-your-factory"],
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
    related: ["boiler-feed-water-softener-ro-dm", "ro-vs-dm-plant"],
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
    related: ["ro-plant-output-dropping", "compare-ro-plant-quotations"],
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
  {
    slug: "frp-vs-ss-ro-plant",
    title: "FRP vs SS RO Plant: Which Build Is Right for Your Water?",
    seoTitle: "FRP vs SS RO Plant: Which One Should You Buy?",
    description:
      "FRP or stainless steel for an RO plant's vessels, membrane housings, frame and piping: where each material makes sense, where it fails, and how to specify it.",
    targetQuery: "frp vs ss ro plant",
    published: "2026-09-27",
    readingMinutes: 6,
    image: "/FRP-RO-Plant.jpg",
    imageAlt: "RO plant with FRP filter vessels, stainless steel membrane housings and control panel",
    category: "buying-and-cost",
    cta: { label: "See our RO plant range", href: "/products/reverse-osmosis" },
    products: ["reverse-osmosis", "membrane-housing", "fabricated-vessels"],
    related: ["compare-ro-plant-quotations", "ro-plant-capacity-for-your-factory"],
    body: [
      {
        kind: "p",
        text: "\"FRP plant\" and \"SS plant\" sound like two different machines. In practice they describe the materials of four separate parts: the pre-treatment vessels, the membrane housings, the frame and the piping. A good RO plant often mixes materials, choosing each one for the job it does. Knowing which part is which lets you compare quotes properly and avoid paying for steel where it adds nothing.",
      },
      { kind: "h2", text: "The four parts that can be FRP or steel" },
      {
        kind: "table",
        head: ["Part", "Options", "What decides it"],
        rows: [
          ["Pre-treatment vessels (sand, carbon, softener)", "FRP, MS with rubber lining or epoxy coating, stainless steel", "Size, hygiene requirement and budget"],
          ["Membrane housings", "FRP or stainless steel (SS304 or SS316)", "Operating pressure, chloride content of the water, hygiene and appearance"],
          ["Skid frame", "MS with epoxy or powder coating, or stainless steel", "Plant room environment and hygiene requirement"],
          ["Piping", "UPVC or CPVC on the low-pressure side; stainless steel on the high-pressure side", "Pressure, above all"],
        ],
      },
      { kind: "h2", text: "FRP: where it is the right choice" },
      {
        kind: "p",
        text: "FRP (fibre-reinforced plastic) does not corrode. That makes it the natural choice for water that attacks steel: high-chloride borewell water, brackish water and seawater. FRP pressure vessels are made for specific pressure ratings, and seawater RO plants almost always use FRP membrane housings rated for high pressure, because ordinary stainless steel pits in seawater.",
      },
      {
        kind: "ul",
        items: [
          "Corrosion-free on salty and high-chloride water.",
          "Lighter than steel, and usually cheaper for the same size.",
          "Standard for pre-treatment filters and softener vessels in small and medium plants.",
          "Must be used within its rated pressure and protected from direct sunlight and impact.",
        ],
      },
      { kind: "h2", text: "Stainless steel: where it earns its cost" },
      {
        kind: "p",
        text: "Stainless steel costs more, but it is the expected material wherever hygiene, cleanability and appearance matter: packaged drinking water, food and beverage, dairy and pharmaceutical plants. It also tolerates knocks and heat better than FRP. SS316 resists chlorides better than SS304, but neither is suitable for membrane housings on seawater.",
      },
      {
        kind: "ul",
        items: [
          "Easy to clean and sanitise, and inspectors expect it in food and bottling plants.",
          "Robust against impact, vibration and hot cleaning solutions.",
          "SS304 for most fresh water duties; SS316 where chlorides are higher.",
          "Not for membrane housings on seawater, where FRP or special alloys are used.",
        ],
      },
      {
        kind: "callout",
        text: "Whatever the vessels are made of, the high-pressure piping between the pump and the membranes should be stainless steel. UPVC on the high-pressure side of an RO plant is a red flag.",
      },
      { kind: "h2", text: "Choosing by application" },
      {
        kind: "table",
        head: ["Application", "Usual build"],
        rows: [
          ["Packaged drinking water and bottling", "SS membrane housings, SS frame, SS storage; FRP or SS pre-treatment vessels"],
          ["Food, beverage and dairy process water", "Stainless steel for everything in contact with treated water"],
          ["Pharmaceutical purified water", "SS316L for treated water contact parts, with sanitary fittings"],
          ["Boiler feed and industrial process water", "FRP pre-treatment vessels and membrane housings on a coated MS or SS frame"],
          ["Brackish or high-chloride borewell water", "FRP housings and vessels; SS316 or better on high-pressure piping"],
          ["Seawater desalination", "High-pressure FRP membrane housings; high-grade alloy on the high-pressure side"],
          ["Humid coastal or chemical plant rooms", "FRP or stainless steel; avoid painted MS frames that will rust"],
        ],
      },
      { kind: "h2", text: "What to write into the specification" },
      {
        kind: "ol",
        items: [
          "Material of each part: pre-treatment vessels, membrane housings, frame, low-pressure and high-pressure piping.",
          "Stainless grade (SS304 or SS316) wherever steel is quoted.",
          "Pressure rating of the membrane housings and of the high-pressure piping.",
          "Coating system for any MS parts, and whether vessels are rubber-lined.",
          "The make of the FRP vessels and housings.",
        ],
      },
      {
        kind: "p",
        text: "With those five lines in every quotation, an \"FRP plant\" and an \"SS plant\" can be compared part by part. Often the best answer is FRP where the water is aggressive and steel where hygiene or pressure demands it.",
      },
    ],
  },
  {
    slug: "boiler-feed-water-softener-ro-dm",
    title: "Boiler Feed Water: Softener, RO or DM Plant?",
    seoTitle: "Boiler Feed Water Treatment: Softener, RO or DM?",
    description:
      "Which boiler feed water treatment you need, by boiler pressure and feed water quality: when a softener is enough, when RO pays for itself and when DM is required.",
    targetQuery: "softener vs dm plant for boiler",
    published: "2026-09-27",
    readingMinutes: 7,
    image: "/DM image 3.jpeg",
    imageAlt: "Water treatment system with pressure filters, ion-exchange columns and control panel",
    category: "industry-guides",
    cta: { label: "Water treatment for boilers and power plants", href: "/industries/power-generation" },
    products: ["water-softening", "demineralized", "reverse-osmosis"],
    related: ["hard-water-industrial-boilers-softener", "ro-vs-dm-plant"],
    body: [
      {
        kind: "p",
        text: "Boiler feed water treatment has two jobs: stop scale forming on the heating surfaces, and keep dissolved solids low enough that the boiler does not need constant blowdown. How far you need to go depends mainly on the boiler's operating pressure and on how much dissolved solids your raw water carries.",
      },
      { kind: "h2", text: "The three options in one line each" },
      {
        kind: "ul",
        items: [
          "Softener: removes hardness (calcium and magnesium), which is what forms scale. Leaves total dissolved solids (TDS) almost unchanged.",
          "RO plant: removes most dissolved solids, hardness included. Cuts blowdown sharply. Usually needs a softener or antiscalant in front of it.",
          "DM plant: removes practically all dissolved ions, including silica. Produces water of very low conductivity for high-pressure boilers.",
        ],
      },
      { kind: "h2", text: "Choosing by boiler pressure" },
      {
        kind: "p",
        text: "The bands below are a rule of thumb for Indian industrial boilers. The actual limits come from your boiler maker's feed water specification and the relevant Indian Standard, so check them before you buy.",
      },
      {
        kind: "table",
        head: ["Boiler pressure", "Usual feed water treatment", "Why"],
        rows: [
          ["Low, up to about 20 kg/cm²", "Softener, with deaeration and chemical dosing", "Hardness is the main risk. Add RO if raw water TDS is high, to cut blowdown."],
          ["Medium, about 20 to 40 kg/cm²", "Softener plus RO, or a DM plant", "Dissolved solids and silica start to matter."],
          ["High, above about 40 kg/cm²", "DM plant with mixed bed, or RO followed by mixed bed", "Very low conductivity and silica are needed to protect tubes and turbines."],
        ],
      },
      { kind: "h2", text: "Why TDS decides the blowdown" },
      {
        kind: "p",
        text: "As a boiler makes steam, dissolved solids stay behind and concentrate. To keep them below the boiler's limit, some water is blown down to drain, and with it the heat and treatment chemicals it contains. The blowdown needed is roughly the feed water TDS divided by the boiler water TDS limit.",
      },
      {
        kind: "table",
        head: ["Example (boiler water limit 3,500 ppm, assumed)", "Feed TDS", "Blowdown as share of feed"],
        rows: [
          ["Softened borewell water", "500 ppm", "About 14%"],
          ["RO-treated water", "50 ppm", "About 1.4%"],
        ],
      },
      {
        kind: "p",
        text: "Every percent of blowdown is hot, treated water sent to drain. On a boiler running round the clock, cutting blowdown from 14% to under 2% saves fuel, water and chemicals every day. That saving is often what pays for an RO plant ahead of a low-pressure boiler.",
      },
      {
        kind: "callout",
        text: "A softener alone stops scale but does nothing for blowdown. If your raw water TDS is high, ask for the blowdown with and without RO before deciding.",
      },
      { kind: "h2", text: "Do not forget corrosion" },
      {
        kind: "p",
        text: "Scale is only half the problem. Dissolved oxygen and carbon dioxide in feed water corrode boiler tubes and condensate lines. Deaeration and correctly dosed oxygen scavenger and pH control chemicals are needed whatever treatment plant is chosen. Returning as much clean condensate as possible also reduces make-up water and treatment load.",
      },
      { kind: "h2", text: "What to send for a proposal" },
      {
        kind: "ol",
        items: [
          "Boiler make, type, capacity in tonnes per hour of steam and operating pressure.",
          "The boiler maker's feed water and boiler water specification.",
          "A raw water analysis including TDS, hardness, alkalinity and silica.",
          "How much condensate returns, and the make-up water needed per hour.",
          "Current problems: scale, tube failures, high blowdown or high fuel use.",
        ],
      },
      {
        kind: "p",
        text: "With those numbers, the choice between softener, RO and DM becomes a calculation rather than a guess, and the running-cost difference between them can be shown before you buy.",
      },
    ],
  },
  {
    slug: "ro-plant-output-dropping",
    title: "RO Plant Output Dropping? Diagnose It From Your Own Readings",
    seoTitle: "RO Plant Output Reduced? Causes and How to Fix It",
    description:
      "Why an industrial RO plant's output falls and how to find the cause from your own log sheet: temperature, pressure, pre-treatment, fouling, scaling or membrane damage.",
    targetQuery: "ro plant output reduced",
    published: "2026-09-27",
    readingMinutes: 7,
    image: "/ro-img8.jpeg",
    imageAlt: "Stainless steel industrial RO plant with membrane housings and control panel",
    category: "operations",
    cta: { label: "Book a service visit or AMC", href: "/products/amc-maintenance" },
    products: ["amc-maintenance", "reverse-osmosis", "spares-consumables"],
    related: ["industrial-ro-plant-amc-guide", "ro-plant-capacity-for-your-factory"],
    body: [
      {
        kind: "p",
        text: "Your RO gave 1,000 litres an hour last year; now it gives 700. Before replacing membranes or calling for a new plant, look at your own readings. The pattern of pressures, flows and TDS usually points straight at the cause, and many of the causes are cheap to fix.",
      },
      { kind: "h2", text: "First, rule out the water temperature" },
      {
        kind: "p",
        text: "RO membranes produce less water when the feed is colder: roughly 3% less for every degree Celsius drop. A plant rated at 25 °C can lose a noticeable share of its output in a cool winter morning without anything being wrong. Compare readings taken at similar temperatures, or ask for normalised figures that correct for temperature and pressure.",
      },
      { kind: "h2", text: "Read the pattern" },
      {
        kind: "table",
        head: ["What you see", "Likely cause", "What to check"],
        rows: [
          ["Low output, high pressure drop across the first stage", "Particles, silt or biological fouling on the lead membranes", "Cartridge filter condition, sand filter backwash, SDI of the feed"],
          ["Low output, high pressure drop across the last stage", "Scaling on the tail membranes", "Antiscalant dosing, recovery setting, feed hardness"],
          ["Low output, pressures normal", "Cold feed water, low pump pressure or organic fouling", "Feed temperature, pump discharge pressure, pump condition"],
          ["Low output and rising permeate TDS", "Scaling or heavy fouling", "Last-stage pressure drop, antiscalant, cleaning history"],
          ["High output and rising permeate TDS", "Membrane damage, often from chlorine, or a leaking O-ring or seal", "Chlorine in the feed, SMBS dosing, stage-by-stage conductivity"],
          ["Cartridge filters choking within days", "Pre-treatment is not coping", "Sand and carbon filter backwash, feed turbidity, source changes"],
        ],
      },
      {
        kind: "callout",
        text: "Rising permeate TDS with rising output almost always means the membranes have been damaged, most often by chlorine. Cleaning will not fix it, so check the dechlorination before replacing membranes, or the new ones will fail the same way.",
      },
      { kind: "h2", text: "Check the simple things first" },
      {
        kind: "ol",
        items: [
          "Feed water temperature today compared with when the plant was commissioned.",
          "High-pressure pump discharge pressure against its design value.",
          "Pressure drop across the cartridge filter; change cartridges if it has risen.",
          "Antiscalant and SMBS dosing pumps actually running, with chemical in the tank.",
          "Sand and carbon filters backwashed on schedule.",
          "Any change in the water source: new borewell, tanker supply or season.",
        ],
      },
      { kind: "h2", text: "When the membranes need cleaning" },
      {
        kind: "p",
        text: "Membrane makers commonly advise cleaning when, compared with the plant's own baseline, normalised permeate flow has fallen by about 10%, salt passage has risen by 5 to 10%, or the pressure drop across a stage has risen by about 15%. Scale is removed with an acid clean, organic and biological fouling with an alkaline clean. The cleaning chemicals, concentrations and temperatures should follow the membrane maker's guide.",
      },
      {
        kind: "p",
        text: "Clean early. Fouling left too long may not come off, and the membranes then have to be replaced well before their time.",
      },
      { kind: "h2", text: "Keep a log sheet" },
      {
        kind: "p",
        text: "None of this works without readings. Record every shift: feed, permeate and reject flow; pressures before and after the cartridge filter, at the pump and across each stage; feed and permeate TDS; feed temperature; and any alarms. Those numbers are what turn \"the plant is giving less water\" into a diagnosis.",
      },
      {
        kind: "p",
        text: "If you already keep a log sheet, send us a photo of the last few weeks with your enquiry. The trend usually shows whether the plant needs cleaning, a pre-treatment repair or new membranes.",
      },
    ],
  },
  {
    slug: "mineral-water-plant-machinery-list",
    title: "Mineral Water Plant Machinery List: Every Machine, Stage by Stage",
    seoTitle: "Mineral Water Plant Machinery List (Stage by Stage)",
    description:
      "The complete machinery list for a packaged drinking water plant, from raw water tank to packed cartons, with what each machine does and what decides its size.",
    targetQuery: "mineral water plant machinery list",
    published: "2026-09-27",
    readingMinutes: 7,
    image: "/Mineral-Drinking-Water-Plant(1).webp",
    imageAlt: "Mineral drinking water plant with stainless steel vessels and control panel",
    category: "buying-and-cost",
    cta: { label: "Explore turnkey mineral water projects", href: "/products/mineral-water-project" },
    products: ["mineral-water-project", "rfc", "dosing-ozonation-uv"],
    related: ["mineral-water-plant-setup-cost-india", "compare-ro-plant-quotations"],
    body: [
      {
        kind: "p",
        text: "A packaged drinking water plant is a chain of machines, and a quotation that leaves one out is not cheaper, just incomplete. This list follows the water from the raw water tank to the packed carton, so you can check every quotation against it.",
      },
      { kind: "h2", text: "Stage 1: raw water treatment" },
      {
        kind: "table",
        head: ["Machine", "What it does", "What decides its size"],
        rows: [
          ["Raw water storage tank and pump", "Holds and feeds source water to the plant", "Daily output and how reliable the source is"],
          ["Chlorine dosing system", "Disinfects raw water and controls bacterial growth ahead of the filters", "Flow rate"],
          ["Pressure sand filter", "Removes suspended solids and turbidity", "Flow rate and feed turbidity"],
          ["Activated carbon filter", "Removes chlorine, odour and organics that would damage RO membranes", "Flow rate"],
          ["Water softener (if needed)", "Removes hardness on very hard water", "Feed hardness and flow"],
          ["Antiscalant dosing", "Prevents scale on the RO membranes", "Flow rate"],
          ["Micron cartridge filter", "Final protection for the RO membranes", "Flow rate"],
        ],
      },
      { kind: "h2", text: "Stage 2: purification" },
      {
        kind: "table",
        head: ["Machine", "What it does", "What decides its size"],
        rows: [
          ["RO plant", "Reduces dissolved solids to the level needed", "Output in litres per hour and feed TDS"],
          ["Mineral dosing system", "Adds back a controlled mineral profile for taste and to meet product standards", "Output flow"],
          ["UV steriliser", "Disinfects treated water", "Output flow"],
          ["Ozone generator with contact tank", "Disinfects water and leaves a small residual that protects it in the bottle", "Output flow and the dose needed"],
          ["SS treated water storage tanks", "Buffer between treatment and filling", "Filling speed and shift pattern"],
          ["Polishing micron filters", "Final filtration before the filler", "Filling flow"],
        ],
      },
      {
        kind: "callout",
        text: "Ozone dose needs care: enough to leave a small residual at filling, no more. On water containing bromide, too much ozone forms bromate, which has a regulatory limit.",
      },
      { kind: "h2", text: "Stage 3: bottling and packing" },
      {
        kind: "table",
        head: ["Machine", "What it does", "What decides its size"],
        rows: [
          ["Bottle blowing machine (for PET bottles)", "Blows bottles from PET preforms on site", "Bottles per hour; some plants buy ready bottles instead"],
          ["Rinsing, filling and capping (RFC) machine", "Rinses, fills and caps bottles in one machine", "Bottles per minute and bottle sizes"],
          ["20-litre jar washing, filling and capping machine", "Handles returnable jars", "Jars per hour"],
          ["Inspection station", "Checks fill level and foreign particles", "Line speed"],
          ["Labelling or shrink-sleeve machine", "Applies the product label", "Line speed and label type"],
          ["Batch coding printer", "Prints batch number and dates", "Line speed"],
          ["Shrink wrapping or carton packing", "Packs bottles for dispatch", "Line speed and pack format"],
        ],
      },
      { kind: "h2", text: "Supporting equipment people forget" },
      {
        kind: "ul",
        items: [
          "Air compressor for the bottling machines.",
          "In-house laboratory equipment for routine testing.",
          "Power backup sized for the whole line, not just lighting.",
          "Chiller if the blowing machine needs one.",
          "Conveyors between machines.",
          "Cleaning and sanitising system for tanks and pipework.",
        ],
      },
      { kind: "h2", text: "Match the machines to each other" },
      {
        kind: "p",
        text: "The most common mistake is a mismatched line: an RO plant that cannot keep up with the filler, or an ozone generator sized for a smaller plant. Size the chain from your planned daily output and shift pattern. The RO output, storage, ozonation and filling speed all have to agree.",
      },
      {
        kind: "p",
        text: "We build the water treatment plant, ozonation and RFC machines as one scope, so the stages are sized together. Tell us your target output, pack sizes and source water, and we will set out which machines your plant needs.",
      },
    ],
  },
  {
    slug: "how-to-read-a-water-test-report",
    title: "How to Read a Water Test Report Before You Buy a Treatment Plant",
    seoTitle: "How to Read a Water Test Report (for Plant Buyers)",
    description:
      "What each line of a water test report means for choosing a treatment plant: TDS, hardness, iron, silica, chloride, pH and bacteria, with Indian drinking water limits.",
    targetQuery: "how to read water test report",
    published: "2026-09-27",
    readingMinutes: 7,
    image: "/Commercial-Water-Treatment-Plant.jpg",
    imageAlt: "Commercial water treatment plant with stainless steel tanks and RO skid",
    category: "buying-and-cost",
    cta: { label: "Send us your water report for a recommendation", href: "/contact" },
    products: ["reverse-osmosis", "water-softening", "demineralized"],
    related: ["compare-ro-plant-quotations", "ro-vs-dm-plant"],
    body: [
      {
        kind: "p",
        text: "A water test report decides which treatment plant you need. The same report that looks like a page of chemistry answers three practical questions: is there too much dissolved salt, is the water hard, and is there anything that will foul or damage the equipment? This guide explains each common line.",
      },
      { kind: "h2", text: "Units first" },
      {
        kind: "ul",
        items: [
          "mg/L and ppm (parts per million) mean the same thing for water.",
          "Hardness and alkalinity are usually reported \"as CaCO3\", so different minerals can be added together.",
          "Conductivity is in µS/cm. TDS is roughly 0.55 to 0.7 times the conductivity, depending on which salts are present.",
          "NTU is the unit for turbidity (cloudiness).",
        ],
      },
      { kind: "h2", text: "The lines that decide the plant" },
      {
        kind: "table",
        head: ["Parameter", "What a high value means", "Usual treatment"],
        rows: [
          ["TDS (total dissolved solids)", "Salty or brackish taste; high blowdown in boilers", "RO; DM for very pure water"],
          ["Total hardness", "Scale on pipes, fittings, geysers and boilers", "Softener, or RO where TDS is also high"],
          ["Iron and manganese", "Brown staining; fouls softener resin and RO membranes", "Oxidation and filtration before other treatment"],
          ["Silica", "Hard scale in boilers and on RO membranes; carried over to turbines", "RO with antiscalant; DM with strong base anion resin"],
          ["Chloride", "Salty taste; corrodes steel, especially stainless", "RO; choose FRP or suitable steel grade"],
          ["Turbidity", "Cloudy water; clogs filters and membranes", "Sand filtration, sometimes with coagulation"],
          ["pH", "Low pH is corrosive; high pH favours scale", "Dosing to correct pH"],
          ["Coliform or E. coli", "Unsafe to drink", "Chlorination, UV or ozone, plus finding the source"],
        ],
      },
      { kind: "h2", text: "Drinking water: Indian limits" },
      {
        kind: "p",
        text: "For drinking water, compare the report with IS 10500, the Indian Standard for drinking water. It gives an acceptable limit and, for some parameters, a higher permissible limit that applies only when no better source is available. A few key values:",
      },
      {
        kind: "table",
        head: ["Parameter", "Acceptable limit", "Permissible limit (no alternate source)"],
        rows: [
          ["TDS", "500 mg/L", "2,000 mg/L"],
          ["Total hardness (as CaCO3)", "200 mg/L", "600 mg/L"],
          ["Chloride", "250 mg/L", "1,000 mg/L"],
          ["Sulphate", "200 mg/L", "400 mg/L"],
          ["Fluoride", "1.0 mg/L", "1.5 mg/L"],
          ["Nitrate", "45 mg/L", "No relaxation"],
          ["pH", "6.5 to 8.5", "No relaxation"],
          ["Turbidity", "1 NTU", "5 NTU"],
          ["Coliform bacteria", "Must not be detectable in a 100 ml sample", "No relaxation"],
        ],
      },
      {
        kind: "p",
        text: "Check the current edition of IS 10500 for the full list. Packaged drinking water and industrial uses such as boiler feed or pharmaceutical water have their own, stricter specifications.",
      },
      { kind: "h2", text: "Taking a sample that means something" },
      {
        kind: "ol",
        items: [
          "Use a clean bottle from the laboratory; bacteriological tests need a sterile bottle.",
          "Run the tap or pump for a few minutes before filling, so the sample is fresh source water.",
          "Fill to the top, cap tightly and label with the source, date and time.",
          "Deliver it to a NABL-accredited laboratory within the time the lab specifies.",
          "Where the source changes through the year, test again in a different season.",
        ],
      },
      {
        kind: "callout",
        text: "One analysis is a snapshot. Borewell and tanker water can change a lot between the monsoon and summer, so a plant sized on a single test may be undersized for the worst month.",
      },
      {
        kind: "p",
        text: "Send us your report with how much water you need and what it is for. We will tell you which lines matter for your plant and what treatment they call for.",
      },
    ],
  },
  {
    slug: "dm-plant-regeneration-process",
    title: "DM Plant Regeneration Process: Step by Step",
    seoTitle: "DM Plant Regeneration Process, Step by Step",
    description:
      "How a two-bed and mixed-bed DM plant is regenerated with acid and caustic, when to regenerate, how to do it safely and what short runs or high silica mean.",
    targetQuery: "dm plant regeneration process",
    published: "2026-09-27",
    readingMinutes: 7,
    image: "/DM image 2.jpg",
    imageAlt: "Compact DM plant with FRP ion-exchange columns and PVC pipework",
    category: "operations",
    cta: { label: "See our DM plant range", href: "/products/demineralized" },
    products: ["demineralized", "amc-maintenance"],
    related: ["ro-vs-dm-plant", "boiler-feed-water-softener-ro-dm"],
    body: [
      {
        kind: "p",
        text: "A DM (demineralisation) plant removes dissolved salts by ion exchange. Its resins do not last forever between services: they fill up with the ions they remove and have to be regenerated with acid and caustic. Regeneration done well gives long, consistent runs; done carelessly, it gives short runs, poor water and wasted chemicals.",
      },
      { kind: "h2", text: "How a two-bed DM plant works" },
      {
        kind: "ul",
        items: [
          "Cation unit: strong acid cation resin swaps calcium, magnesium, sodium and other positive ions for hydrogen ions.",
          "Degasser (on larger plants): strips out carbon dioxide formed after the cation unit, lightening the load on the anion resin.",
          "Anion unit: strong base anion resin swaps chloride, sulphate, silica and other negative ions for hydroxide ions.",
          "The hydrogen and hydroxide ions combine to form water, leaving treated water of low conductivity.",
        ],
      },
      { kind: "h2", text: "When to regenerate" },
      {
        kind: "p",
        text: "Regenerate when the treated water conductivity rises above your set point, when silica starts to rise at the anion outlet, or when the unit has treated its designed volume since the last regeneration. A conductivity meter on the outlet, and a record of volume treated per run, tell you both.",
      },
      { kind: "h2", text: "The regeneration steps" },
      {
        kind: "ol",
        items: [
          "Backwash: water flows upward through the bed to loosen it and flush out trapped dirt and resin fines.",
          "Chemical injection: dilute acid (hydrochloric or sulphuric) passes through the cation resin; dilute caustic soda passes through the anion resin.",
          "Slow rinse: water at the same slow rate pushes the chemical through the whole bed so it all does its work.",
          "Fast rinse: a faster flow washes out the remaining chemical until the outlet water reaches quality.",
          "Return to service once conductivity is within the set point.",
        ],
      },
      {
        kind: "callout",
        text: "Chemical quantities, concentrations and flow rates are specific to each plant and resin. Follow your plant's O&M manual rather than a general guide, and change them only on the advice of the plant designer.",
      },
      { kind: "h2", text: "Mixed-bed regeneration" },
      {
        kind: "p",
        text: "A mixed-bed unit holds cation and anion resin in one vessel, which gives very high purity water. To regenerate it, the resins are first separated by backwashing: the lighter anion resin rises above the heavier cation resin. Each layer is then regenerated with its own chemical, rinsed, and the two resins are remixed with air before the final rinse.",
      },
      { kind: "h2", text: "Doing it safely" },
      {
        kind: "ul",
        items: [
          "Acid and caustic cause serious burns. Wear face shields, gloves, aprons and boots when handling them.",
          "Keep an eyewash and safety shower near the chemical area.",
          "Always add concentrated chemical to water, never water to concentrated chemical.",
          "Collect waste regenerant in a neutralisation pit and correct its pH before discharge.",
        ],
      },
      { kind: "h2", text: "Troubleshooting" },
      {
        kind: "table",
        head: ["Problem", "Common causes"],
        rows: [
          ["Runs getting shorter", "Too little chemical or wrong concentration; resin fouled by iron or organics; resin loss; channelling in the bed"],
          ["High conductivity right after regeneration", "Rinse not complete; a valve leaking chemical or raw water into the outlet"],
          ["Silica rising early", "Anion resin under-regenerated; warm caustic helps silica removal on many plants"],
          ["Resin found in the outlet", "Damaged internal strainers or excessive backwash flow"],
          ["Pressure drop rising", "Dirt in the bed, fines from broken resin, or inadequate backwash"],
        ],
      },
      {
        kind: "p",
        text: "Resin loses capacity with age. When runs stay short even after correct regeneration, send a resin sample for testing; it will show whether cleaning or replacement is the answer.",
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
