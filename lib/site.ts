// Single source of truth for site-wide SEO / business details.
export const SITE_URL = "https://nishuenterprises.org";

export const BUSINESS = {
  name: "Nishu Enterprises",
  legalName: "Nishu Enterprises",
  foundingYear: "1996",
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
  // Fill these in once the profiles exist; they feed the footer + Organization schema.
  social: {
    linkedin: "",
    instagram: "",
    facebook: "",
    youtube: "",
  },
};

export interface ProductSeo {
  slug: string;
  name: string;
  title: string;
  description: string;
  image: string;
}

export const PRODUCTS: ProductSeo[] = [
  {
    slug: "reverse-osmosis",
    name: "Reverse Osmosis Plant (RO)",
    title: "RO Plant Manufacturer in India | Industrial Reverse Osmosis Systems",
    description:
      "Industrial & commercial RO plant manufacturer in Vasai, Mumbai. Reverse osmosis systems up to 10,000 LPH and beyond for beverage, pharma and process industries. Get a quote.",
    image: "/ro-img11.jpeg",
  },
  {
    slug: "demineralized",
    name: "Demineralized Plant (DM)",
    title: "Demineralized Water Plant Supplier | DM Plant Manufacturer India",
    description:
      "Two-bed and mixed-bed demineralization (DM) plants for boilers, pharma and process water. 30 years of experience, 1200+ plants installed. Request a quotation.",
    image: "/DM image 1.jpg",
  },
  {
    slug: "water-softening",
    name: "Water Softening Plant",
    title: "Industrial Water Softener Manufacturer India | Water Softening Plants",
    description:
      "Industrial and commercial water softening plants that remove hardness and protect boilers, cooling towers and process equipment. Manufacturer in Vasai, Maharashtra.",
    image: "/Water-Softening-Plant.jpg",
  },
  {
    slug: "membrane-housing",
    name: "Membrane Housing",
    title: "RO Membrane Housing & High Pressure Pumps | Nishu Enterprises",
    description:
      "FRP and stainless-steel RO membrane housings and high-pressure pumps for reliable, cost-effective reverse osmosis operation. Supplier in Mumbai, India.",
    image: "/membrane-Housing(1).jpg",
  },
  {
    slug: "fabricated-vessels",
    name: "Fabricated SS & MS Vessels / Tanks",
    title: "SS & MS Storage Tank Fabrication | Custom Pressure Vessels India",
    description:
      "Custom fabricated stainless-steel and mild-steel vessels, storage tanks and pressure vessels for water treatment and process industries. Made in Vasai, Maharashtra.",
    image: "/ss-storage-tank(5).png",
  },
  {
    slug: "mineral-water-project",
    name: "Complete Mineral Water Project",
    title: "Mineral Water Plant Setup | Turnkey Packaged Drinking Water Project",
    description:
      "Turnkey packaged drinking water plant projects: raw water treatment, RO, ozonation, bottling and RFC machines. BIS/FSSAI compliant. Trusted by Bisleri, Bailey, Campa.",
    image: "/Complete-Mineral-Water-Project(5).webp",
  },
  {
    slug: "dosing-ozonation-uv",
    name: "Dosing, Ozonation & UV Systems",
    title: "Ozone Generators, UV Sterilizers & Dosing Systems | Water Disinfection",
    description:
      "Ozonation systems, UV sterilizers and chemical dosing units for water disinfection and precise treatment control. Manufacturer and supplier in Mumbai, India.",
    image: "/Ozone_system(3).jpg",
  },
  {
    slug: "rfc",
    name: "Rinsing Filling Capping Machine (RFC)",
    title: "RFC Machine Manufacturer | Automatic Bottle Rinsing Filling Capping",
    description:
      "Automatic rinsing, filling and capping (RFC) machines for packaged drinking water and beverage bottling lines. Hygienic, high-speed. Manufacturer in Vasai, India.",
    image: "/rfc(1).webp",
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
