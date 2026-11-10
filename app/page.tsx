import Home from "@/components/home-page";
import { HomeGuides } from "@/components/home-guides";
import { FeaturedArticle } from "@/components/featured-article";

// The homepage is a client component because of its hero slideshow. HomeGuides
// and FeaturedArticle read article data, so they are rendered here on the
// server and passed in as props; that keeps the article text out of the
// homepage's client bundle.
export default function Page() {
  return (
    <Home
      guides={<HomeGuides />}
      featuredArticle={<FeaturedArticle slug="hard-water-vasai-virar-mira-bhayandar" eyebrow="New guide" />}
    />
  );
}
