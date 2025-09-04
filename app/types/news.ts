export interface NewsQuote {
  from: string;
  text: string;
}

export interface NewsItem {
  id?: number;
  slug: string;
  title?: string;
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