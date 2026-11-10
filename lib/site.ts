// Single source of truth for site-wide SEO / business details.
import { COUNTRIES_LINE } from "@/lib/countries";
export const SITE_URL = "https://nishuenterprises.org";

const FOUNDING_YEAR = 1996;

export const BUSINESS = {
  name: "Nishu Enterprises",
  legalName: "Nishu Enterprises",
  foundingYear: String(FOUNDING_YEAR),
  // Primary contact number: listed first everywhere and the one WhatsApp opens.
  phone: "+91 93240 59587",
  phoneE164: "+919324059587",
  // Secondary number: listed beside the primary wherever a phone number appears.
  phoneSecondary: "+91 98201 42424",
  phoneSecondaryE164: "+919820142424",
  email: "nishudbj@gmail.com",
  // Single source of truth. Keep this identical to the Google Business
  // Profile and every directory listing - matching NAP text is a local
  // ranking signal.
  address: {
    street: "Gala No. 5, Bldg No. 6, Parshwanath Industrial Estate, Waliv, Bhutpada",
    locality: "Vasai East",
    city: "Vasai-Virar",
    region: "Maharashtra",
    postalCode: "401208",
    country: "IN",
  },
  get addressLine() {
    const a = BUSINESS.address;
    return `${a.street}, ${a.locality}, ${a.city}, ${a.region} ${a.postalCode}`;
  },
  geo: { lat: 19.4169473, lng: 72.8611239 },
  // Local areas served. Feeds areaServed in the Organization schema and the
  // footer; these are the towns buyers put in "... manufacturer in <city>".
  serviceAreas: [
    "Vasai-Virar",
    "Mumbai",
    "Thane",
    "Navi Mumbai",
    "Palghar",
    "Bhiwandi",
    "Pune",
  ],
  // Fill these in once the profiles exist; they feed the footer + Organization schema.
  social: {
    linkedin: "",
    instagram: "",
    facebook: "",
    youtube: "https://www.youtube.com/@Madhusudanaquaindustries",
  },
};

/** Both contact numbers, primary first. `line` is sent with phone-click events so analytics can tell them apart. */
export const PHONES = [
  { line: "primary", display: BUSINESS.phone, e164: BUSINESS.phoneE164 },
  { line: "secondary", display: BUSINESS.phoneSecondary, e164: BUSINESS.phoneSecondaryE164 },
] as const;

