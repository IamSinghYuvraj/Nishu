import type { MetadataRoute } from "next";
import { SITE_URL, PRODUCTS } from "@/lib/site";
import { POSTS, postLastModified } from "@/lib/posts";
import { INDUSTRIES } from "@/lib/industries";
import { MORE_INDUSTRIES } from "@/lib/industries-more";
import { lastModified } from "@/lib/last-modified";

// Shared by every page: site-wide copy and the layout.
const SHARED = ["lib/site.ts", "app/layout.tsx"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    // No trailing slash: must match the homepage canonical exactly.
    { url: SITE_URL, lastModified: lastModified("app/page.tsx", ...SHARED), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/products`, lastModified: lastModified("app/products/page.tsx", ...SHARED), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified: lastModified("app/about/page.tsx", "app/about/layout.tsx"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: lastModified("app/contact/page.tsx", "app/contact/layout.tsx"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/blog`, lastModified: lastModified("app/blog/page.tsx", "lib/posts.ts"), changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/industries`, lastModified: lastModified("app/industries/page.tsx", "lib/industries.ts", "lib/industries-more.ts"), changeFrequency: "monthly", priority: 0.9 },
  ];
  const moreSlugs = new Set(MORE_INDUSTRIES.map((i) => i.slug));
  const industryPages: MetadataRoute.Sitemap = INDUSTRIES.map((i) => ({
    url: `${SITE_URL}/industries/${i.slug}`,
    lastModified: lastModified(
      moreSlugs.has(i.slug) ? "lib/industries-more.ts" : "lib/industries.ts",
      "app/industries/[slug]/page.tsx",
    ),
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  const productPages: MetadataRoute.Sitemap = PRODUCTS.map((p) => ({
    url: `${SITE_URL}/products/${p.slug}`,
    // Hand-built routes live in their own folder; the rest render from
    // lib/product-content.ts through the [slug] template.
    lastModified: lastModified(
      `app/products/${p.slug}/page.tsx`,
      `app/products/${p.slug}/layout.tsx`,
      "lib/product-content.ts",
      ...SHARED,
    ),
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  const postPages: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(postLastModified(p)),
    changeFrequency: "monthly",
    priority: 0.6,
  }));
  return [...staticPages, ...industryPages, ...productPages, ...postPages];
}
