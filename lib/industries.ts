import type { Block } from "@/lib/posts";

// Industry landing pages for /industries. Each page targets the way a buyer in
// that sector actually searches ("water treatment plant for pharmaceutical
// industry") rather than the product name, and routes them to the product page
// that fits. Keep the technical claims consistent with the product pages.

export interface Industry {
  slug: string;
  /** Short label used in navigation and cards. */
  name: string;
  /** Page H1. */
  heading: string;
  title: string;
  description: string;
  /** The search phrase this page is written for. */
  targetQuery: string;
  /** One line for cards. The meta description is written for search results
   *  and reads badly in a card, so it is kept separate. */
  cardBlurb: string;
  image: string;
  imageAlt: string;
  intro: string;
  /** The sector-specific problems, shown as a grid above the body. */
  challenges: { title: string; text: string }[];
  body: Block[];
  faqs: { question: string; answer: string }[];
  /** Slugs from PRODUCTS in lib/site.ts, in the order they should be offered. */
  relatedProducts: string[];
}

export const INDUSTRIES: Industry[] = [
  {
    slug: "pharmaceutical",
    name: "Pharmaceutical",
    heading: "Water Treatment Plants for the Pharmaceutical Industry",
    title: "Pharmaceutical Water Treatment Plant Manufacturer India | Purified Water Systems",
    description:
      "Purified water systems for pharmaceutical manufacturing: multi-bed DM, mixed-bed polishing, RO and distribution loops built to IP/USP requirements. Manufacturer in Vasai, Mumbai.",
    targetQuery: "water treatment plant for pharmaceutical industry",
    cardBlurb:
      "Purified water systems built to hold IP/USP limits continuously, with validated distribution loops.",
    image: "/pharma-industry.jpg",
    imageAlt: "Pharmaceutical manufacturing facility water treatment system",
    intro:
      "Pharmaceutical water is not a utility — it is an ingredient, and it is audited like one. A purified water system has to hold its specification continuously, prove it through validation, and keep proving it through every inspection that follows. We have built and commissioned water systems for pharmaceutical and formulation plants since 1996, designed around the specification the plant has to defend rather than the cheapest route to clear water.",
    challenges: [
      {
        title: "Specification is non-negotiable",
        text: "Purified water has to meet conductivity and TOC limits continuously, not on average. A system that drifts out of spec between samples is a deviation you will have to explain.",
      },
      {
        title: "Microbial control in the loop",
        text: "Most pharmaceutical water failures are not treatment failures — they are distribution failures. Stagnant water in a badly designed loop grows biofilm regardless of how good the plant upstream is.",
      },
      {
        title: "Validation and documentation",
        text: "DQ/IQ/OQ/PQ documentation, material certificates and weld records are part of the deliverable. A plant supplied without them cannot be qualified.",
      },
      {
        title: "Sanitisation without downtime",
        text: "The system has to be sanitisable on a routine schedule that fits around production, not one that stops it.",
      },
    ],
    body: [
      { kind: "h2", text: "What the specification actually demands" },
      {
        kind: "p",
        text: "Purified water for pharmaceutical use is defined by limits rather than by a treatment process — which means any train that holds the limits is acceptable, and any train that does not is worthless however expensive it was. The two numbers that govern the design are conductivity and total organic carbon. Pharmacopoeial purified water is commonly specified at a conductivity below 1.3 µS/cm at 25 °C and TOC below 500 ppb, with microbial limits controlled separately through the distribution loop.",
      },
      {
        kind: "p",
        text: "Those limits drive a multi-stage train. In practice this means pre-treatment to protect the membranes, reverse osmosis to remove the bulk of dissolved solids, and a polishing stage — mixed-bed demineralisation or electrodeionisation — to take the final conductivity down and hold it there. Water for injection sits above this as a separate grade with its own distillation or membrane route.",
      },
      {
        kind: "callout",
        text: "The plant is the easy half. If the distribution loop is wrong, the specification fails at the point of use no matter what the plant produces.",
      },
      { kind: "h2", text: "A typical train for a formulation plant" },
      {
        kind: "ol",
        items: [
          "Raw water storage and multigrade filtration to remove suspended solids and turbidity.",
          "Activated carbon filtration for chlorine and organics — chlorine has to be removed before it reaches the RO membranes.",
          "Water softening or antiscalant dosing to protect the membranes from hardness scaling on the reject side.",
          "Micron cartridge filtration as final membrane protection.",
          "Reverse osmosis — single or two-pass depending on feed TDS and the conductivity the polishing stage has to start from.",
          "Mixed-bed demineralisation or EDI for final polishing to pharmacopoeial conductivity.",
          "UV sterilisation and a recirculating distribution loop holding minimum velocity at all times.",
        ],
      },
      { kind: "h2", text: "Why the distribution loop decides the outcome" },
      {
        kind: "p",
        text: "Purified water is aggressive and nearly sterile when it leaves the polishing stage, which makes it an excellent growth medium the moment it stops moving. This is why pharmaceutical loops are designed to recirculate continuously rather than sit in a tank, why dead legs are kept short — commonly specified under six pipe diameters — and why every branch is taken off the main loop rather than run as a spur.",
      },
      {
        kind: "p",
        text: "Material choice follows the same logic. Loops are built in 316L stainless steel with orbital-welded joints and internally polished surfaces, because a rough weld bead is where biofilm establishes first. We fabricate the vessels and loop components in-house, which keeps the material certificates and weld documentation under one supplier rather than three.",
      },
      { kind: "h2", text: "Sanitisation strategy" },
      {
        kind: "table",
        head: ["Method", "Typical use", "Consideration"],
        rows: [
          ["Hot water sanitisation", "Routine, scheduled", "Requires loop and components rated for the temperature; no chemical residue to flush"],
          ["Ozonation", "Continuous or periodic", "Effective and residue-free after UV destruction; needs ozone-compatible materials"],
          ["UV sterilisation", "Continuous, in-loop", "Controls counts in circulation; not a substitute for periodic sanitisation"],
          ["Chemical sanitisation", "Periodic, on older loops", "Effective but needs a validated flush-out and downtime"],
        ],
      },
      { kind: "h2", text: "What we need to quote accurately" },
      {
        kind: "p",
        text: "Pharmaceutical enquiries are the ones where a vague brief costs the most, because the difference between a single-pass and a two-pass RO with EDI polishing is substantial in both capital and running cost. Send us the feed water analysis, the grade you have to produce, peak and average demand in litres per hour, the number of user points and their locations, and the sanitisation approach your quality team expects. We will come back with a train sized to the specification rather than a generic capacity.",
      },
    ],
    faqs: [
      {
        question: "Do you supply purified water systems that meet IP and USP requirements?",
        answer:
          "Yes. We design the treatment train around the pharmacopoeial limits your plant has to hold — typically conductivity below 1.3 µS/cm at 25 °C and TOC below 500 ppb for purified water — using RO followed by mixed-bed DM or EDI polishing, with a recirculating distribution loop.",
      },
      {
        question: "Do you provide validation documentation?",
        answer:
          "Yes. We supply design, installation, operational and performance qualification documentation along with material test certificates for the stainless steel and weld records for fabricated components, so the system can be qualified without gaps.",
      },
      {
        question: "What is the difference between a DM plant and a purified water system?",
        answer:
          "A DM plant removes dissolved ions and will give you low conductivity water. A pharmaceutical purified water system adds the pre-treatment, polishing, microbial control and validated recirculating distribution needed to hold that quality continuously at the point of use.",
      },
      {
        question: "Can you upgrade an existing system rather than replace it?",
        answer:
          "Often, yes. If the existing pre-treatment and RO are sound, adding a polishing stage or rebuilding the distribution loop is frequently enough. We survey the installation first rather than quoting a replacement by default.",
      },
      {
        question: "How long does installation and commissioning take?",
        answer:
          "Typically 4-8 weeks depending on system complexity and site readiness, with qualification activities running alongside commissioning.",
      },
    ],
    relatedProducts: ["demineralized", "reverse-osmosis", "dosing-ozonation-uv", "fabricated-vessels"],
  },

  {
    slug: "food-beverage",
    name: "Food & Beverage",
    heading: "RO Plants & Water Treatment for Food and Beverage Factories",
    title: "RO Plant for Beverage Factory | Food Industry Water Treatment India",
    description:
      "Industrial RO plants, ozonation and complete mineral water projects for beverage, dairy and food processing plants. Trusted by Bisleri, Bailey, Campa and McDonald's. Get a quote.",
    targetQuery: "ro plant for beverage factory",
    cardBlurb:
      "RO, remineralisation and ozonation for beverage, dairy and packaged drinking water lines.",
    image: "/Complete-Mineral-Water-Project(5).webp",
    imageAlt: "Complete mineral water and beverage bottling plant installed by Nishu Enterprises",
    intro:
      "In food and beverage production, water is the largest ingredient by volume and the one that decides whether the product tastes the same in March as it did in October. It is also the input most exposed to seasonal variation in the borewell or municipal supply. Our plants run in beverage and packaged drinking water facilities for Bisleri, Bailey, Campa, McDonald's and Meru Spring, among roughly 1200 installations since 1996.",
    challenges: [
      {
        title: "Taste consistency across seasons",
        text: "Feed water TDS and hardness shift through the year. Without correction, the product profile shifts with it — and consumers notice before your QC does.",
      },
      {
        title: "BIS and FSSAI compliance",
        text: "Packaged drinking water has to meet IS 14543. Failing a sample is not just a quality problem, it is a licensing problem.",
      },
      {
        title: "Production cannot stop",
        text: "A bottling line idle because the RO is in CIP is lost output. Plants have to be sized so maintenance fits inside the schedule.",
      },
      {
        title: "Disinfection without aftertaste",
        text: "Chlorination leaves a taste. Ozonation gives you microbial control that decays to oxygen and leaves the product profile alone.",
      },
    ],
    body: [
      { kind: "h2", text: "Sizing for a bottling line, not for a building" },
      {
        kind: "p",
        text: "The most common sizing mistake in beverage plants is quoting against nominal line speed. Real consumption includes rinse water, CIP cycles, the RO reject stream and line losses — and those can add a substantial fraction to what the membranes actually have to produce. Size against measured consumption across a normal production week, then divide by the hours the plant will genuinely run.",
      },
      {
        kind: "p",
        text: "We generally size beverage plants for 16 to 20 hours of operation rather than 24. That is not conservatism; it is what leaves a window for membrane flushing and CIP without stopping the filling line. A plant sized for 24 hours has no maintenance window at all.",
      },
      {
        kind: "callout",
        text: "Recovery rate matters as much as capacity. At 50% recovery a 10,000 LPH product stream needs 20,000 LPH of feed — which the borewell may not deliver in summer.",
      },
      { kind: "h2", text: "Remineralisation: why pure water is not the goal" },
      {
        kind: "p",
        text: "RO permeate is close to pure, and pure water tastes flat. For packaged drinking water, IS 14543 sets limits rather than requiring maximum purity, and a controlled mineral dose is what gives the product its characteristic taste. This is the step that separates a water plant from a beverage plant: blending a measured fraction of treated feed back into the permeate, or dosing minerals to a defined recipe, so that every batch matches the last one.",
      },
      {
        kind: "p",
        text: "The same logic applies in dairy and food processing, where water hardness affects everything from equipment scaling to the behaviour of the product itself. Softening ahead of the process is usually about protecting the plant; RO is about controlling the ingredient.",
      },
      { kind: "h2", text: "A complete packaged drinking water line" },
      {
        kind: "ol",
        items: [
          "Raw water storage, multigrade sand filtration and activated carbon filtration.",
          "Water softening or antiscalant dosing to protect the RO membranes.",
          "Micron cartridge filtration.",
          "Reverse osmosis sized on measured demand and feed TDS.",
          "Mineral dosing or controlled blending to the product recipe.",
          "Ozonation to a controlled residual at the storage tank, with UV sterilisation before filling.",
          "Rinsing, filling and capping on an automatic RFC machine matched to the line speed.",
        ],
      },
      { kind: "h2", text: "Ozonation and the residual that matters" },
      {
        kind: "p",
        text: "Ozone is the disinfection route of choice in packaged drinking water because it is powerful, it leaves no chemical residue, and it decays back to oxygen. The operational detail that decides whether it works is residual at the point of filling — enough to protect the bottle through its shelf life, not so much that the product carries an odour when opened. A residual in the region of 0.2 to 0.4 ppm at filling is the range most plants work to.",
      },
      {
        kind: "p",
        text: "We supply the ozone generators, contact systems and UV units as part of the line rather than as bought-in components, which means the disinfection stage is sized against your actual tank volume and turnover rather than fitted afterwards.",
      },
      { kind: "h2", text: "Turnkey or staged" },
      {
        kind: "p",
        text: "For a new facility we supply the complete mineral water project — treatment, storage, ozonation, bottling and the RFC machine — as a single scope, which avoids the interface problems that come from splitting a line across suppliers. For an existing plant, we more often add capacity or replace a stage. Either way, send us your feed water analysis, target output in litres per hour, bottle formats and line speed, and we will quote against the line rather than against a catalogue.",
      },
    ],
    faqs: [
      {
        question: "What RO plant capacity do I need for a bottling line?",
        answer:
          "Size against measured consumption including rinse water, CIP and RO reject — not nominal line speed — then divide by 16 to 20 operating hours a day so maintenance fits inside the schedule. Send us your line speed, bottle formats and feed water analysis and we will size it precisely.",
      },
      {
        question: "Do you supply complete packaged drinking water plants?",
        answer:
          "Yes. We supply turnkey mineral water projects covering raw water treatment, RO, mineral dosing, ozonation, storage and the automatic rinsing-filling-capping machine, commissioned as one scope.",
      },
      {
        question: "Will the plant meet BIS IS 14543 and FSSAI requirements?",
        answer:
          "The treatment train is designed around those limits, including the mineral profile and the ozone residual at filling. We build to the specification your licence requires and commission against it.",
      },
      {
        question: "Why does RO water need remineralisation?",
        answer:
          "RO permeate is close to pure and tastes flat. Controlled mineral dosing or blending gives the product a consistent, characteristic taste and brings it within the mineral limits packaged drinking water standards expect.",
      },
      {
        question: "Can you upgrade an existing bottling line?",
        answer:
          "Yes. Adding RO capacity, replacing an ozonation stage or upgrading the RFC machine on an existing line is a substantial part of what we do.",
      },
    ],
    relatedProducts: ["reverse-osmosis", "mineral-water-project", "rfc", "dosing-ozonation-uv"],
  },

  {
    slug: "power-generation",
    name: "Power & Boilers",
    heading: "DM Plants & Boiler Feed Water Treatment for Power Generation",
    title: "Boiler Feed Water Treatment Plant | DM Plant for Power Plants India",
    description:
      "Demineralisation plants and boiler feed water treatment for power generation, captive boilers and process steam. Two-bed and mixed-bed DM systems. Manufacturer in Vasai, Maharashtra.",
    targetQuery: "boiler feed water treatment plant",
    cardBlurb:
      "Two-bed and mixed-bed DM plants for boiler feed water, with silica control for turbine service.",
    image: "/power-generation-industry.jpg",
    imageAlt: "Power plant boiler feed water demineralisation system",
    intro:
      "Boiler feed water is the application where water treatment economics are easiest to prove. Scale on a boiler tube is an insulating layer: it forces the firing rate up, drives fuel consumption up with it, and ends in tube failure. Demineralised feed water is not a quality upgrade in a steam plant — it is the cheapest fuel saving available.",
    challenges: [
      {
        title: "Scale costs fuel every day",
        text: "A thin scale layer on the water side measurably increases fuel consumption. The cost is continuous and it compounds until the tube fails.",
      },
      {
        title: "Silica carries over into turbines",
        text: "Silica volatilises at pressure and deposits on turbine blades where it cannot be cleaned off in service. High-pressure boilers need it removed, not reduced.",
      },
      {
        title: "Blowdown wastes treated water and heat",
        text: "Poor feed water quality forces higher blowdown rates, which throws away both the water you treated and the energy you put into it.",
      },
      {
        title: "Corrosion from dissolved gases",
        text: "Dissolved oxygen and carbon dioxide attack the boiler and condensate lines regardless of how well the dissolved solids were removed.",
      },
    ],
    body: [
      { kind: "h2", text: "Softening or demineralisation?" },
      {
        kind: "p",
        text: "This is the first decision and it is governed by boiler pressure. A low-pressure boiler on a reasonable feed supply may run acceptably on softened water with proper dosing and blowdown control. As pressure rises the tolerance for dissolved solids and silica falls sharply, and softening stops being enough — a softener exchanges hardness for sodium, it does not reduce total dissolved solids at all.",
      },
      {
        kind: "table",
        head: ["Boiler operating pressure", "Typical feed water route"],
        rows: [
          ["Low pressure", "Softening with dosing and blowdown control, if feed TDS is moderate"],
          ["Medium pressure", "Softening plus RO, or two-bed demineralisation"],
          ["High pressure", "Two-bed DM with mixed-bed polishing, or RO followed by mixed bed"],
          ["Utility / turbine service", "Full demineralisation with mixed-bed polishing and tight silica control"],
        ],
      },
      {
        kind: "callout",
        text: "A softener removes hardness. It does not remove dissolved solids or silica. If your boiler pressure has risen since the plant was installed, the old softener may no longer be the right answer.",
      },
      { kind: "h2", text: "How a two-bed DM plant works" },
      {
        kind: "p",
        text: "A two-bed demineralisation plant passes water through a strong acid cation resin, which exchanges all cations for hydrogen ions, and then a strong base anion resin, which exchanges anions for hydroxide. The hydrogen and hydroxide combine as water, and what leaves the plant is water with the dissolved ionic load removed. A degasser between the beds strips carbon dioxide and reduces the load on the anion resin, which directly reduces regenerant consumption.",
      },
      {
        kind: "p",
        text: "Where the specification is tighter — turbine service, or high-pressure boilers with strict silica limits — a mixed-bed unit follows as a polishing stage. Cation and anion resin in a single vessel behaves like an infinite number of two-bed stages in series, which is what takes the treated water down to the conductivity these applications need.",
      },
      { kind: "h2", text: "Running cost is a design decision" },
      {
        kind: "p",
        text: "The purchase price of a DM plant is a small part of what it costs you. The operating cost is acid and caustic for regeneration, and that is set by feed water quality and by how the plant is designed and operated. Where feed TDS is high, putting RO ahead of the DM plant is often the decision that pays for itself, because the resin is then polishing a much lighter ionic load and regeneration frequency drops accordingly.",
      },
      {
        kind: "ul",
        items: [
          "Feed water TDS drives regenerant consumption directly — a plant sized on last year's borewell analysis will not behave the same way this year.",
          "A degasser reduces anion loading and regenerant use where free carbon dioxide is present.",
          "RO ahead of DM lowers running cost substantially on high-TDS feed, at the cost of higher capital.",
          "Condensate recovery is the single biggest saving available in most steam plants — recovered condensate is hot, and already demineralised.",
        ],
      },
      { kind: "h2", text: "Condensate recovery" },
      {
        kind: "p",
        text: "Returned condensate is the highest quality feed water you have access to and it arrives hot, which means you recover the treatment cost and a large part of the heat input at the same time. The reason it is not always used is contamination risk: a leaking heat exchanger can put process fluid into the condensate line and straight into the boiler. Polishing the returned condensate, with conductivity monitoring and automatic dump on excursion, is what makes recovery safe.",
      },
      { kind: "h2", text: "What we need to quote" },
      {
        kind: "p",
        text: "Send us a full feed water analysis including silica and alkalinity, your boiler operating pressure, steam demand, percentage of condensate returned, and whether the plant serves a turbine. Silica and alkalinity are the two figures most often left off an enquiry and the two that most affect the design.",
      },
    ],
    faqs: [
      {
        question: "Do I need a softener or a DM plant for my boiler?",
        answer:
          "It depends primarily on boiler operating pressure and feed water quality. Low-pressure boilers on moderate feed can often run on softened water with dosing and blowdown control; medium and high-pressure boilers generally need demineralisation, with mixed-bed polishing where silica limits are tight.",
      },
      {
        question: "What is the difference between a two-bed and a mixed-bed DM plant?",
        answer:
          "A two-bed plant has separate cation and anion vessels in series. A mixed-bed has both resins in one vessel, which behaves like many two-bed stages in series and produces significantly lower conductivity — it is normally used as a polishing stage after a two-bed plant or after RO.",
      },
      {
        question: "Why does silica matter for high-pressure boilers?",
        answer:
          "Silica volatilises at high pressure and deposits on turbine blades, where it cannot be removed in service. High-pressure and turbine applications need silica removed rather than merely reduced, which is what drives the mixed-bed polishing stage.",
      },
      {
        question: "How can I reduce the running cost of an existing DM plant?",
        answer:
          "The usual routes are adding a degasser to cut anion loading, putting RO ahead of the DM plant where feed TDS is high, and recovering condensate. We survey the existing plant and feed water before recommending which of these actually pays back on your numbers.",
      },
      {
        question: "Do you supply the pressure vessels and tanks as well?",
        answer:
          "Yes. We fabricate SS and MS vessels, pressure vessels and storage tanks in-house, so the complete plant including vessels comes from one supplier with one set of material certificates.",
      },
    ],
    relatedProducts: ["demineralized", "water-softening", "fabricated-vessels", "reverse-osmosis"],
  },

  {
    slug: "manufacturing",
    name: "Manufacturing",
    heading: "Process Water Treatment for Manufacturing Plants",
    title: "Industrial Process Water Treatment Plant Manufacturer | Manufacturing Industry",
    description:
      "Process water treatment for manufacturing: RO plants, water softening, DM systems and custom fabricated vessels for textile, chemical, engineering and general process industries.",
    targetQuery: "industrial process water treatment plant",
    cardBlurb:
      "Process, cooling and rinse water treated to the standard each duty actually needs.",
    image: "/Ro-img1.jpg",
    imageAlt: "Industrial reverse osmosis plant installed at a manufacturing facility",
    intro:
      "Manufacturing is the sector where \"water treatment\" means the widest range of things. A textile dyehouse, an engineering shop with a cooling tower and a chemical plant with a process requirement all need different water, and the only way to get the design right is to start from what the process actually demands rather than from a standard plant. We have built into all of these since 1996.",
    challenges: [
      {
        title: "Every process wants different water",
        text: "Cooling, rinsing, dyeing and process make-up have different requirements. A single treatment standard for the whole plant either over-treats or fails somewhere.",
      },
      {
        title: "Scale in cooling systems",
        text: "Hardness concentrates as cooling water evaporates. Scale on a heat exchanger costs efficiency continuously and ends in unplanned downtime.",
      },
      {
        title: "Rinse water quality shows on the product",
        text: "In plating, dyeing and precision cleaning, dissolved solids left behind by rinse water become visible defects on the finished part.",
      },
      {
        title: "Feed water varies through the year",
        text: "Borewell quality shifts seasonally. A plant designed on a single analysis drifts out of specification when the water changes.",
      },
    ],
    body: [
      { kind: "h2", text: "Start from the process, not the plant" },
      {
        kind: "p",
        text: "The productive first question is not \"what size RO do I need\" but \"which streams in this plant actually need treated water, and to what standard\". Most manufacturing sites have three or four distinct water duties, and treating all of them to the tightest standard is how plants end up with running costs they did not expect.",
      },
      {
        kind: "table",
        head: ["Duty", "Usual requirement", "Typical route"],
        rows: [
          ["Cooling tower make-up", "Hardness and scaling control", "Softening, or softening with dosing"],
          ["Boiler feed", "Dissolved solids and silica removal", "DM, or RO followed by polishing"],
          ["Process make-up", "Process-specific, often low TDS", "RO sized on the process specification"],
          ["Final rinse", "Very low dissolved solids", "RO with DM or mixed-bed polishing"],
          ["Potable / canteen", "Drinking water standards", "RO with disinfection"],
        ],
      },
      {
        kind: "callout",
        text: "Segregating duties is usually cheaper than treating everything to the highest standard. It also means a fault in one stream does not stop the whole plant.",
      },
      { kind: "h2", text: "Cooling water and the cycles of concentration" },
      {
        kind: "p",
        text: "A cooling tower works by evaporating water, which leaves behind everything that was dissolved in it. Dissolved solids therefore concentrate continuously, and the ratio between the concentration in the tower and in the make-up is what determines how hard the water in the system becomes. Softening the make-up allows more cycles before scaling begins, which reduces both blowdown and make-up consumption.",
      },
      {
        kind: "p",
        text: "The calculation is worth doing properly, because the saving runs in both directions: less make-up water drawn, and less treated water thrown away as blowdown. On a site drawing from a borewell with a seasonal limit, that can be the difference between running through summer and not.",
      },
      { kind: "h2", text: "Rinse water in surface finishing and textiles" },
      {
        kind: "p",
        text: "In plating, anodising, dyeing and precision cleaning, the final rinse is where water quality becomes a visible product attribute. Dissolved solids in the rinse water stay on the part when the water evaporates — as spotting on a plated surface, or as shade variation across a dyed batch. RO is normally the right answer, with DM or mixed-bed polishing where the tolerance is tight.",
      },
      {
        kind: "p",
        text: "Textile processing adds a second requirement: hardness reacts with dyes and with process chemistry, so softening is often needed on the process stream as well as on the boiler feed. The two duties have different flow profiles and are usually better served by separate units than by one oversized plant.",
      },
      { kind: "h2", text: "Fabrication as part of the scope" },
      {
        kind: "p",
        text: "Manufacturing installations rarely fit a catalogue layout — the plant has to go where there is room. We fabricate SS and MS vessels, storage tanks and pressure vessels in-house, which means the treatment train can be built around the space available rather than the space being rebuilt around the train. It also keeps material certification with the same supplier who commissions the plant.",
      },
      { kind: "h2", text: "What to send with an enquiry" },
      {
        kind: "p",
        text: "A feed water analysis, a list of the water duties in the plant with approximate flow for each, and the specification for whichever duty is tightest. If you have a seasonal problem — a borewell that changes through the year, or a supply that is restricted in summer — tell us at enquiry stage, because it changes both the sizing and the storage arrangement.",
      },
    ],
    faqs: [
      {
        question: "Should I treat all the water in my plant to the same standard?",
        answer:
          "Usually not. Cooling make-up, boiler feed, process make-up and final rinse have different requirements, and treating everything to the tightest standard raises running cost unnecessarily. Segregating duties is normally both cheaper and more robust.",
      },
      {
        question: "Does softening the cooling tower make-up actually save money?",
        answer:
          "Yes, in two ways: it allows more cycles of concentration before scaling starts, which reduces blowdown, and it reduces make-up water drawn. On sites with a restricted borewell, that saving can be what keeps the plant running through summer.",
      },
      {
        question: "What treatment do I need for final rinse water?",
        answer:
          "RO is the usual baseline, because dissolved solids left by the rinse stay on the part as spotting or shade variation. Where the tolerance is tight, DM or mixed-bed polishing follows the RO.",
      },
      {
        question: "Can you build a plant to fit a constrained site layout?",
        answer:
          "Yes. We fabricate vessels and tanks in-house, so the treatment train can be designed around the space available rather than to a standard footprint.",
      },
      {
        question: "Do you handle plants where feed water quality changes seasonally?",
        answer:
          "Yes, and it is worth flagging at enquiry stage. Seasonal variation affects sizing, storage and in some cases the choice of treatment route, so we design against the range rather than a single analysis.",
      },
    ],
    relatedProducts: ["reverse-osmosis", "water-softening", "demineralized", "fabricated-vessels"],
  },

  {
    slug: "hospitality",
    name: "Hotels & Hospitality",
    heading: "Water Treatment Plants for Hotels, Resorts and Restaurants",
    title: "Water Treatment Plant for Hotels & Resorts | Commercial RO and Softener India",
    description:
      "Commercial RO plants and water softening systems for hotels, resorts and restaurants — guest water, kitchens, laundry, boilers and cooling. Manufacturer in Vasai, Mumbai.",
    targetQuery: "water treatment plant for hotels",
    cardBlurb:
      "Softening across the property with RO where taste matters — guest rooms, laundry and kitchens.",
    image: "/Ro-img5.jpg",
    imageAlt: "Commercial reverse osmosis water treatment unit for a hospitality property",
    intro:
      "A hotel is several water applications in one building, and they conflict. Guests notice taste and they notice scale on a shower fitting. The laundry cares about hardness because it decides detergent consumption and linen life. The kitchen cares about taste and about scale in the equipment. The boiler and the cooling plant care about something else again. We supply McDonald's among other hospitality clients, and the systems we build for this sector are usually segregated by duty for exactly that reason.",
    challenges: [
      {
        title: "Guests notice water quality directly",
        text: "Scale marks on fittings, hard water in the shower and a taste in the drinking water all turn into reviews. This is the one sector where water quality is visible to the customer.",
      },
      {
        title: "Laundry costs scale with hardness",
        text: "Hard water consumes more detergent and shortens linen life. On a property doing volume laundry the difference is continuous and measurable.",
      },
      {
        title: "Kitchen equipment scales quickly",
        text: "Combi ovens, dishwashers, coffee machines and ice makers scale fast on hard water, and the service cost lands on the property, not the supplier.",
      },
      {
        title: "No room, and no tolerance for noise",
        text: "Plant rooms in hospitality are small and often close to guest areas. The system has to fit the space it is given.",
      },
    ],
    body: [
      { kind: "h2", text: "Segregate by duty" },
      {
        kind: "p",
        text: "The usual mistake in hospitality is a single large RO plant feeding the whole property. It is expensive to run, it treats laundry water to drinking standard for no benefit, and it makes the whole building dependent on one unit. The better arrangement in most properties is softening across the bulk supply, with RO on the duties that genuinely need it.",
      },
      {
        kind: "table",
        head: ["Duty", "Requirement", "Typical route"],
        rows: [
          ["Guest rooms and bathrooms", "No scale, no staining on fittings", "Softened supply"],
          ["Laundry", "Low hardness for detergent efficiency", "Softened supply"],
          ["Kitchen and F&B", "Taste, and no scale in equipment", "Softening plus RO on the drinking and equipment lines"],
          ["Drinking water / packaged", "Potable standard, consistent taste", "RO with remineralisation and UV"],
          ["Boiler and cooling", "Scale control", "Softening, with DM where boiler pressure requires it"],
        ],
      },
      {
        kind: "callout",
        text: "Softening the bulk supply and putting RO only where taste matters is usually both cheaper to install and substantially cheaper to run than one large RO for the whole property.",
      },
      { kind: "h2", text: "Why hardness costs more in a hotel than anywhere else" },
      {
        kind: "p",
        text: "Hardness in a hotel does not show up as one large bill. It shows up as detergent consumption in the laundry, as linen replaced earlier than it should be, as descaling visits for the kitchen equipment, as element failures in water heaters, and as the housekeeping time spent on scale marks in bathrooms. Individually each is small; together they are the reason softening a hospitality property pays back quickly.",
      },
      {
        kind: "p",
        text: "Automatic softeners with microcomputer-controlled regeneration are the normal specification here, because a property cannot rely on someone remembering to regenerate a unit manually. Regeneration is scheduled to run outside peak demand.",
      },
      { kind: "h2", text: "Drinking water and the in-house bottling option" },
      {
        kind: "p",
        text: "Larger properties and resorts increasingly bottle their own drinking water rather than buying it in, which removes a recurring cost and a logistics problem, and lets the property put its own brand on the bottle. That requires the same train as a small packaged drinking water plant: RO, controlled remineralisation so the water does not taste flat, ozonation and a filling machine sized to the property's consumption.",
      },
      {
        kind: "p",
        text: "We supply this as a complete unit including the RFC machine, and for a resort running significant bottled water volume the payback is usually straightforward to calculate against current purchase cost.",
      },
      { kind: "h2", text: "Sizing around occupancy" },
      {
        kind: "p",
        text: "Hospitality demand is peaky in a way industrial demand is not. Consumption concentrates around morning and evening, and occupancy varies by season. Sizing on average daily consumption produces a plant that cannot meet the morning peak; sizing on peak alone produces one that is oversized most of the year. The usual answer is a plant sized on average demand with treated water storage buffering the peak — which is cheaper than oversizing the treatment train.",
      },
      { kind: "h2", text: "What we need to quote" },
      {
        kind: "p",
        text: "Number of keys, whether laundry is in-house, the kitchen and F&B outlets on the property, whether there is a boiler or cooling plant, a feed water analysis, and the space available for the plant room. If you are considering in-house bottling, tell us your current monthly bottled water purchase and we will work the comparison.",
      },
    ],
    faqs: [
      {
        question: "Does a hotel need an RO plant or a water softener?",
        answer:
          "Usually both, on different duties. Softening across the bulk supply handles guest rooms, laundry and equipment protection; RO goes on the drinking water and kitchen lines where taste matters. One large RO for the whole property is normally more expensive to run without being better.",
      },
      {
        question: "How quickly does a water softener pay back in a hotel?",
        answer:
          "It depends on feed water hardness and laundry volume, but the saving is spread across detergent consumption, linen life, kitchen equipment descaling and water heater maintenance. On a property with in-house laundry and hard feed water, payback is typically fast.",
      },
      {
        question: "Can we bottle our own drinking water on the property?",
        answer:
          "Yes. It needs the same train as a small packaged drinking water plant — RO, remineralisation, ozonation and a rinsing-filling-capping machine sized to your consumption. We supply this as one scope, and the payback against current purchase cost is usually easy to calculate.",
      },
      {
        question: "How is the plant sized when occupancy varies through the year?",
        answer:
          "We size the treatment train on average demand and buffer the morning and evening peaks with treated water storage. That is considerably cheaper than sizing the train for the peak and leaving it idle most of the year.",
      },
      {
        question: "Will the plant fit a small plant room?",
        answer:
          "We fabricate vessels in-house, so the layout can be built around the space available. Send us the plant room dimensions along with the enquiry.",
      },
    ],
    relatedProducts: ["water-softening", "reverse-osmosis", "mineral-water-project", "dosing-ozonation-uv"],
  },

  {
    slug: "construction",
    name: "Construction & Infrastructure",
    heading: "Water Treatment for Construction Sites and Infrastructure Projects",
    title: "Water Treatment Plant for Construction Sites | Site RO and Softening Systems",
    description:
      "Water treatment for construction and infrastructure projects: site drinking water, concrete mixing and curing water treatment, and relocatable RO plants. Manufacturer in Vasai, India.",
    targetQuery: "water treatment plant for construction site",
    cardBlurb:
      "Relocatable plants for site drinking water, concrete mixing and curing water treatment.",
    image: "/ss-storage-tanks(7).jpg",
    imageAlt: "Fabricated stainless steel water storage tanks for a site water installation",
    intro:
      "Construction water gets less attention than it deserves, on two fronts. Water used for mixing and curing concrete directly affects the strength the structure achieves, and it is governed by standards for good reason. Site drinking water is a welfare obligation on projects that often have no municipal supply at all. Both problems have to be solved with equipment that can be installed quickly and moved to the next project afterwards.",
    challenges: [
      {
        title: "Mixing and curing water affects strength",
        text: "Chlorides, sulphates and organic contamination in mixing water affect setting behaviour and long-term durability, and chlorides drive reinforcement corrosion.",
      },
      {
        title: "No municipal supply on site",
        text: "Most sites run on borewell or tanker water of unknown and variable quality, which is not a sound basis for either concrete or drinking water.",
      },
      {
        title: "Drinking water for the workforce",
        text: "Labour camps and site offices need potable water continuously, and the supply often has to be created rather than connected.",
      },
      {
        title: "The plant has to move",
        text: "A project ends. Equipment bought for one site should be relocatable to the next rather than written off with the project.",
      },
    ],
    body: [
      { kind: "h2", text: "Water for concrete: why the analysis matters" },
      {
        kind: "p",
        text: "Indian practice for plain and reinforced concrete sets limits on the water used for mixing and curing, covering chlorides, sulphates, suspended solids, organic matter and pH. The reasoning is direct: chlorides promote corrosion of the reinforcement, sulphates attack the set cement, organic matter interferes with setting, and suspended solids weaken the paste. Borewell and tanker water routinely exceed these limits without anyone on site knowing, because nobody tested it.",
      },
      {
        kind: "p",
        text: "The first step on any project drawing from an unknown source is therefore a water analysis, not a treatment plant. Some sources need nothing more than filtration and storage. Others — particularly coastal sites where borewells carry salinity — need RO before the water is fit for structural concrete at all.",
      },
      {
        kind: "callout",
        text: "On coastal projects, chloride in the borewell is the figure to check first. It is the one that quietly shortens the design life of the structure you are building.",
      },
      { kind: "h2", text: "Curing water and surface appearance" },
      {
        kind: "p",
        text: "Curing water has a second requirement beyond strength: it should not stain. Water carrying iron or high dissolved solids leaves marks on exposed concrete surfaces that are difficult to remove afterwards and are immediately visible on architectural finishes. On projects where the concrete is a finished surface rather than a substrate, treating the curing water is cheaper than remediating the staining.",
      },
      { kind: "h2", text: "Site drinking water" },
      {
        kind: "p",
        text: "Labour camps and site offices need a continuous potable supply, and on most sites that means producing it rather than connecting to it. A compact RO plant with disinfection covers this, sized on headcount rather than on any process figure. Where the site is large or the camp is separated from the works, treated water storage close to the point of use matters more than treatment capacity — the plant can run steadily and the storage handles the peaks around shift changes.",
      },
      {
        kind: "ul",
        items: [
          "Size on headcount and shift pattern, with storage buffering the peaks at shift change and mealtimes.",
          "Disinfection is not optional — UV or ozonation, with treated water storage kept closed.",
          "Keep the drinking water plant separate from the construction water supply so contamination on one side cannot reach the other.",
          "Skid-mounted units can be moved to the next project instead of being abandoned with the site.",
        ],
      },
      { kind: "h2", text: "Relocatable plants" },
      {
        kind: "p",
        text: "The economics of site water treatment only work if the equipment has a life beyond the project. We build skid-mounted and containerised units for exactly this reason: they are commissioned quickly, they survive being moved, and the same plant serves several projects across its life. For contractors running multiple sites, this changes the equipment from a project cost into an asset.",
      },
      {
        kind: "p",
        text: "We fabricate the vessels and storage tanks in-house, which matters more on construction projects than elsewhere — site layouts are constrained and change as the works progress, and a plant built to fit the space available is far more useful than one that requires the space to be found.",
      },
      { kind: "h2", text: "What to send with an enquiry" },
      {
        kind: "p",
        text: "A water analysis of the source you will actually draw from, the site headcount for drinking water, approximate concrete volumes if mixing and curing water is in scope, and the expected project duration. Duration matters: it decides whether a relocatable unit or a permanent installation is the right commercial answer.",
      },
    ],
    faqs: [
      {
        question: "Does water used for concrete need to be treated?",
        answer:
          "It depends entirely on the source. Indian practice sets limits on chlorides, sulphates, suspended solids, organic matter and pH for mixing and curing water. Borewell and tanker supplies frequently exceed them, so the first step is an analysis — some sources need only filtration, while saline coastal borewells need RO.",
      },
      {
        question: "Why does chloride content matter on coastal projects?",
        answer:
          "Chlorides promote corrosion of reinforcement, which shortens the effective design life of the structure. Coastal borewells often carry significant salinity, so chloride is the first figure to check before using the source for structural concrete.",
      },
      {
        question: "Can the plant be moved to our next project?",
        answer:
          "Yes. We build skid-mounted and containerised units specifically so they can be commissioned quickly, relocated when the project ends, and reused across several sites rather than written off with one.",
      },
      {
        question: "How do you size a drinking water plant for a labour camp?",
        answer:
          "On headcount and shift pattern, with treated water storage sized to buffer the peaks at shift change and mealtimes. That is cheaper than oversizing the treatment capacity to meet a short daily peak.",
      },
      {
        question: "Can you supply storage tanks along with the treatment plant?",
        answer:
          "Yes. We fabricate SS and MS storage tanks and vessels in-house, which lets the installation be built around a constrained and changing site layout.",
      },
    ],
    relatedProducts: ["reverse-osmosis", "fabricated-vessels", "water-softening", "dosing-ozonation-uv"],
  },
];

export function getIndustry(slug: string) {
  return INDUSTRIES.find((i) => i.slug === slug);
}
