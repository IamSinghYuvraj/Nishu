import type { Block } from "@/lib/posts";
import { BUSINESS } from "@/lib/site";

// Extra content for product pages. FAQs are written against the questions
// buyers actually type into Google (price drivers, regeneration, maintenance,
// HSN codes) and are also emitted as FAQPage schema. Never put prices,
// capacities or brand names here that the business has not confirmed.

export type Faq = { question: string; answer: string };

const HSN_CAVEAT =
  "Confirm the classification and applicable GST rate with your tax advisor; we state the HSN code on our invoice.";

export const PRODUCT_FAQS: Record<string, Faq[]> = {
  "reverse-osmosis": [
    {
      question: "What capacity RO plant do I need?",
      answer:
        "Start from measured daily consumption, including rinse water and losses, and divide by the hours the plant will actually run - usually 16 to 20, not 24, so there is time for cleaning. Then correct for feed water TDS and the recovery the plant can achieve. Send us your water analysis and daily requirement and we will size it before quoting.",
    },
    {
      question: "What does the price of an industrial RO plant depend on?",
      answer:
        "Mainly on capacity in litres per hour, feed water TDS and chemistry, the recovery rate required, the pre-treatment the feed water needs, material of construction (stainless steel or FRP/PVC skid) and the level of automation and instrumentation. Two plants of the same LPH can differ widely in cost, which is why we quote against your water analysis rather than a price list.",
    },
    {
      question: "How often do RO membranes need cleaning or replacement?",
      answer:
        "Membranes are normally cleaned when normalised permeate flow drops by around 10-15% or the pressure drop across the stage rises by a similar margin. With sound pre-treatment, membrane life is typically several years; poor pre-treatment and skipped cleaning are the usual reasons it is much shorter.",
    },
    {
      question: "What is the HSN code for an RO plant?",
      answer: `Machinery for filtering or purifying water, which includes RO plants, is commonly classified under HSN 8421 21. ${HSN_CAVEAT}`,
    },
    {
      question: "Do you install RO plants outside Mumbai?",
      answer:
        "Yes. We manufacture in Vasai and have installed more than 1200 plants across India and 45 countries. For sites outside Maharashtra we plan dispatch, installation and commissioning as part of the quotation.",
    },
  ],

  demineralized: [
    {
      question: "How does a DM water plant work?",
      answer:
        "Water passes through a cation resin that exchanges dissolved cations for hydrogen ions, then an anion resin that exchanges anions for hydroxide ions. The hydrogen and hydroxide combine to form water, leaving the dissolved ionic load removed. A degasser between the two beds strips carbon dioxide and reduces the load on the anion resin.",
    },
    {
      question: "What is the difference between a two-bed and a mixed-bed DM plant?",
      answer:
        "A two-bed plant has separate cation and anion vessels in series. A mixed-bed unit holds both resins in one vessel and behaves like many two-bed stages in series, producing much lower conductivity. Mixed beds are normally used as a polishing stage after a two-bed plant or after RO.",
    },
    {
      question: "How is a DM plant regenerated?",
      answer:
        "The cation resin is regenerated with acid (hydrochloric or sulphuric) and the anion resin with caustic soda. Each regeneration follows the same sequence: backwash, regenerant injection, slow rinse to displace the regenerant, and a fast rinse until the outlet water is back within specification.",
    },
    {
      question: "What water quality does a DM plant produce?",
      answer:
        "A well-operated two-bed plant typically delivers conductivity in the low single or double digits of µS/cm. Adding a mixed-bed polisher takes it below 1 µS/cm, which is what high-pressure boilers, pharmaceutical and laboratory applications usually require.",
    },
    {
      question: "Should I put an RO plant before my DM plant?",
      answer:
        "Where feed water TDS is high, usually yes. RO removes the bulk of the dissolved solids so the resin only polishes what remains, which cuts acid and caustic consumption and regeneration frequency substantially.",
    },
  ],

  "water-softening": [
    {
      question: "How does an industrial water softener work?",
      answer:
        "Hard water passes through a cation exchange resin that swaps calcium and magnesium - the minerals that cause scale - for sodium. When the resin is exhausted it is regenerated with brine (a common salt solution), rinsed, and returned to service.",
    },
    {
      question: "How often does a water softener regenerate, and how much salt does it use?",
      answer:
        "Both depend on the hardness of the feed water and the volume treated. Automatic softeners regenerate on a timer or after a set volume, scheduled outside peak demand. Send us your hardness figure and daily consumption and we will size the resin volume and regeneration cycle.",
    },
    {
      question: "Water softener or RO plant - which do I need?",
      answer:
        "A softener removes hardness only; it does not reduce total dissolved solids. It is the right answer for scaling problems in boilers, cooling towers, bathrooms and laundries. RO reduces dissolved solids and is needed where taste or low TDS matters, such as drinking water or process water.",
    },
    {
      question: "Can a softener treat borewell water with iron?",
      answer:
        "High iron fouls softener resin and shortens its life, so borewell water with significant iron needs pre-filtration or iron removal before the softener. That is why we ask for a water analysis before sizing a plant.",
    },
    {
      question: "Do you supply water softeners for housing societies?",
      answer:
        "Yes. Hard borewell and tanker water is common across Vasai-Virar, Thane and Mumbai, and a softening plant on the building supply protects bathroom fittings, geysers and plumbing. See our page on water softeners for housing societies for how they are sized.",
    },
  ],

  "membrane-housing": [
    {
      question: "FRP or stainless steel membrane housing - which should I choose?",
      answer:
        "FRP housings are corrosion-resistant, light and cost-effective for most brackish water RO plants. Stainless steel housings are chosen where the application calls for sanitary construction - pharmaceutical, food and beverage - or where a robust, polished finish is required.",
    },
    {
      question: "What pressure rating does a membrane housing need?",
      answer:
        "It must exceed the maximum operating pressure of the RO stage. Brackish water RO housings are commonly rated around 300 psi, while seawater RO needs housings rated around 1000 psi or more.",
    },
    {
      question: "Do you supply high-pressure pumps as well?",
      answer:
        "Yes. We supply high-pressure pumps matched to the membrane array, so the housings, pump and membranes are specified together rather than bought separately.",
    },
    {
      question: "What is the HSN code for an RO membrane housing?",
      answer: `Parts of water filtering or purifying machinery are commonly classified under HSN 8421 99. ${HSN_CAVEAT}`,
    },
  ],

  "fabricated-vessels": [
    {
      question: "SS 304 or SS 316 - which grade do I need for a storage tank?",
      answer:
        "SS 304 is the usual choice for general water storage. SS 316 or 316L is chosen where chlorides are high, for pharmaceutical and food-contact duties, or where the stored liquid is more aggressive. Tell us what the tank will hold and we will recommend the grade.",
    },
    {
      question: "Can you fabricate tanks to custom sizes?",
      answer:
        "Yes. All fabrication is done in-house in Vasai, so tanks and vessels are built to your capacity, dimensions and site layout rather than a standard catalogue size.",
    },
    {
      question: "Do you make pressure vessels and filter vessels?",
      answer:
        "Yes. Alongside storage tanks we fabricate pressure vessels and filter vessels in stainless steel and mild steel for water treatment and process duties.",
    },
    {
      question: "What is the HSN code for a stainless steel storage tank?",
      answer: `Tanks and reservoirs of iron or steel with a capacity above 300 litres are commonly classified under HSN 7309. ${HSN_CAVEAT}`,
    },
  ],

  "mineral-water-project": [
    {
      question: "What equipment does a packaged drinking water plant need?",
      answer:
        "Raw water storage and filtration, activated carbon, softening or antiscalant dosing, micron cartridge filtration, RO, mineral dosing, ozonation of the storage tank, UV, and an automatic rinsing-filling-capping machine, plus the in-house testing facilities required for certification.",
    },
    {
      question: "How much does it cost to set up a mineral water plant?",
      answer:
        "It depends on output in litres per hour, the bottle formats and line speed, the feed water quality and how much of the building and utilities already exist. We have written a guide to what drives mineral water plant setup cost in India, and we quote against your specific site.",
    },
    {
      question: "Do I need BIS certification for packaged drinking water?",
      answer:
        "Yes. Packaged drinking water in India must be certified by BIS to IS 14543 and the business needs an FSSAI licence. The plant, its process and its in-house testing facilities are assessed as part of certification, so the plant should be designed with that in mind from the start.",
    },
    {
      question: "Do you supply the bottle filling machine as well?",
      answer:
        "Yes. We supply the automatic rinsing, filling and capping (RFC) machine as part of the turnkey project, matched to your line speed and bottle formats.",
    },
    {
      question: "How much space does a mineral water plant need?",
      answer:
        "It depends on capacity and whether bottling, storage and the testing lab share the building. Send us the site dimensions with your enquiry and we will propose a layout.",
    },
  ],

  "dosing-ozonation-uv": [
    {
      question: "Ozone, UV or chlorine - which disinfection method is best?",
      answer:
        "Ozone is a powerful oxidant that decays to oxygen and leaves no chemical taste, which is why bottling plants use it. UV disinfects without chemicals but leaves no residual protection downstream. Chlorine leaves a residual that protects a distribution network but can affect taste. Many systems combine them.",
    },
    {
      question: "Can an ozone generator be used for a water storage tank?",
      answer:
        "Yes. Ozonating a storage tank controls bacterial growth in stored water. The generator is sized on the tank volume and how quickly the water turns over.",
    },
    {
      question: "What is a dosing system used for in water treatment?",
      answer:
        "Dosing systems add precise quantities of chemicals: antiscalant to protect RO membranes, chlorine for disinfection, acid or alkali for pH correction, and coagulants for clarification. Accurate dosing protects the plant and avoids wasting chemicals.",
    },
    {
      question: "Is a UV steriliser enough on its own?",
      answer:
        "Only if the water is already clear. UV needs low turbidity to work, and because it leaves no residual, stored water can be recontaminated afterwards. It is usually one stage in a treatment train rather than the whole answer.",
    },
  ],

  rfc: [
    {
      question: "What bottle sizes can an RFC machine handle?",
      answer:
        "RFC machines are configured for specific bottle formats and neck sizes. Tell us every format you plan to run and we will confirm the configuration and any change parts required.",
    },
    {
      question: "How many bottles per hour does an RFC machine fill?",
      answer:
        "Output depends on the number of rinsing, filling and capping heads and on bottle size. Size the machine against your planned daily output and shift pattern, and the RO and ozonation capacity upstream have to match it.",
    },
    {
      question: "What is the HSN code for an RFC machine?",
      answer: `Machinery for filling, closing and capping bottles is commonly classified under HSN 8422 30. ${HSN_CAVEAT}`,
    },
    {
      question: "Do I need a water treatment plant along with the RFC machine?",
      answer:
        "Yes. The RFC machine fills treated water, so it sits at the end of a line that includes RO, mineral dosing and ozonation. We supply the complete line as a turnkey mineral water project.",
    },
  ],

  desalination: [
    {
      question: "What is the difference between seawater and brackish water desalination?",
      answer:
        "Brackish water - typically from borewells - carries roughly 1,000 to 10,000 mg/L of dissolved solids, while seawater carries around 35,000 mg/L. Seawater RO needs much higher operating pressure, higher-rated housings and pumps, and runs at lower recovery.",
    },
    {
      question: "What recovery does a desalination plant achieve?",
      answer:
        "Seawater RO plants commonly recover around 35-45% of the feed as product water; brackish water plants typically achieve considerably higher recovery. The rest leaves as concentrate, which has to be planned for on site.",
    },
    {
      question: "Why is pre-treatment so important in desalination?",
      answer:
        "Membranes are the most expensive part of the plant and pre-treatment decides how long they last. Suspended solids, organics and biological fouling in the intake water have to be removed before the high-pressure stage.",
    },
    {
      question: "Is desalinated water safe to drink directly?",
      answer:
        "RO permeate from desalination is very low in minerals and slightly aggressive, so drinking water plants add a remineralisation and pH correction stage, followed by disinfection, before supply.",
    },
  ],

  "spares-consumables": [
    {
      question: "Which RO membranes do you supply?",
      answer:
        "We supply brackish water (BW), seawater (SW), ultrafiltration (UF) and nanofiltration (NF) membranes. Tell us the membrane size and model currently installed, or the application, and we will match it.",
    },
    {
      question: "Do you supply ion exchange resins for DM plants and softeners?",
      answer:
        "Yes. We supply ion exchange resins for softeners, two-bed DM plants and mixed-bed polishers. Resin replacement is usually due when the plant's output between regenerations falls noticeably despite correct regeneration.",
    },
    {
      question: "Why does an RO plant need antiscalant?",
      answer:
        "As water passes through the membranes, dissolved salts concentrate on the reject side and can precipitate as scale. Antiscalant dosed into the feed keeps them in solution and protects the membranes. The dose depends on the feed water chemistry and recovery.",
    },
    {
      question: "Are RO spare parts standard sizes?",
      answer:
        "Most consumables are. Cartridge filters, standard 4040 and 8040 membrane elements, resins and filter media follow industry-standard sizes. Send us your plant details and we will confirm compatibility before supplying.",
    },
  ],

  "amc-maintenance": [
    {
      question: "What does an RO plant AMC include?",
      answer:
        "A typical annual maintenance contract covers scheduled service visits, review of the operating log, membrane cleaning when the data calls for it, cartridge filter replacement, checks of dosing systems, pumps and instruments, and priority breakdown support. We tailor the scope to the plant and its duty.",
    },
    {
      question: "How often should an RO plant be serviced?",
      answer:
        "Operators should record pressures, flows and TDS daily. Cartridge filters are changed when the pressure drop across them rises, membranes are cleaned based on normalised performance data, and a technician should review the plant at regular intervals - monthly or quarterly depending on size and duty.",
    },
    {
      question: "What should an RO plant log sheet record?",
      answer:
        "Feed and permeate TDS, feed, reject and permeate flows, pressures before and after the cartridge filter and across each stage, feed water temperature, and chemical dosing levels. Without these readings there is no way to tell when the membranes need cleaning.",
    },
    {
      question: "Why is my RO plant producing less water than before?",
      answer:
        "The usual causes are membrane fouling or scaling, a blocked cartridge filter, colder feed water, or a drop in feed pressure. Log data usually identifies which one. Left unaddressed, fouling becomes permanent and the membranes have to be replaced.",
    },
  ],
};

