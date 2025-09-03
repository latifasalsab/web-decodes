export interface NewsQuote {
  from: string;
  text: string;
}

export interface NewsItem {
  id?: number;
  slug: string;
  title?: string;
  tittle?: string; // Keep both for backward compatibility
  category?: string;
  description: string;
  date: string;
  author?: string;
  image: string;
  content?: string[];
  program?: string[];
  objectives?: string[];
  quotes?: NewsQuote[];
}

export interface TrendingNews extends NewsItem {
  id: number;
  category: string;
}

export interface NewsPageProps {
  trendingNews: TrendingNews;
  newsData: NewsItem[];
}

export interface NewsDetailProps {
  newsData: NewsItem[];
  otherNews: NewsItem[];
}