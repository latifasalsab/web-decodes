import News from "./components/News";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "News",
}

export default function NewsPage() {
  return <News />;
}