/** Body content for the product pages rendered by app/products/[slug]. */
export interface ProductPage {
  intro: string;
  highlights: { title: string; text: string }[];
  body: Block[];
  /** Industry slugs from lib/industries.ts to link to. */
  relatedIndustries: string[];
}

export const PRODUCT_PAGES: Record<string, ProductPage> = {
  desalination: {
    intro:
      "Desalination is reverse osmosis at its most demanding. Seawater and high-salinity borewell water need higher pressures, tougher materials and far more careful pre-treatment than ordinary RO, and the cost of getting it wrong is measured in membranes. We have designed and built RO plants since 1996, and we engineer desalination plants around the water you actually have to treat.",
    highlights: [
      {
        title: "Seawater and brackish water",
        text: "Plant design starts from the feed: seawater at around 35,000 mg/L and brackish borewell water are different engineering problems.",
      },
      {
        title: "Pre-treatment built for the intake",
        text: "Media filtration and cartridge protection sized for the turbidity and fouling load of your intake, not a standard skid.",
      },
      {
        title: "High-pressure materials",
        text: "Membrane housings, pumps and pipework rated for seawater operating pressures, with corrosion-resistant materials throughout.",
      },
      {
        title: "Drinkable product water",
        text: "Remineralisation, pH correction and disinfection so permeate is fit to drink and does not corrode the distribution network.",
      },
    ],
    body: [
      { kind: "h2", text: "Seawater or brackish: the first question" },
      {
        kind: "p",
        text: "The salinity of the feed water decides almost everything else about a desalination plant: operating pressure, membrane type, housing and pump rating, recovery, and the volume of concentrate the site has to handle. Brackish borewell water on coastal sites is often far more saline than inland borewell water, and it can change with the season as the aquifer responds to pumping.",
      },
      {
        kind: "table",
        head: ["Feed water", "Typical dissolved solids", "Implication for the plant"],
        rows: [
          ["Brackish borewell", "Roughly 1,000-10,000 mg/L", "Brackish water membranes, moderate pressure, higher recovery"],
          ["High-salinity borewell", "Above 10,000 mg/L", "Design approaches seawater practice; analysis over time matters"],
          ["Seawater", "Around 35,000 mg/L", "Seawater membranes, high pressure, recovery commonly 35-45%"],
        ],
      },
      { kind: "h2", text: "Why pre-treatment decides membrane life" },
      {
        kind: "p",
        text: "In a desalination plant the membranes are the most expensive consumable and the most sensitive component. Every problem the pre-treatment fails to remove - suspended solids, organics, biological growth - ends up fouling them. A plant that saves on pre-treatment pays for it in cleaning frequency and early membrane replacement.",
      },
      {
        kind: "ol",
        items: [
          "Intake and screening appropriate to the source - borewell, beach well or open intake.",
          "Multigrade media filtration to remove suspended solids and reduce turbidity.",
          "Antiscalant and, where needed, other conditioning chemicals dosed ahead of the membranes.",
          "Micron cartridge filtration as final membrane protection.",
          "High-pressure pump and RO membrane array rated for the feed salinity.",
          "Remineralisation and pH correction of the permeate.",
          "Disinfection and treated water storage.",
        ],
      },
      {
        kind: "callout",
        text: "The most useful single number for a desalination enquiry is not the capacity - it is a full analysis of the intake water, ideally taken more than once.",
      },
      { kind: "h2", text: "Remineralisation and product water quality" },
      {
        kind: "p",
        text: "Desalinated permeate is very low in minerals. It tastes flat and it is mildly aggressive to pipework, so water intended for drinking is remineralised and its pH corrected before it is distributed. For industrial duties the permeate may go on to a DM or polishing stage instead.",
      },
      { kind: "h2", text: "What we need to quote" },
      {
        kind: "p",
        text: "A full analysis of the source water, the type of intake, the product water capacity you need and what it will be used for, the site location and power availability, and how concentrate can be disposed of on your site. Coastal borewell projects benefit from analyses taken at different times of year.",
      },
    ],
    relatedIndustries: ["hospitality", "construction", "manufacturing"],
  },

  "spares-consumables": {
    intro:
      "A water treatment plant is only as reliable as its consumables. We supply the membranes, resins, cartridges, filter media, instruments, fittings and chemicals that RO, DM and softening plants depend on - the same parts we have specified into our own plants since 1996.",
    highlights: [
      {
        title: "RO, UF and NF membranes",
        text: "Brackish water, seawater, ultrafiltration and nanofiltration membranes, matched to your existing housings and application.",
      },
      {
        title: "Ion exchange resins",
        text: "Resins for water softeners, two-bed DM plants and mixed-bed polishers.",
      },
      {
        title: "Filters and filter media",
        text: "Cartridge filters of all types, and sand and activated carbon filter media for pressure filters.",
      },
      {
        title: "Chemicals, gauges and fittings",
        text: "Antiscalants, citric acid and cleaning chemicals, pressure gauges and switches, and SS fittings.",
      },
    ],
    body: [
      { kind: "h2", text: "What we supply" },
      {
        kind: "ul",
        items: [
          "Cartridge filters and filter housings of all common types and lengths.",
          "RO membranes: brackish water (BW) and seawater (SW), plus ultrafiltration (UF) and nanofiltration (NF) membranes.",
          "Ion exchange resins for softeners, DM plants and mixed beds.",
          "Filter media: graded sand and activated carbon.",
          "Pressure gauges and pressure switches.",
          "Stainless steel fittings.",
          "Water treatment chemicals including antiscalants, Gramacid and citric acid.",
        ],
      },
      { kind: "h2", text: "When consumables are due for replacement" },
      {
        kind: "table",
        head: ["Consumable", "Usual sign it is due"],
        rows: [
          ["Cartridge filters", "Pressure drop across the housing rises above the normal range"],
          ["RO membranes", "Cleaning no longer restores permeate flow or salt rejection"],
          ["Ion exchange resin", "Output between regenerations falls despite correct regeneration"],
          ["Activated carbon", "Chlorine or organics start appearing downstream of the carbon filter"],
          ["Sand media", "Backwashing no longer restores the filter's pressure drop or clarity"],
        ],
      },
      {
        kind: "callout",
        text: "Changing cartridges on a pressure reading rather than a calendar protects the membranes and avoids throwing away filters that still had life in them.",
      },
      { kind: "h2", text: "Ordering the right part" },
      {
        kind: "p",
        text: "Most consumables follow industry-standard sizes, but the details matter: membrane element size and model, cartridge length and micron rating, resin type and volume. Send us the plant capacity, the part currently fitted and a photo of its label where possible, and we will confirm compatibility before supplying.",
      },
    ],
    relatedIndustries: ["manufacturing", "pharmaceutical", "food-beverage"],
  },

  "amc-maintenance": {
    intro: `Most water treatment plants that fail do not fail because of design - they fail because nobody was watching the numbers. Our annual maintenance contracts keep RO, DM and softening plants running to specification with scheduled service, cleaning based on real performance data, and genuine spares, backed by ${BUSINESS.stats.years} years of building the plants ourselves.`,
    highlights: [
      {
        title: "Scheduled service visits",
        text: "Regular technician visits to inspect the plant, review the operating log and act before performance slips.",
      },
      {
        title: "Membrane cleaning on data",
        text: "Cleaning-in-place when normalised performance calls for it, not on a guess - protecting membrane life.",
      },
      {
        title: "Genuine spares",
        text: "Cartridges, membranes, resins and chemicals supplied from our own stock and matched to the plant.",
      },
      {
        title: "Breakdown support",
        text: "Priority response when something goes wrong, from the team that designs and builds these plants.",
      },
    ],
    body: [
      { kind: "h2", text: "Why maintenance decides running cost" },
      {
        kind: "p",
        text: "An RO plant loses performance gradually. Fouling and scaling build up on the membranes, output drops and the plant runs longer or harder to compensate. Caught early, a cleaning cycle restores it. Left too long, the fouling becomes permanent and the membranes have to be replaced - usually the single largest maintenance cost a plant can incur.",
      },
      { kind: "h2", text: "RO plant maintenance schedule" },
      {
        kind: "table",
        head: ["Frequency", "Tasks"],
        rows: [
          ["Daily", "Record pressures, flows, feed and permeate TDS and temperature; check dosing tank levels"],
          ["Weekly", "Review log trends; check for leaks, unusual noise or vibration; backwash media filters as required"],
          ["As indicated", "Replace cartridge filters when pressure drop rises; clean membranes when normalised flow or pressure drop moves beyond limits"],
          ["Monthly / quarterly", "Technician visit: instrument checks, pump inspection, dosing calibration, performance review"],
          ["Annually", "Full plant audit; review membrane and resin condition and plan replacements"],
        ],
      },
      { kind: "h2", text: "What an operating log should record" },
      {
        kind: "ul",
        items: [
          "Feed and permeate TDS (or conductivity).",
          "Feed, permeate and reject flow rates.",
          "Pressure before and after the cartridge filter.",
          "Feed pressure and pressure drop across each membrane stage.",
          "Feed water temperature, which changes membrane output independently of fouling.",
          "Chemical dosing levels and consumption.",
        ],
      },
      {
        kind: "callout",
        text: "Without a daily log there is no way to tell whether a drop in output is fouling, scaling, a blocked cartridge or just colder water - and each needs a different response.",
      },
      { kind: "h2", text: "DM plants and softeners" },
      {
        kind: "p",
        text: "Ion exchange plants need a different kind of attention: regeneration chemical consumption, output between regenerations, and treated water quality at the end of each run. A steady fall in output per regeneration points to resin fouling or loss, and catching it early is far cheaper than a plant that quietly slips out of specification.",
      },
      { kind: "h2", text: "Requesting an AMC" },
      {
        kind: "p",
        text: "Tell us the plant type and capacity, its age, who built it, the feed water source and how it is currently operated. We survey the plant before proposing a scope, so the contract covers what the plant actually needs.",
      },
    ],
    relatedIndustries: ["residential-societies", "hospitality", "manufacturing"],
  },
};