/** Click-to-chat link to the business WhatsApp (the primary number), optionally with a prefilled message. */
export function whatsappUrl(text?: string) {
  const base = `https://wa.me/${BUSINESS.phoneE164.replace("+", "")}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

/** Default WhatsApp opener when a page has no message of its own. */
export const DEFAULT_WHATSAPP_TEXT = "Hello! I'm interested in your water treatment solutions.";

/** WhatsApp opener for a product page: names the system and asks for the two facts we size on. */
export function productWhatsappText(productName: string) {
  return `Hi, I have a requirement for: ${productName}\nCapacity (LPH): \nSite location: `;
}

/** "Since 1996 · Nigeria, Ghana, Tanzania, Nepal and many more" */
export const TRUST_LINE = `Since ${BUSINESS.foundingYear} · ${COUNTRIES_LINE}`;

export interface ProductSeo {
  slug: string;
  /** Short name used in menus, the contact dropdown and enquiry emails. */
  name: string;
  /** Page H1. */
  heading: string;
  /** Full <title>, rendered as-is (no brand suffix). Keep it under 60 chars. */
  title: string;
  /** Meta description. Keep it under 160 chars. */
  description: string;
  /** The search phrase this page is primarily written for. */
  targetQuery: string;
  image: string;
  imageAlt: string;
}

export const PRODUCTS: ProductSeo[] = [
  {
    slug: "reverse-osmosis",
    name: "Reverse Osmosis Plant (RO)",
    heading: "Industrial & Commercial RO Plant Manufacturer",
    title: "Industrial & Commercial RO Plant Manufacturer in Mumbai",
    description:
      "Salty borewell water or high TDS? Industrial and commercial RO plants up to 10,000+ LPH for factories, hotels and societies in Mumbai and Thane. Since 1996.",
    targetQuery: "industrial ro plant manufacturer",
    image: "/ro-img11.jpeg",
    imageAlt: "Industrial reverse osmosis plant manufactured by Nishu Enterprises",
  },
  {
    slug: "demineralized",
    name: "Demineralized Plant (DM)",
    heading: "DM Water Plant Manufacturer: Two-Bed & Mixed-Bed",
    title: "DM Water Plant Manufacturer in Mumbai | Two-Bed & Mixed-Bed",
    description:
      "Boiler scaling despite a softener, or RO not reaching your conductivity limit? Two-bed and mixed-bed DM plants for boilers, pharma and labs. Vasai, since 1996.",
    targetQuery: "dm water plant manufacturer in mumbai",
    image: "/DM image 1.jpg",
    imageAlt: "Demineralisation (DM) water plant with ion-exchange vessels",
  },
  {
    slug: "water-softening",
    name: "Water Softening Plant",
    heading: "Industrial Water Softener Plant Manufacturer",
    title: "Industrial Water Softener Plant Manufacturer in Mumbai",
    description:
      "White scale, failing geysers and boilers? Automatic water softening plants for societies, hotels and factories in Mumbai, Thane and Vasai-Virar. Since 1996.",
    targetQuery: "water softener plant manufacturer in mumbai",
    image: "/Water-Softening-Plant.jpg",
    imageAlt: "Industrial water softening plant with twin softener vessels",
  },
  {
    slug: "membrane-housing",
    name: "Membrane Housing",
    heading: "RO Membrane Housings: FRP & Stainless Steel",
    title: "RO Membrane Housing Supplier | FRP & SS Pressure Vessels",
    description:
      "Leaking end caps or a cracked RO housing? FRP and SS membrane housings and matched high-pressure pumps, supplied from Vasai, Mumbai since 1996.",
    targetQuery: "ro membrane housing",
    image: "/membrane-Housing(1).jpg",
    imageAlt: "Stainless steel RO membrane housing",
  },
  {
    slug: "fabricated-vessels",
    name: "Fabricated SS & MS Vessels / Tanks",
    heading: "SS & MS Storage Tanks and Pressure Vessels",
    title: "SS Storage Tank Manufacturer India | MS & Pressure Vessels",
    description:
      "Stock tanks that do not fit? Custom SS and MS storage tanks, pressure vessels and filter vessels, fabricated in-house in Vasai, Maharashtra since 1996.",
    targetQuery: "ss storage tank manufacturers in india",
    image: "/ss-storage-tank(5).png",
    imageAlt: "Fabricated stainless steel storage tank",
  },
  {
    slug: "mineral-water-project",
    name: "Complete Mineral Water Project",
    heading: "Turnkey Mineral Water & Packaged Drinking Water Plants",
    title: "Mineral Water Plant Setup | Packaged Drinking Water Plant",
    description:
      "Quotes that list different machines? Turnkey packaged drinking water plants from RO to filling, built for FSSAI. Trusted by Bisleri, Bailey and Campa.",
    targetQuery: "packaged drinking water plant manufacturer",
    image: "/Complete-Mineral-Water-Project(5).webp",
    imageAlt: "Complete mineral water and packaged drinking water plant",
  },
  {
    slug: "dosing-ozonation-uv",
    name: "Dosing, Ozonation & UV Systems",
    heading: "Ozone Generators, UV Sterilisers & Dosing Systems",
    title: "Ozone Generator for Water Treatment | UV & Dosing Systems",
    description:
      "Bacteria in stored water or ozone smell in bottles? Ozone generators, UV sterilisers and dosing systems, made in Vasai, Mumbai since 1996.",
    targetQuery: "ozone generator for water treatment",
    image: "/Ozone_system(3).jpg",
    imageAlt: "Ozone generator for water treatment",
  },
  {
    slug: "spares-consumables",
    name: "RO Spares & Consumables",
    heading: "RO Plant Spare Parts, Membranes, Resins & Chemicals",
    title: "RO Plant Spare Parts, Membranes & Resins Supplier, Mumbai",
    description:
      "Cartridges choking, membranes that will not recover? RO membranes, resins, cartridges, media and antiscalants in stock in Vasai, Mumbai. Since 1996.",
    targetQuery: "ro plant spare parts",
    image: "/membrane-Housing(2).jpeg",
    imageAlt: "Stainless steel RO membrane housing, a replaceable plant component",
  },
  {
    slug: "amc-maintenance",
    name: "AMC & Plant Maintenance",
    heading: "RO Plant AMC & Water Treatment Plant Maintenance",
    title: "RO Plant AMC & Water Treatment Plant Maintenance Services",
    description:
      "RO output dropping or TDS creeping up? AMC for RO, DM and softening plants: scheduled visits, data-led cleaning, genuine spares. Mumbai, Thane, Vasai.",
    targetQuery: "ro plant amc",
    image: "/Ro-img3.jpg",
    imageAlt: "Technician working on site beside an installed industrial RO plant",
  },
];

export const FAQS = [
  {
    question: "How long is the installation process?",
    answer:
      "Installation timelines vary based on system complexity and site conditions, typically ranging from 2-8 weeks.",
  },
  {
    question: "Do you offer maintenance services?",
    answer:
      "Yes, we provide comprehensive maintenance and support packages to ensure optimal system performance.",
  },
  {
    question: "What warranty do you provide?",
    answer:
      "Our systems come with a 5-10 year warranty covering parts and labor for manufacturing defects.",
  },
  {
    question: "Can you customize solutions for my needs?",
    answer:
      "We specialize in tailored solutions designed specifically for your requirements.",
  },
];
