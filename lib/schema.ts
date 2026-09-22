import { SITE_URL, BUSINESS, FAQS, type ProductSeo } from "@/lib/site";
import type { Post } from "@/lib/posts";
import type { Industry } from "@/lib/industries";

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
    addressLocality: BUSINESS.address.locality,
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

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export const faqSchema = faqPageSchema(FAQS);

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

export function industrySchema(i: Industry) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: i.heading,
    description: i.description,
    image: `${SITE_URL}${i.image}`,
    url: `${SITE_URL}/industries/${i.slug}`,
    serviceType: "Water treatment plant design, manufacture and installation",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "Worldwide",
    audience: { "@type": "BusinessAudience", name: i.name },
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

export function articleSchema(post: Post) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: `${SITE_URL}${post.image}`,
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.published,
    dateModified: post.published,
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };
}
