import News from "./components/News";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "News",
  description: "Discover the latest news, updates, and interesting information about Decodes on the News page."
}

export default function NewsPage() {
  return <News />;
}