import type { MetadataRoute } from "next";
import { SITE_URL, PRODUCTS } from "@/lib/site";
import { POSTS } from "@/lib/posts";
import { INDUSTRIES } from "@/lib/industries";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticPages: MetadataRoute.Sitemap = [
    // No trailing slash: must match the homepage canonical exactly.
    { url: SITE_URL, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/products`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/blog`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/industries`, lastModified, changeFrequency: "monthly", priority: 0.9 },
  ];
  const industryPages: MetadataRoute.Sitemap = INDUSTRIES.map((i) => ({
    url: `${SITE_URL}/industries/${i.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  const productPages: MetadataRoute.Sitemap = PRODUCTS.map((p) => ({
    url: `${SITE_URL}/products/${p.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  const postPages: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.published),
    changeFrequency: "monthly",
    priority: 0.6,
  }));
  return [...staticPages, ...industryPages, ...productPages, ...postPages];
}
