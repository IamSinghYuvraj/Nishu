// YouTube Shorts from the Madhusudan Aqua Industries channel
// (youtube.com/@Madhusudanaquaindustries). Add a watch, share or shorts URL and
// the video appears automatically; with an empty list no video section renders.
//
// `products` lists product slugs (see PRODUCTS in lib/site.ts) whose page
// should also show the video in its gallery. Leave it out for a homepage-only
// video. The first entries are shown first on the homepage.

export interface YouTubeVideo {
  url: string;
  title: string;
  description?: string;
  products?: string[];
}

export const YOUTUBE_VIDEOS: YouTubeVideo[] = [
  {
    url: "https://www.youtube.com/shorts/dCMYP6NjLwA",
    title: "RFC filling machine",
    products: ["rfc"],
  },
  {
    url: "https://www.youtube.com/shorts/EdnMkrgfWIw",
    title: "Automatic rinsing, filling and capping machine",
    products: ["rfc"],
  },
  {
    url: "https://www.youtube.com/shorts/lEka8o2ysXE",
    title: "Reverse osmosis plant",
    products: ["reverse-osmosis"],
  },
  {
    url: "https://www.youtube.com/shorts/0GwRKmlieXY",
    title: "Glass bottle filling and capping machine",
  },
  {
    url: "https://www.youtube.com/shorts/VKIVqHZXqnE",
    title: "Semi-automatic shrink wrapping machine",
  },
  {
    url: "https://www.youtube.com/shorts/-Op7OLsNni8",
    title: "Automatic shrink wrapping machine",
  },
  {
    url: "https://www.youtube.com/shorts/J30c-WKndwQ",
    title: "Automatic PET bottle blowing machine",
  },
  {
    url: "https://www.youtube.com/shorts/PG4L5mNqLUc",
    title: "Automatic PET bottle blowing machine, second model",
  },
  {
    url: "https://www.youtube.com/shorts/PS-JoQ8ZIu8",
    title: "Semi-automatic bottle blowing machine",
  },
];

export function youTubeId(url: string): string {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1).split("/")[0];
    if (u.pathname.startsWith("/embed/") || u.pathname.startsWith("/shorts/")) return u.pathname.split("/")[2];
    return u.searchParams.get("v") ?? "";
  } catch {
    return "";
  }
}

export function videosForProduct(slug: string): YouTubeVideo[] {
  return YOUTUBE_VIDEOS.filter((v) => v.products?.includes(slug) && youTubeId(v.url));
}
