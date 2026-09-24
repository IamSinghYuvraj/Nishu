// Single source of truth for site-wide SEO / business details.
import { COUNTRIES_LINE } from "@/lib/countries";
export const SITE_URL = "https://nishuenterprises.org";

const FOUNDING_YEAR = 1996;

export const BUSINESS = {
  name: "Nishu Enterprises",
  legalName: "Nishu Enterprises",
  foundingYear: String(FOUNDING_YEAR),
  phone: "+91 98201 42424",
  phoneE164: "+919820142424",
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
    youtube: "",
  },
};

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
      "Industrial and commercial RO plants up to 10,000+ LPH for factories, hotels, hospitals and housing societies. Built in Vasai, Mumbai since 1996.",
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
      `Two-bed and mixed-bed DM water plants for boiler feed, pharmaceutical and process water. Manufactured in Vasai, Mumbai since 1996, with plants in ${COUNTRIES_LINE}.`,
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
      "Automatic water softening plants for boilers, cooling towers, hotels and housing societies. Removes hardness from borewell water. Made in Vasai since 1996.",
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
      "FRP and stainless-steel RO membrane housings and high-pressure pumps for industrial reverse osmosis plants. Supplied from Vasai, Mumbai since 1996.",
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
      "Custom stainless-steel and mild-steel storage tanks, pressure vessels and filter vessels, fabricated in-house in Vasai, Maharashtra since 1996.",
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
      "Turnkey packaged drinking water plants: RO, ozonation, bottling and RFC machines, designed for BIS IS 14543. Trusted by Bisleri, Bailey and Campa since 1996.",
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
      "Ozone generators for water tanks and bottling plants, UV sterilisers and chemical dosing systems for water disinfection. Manufacturer in Mumbai since 1996.",
    targetQuery: "ozone generator for water treatment",
    image: "/Ozone_system(3).jpg",
    imageAlt: "Ozone generator for water treatment",
  },
  {
    slug: "rfc",
    name: "Rinsing Filling Capping Machine (RFC)",
    heading: "Automatic RFC Bottle Rinsing, Filling & Capping Machine",
    title: "RFC Machine Manufacturer | Bottle Rinsing Filling Capping",
    description:
      "Automatic rinsing, filling and capping (RFC) machines for packaged drinking water and beverage bottling lines. Manufactured in Vasai, Mumbai since 1996.",
    targetQuery: "rfc machine manufacturer",
    image: "/rfc(1).webp",
    imageAlt: "Automatic rinsing filling capping (RFC) machine for water bottles",
  },
  {
    slug: "desalination",
    name: "Desalination Plant",
    heading: "Desalination Plants: Seawater & Brackish Water RO",
    title: "Desalination Plant Manufacturer | Seawater & Brackish RO",
    description:
      "Seawater and brackish water desalination plants using reverse osmosis, with pre-treatment and remineralisation. Manufactured in Vasai, Mumbai since 1996.",
    targetQuery: "desalination plant companies in india",
    image: "/ro-img7.jpg",
    imageAlt: "Multi-stage RO plant with stainless steel membrane housings in series",
  },
  {
    slug: "spares-consumables",
    name: "RO Spares & Consumables",
    heading: "RO Plant Spare Parts, Membranes, Resins & Chemicals",
    title: "RO Plant Spare Parts, Membranes & Resins Supplier, Mumbai",
    description:
      "RO membranes (BW, SW, UF, NF), ion exchange resins, cartridges, filter media, gauges, SS fittings and antiscalants for water treatment plants. Since 1996.",
    targetQuery: "ro plant spare parts",
    image: "/DM image 3.jpeg",
    imageAlt: "Water treatment system showing filter vessels, cartridge housings and control panel",
  },
  {
    slug: "amc-maintenance",
    name: "AMC & Plant Maintenance",
    heading: "RO Plant AMC & Water Treatment Plant Maintenance",
    title: "RO Plant AMC & Water Treatment Plant Maintenance Services",
    description:
      "Annual maintenance contracts for RO, DM and softening plants: scheduled servicing, membrane cleaning, resin checks and genuine spares. Vasai, Mumbai, Thane.",
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
