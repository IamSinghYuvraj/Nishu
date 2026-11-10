// "Is this your problem?" sections for product pages. Same writing pattern as
// the industry intros (see the comment at the top of lib/industries.ts): each
// sign is something the buyer has seen with their own eyes, in their words,
// followed by the usual cause and what fixes it. `notFor` is the honest "you
// may not need this" line that sends the reader to the cheaper fix when it fits.

export interface ProductSymptoms {
  heading: string;
  signs: { sign: string; cause: string; fix: string }[];
  notFor: { text: string; link?: { label: string; href: string } };
}

export const PRODUCT_SYMPTOMS: Record<string, ProductSymptoms> = {
  "reverse-osmosis": {
    heading: "Signs your water needs an RO plant",
    signs: [
      {
        sign: "The water tastes salty or brackish",
        cause: "High dissolved solids, usually sodium and chloride from a borewell or coastal source.",
        fix: "RO removes most dissolved salts. A softener will not change the taste at all.",
      },
      {
        sign: "A TDS meter reads far above what you need",
        cause: "Dissolved salts the supply carries, which no filter or softener takes out.",
        fix: "An RO plant sized on your water analysis, with recovery set for your feed TDS.",
      },
      {
        sign: "Spots and white residue after rinsing",
        cause: "Dissolved solids left behind when the water evaporates off the surface.",
        fix: "RO on the rinse water, with DM polishing where the tolerance is tight.",
      },
      {
        sign: "The borewell gets worse every summer",
        cause: "TDS rises as the water table falls in the dry season.",
        fix: "Size the RO on a dry-season analysis, not the monsoon one.",
      },
    ],
    notFor: {
      text: "If your only problem is scale and the water tastes fine, you probably need a softener, not RO. RO sends part of the feed to drain as reject and costs more to run.",
      link: { label: "Water softening plants", href: "/products/water-softening" },
    },
  },

  "water-softening": {
    heading: "Signs you have a hard water problem",
    signs: [
      {
        sign: "White scale on taps, tiles and shower heads",
        cause: "Calcium and magnesium left behind as the water dries.",
        fix: "A softener removes them at the source, so the scale stops forming.",
      },
      {
        sign: "Geysers, boilers and heat exchangers failing early",
        cause: "Scale insulates heating surfaces, so they run hotter, use more fuel and fail.",
        fix: "Softened feed water stops new scale building up.",
      },
      {
        sign: "Soap will not lather and laundry feels harsh",
        cause: "Hardness reacts with soap and detergent before they can clean.",
        fix: "Soft water cuts detergent use and is kinder to linen.",
      },
      {
        sign: "A cooling tower on constant blowdown",
        cause: "Hardness concentrates as the tower evaporates water.",
        fix: "Softening the make-up allows more cycles before scaling, so less blowdown.",
      },
    ],
    notFor: {
      text: "A softener does not lower TDS, remove bacteria or fix a salty taste. If the water tastes salty or the TDS is high, you need RO, often with a softener ahead of it.",
      link: { label: "RO plants", href: "/products/reverse-osmosis" },
    },
  },

  demineralized: {
    heading: "Signs you need a DM plant",
    signs: [
      {
        sign: "The boiler still scales or blows down heavily, even with a softener",
        cause: "A softener swaps hardness for sodium; the dissolved solids stay in the water.",
        fix: "DM removes the dissolved ions themselves.",
      },
      {
        sign: "Silica deposits on turbine blades",
        cause: "Silica volatilises at high pressure and carries over with the steam.",
        fix: "Two-bed DM with mixed-bed polishing and silica control.",
      },
      {
        sign: "RO alone cannot hold your conductivity limit",
        cause: "RO always leaves a small residual ionic load.",
        fix: "A mixed-bed polisher after the RO, as pharma and lab systems use.",
      },
      {
        sign: "Your DM plant is eating acid and caustic",
        cause: "High feed TDS exhausts the resin quickly.",
        fix: "RO ahead of the DM plant, so the resin only polishes what is left.",
      },
    ],
    notFor: {
      text: "A low-pressure boiler on moderate feed water often runs well on softened water with dosing and blowdown control. We will tell you if that is your case.",
      link: { label: "Boiler feed water: softener, RO or DM?", href: "/blog/boiler-feed-water-softener-ro-dm" },
    },
  },

  "membrane-housing": {
    heading: "Signs a housing or pump needs replacing",
    signs: [
      {
        sign: "A leak or weep at the end cap or a port",
        cause: "Worn O-rings or seals, or a damaged port.",
        fix: "Replace the seals; replace the housing if the shell or port is damaged.",
      },
      {
        sign: "A crack, bulge or crazing on an FRP housing",
        cause: "Over-pressure, impact or age.",
        fix: "Take it out of service and replace it. A housing that fails under pressure is dangerous.",
      },
      {
        sign: "Feed pressure falls short of the design figure",
        cause: "A worn pump, or a pump never matched to the membrane array.",
        fix: "A high-pressure pump selected for the array's flow and pressure.",
      },
      {
        sign: "Corrosion on a stainless housing near the reject end",
        cause: "Chlorides concentrate in the reject stream.",
        fix: "FRP, or a higher stainless grade, where chlorides are high.",
      },
    ],
    notFor: {
      text: "If output has dropped but nothing leaks, the housing is rarely the cause. Fouled membranes or a blocked cartridge are far more common.",
      link: { label: "RO plant output dropping?", href: "/blog/ro-plant-output-dropping" },
    },
  },

  "fabricated-vessels": {
    heading: "Signs a standard tank will not do",
    signs: [
      {
        sign: "Catalogue sizes do not fit the plinth, room or headroom",
        cause: "Stock tanks come in fixed diameters and heights.",
        fix: "A tank built to the space you actually have.",
      },
      {
        sign: "A plastic tank cracking, sagging or growing algae",
        cause: "Heat and sunlight degrade plastic, and light through the walls feeds algae.",
        fix: "An opaque stainless steel tank with a sealed lid.",
      },
      {
        sign: "A mild steel tank rusting or discolouring the water",
        cause: "Unprotected or poorly lined mild steel.",
        fix: "Stainless steel for drinking water; properly protected MS for raw and utility water.",
      },
      {
        sign: "You need pressure or filter vessels with material certificates",
        cause: "Pharma, food and process plants have to document what they install.",
        fix: "Vessels fabricated in-house, with the certificates kept by one supplier.",
      },
    ],
    notFor: {
      text: "For small, standard-size raw water storage, an off-the-shelf tank is often cheaper. Custom fabrication pays where size, material or certification matter.",
    },
  },

  "mineral-water-project": {
    heading: "Signs you need a single turnkey supplier",
    signs: [
      {
        sign: "Your quotes list different machines and cannot be compared",
        cause: "Each supplier leaves out different stages.",
        fix: "One scope covering everything from raw water to packed cartons.",
      },
      {
        sign: "Separate suppliers for RO, ozone and filling blame each other",
        cause: "The interfaces between machines belong to nobody.",
        fix: "A single supplier responsible for the whole line.",
      },
      {
        sign: "You are not sure what an FSSAI inspection will check",
        cause: "Licensing, audits and lab testing apply to the plant as well as the product.",
        fix: "A plant and in-house lab designed for licensing and testing from the start.",
      },
      {
        sign: "You do not know what capacity to buy",
        cause: "Bottles per hour, formats and feed water all change the answer.",
        fix: "A line sized on your target output and your water analysis.",
      },
    ],
    notFor: {
      text: "If you already run a plant and need more output or are failing tests, you need an upgrade, not a new project.",
      link: { label: "For packaged drinking water manufacturers", href: "/industries/packaged-drinking-water" },
    },
  },

  "dosing-ozonation-uv": {
    heading: "Signs you need disinfection or dosing",
    signs: [
      {
        sign: "Bacteria found in stored water or at the tap",
        cause: "Treated water recontaminated in the tank, with nothing protecting it.",
        fix: "Ozone in the storage tank, or UV on the outlet.",
      },
      {
        sign: "An ozone smell when a bottle is opened",
        cause: "Ozone dose too high, or contact time too short.",
        fix: "A correctly sized generator and a measured residual at filling.",
      },
      {
        sign: "RO membranes scaling quickly",
        cause: "No antiscalant, or the wrong dose for the feed water and recovery.",
        fix: "A dosing pump and chemical matched to the feed and recovery.",
      },
      {
        sign: "pH drifting out of range",
        cause: "Feed water or process chemistry changing.",
        fix: "Automatic pH correction dosing.",
      },
    ],
    notFor: {
      text: "UV only works on clear water. If the water is turbid, fix the filtration first, or the UV unit will not protect anything.",
    },
  },

  "spares-consumables": {
    heading: "Signs a consumable is due, or something upstream is wrong",
    signs: [
      {
        sign: "Cartridges choking within days",
        cause: "The sand or carbon filter upstream is not being backwashed, or the feed has changed.",
        fix: "Replace the cartridges, and check the backwash routine too.",
      },
      {
        sign: "Membranes no longer recover after cleaning",
        cause: "Permanent fouling or the end of membrane life.",
        fix: "Replacement elements matched by size and model.",
      },
      {
        sign: "A softener or DM plant running out sooner between regenerations",
        cause: "Resin fouled, worn or lost.",
        fix: "A resin top-up or replacement.",
      },
      {
        sign: "Chlorine reaching the RO membranes",
        cause: "Exhausted activated carbon.",
        fix: "Fresh carbon media.",
      },
    ],
    notFor: {
      text: "If several consumables are wearing out fast at once, the problem is usually upstream or in how the plant is run, not the parts. A service visit finds it before you buy more spares.",
      link: { label: "AMC & plant maintenance", href: "/products/amc-maintenance" },
    },
  },

  "amc-maintenance": {
    heading: "Signs your plant needs a maintenance contract",
    signs: [
      {
        sign: "Output falls a little every month",
        cause: "Fouling building up unnoticed until it becomes permanent.",
        fix: "Cleaning triggered by logged data, before the damage is done.",
      },
      {
        sign: "Permeate TDS creeping up",
        cause: "Membrane wear or a leaking seal.",
        fix: "Stage-by-stage checks that find which.",
      },
      {
        sign: "Nobody on site keeps a log",
        cause: "The plant is looked after by people with other jobs.",
        fix: "A simple log sheet and scheduled technician visits.",
      },
      {
        sign: "Breakdowns wait days for a technician or a part",
        cause: "No contract, no stocked spares.",
        fix: "Priority response, with spares from our own stock.",
      },
    ],
    notFor: {
      text: "If your plant is new and a trained operator keeps a daily log, periodic visits may be enough instead of a full AMC. We propose the scope after seeing the plant.",
    },
  },
};
