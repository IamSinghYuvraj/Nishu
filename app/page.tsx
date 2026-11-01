import Home from "@/components/home-page";
import { HomeGuides } from "@/components/home-guides";

// The homepage is a client component because of its hero slideshow. HomeGuides
// reads every article, so it is rendered here on the server and passed in as a
// prop; that keeps the article text out of the homepage's client bundle.
export default function Page() {
  return <Home guides={<HomeGuides />} />;
}
