import type { Industry } from "@/lib/industries";

// Second set of industry pages, each written against a query cluster seen in
// Google India autocomplete ("water softener for society", "ro plant for
// hospital", "ro plant for school", "laboratory water purification system",
// "ro plant for textile industry"). Merged into INDUSTRIES in lib/industries.ts.
// Keep claims to what the business supplies: where a duty is outside its
// scope (dialysis water, point-of-use ultrapure polishers) say so plainly.

export const MORE_INDUSTRIES: Industry[] = [
  {
    slug: "residential-societies",
    name: "Housing Societies",
    heading: "Water Softeners & RO Plants for Housing Societies",
    title: "Water Softener Plant for Housing Society | Mumbai & Thane",
    description:
      "Water softening plants and RO systems for housing societies and residential complexes on borewell or tanker water. Sized per building. Vasai, Mumbai since 1996.",
    targetQuery: "water softener for society",
    cardBlurb:
      "Building-wide softening for hard borewell and tanker water, with RO for drinking water.",
    image: "/residential-societies-industry.jpg",
    imageAlt: "Residential apartment towers in a city",
    intro:
      "Hard water is one of the most common complaints in housing societies across Vasai-Virar, Mira-Bhayandar, Thane and Mumbai's suburbs, especially where the building depends on a borewell or tanker supply. It shows up as white scale on taps and tiles, geysers that fail early, blocked shower heads and plumbing that loses pressure year after year. A softening plant on the building's supply solves it at source for every flat at once. We have built water treatment plants since 1996, and we size society plants around the building's actual water, not a catalogue model.",
    challenges: [
      {
        title: "Scale in every flat",
        text: "Hardness deposits on taps, tiles and shower heads, shortens the life of geysers and washing machines, and slowly narrows the building's pipes.",
      },
      {
        title: "Borewell and tanker water vary",
        text: "Water quality changes with the source and the season. A plant designed on one tanker's water can be undersized for the next.",
      },
      {
        title: "Committees need clear running costs",
        text: "A managing committee has to justify the plant to members. Salt consumption, maintenance and AMC cost need to be known before the decision, not after.",
      },
      {
        title: "Limited space near the tanks",
        text: "The plant usually has to fit near the underground sump and pumps, in whatever space the building already has.",
      },
    ],
    body: [
      { kind: "h2", text: "Softener or RO: what a society actually needs" },
      {
        kind: "p",
        text: "Most societies need a softener, not an RO plant, for the building supply. A softener removes the calcium and magnesium that cause scale, which is what residents experience as hard water. It does not reduce total dissolved solids and it does not make water drinkable. Drinking water is a separate, much smaller requirement, met with RO at a common drinking water point or with purifiers in individual flats. Running the entire building supply through RO is rarely justified: it wastes a large share of the water as reject and costs far more to run.",
      },
      {
        kind: "table",
        head: ["Duty", "Requirement", "Usual route"],
        rows: [
          ["Bathroom and kitchen supply", "No scale on fittings and appliances", "Softener on the building supply"],
          ["Drinking water", "Low TDS and microbiologically safe", "RO at a common point, or purifiers in flats"],
          ["Borewell water with iron or turbidity", "Clear water that will not foul the resin", "Pressure sand filtration or iron removal before the softener"],
          ["Stored water in tanks", "Hygiene between cleanings", "Regular tank cleaning; ozone or UV where needed"],
        ],
      },
      { kind: "h2", text: "Where the plant goes" },
      {
        kind: "p",
        text: "The softener is normally installed on the pumping line between the underground sump and the overhead tank. Everything pumped up to the overhead tank is softened on the way, so every flat receives soft water without any change to the plumbing inside the building.",
      },
      {
        kind: "callout",
        text: "Soften the water on its way to the overhead tank and every flat gets soft water, without touching a single pipe inside the building.",
      },
      { kind: "h2", text: "How a society softener is sized" },
      {
        kind: "ol",
        items: [
          "Establish daily consumption from pump running hours, meter readings or tanker records - not only from the number of flats.",
          "Test the water for hardness, TDS and iron. Hardness sets the size of the plant; iron decides whether pre-filtration is needed.",
          "Size the resin volume on hardness multiplied by the volume to be treated between regenerations.",
          "Schedule automatic regeneration for low-demand hours, usually at night.",
          "Provide a brine tank and salt storage that the society's staff can top up easily.",
        ],
      },
      { kind: "h2", text: "Running cost and maintenance" },
      {
        kind: "p",
        text: "Salt is the main running cost, and it scales directly with hardness and consumption - which is why we calculate it at the sizing stage and give the committee the figure up front. With pre-filtration and correct regeneration, softener resin lasts for years. An annual maintenance contract covers periodic checks, regeneration settings as the water changes, and resin and valve servicing.",
      },
      { kind: "h2", text: "What we need to quote" },
      {
        kind: "p",
        text: "The number of wings and flats, the water sources the building uses, a recent water test showing hardness, TDS and iron, the underground and overhead tank capacities, the pump details, and a photo or dimensions of the space available near the sump.",
      },
    ],
    faqs: [
      {
        question: "How much does a water softener for a housing society cost?",
        answer:
          "It depends on daily consumption, the hardness of the water, whether the plant is manual or automatic, and the vessel material. We quote after a water test and a look at the building's consumption, and we include the expected salt consumption so the committee knows the running cost as well as the price.",
      },
      {
        question: "Will a water softener make our water drinkable?",
        answer:
          "No. A softener removes hardness, not dissolved solids or bacteria. Drinking water needs RO and disinfection, either at a common drinking water point or with purifiers in individual flats.",
      },
      {
        question: "How often does the society need to add salt?",
        answer:
          "It depends on the hardness of the water and how much the building uses. We calculate the salt consumption when we size the plant, so the society knows how often the brine tank needs topping up.",
      },
      {
        question: "Can a softener treat borewell water that has iron in it?",
        answer:
          "Iron fouls softener resin, so borewell water with significant iron needs pressure sand filtration or iron removal ahead of the softener. The water test tells us whether it is needed.",
      },
      {
        question: "Do you provide AMC for society water treatment plants?",
        answer:
          "Yes. We offer annual maintenance contracts that cover periodic servicing, adjusting regeneration settings as the water changes, and resin and valve maintenance.",
      },
    ],
    relatedProducts: ["water-softening", "reverse-osmosis", "amc-maintenance", "fabricated-vessels"],
  },

  {
    slug: "hospitals",
    name: "Hospitals & Healthcare",
    heading: "RO Plants & Water Treatment Systems for Hospitals",
    title: "RO Plant & Water Treatment System for Hospitals",
    description:
      "RO plants, water softeners and treated water for hospitals: drinking water, kitchens, laundry, CSSD sterilisers and boilers. Manufacturer in Mumbai since 1996.",
    targetQuery: "ro plant for hospital",
    cardBlurb:
      "Treated water for drinking, kitchens, laundry, CSSD sterilisers and boilers.",
    image: "/hospitals-industry.jpg",
    imageAlt: "Hospital corridor with ward doors on either side",
    intro:
      "A hospital uses water in more ways, and with less tolerance for failure, than almost any other building. Patients and staff drink it, kitchens cook with it, the laundry and CSSD depend on it, sterilisers and boilers run on it - and a failure anywhere in that chain is a clinical problem, not just a maintenance one. We design hospital water treatment around each of those duties separately, and we have built water treatment plants since 1996.",
    challenges: [
      {
        title: "Many duties, different standards",
        text: "Drinking water, kitchens, laundry, sterilisers and boilers each need different water. One plant treating everything to one standard either over-treats or fails somewhere.",
      },
      {
        title: "Sterilisers need treated feed water",
        text: "Minerals in steriliser feed water end up as deposits on instruments and scale inside steam generators. Manufacturers specify feed water quality for this reason.",
      },
      {
        title: "Supply cannot stop",
        text: "The plant has to be serviceable without interrupting water to wards, theatres and the CSSD.",
      },
      {
        title: "Hygiene of stored water",
        text: "Treated water that sits in a poorly maintained tank can be recontaminated. Storage and distribution matter as much as treatment.",
      },
    ],
    body: [
      { kind: "h2", text: "Segregate the water by duty" },
      {
        kind: "p",
        text: "The right hospital water system is several treatment routes sharing one site, each sized for its own duty. This is cheaper to run than treating all of the hospital's water to the highest standard, and it means a fault on one line does not take out the others.",
      },
      {
        kind: "table",
        head: ["Duty", "Requirement", "Typical route"],
        rows: [
          ["Drinking water", "Potable, low TDS, microbiologically safe", "RO with UV or ozone disinfection"],
          ["Kitchens", "Potable water; no scale in equipment", "Softened supply, with RO for drinking and cooking water"],
          ["Laundry", "Low hardness for detergent efficiency and linen life", "Water softener"],
          ["CSSD and steam sterilisers", "Low dissolved solids, as the steriliser maker specifies", "RO, with DM polishing where the specification requires it"],
          ["Boilers and hot water", "Scale control", "Softener, or DM depending on boiler pressure"],
        ],
      },
      {
        kind: "callout",
        text: "Steriliser manufacturers specify feed water quality for a reason: whatever minerals the water carries end up on the instruments and inside the steam generator.",
      },
      { kind: "h2", text: "Redundancy and storage" },
      {
        kind: "p",
        text: "Hospital plants are designed so they can be maintained without interrupting supply. That usually means treated water storage sized to cover a maintenance window, duty and standby pumps on critical lines, and valving that lets a stage be isolated and serviced while the rest keeps running.",
      },
      { kind: "h2", text: "Dialysis water is a separate case" },
      {
        kind: "p",
        text: "Water for haemodialysis is one of the most tightly regulated water applications of all, governed by ISO 23500 and monitored far more closely than any other water in the hospital. It needs a dedicated system with its own design, materials and testing regime. If dialysis is part of your requirement, tell us at the start and we will tell you plainly whether it falls within our scope for your project.",
      },
      { kind: "h2", text: "Keeping stored water safe" },
      {
        kind: "p",
        text: "Stainless steel storage tanks with proper covers, regular cleaning, and UV or ozone disinfection on stored water keep treated water from being recontaminated between the plant and the point of use. We fabricate storage tanks in-house, so they can be sized and shaped to fit the plant room.",
      },
      { kind: "h2", text: "What we need to quote" },
      {
        kind: "p",
        text: "Bed count and the departments to be served, the water source and a recent analysis, details of any existing plant, the steriliser and boiler specifications, and the space available. If you are planning a new hospital, involving us at design stage makes the plant room far easier to get right.",
      },
    ],
    faqs: [
      {
        question: "What size RO plant does a hospital need?",
        answer:
          "It depends on bed count and on which duties the RO serves. Drinking and cooking water is a relatively small volume; sterilisers and other specialist duties are sized on their own requirements. We size each duty separately rather than quoting one plant for the whole building.",
      },
      {
        question: "Does a hospital need a water softener as well as an RO plant?",
        answer:
          "Usually, yes. Softening suits the laundry, boilers and hot water system, where the problem is scale; RO serves drinking water and sterilisers, where dissolved solids matter.",
      },
      {
        question: "What water should feed a steam steriliser?",
        answer:
          "Whatever the steriliser manufacturer specifies - typically low-conductivity treated water produced by RO, with DM polishing where the specification is tight. Using untreated or softened water leaves deposits on instruments and scale in the steam generator.",
      },
      {
        question: "Do you supply RO plants for dialysis?",
        answer:
          "Dialysis water is governed by ISO 23500 and needs a dedicated, closely monitored system. Tell us at enquiry stage if dialysis is part of your requirement and we will tell you plainly whether it falls within our scope for your project.",
      },
      {
        question: "Can the plant be serviced without cutting off supply?",
        answer:
          "Yes, if it is designed for it. Treated water storage, standby pumps and isolation valving let each stage be maintained while the hospital keeps drawing water. We build that in as standard for hospital plants.",
      },
    ],
    relatedProducts: ["reverse-osmosis", "water-softening", "dosing-ozonation-uv", "amc-maintenance"],
  },

  {
    slug: "schools-offices",
    name: "Schools, Colleges & Offices",
    heading: "RO Plants for Schools, Colleges and Offices",
    title: "RO Plant for Schools, Colleges & Offices | Commercial RO",
    description:
      "Commercial RO drinking water plants for schools, colleges, offices and campuses, with stainless steel storage and UV. Built in Vasai, Mumbai since 1996.",
    targetQuery: "ro plant for school",
    cardBlurb: "Safe drinking water for students and staff, sized for break-time peaks.",
    image: "/schools-offices-industry.jpg",
    imageAlt: "Classroom with rows of student desks and chairs",
    intro:
      "Drinking water in a school, college or office has two requirements that pull in different directions: it has to be safe every single day, and the people responsible for it are rarely water engineers. So the plant must be simple to run, easy to check, and built so that a missed filter change does not become a health problem. We have built RO plants since 1996, and we design institutional plants for the people who will actually operate them.",
    challenges: [
      {
        title: "Demand arrives all at once",
        text: "Consumption concentrates around break times, lunch and shift changes. A plant sized on the daily average cannot meet those peaks on its own.",
      },
      {
        title: "Run by non-specialists",
        text: "The plant is usually looked after by facilities or administrative staff. It needs clear indicators and a simple routine, not an engineer's attention.",
      },
      {
        title: "The weak point is after the plant",
        text: "Storage tanks, pipework and dispensers are where treated water is most often recontaminated.",
      },
      {
        title: "Budgets need clarity",
        text: "Trustees and managements approve capital and running costs together. Both should be clear before the plant is ordered.",
      },
    ],
    body: [
      { kind: "h2", text: "Sizing for break times, not for the day" },
      {
        kind: "p",
        text: "Drinking water demand per person is small, but in a school or office it arrives in sharp peaks. The economical answer is to size the RO plant on the daily volume and let a treated water storage tank supply the peaks, rather than buying a plant big enough to meet the busiest ten minutes of the day directly.",
      },
      { kind: "h2", text: "A typical campus drinking water system" },
      {
        kind: "ol",
        items: [
          "Raw water storage fed from the municipal supply, borewell or tanker.",
          "Sand and activated carbon filtration to remove suspended solids and chlorine.",
          "Antiscalant dosing and micron cartridge filtration to protect the membranes.",
          "RO to reduce dissolved solids, with optional mineral correction for taste.",
          "Stainless steel treated water storage with a proper cover.",
          "UV disinfection on the outlet, feeding coolers and dispensers.",
        ],
      },
      {
        kind: "callout",
        text: "The weakest point in most school water systems is not the RO plant - it is the storage tank and the dispensers after it.",
      },
      { kind: "h2", text: "Keeping it safe with minimal supervision" },
      {
        kind: "ul",
        items: [
          "A TDS indicator on the panel, so anyone can see at a glance whether the plant is working.",
          "Pressure gauges before and after the cartridge filter, so a blocked filter is obvious.",
          "A simple, clearly labelled log sheet that takes a minute a day to fill in.",
          "Covered stainless steel storage and UV on the outlet to protect stored water.",
          "An annual maintenance contract, so filter changes and servicing do not depend on memory.",
        ],
      },
      { kind: "h2", text: "What we need to quote" },
      {
        kind: "p",
        text: "The number of students and staff, shift or session timings, the water source and a recent analysis if you have one, the number of dispensing points or coolers, and the space available for the plant and storage.",
      },
    ],
    faqs: [
      {
        question: "What capacity RO plant does a school need?",
        answer:
          "It depends on the number of students and staff and on session timings. We size the plant on the daily drinking water volume and add treated water storage to cover break-time peaks, which is far cheaper than sizing the plant for the peak.",
      },
      {
        question: "Should a school RO plant have UV?",
        answer:
          "Yes. UV on the outlet of the treated water storage protects against recontamination between the plant and the dispensers, which is where most problems in institutional systems start.",
      },
      {
        question: "How often should the filters be changed?",
        answer:
          "Cartridge filters should be changed when the pressure drop across them rises, which the gauges on the plant show. An AMC takes the guesswork out by scheduling it.",
      },
      {
        question: "Can the RO plant supply our existing water coolers?",
        answer:
          "Yes. The coolers and dispensers are fed from the treated water storage, so existing coolers can usually stay in place.",
      },
    ],
    relatedProducts: ["reverse-osmosis", "dosing-ozonation-uv", "fabricated-vessels", "amc-maintenance"],
  },

  {
    slug: "laboratories",
    name: "Laboratories",
    heading: "Laboratory Water Purification Systems",
    title: "Laboratory Water Purification System | Lab RO & DM Water",
    description:
      "Central RO and DM water systems for laboratories, QC labs and research facilities, supplying Type II and Type III lab water. Manufacturer in Mumbai since 1996.",
    targetQuery: "laboratory water purification system",
    cardBlurb: "Central RO and DM systems that supply lab-grade water to every bench.",
    image: "/laboratories-industry.jpg",
    imageAlt: "Laboratory glassware: beakers and flasks",
    intro:
      "Laboratory water is graded, not just 'purified'. Analytical work, reagent preparation, glassware rinsing and instrument feed each need a defined grade, and the grade decides the treatment. Most laboratories are best served by a central system distributing Type II or Type III water to the benches, with small point-of-use polishers producing ultrapure water only where an instrument needs it. We build the central system that everything else depends on.",
    challenges: [
      {
        title: "Grades are defined by standards",
        text: "ASTM D1193 and ISO 3696 define laboratory water grades by conductivity and other limits. The system has to be designed to a grade, not to a vague idea of 'pure'.",
      },
      {
        title: "Ultrapure water does not travel",
        text: "Type I water degrades as soon as it is stored or piped any distance, so it is produced at the point of use rather than distributed.",
      },
      {
        title: "Many outlets, one source",
        text: "Benches, washers, autoclaves and instruments all draw from the same system, with different grades and flow rates.",
      },
      {
        title: "Feed water varies",
        text: "Municipal and borewell supplies change through the year. The central system has to hold its grade regardless.",
      },
    ],
    body: [
      { kind: "h2", text: "Understanding laboratory water grades" },
      {
        kind: "p",
        text: "ASTM D1193 and ISO 3696 both classify laboratory water, though they define their grades differently. The table below is a practical guide to how each grade is used and how it is usually produced.",
      },
      {
        kind: "table",
        head: ["Common designation", "Typical uses", "How it is usually produced"],
        rows: [
          ["Type I / Grade 1 (ultrapure, 18.2 MΩ·cm)", "HPLC, trace analysis, sensitive instruments", "Point-of-use polisher fed from a central Type II or III system"],
          ["Type II / Grade 2", "General analytical work, reagent and buffer preparation, feed to polishers", "RO followed by ion exchange (mixed-bed DM) polishing"],
          ["Type III / Grade 3", "Glassware rinsing, autoclaves, water baths, feed to Type I units", "RO, sometimes with ion exchange polishing"],
        ],
      },
      {
        kind: "callout",
        text: "Ultrapure water starts degrading the moment it is stored. Produce it at the instrument; distribute Type II or Type III.",
      },
      { kind: "h2", text: "A central system for the whole laboratory" },
      {
        kind: "ol",
        items: [
          "Pre-treatment: sand and carbon filtration, and softening or antiscalant dosing to protect the membranes.",
          "Micron cartridge filtration.",
          "RO to remove the bulk of dissolved solids, organics and particles.",
          "Mixed-bed ion exchange polishing where Type II water is required.",
          "Closed storage protected from airborne contamination.",
          "UV disinfection and distribution to benches, washers and point-of-use polishers.",
        ],
      },
      { kind: "h2", text: "QC laboratories in pharma and food plants" },
      {
        kind: "p",
        text: "In pharmaceutical and food plants the QC laboratory often shares the site's purified water system; elsewhere it needs a dedicated, smaller system of its own. Either way, the laboratory's grade requirements should be part of the design brief from the start, not added later.",
      },
      { kind: "h2", text: "What we need to quote" },
      {
        kind: "p",
        text: "The number of outlets and the grade required at each, daily volume, which instruments need Type I water and what polishers they use, a feed water analysis, and the space available for the central plant and storage.",
      },
    ],
    faqs: [
      {
        question: "What is Type 1 water?",
        answer:
          "Type I is ultrapure laboratory water with a resistivity of 18.2 MΩ·cm at 25 °C, used for the most sensitive analyses. Because it degrades quickly once stored, it is produced at the point of use by a polisher fed from a central Type II or Type III system.",
      },
      {
        question: "Do you supply Type I ultrapure water systems?",
        answer:
          "We build the central RO and DM systems that produce the Type II and Type III water laboratories distribute, and that feeds point-of-use Type I polishers. If you need ultrapure water at an instrument, we design the central system around the polisher you use.",
      },
      {
        question: "RO or DM - which does a laboratory need?",
        answer:
          "Usually both. RO removes the bulk of dissolved solids, organics and particles economically; mixed-bed ion exchange then polishes the RO water to Type II quality.",
      },
      {
        question: "How is laboratory water quality monitored?",
        answer:
          "Conductivity or resistivity is measured continuously at the outlet of the polishing stage, supported by periodic checks of other parameters the laboratory's methods require.",
      },
    ],
    relatedProducts: ["reverse-osmosis", "demineralized", "dosing-ozonation-uv", "spares-consumables"],
  },

  {
    slug: "chemical",
    name: "Chemical",
    heading: "Water Treatment Plants for the Chemical Industry",
    title: "Water Treatment Plant for Chemical Industry | DM & RO",
    description:
      "DM plants, RO systems and water softeners for chemical and specialty chemical plants: process water, boiler feed and cooling. Manufacturer in Mumbai since 1996.",
    targetQuery: "water treatment plant for chemical industry",
    cardBlurb: "DM and RO process water, boiler feed and cooling water for chemical plants.",
    image: "/chemical-industry.jpg",
    imageAlt: "Large chemical storage tanks in a process plant",
    intro:
      "In a chemical plant, water is rarely just a utility. It is a reactant, a solvent, a heat-transfer medium and a cleaning agent, and the impurities it carries can end up in the product, interfere with a reaction, or scale a heat exchanger. The right treatment depends on which of those jobs the water is doing. We have built water treatment plants for process industries since 1996, together with the fabricated vessels and tanks that go with them.",
    challenges: [
      {
        title: "Water becomes part of the product",
        text: "Dissolved ions in process water can affect reactions, formulations and product purity. Consistency matters as much as the average.",
      },
      {
        title: "Several duties, different specifications",
        text: "Process water, boiler feed, cooling tower make-up and washing each need different treatment. One standard for all of them is either wasteful or inadequate.",
      },
      {
        title: "Materials must suit the site",
        text: "Chemical plants often have corrosive atmospheres. Vessel and piping materials have to be chosen for the site, not just the water.",
      },
      {
        title: "Regeneration effluent needs handling",
        text: "DM plant regeneration produces acidic and alkaline rinses that must be neutralised before discharge.",
      },
    ],
    body: [
      { kind: "h2", text: "Match the treatment to the duty" },
      {
        kind: "table",
        head: ["Duty", "Usual requirement", "Typical route"],
        rows: [
          ["Process and formulation water", "Low, consistent ionic content", "RO followed by DM or mixed-bed polishing"],
          ["Boiler feed", "Hardness and silica control", "Softener or DM, depending on boiler pressure"],
          ["Cooling tower make-up", "Scaling control", "Softener with dosing"],
          ["Washing and cleaning", "Low hardness", "Softened or RO water"],
          ["Potable and canteen", "Drinking water standard", "RO with UV"],
        ],
      },
      { kind: "h2", text: "DM water for process use" },
      {
        kind: "p",
        text: "Demineralised water is the usual choice where ions in the water would affect a reaction or a formulation. A two-bed DM plant removes the bulk of the dissolved ions; a mixed-bed polisher takes conductivity lower still. Where the feed water carries a high TDS load, putting RO ahead of the DM plant cuts acid and caustic consumption substantially, because the resin is then only polishing what the RO leaves behind.",
      },
      {
        kind: "callout",
        text: "A chemical plant is used to handling acids and alkalis - but DM regeneration effluent still needs neutralising before it leaves the site. Plan for it at design stage.",
      },
      { kind: "h2", text: "Materials of construction" },
      {
        kind: "p",
        text: "Vessel and piping materials are chosen for the regenerant chemicals, the water and the site atmosphere: FRP vessels and UPVC piping resist corrosion well, stainless steel suits sanitary and higher-temperature duties, and suitably protected mild steel is used where size and cost call for it. We fabricate vessels and tanks in-house, so the material choice is made by the same people who design the plant.",
      },
      { kind: "h2", text: "Consumables" },
      {
        kind: "p",
        text: "We supply the resins, membranes, cartridges and chemicals these plants run on - including antiscalants and cleaning chemicals - so replacement parts come from the same source as the plant.",
      },
      { kind: "h2", text: "What we need to quote" },
      {
        kind: "p",
        text: "A feed water analysis, the list of water duties on the site with the flow and specification for each, boiler pressure if boiler feed is in scope, and how regeneration effluent is currently handled. Tell us about the site atmosphere and any materials your plant standards require.",
      },
    ],
    faqs: [
      {
        question: "What water quality does a chemical plant need?",
        answer:
          "It depends on the duty. Process and formulation water is usually demineralised; boiler feed depends on boiler pressure; cooling tower make-up usually needs softening. We design each duty to its own specification.",
      },
      {
        question: "Should we use RO or DM for process water?",
        answer:
          "Often both. RO removes most dissolved solids economically, and a DM or mixed-bed stage polishes the water to the conductivity the process needs. On low-TDS feed water, DM alone may be enough.",
      },
      {
        question: "What happens to DM plant regeneration waste?",
        answer:
          "The acidic and alkaline rinses from regeneration are collected and neutralised before discharge. The neutralisation arrangement should be planned as part of the DM plant design.",
      },
      {
        question: "Can you fabricate the tanks and vessels for our plant?",
        answer:
          "Yes. We fabricate stainless steel and mild steel vessels and storage tanks in-house in Vasai, built to the capacities and layout your site needs.",
      },
    ],
    relatedProducts: ["demineralized", "reverse-osmosis", "water-softening", "fabricated-vessels"],
  },

  {
    slug: "textile",
    name: "Textile",
    heading: "Water Treatment Plants for the Textile Industry",
    title: "Water Softener & RO Plant for Textile Industry | Bhiwandi",
    description:
      "Water softeners, RO plants and boiler feed treatment for dyeing, processing and textile units in Bhiwandi and Maharashtra. Manufacturer in Vasai since 1996.",
    targetQuery: "ro plant for textile industry",
    cardBlurb: "Soft, iron-free process water for dyeing and processing, and boiler feed.",
    image: "/textile-industry.jpg",
    imageAlt: "Rolls of fabric stacked on racks in a textile factory",
    intro:
      "Textile wet processing is unforgiving of bad water. Hardness reacts with dyes and soaps, iron stains fabric, and variation in the water shows up as variation in shade from one batch to the next. For dyeing and processing units in Bhiwandi - a short drive from our Vasai works - and across Maharashtra, treated water is one of the cheapest ways to protect quality and cut reprocessing. We have built water treatment plants since 1996.",
    challenges: [
      {
        title: "Hardness spoils dyeing",
        text: "Calcium and magnesium react with dyes and soaps, causing uneven shades, spots, wasted chemicals and a harsh handle.",
      },
      {
        title: "Iron stains and damages",
        text: "Iron causes staining and yellowing, and it accelerates the breakdown of peroxide in bleaching, which damages fibre.",
      },
      {
        title: "Steam for processing",
        text: "Dyeing and finishing depend on steam, and boilers need soft feed water to avoid scale.",
      },
      {
        title: "Batch-to-batch consistency",
        text: "When the water changes, the shade changes. Consistent water is part of consistent quality.",
      },
    ],
    body: [
      { kind: "h2", text: "Why hardness matters in dyeing" },
      {
        kind: "p",
        text: "Calcium and magnesium ions react with many dyes, soaps and auxiliaries to form insoluble compounds. The result is uneven dyeing, spots and deposits on the fabric, a harsher handle, and chemicals wasted on reacting with the water instead of doing their job. Softening the process water removes these ions and makes results far more repeatable from batch to batch.",
      },
      { kind: "h2", text: "Iron and other contaminants" },
      {
        kind: "p",
        text: "Borewell water around textile clusters often carries iron. Beyond staining and yellowing, iron catalyses the decomposition of hydrogen peroxide during bleaching, which wastes chemical and can weaken or damage the fibre. Iron has to be removed before the softener, both for the fabric's sake and to protect the softener resin.",
      },
      {
        kind: "table",
        head: ["Duty", "Requirement", "Typical route"],
        rows: [
          ["Dyeing and processing", "Low hardness, low iron", "Pre-filtration and iron removal, then softening"],
          ["Bleaching", "Very low iron", "Iron removal and softening"],
          ["Boiler feed", "Soft water", "Softener, or DM for higher-pressure boilers"],
          ["Sensitive shades", "Low dissolved solids", "RO on the process water"],
        ],
      },
      {
        kind: "callout",
        text: "Iron in process water does more than stain: it breaks down peroxide in bleaching, which damages fibre and wastes chemical.",
      },
      { kind: "h2", text: "Sizing for batch processing" },
      {
        kind: "p",
        text: "Demand in a processing unit is uneven - it rises sharply as machines fill. Softened water storage sized to cover those peaks lets the treatment plant run steadily, and regeneration is scheduled around the shift pattern so treated water is always available when the machines need it.",
      },
      { kind: "h2", text: "What we need to quote" },
      {
        kind: "p",
        text: "The water source and a recent analysis showing hardness, iron and TDS, daily consumption and peak demand, the number and type of machines, and the boiler details. Units in and around Bhiwandi are close to our works, so we can survey on site.",
      },
    ],
    faqs: [
      {
        question: "Why do textile units need soft water?",
        answer:
          "Hardness reacts with dyes, soaps and auxiliaries, causing uneven dyeing, spots and wasted chemicals. Soft water gives more consistent shades and lowers chemical consumption.",
      },
      {
        question: "Does iron in water affect dyeing and bleaching?",
        answer:
          "Yes. Iron stains and yellows fabric and accelerates the breakdown of hydrogen peroxide in bleaching, which damages fibre. It should be removed before the water reaches the process or the softener.",
      },
      {
        question: "Softener or RO for a textile unit?",
        answer:
          "Most dyeing and processing needs softened, iron-free water. RO is added where lower dissolved solids are needed for sensitive shades or specific processes.",
      },
      {
        question: "Do you install water treatment plants in Bhiwandi?",
        answer:
          "Yes. Bhiwandi is a short drive from our works in Vasai, so we can survey your unit, test the water and install on site.",
      },
    ],
    relatedProducts: ["water-softening", "reverse-osmosis", "demineralized", "amc-maintenance"],
  },
  {
    slug: "packaged-drinking-water",
    name: "Packaged Drinking Water",
    heading: "Water Treatment & Bottling for Packaged Drinking Water Manufacturers",
    title: "Packaged Drinking Water Manufacturers: Plant Upgrades & AMC",
    description:
      "For packaged drinking water manufacturers: RO, ozonation and RFC upgrades, more output from the same plant, testing-ready quality control and AMC. Since 1996.",
    targetQuery: "packaged drinking water manufacturers",
    cardBlurb:
      "Upgrades, extra output and dependable quality for bottlers already in production.",
    image: "/packaged-drinking-water-industry.jpg",
    imageAlt: "Packaged water bottles moving along a conveyor on a filling line",
    intro:
      "Running a packaged drinking water plant is a different job from setting one up. Output has to keep pace with orders, every batch has to pass its tests, and inspections and audits arrive on their own schedule. This page is for bottlers already in production. We have built packaged drinking water plants since 1996, including for Bisleri, Bailey and Campa, and we upgrade and service plants built by others as well as our own.",
    challenges: [
      {
        title: "Output has fallen",
        text: "An RO plant that once gave its rated output now gives much less. Fouled membranes, tired pre-treatment and cold feed water are the usual causes, and most can be fixed without replacing the plant.",
      },
      {
        title: "A sample failed",
        text: "A microbiological or chemical failure is a licensing problem, not just a quality problem. The cause is usually in disinfection, storage, bottle washing or the filling room.",
      },
      {
        title: "Ozone dose and bromate",
        text: "Ozone keeps bottled water safe, but too much ozone on water containing bromide forms bromate. The dose has to be controlled and measured, not set once and left.",
      },
      {
        title: "Inspections and audits",
        text: "Packaged drinking water is a high-risk food category under FSSAI, with inspections, third-party audits and compulsory testing. The plant, records and laboratory all have to stand up to them.",
      },
    ],
    body: [
      { kind: "h2", text: "Getting more output from the same plant" },
      {
        kind: "p",
        text: "Before buying a bigger plant, find out why the present one is short. Compare today's readings with the plant's commissioning figures: permeate flow, pressures across the cartridge filter and membranes, feed temperature and permeate TDS. If the drop is from fouling, cleaning or replacing membranes and repairing pre-treatment restores most of it. If demand has simply outgrown the plant, extra membrane capacity or a second train can often be added to the existing skid, with ozonation and filling matched to the new flow.",
      },
      {
        kind: "table",
        head: ["Symptom", "Likely cause", "First check"],
        rows: [
          ["Treated water flow has dropped", "Membrane fouling or scaling; cold feed water", "Normalised permeate flow against the commissioning baseline"],
          ["Permeate TDS keeps rising", "Membrane wear or damage; O-ring or seal leaks", "Stage-by-stage conductivity"],
          ["Cartridge filters choke quickly", "Sand or carbon filter not backwashed; feed quality changed", "Pressure drop across the cartridge; filter backwash routine"],
          ["Ozone smell in bottles", "Ozone dose too high or contact time too short", "Residual ozone at filling"],
          ["Underfilling or leaking caps", "Filling valve or capping head wear; wrong cap torque", "RFC machine service and change parts"],
        ],
      },
      { kind: "h2", text: "Disinfection and bromate control" },
      {
        kind: "p",
        text: "Ozonation, UV and clean storage together keep treated water microbiologically safe up to the filler. The ozone dose must be enough to leave a small residual at filling, and no more. On water that contains bromide, excess ozone forms bromate, which has a regulatory limit. The practical controls are a correctly sized ozone generator, a measured contact time, regular checks of residual ozone and periodic bromate testing, especially after changing the water source.",
      },
      {
        kind: "callout",
        text: "Most microbiological failures start after the RO: in storage tanks, pipework, bottle and jar washing, or the filling room. A plant audit should follow the water all the way to the sealed bottle.",
      },
      { kind: "h2", text: "Ready for testing, inspection and audit" },
      {
        kind: "p",
        text: "FSSAI removed mandatory BIS certification for packaged drinking water in October 2024, made it a high-risk food category from November 2024 with annual third-party audits for central licence holders, and introduced compulsory testing at FSSAI-notified NABL laboratories from January 2026. For the plant, that means daily process records, a working in-house laboratory, documented cleaning and sanitisation, and equipment that can be shown to perform. Confirm the current requirements with FSSAI before an inspection; rules in this category have changed more than once.",
      },
      {
        kind: "ul",
        items: [
          "Daily log sheets for flows, pressures, TDS and ozone residual.",
          "Cleaning and sanitisation records for tanks, pipework and the filling machine.",
          "Calibrated instruments and a laboratory able to run routine tests.",
          "Clear separation of the filling room, with controlled access.",
          "Traceable batches from treated water to finished product.",
        ],
      },
      { kind: "h2", text: "Maintenance that protects production" },
      {
        kind: "p",
        text: "A bottling line cannot wait for spares. An annual maintenance contract with scheduled visits, recorded readings and genuine membranes, cartridges and RFC change parts keeps the plant at its rated output and gives the records an inspector will ask for.",
      },
      { kind: "h2", text: "What we need to help" },
      {
        kind: "p",
        text: "Your current output and the output you need, the plant's age and who built it, a recent raw and treated water analysis, a few days of log sheets if you keep them, the bottle and jar formats you run, and any recent test failures or audit observations.",
      },
    ],
    faqs: [
      {
        question: "Can you upgrade a packaged drinking water plant built by another company?",
        answer:
          "Yes. We survey the plant first: treatment train, membranes, ozonation, storage and filling. Then we propose the changes needed for the output or quality you want, reusing what is sound.",
      },
      {
        question: "Why is our RO plant giving less water than before?",
        answer:
          "Usually membrane fouling or scaling, pre-treatment that is no longer doing its job, or colder feed water. Normalised readings compared with the commissioning figures show which, and most cases are fixed by cleaning, repairs or membrane replacement rather than a new plant.",
      },
      {
        question: "How do we control bromate in ozonated water?",
        answer:
          "Size the ozone dose to leave only a small residual at filling, control contact time, check residual ozone regularly and test for bromate, especially after any change of water source. Excess ozone on water containing bromide is what forms bromate.",
      },
      {
        question: "Is BIS certification still required for packaged drinking water?",
        answer:
          "No. FSSAI removed the mandatory BIS requirement in October 2024. You still need an FSSAI licence, and the category is subject to inspections, third-party audits and compulsory testing at FSSAI-notified laboratories. Check FSSAI's current notices before you rely on any summary.",
      },
      {
        question: "Do you supply spares and service for RFC machines?",
        answer:
          "Yes. We manufacture rinsing, filling and capping machines and can service them alongside an AMC for the water treatment plant.",
      },
    ],
    relatedProducts: ["mineral-water-project", "dosing-ozonation-uv", "rfc", "amc-maintenance", "reverse-osmosis"],
    relatedPosts: ["mineral-water-plant-machinery-list", "mineral-water-plant-setup-cost-india", "ro-plant-output-dropping", "industrial-ro-plant-amc-guide"],
  },
  {
    slug: "agriculture",
    name: "Agriculture & Agro-processing",
    heading: "Water Treatment for Agriculture, Hydroponics and Agro-processing",
    title: "RO Plant & Water Treatment for Agriculture, Hydroponics & Agro-processing",
    description:
      "RO and softening for hydroponics, nurseries, dairy and agro-processing units: lower TDS irrigation water and clean process water. Mumbai, since 1996.",
    targetQuery: "ro plant for agriculture and hydroponics",
    cardBlurb:
      "Low-TDS water for hydroponics and nurseries, and clean process water for dairy and agro-processing.",
    image: "/agriculture-industry.jpeg",
    imageAlt: "Tractor working in rows of green crops on a farm",
    intro:
      "Most field irrigation does not need treated water, and we will say so. Treatment pays where the water itself limits the result: hydroponic and greenhouse crops fed on a nutrient recipe, nurseries and tissue culture, and agro-processing units such as dairies and food processors whose product touches the water. For those, the feed water has to be known, controlled and consistent, and that is an RO and softening job.",
    challenges: [
      {
        title: "Salinity and sodium in borewell water",
        text: "High TDS and sodium stress plants and leave salts in the root zone. Hydroponic growers also cannot control a nutrient recipe if the starting water already carries a large and variable load of dissolved salts.",
      },
      {
        title: "Hardness and bicarbonate clogging emitters",
        text: "Hard water scales drip lines and foggers, and bicarbonate pushes the pH up. Both cost yield and maintenance long before anyone thinks of the water.",
      },
      {
        title: "Seasonal variation",
        text: "Borewell quality changes through the year and with the water table. A plant sized on one sample in the wet season can be wrong in summer.",
      },
      {
        title: "Wasting water you cannot spare",
        text: "RO sends a share of the feed to drain as reject. On a farm that water has a use, so the reject should be planned for, not simply thrown away.",
      },
    ],
    body: [
      { kind: "h2", text: "Where treated water is worth paying for" },
      {
        kind: "p",
        text: "The test is whether the water quality changes the outcome enough to cover the plant and its running cost. For bulk field irrigation it almost never does. For a polyhouse with a nutrient recipe, a nursery, or a processing line that uses water as an ingredient or for washing product, it often does.",
      },
      {
        kind: "table",
        head: ["Use", "What the water needs", "Usual treatment"],
        rows: [
          ["Hydroponics and greenhouse crops", "Low, stable TDS so the nutrient recipe can be controlled", "Sediment and carbon filtration, then RO; blending back raw water if some minerals are wanted"],
          ["Nurseries and tissue culture", "Low salinity, free of chlorine and suspended solids", "Filtration and RO"],
          ["Dairy and food processing", "Potable quality for washing and as an ingredient", "Filtration, softening where hardness is a problem, RO, and UV or ozone for disinfection"],
          ["Drip and fogger lines", "Low hardness and suspended solids", "Filtration and softening or antiscalant, not always RO"],
          ["Livestock and poultry drinking water", "Safe, palatable, low in salts and microbes", "Filtration and disinfection, with RO if the borewell is brackish"],
        ],
      },
      { kind: "h2", text: "Start with a water analysis" },
      {
        kind: "p",
        text: "Get a full analysis before choosing a system: TDS, hardness, alkalinity, chloride, iron, and sodium if you can. A high-TDS borewell with modest hardness wants RO. A low-TDS but very hard source wants a softener. Iron wants removal before either. Test in the dry season as well, because that is usually the worst case.",
      },
      {
        kind: "callout",
        text: "Decide what to do with the RO reject before you buy the plant. Reject water is higher in salts but is still usable for some purposes, such as washing floors or irrigating salt-tolerant plantings, where the rules and the plants allow.",
      },
      { kind: "h2", text: "A typical train for a greenhouse or nursery" },
      {
        kind: "ol",
        items: [
          "Raw water tank and multigrade filtration to remove suspended solids.",
          "Iron removal where the borewell carries iron.",
          "Activated carbon where the source is chlorinated.",
          "Softener or antiscalant dosing to protect the membranes from scaling.",
          "Cartridge filtration ahead of the RO as final membrane protection.",
          "Reverse osmosis, sized for peak irrigation demand with treated water storage to buffer it.",
          "Dosing for pH and nutrients downstream, which the grower controls.",
        ],
      },
      { kind: "h2", text: "What we need to quote accurately" },
      {
        kind: "p",
        text: "Send us the water analysis, the crop or process, the litres per day at peak, the hours you can run the plant, how much space and power you have, and whether the reject has somewhere useful to go. We size the plant to the demand and the feed water, and tell you if a simpler filter and softener will do the job.",
      },
    ],
    faqs: [
      {
        question: "Do I need an RO plant for normal field irrigation?",
        answer:
          "Usually not. The volumes are too large for RO to make economic sense. Treatment is worth it for hydroponics, nurseries, greenhouses, livestock drinking water and agro-processing, where the water quality directly affects the result.",
      },
      {
        question: "What TDS is suitable for hydroponics?",
        answer:
          "Growers usually start from a very low TDS so they can control the nutrient recipe themselves, and the right figure depends on the crop and the recipe your agronomist uses. We supply the RO plant and the consistent low-TDS water; the nutrient programme is the grower's call.",
      },
      {
        question: "What can be done with the RO reject water?",
        answer:
          "It carries more salts than the feed, so it is unsuitable for sensitive crops, but it can often be used for washing, cleaning or salt-tolerant uses. Plan for it at design stage and size recovery with that in mind.",
      },
      {
        question: "Do you treat water for dairies and food processing units?",
        answer:
          "Yes. We build filtration, softening, RO and UV or ozone disinfection trains for processing units. Processing water for food also has licensing and testing requirements, so check the FSSAI rules that apply to your product.",
      },
      {
        question: "Can the plant run on solar power?",
        answer:
          "It can be sized to run from a suitable power source, but RO pumps draw real power, so the solar array would need sizing for that load. Tell us your power situation and we will work out what is practical.",
      },
    ],
    relatedProducts: ["reverse-osmosis", "water-softening", "dosing-ozonation-uv", "fabricated-vessels"],
  },
  {
    slug: "warehousing",
    name: "Warehousing & Cold Storage",
    heading: "Water Treatment for Warehouses, Cold Storage and Logistics Parks",
    title: "Water Treatment for Warehouses, Cold Storage & Logistics Parks",
    description:
      "Drinking water, softening and storage tanks for warehouses, cold chain units and logistics parks with large workforces and no municipal guarantee. Since 1996.",
    targetQuery: "water treatment plant for warehouse",
    cardBlurb:
      "Drinking water for large workforces, softened water for chillers and cooling, and site storage tanks.",
    image: "/warehousing-industry.jpeg",
    imageAlt: "Warehouse aisle with racks of stacked cardboard boxes",
    intro:
      "A warehouse is not a heavy water user by industry standards, which is exactly why its water is often an afterthought: a borewell, a tank on the roof and a few small purifiers. The problems arrive later. Hundreds of staff and drivers need safe drinking water across shifts, cold storage and chillers scale up on hard water, and a large site may depend on tanker supply. We plan the water side of a storage facility as a small utility rather than a collection of purifiers.",
    challenges: [
      {
        title: "Drinking water for a large, changing workforce",
        text: "Headcount swings with seasons and contracts, and drivers and visitors add to it. A row of small purifiers becomes expensive to maintain and inconsistent in quality.",
      },
      {
        title: "Scale in chillers and cooling systems",
        text: "Cold storage and air-conditioned units use water in condensers and cooling towers. Hard water scales them, costs energy and shortens equipment life.",
      },
      {
        title: "Uncertain supply",
        text: "Many logistics parks sit outside municipal networks and depend on borewells and tankers. Storage has to bridge the gaps and keep the water in it clean.",
      },
      {
        title: "Nobody on site to run it",
        text: "Warehouses rarely have a water technician. The plant has to be simple to operate and easy to service under a contract.",
      },
    ],
    body: [
      { kind: "h2", text: "What a storage facility actually uses water for" },
      {
        kind: "table",
        head: ["Duty", "What matters", "Typical solution"],
        rows: [
          ["Drinking water for staff and drivers", "Safe, consistent, with enough capacity at shift change", "A central RO plant with UV and treated water storage, with distribution to drinking points"],
          ["Chillers, condensers and cooling towers", "Low hardness to limit scaling", "Softener on the make-up water, with a blowdown routine"],
          ["Washing, sanitation and pest control", "Clean, non-scaling water", "Filtration and softening"],
          ["Fire and general storage", "Volume and reliability rather than quality", "Fabricated tanks sized and sited for the site"],
        ],
      },
      { kind: "h2", text: "One central plant or many small purifiers" },
      {
        kind: "p",
        text: "For a small office block within a warehouse, point-of-use purifiers are fine. Once you have a few hundred people, a central plant with treated water storage and a distribution line is usually easier to maintain, gives steadier quality and costs less per litre. Size it on headcount and shift pattern, and let the storage tank absorb the peak at shift change rather than oversizing the treatment capacity for a short daily peak.",
      },
      {
        kind: "callout",
        text: "Treated water is only as clean as the tank it is stored in. Specify tanks with sealed lids, an overflow screen and easy cleaning access, and set a cleaning schedule.",
      },
      { kind: "h2", text: "Storage tanks built for the site" },
      {
        kind: "p",
        text: "We fabricate SS and MS tanks and vessels ourselves, which lets us size and shape them around the yard, the plinth and the pipe routes you actually have rather than a catalogue size. Stainless is the usual choice for drinking water storage, and MS suits raw and utility water.",
      },
      { kind: "h2", text: "What we need to quote accurately" },
      {
        kind: "p",
        text: "Send us the headcount across shifts, the water source and its analysis, the cold storage or cooling load, how much storage you want in hours of demand, and the space available. If you have tanker supply, tell us how often it arrives and how long a gap it has to cover.",
      },
    ],
    faqs: [
      {
        question: "How do you size drinking water for a warehouse?",
        answer:
          "On headcount and shift pattern, with treated water storage sized to cover the peak at shift change and meal breaks. That costs less than sizing the treatment plant for a short daily peak.",
      },
      {
        question: "Do chillers and cold storage need softened water?",
        answer:
          "If your water is hard, yes, in most cases. Scale in condensers and cooling towers raises energy use and shortens equipment life. A softener on the make-up water is usually the lowest-cost fix.",
      },
      {
        question: "Can you supply the storage tanks as well?",
        answer:
          "Yes. We fabricate SS and MS storage tanks and vessels in-house, sized to the site rather than a stock size.",
      },
      {
        question: "We depend on tankers. Can the plant handle that?",
        answer:
          "Yes. Tanker water varies, so we size raw water storage to bridge the gaps between deliveries, add filtration at the inlet and test the water that arrives before we finalise the design.",
      },
      {
        question: "Do you offer servicing, given we have no water technician?",
        answer:
          "Yes. We offer annual maintenance contracts with scheduled visits covering filters, membranes and dosing, so the plant does not depend on someone on site.",
      },
    ],
    relatedProducts: ["reverse-osmosis", "fabricated-vessels", "water-softening", "amc-maintenance"],
  },
];
