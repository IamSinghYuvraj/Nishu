import { SITE_URL, BUSINESS, FAQS, type ProductSeo } from "@/lib/site";

const sameAs = Object.values(BUSINESS.social).filter(Boolean);

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: BUSINESS.name,
  legalName: BUSINESS.legalName,
  url: SITE_URL,
  logo: `${SITE_URL}/nishu-logo.png`,
  image: `${SITE_URL}/nishu-logo.png`,
  foundingDate: BUSINESS.foundingYear,
  description:
    "Manufacturer of water treatment plants and machinery since 1996: RO plants, DM plants, water softeners, mineral water projects, ozonation/UV systems and RFC bottling machines.",
  telephone: BUSINESS.phoneE164,
  email: BUSINESS.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.region,
    postalCode: BUSINESS.address.postalCode,
    addressCountry: BUSINESS.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS.geo.lat,
    longitude: BUSINESS.geo.lng,
  },
  areaServed: "Worldwide",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: BUSINESS.phoneE164,
    contactType: "sales",
    availableLanguage: ["en", "hi"],
  },
  ...(sameAs.length ? { sameAs } : {}),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: BUSINESS.name,
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export function productSchema(p: ProductSeo) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.description,
    image: `${SITE_URL}${p.image}`,
    url: `${SITE_URL}/products/${p.slug}`,
    brand: { "@type": "Brand", name: BUSINESS.name },
    manufacturer: { "@id": `${SITE_URL}/#organization` },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}
