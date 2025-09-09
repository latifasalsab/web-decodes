import Link from "next/link";
import Image from "next/image";
import { NewsItem } from "@/app/types/news";

export default function NewsGrid({ news, visibleCount, loading, hasMore, showLess, onLoadMore, onLoadLess }: Readonly<{
  news: NewsItem[];
  visibleCount: number;
  loading: boolean;
  hasMore: boolean;
  showLess: boolean;
  onLoadMore: () => void;
  onLoadLess: () => void;
}>) {
  const visibleNews = news.slice(0, visibleCount);

  return (
    <div className="h-auto flex items-center px-2 md:px-10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-0">
          {visibleNews.map((newsItem) => (
            <Link href={`/news/${newsItem.slug}`} key={newsItem.slug} className="block">
              <div className="bg-[#1F1F1F] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-gray-900/20 group cursor-pointer">
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gray-800 relative">
                    <Image
                      src={newsItem.image}
                      alt={newsItem.title || ""}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="p-3">
                  <span className="text-xs font-semibold text-white">{newsItem.category}</span>
                  <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-purple-400 transition-colors duration-200">
                    {newsItem.title}
                  </h3>
                  <p className="text-white text-sm leading-relaxed mb-3 line-clamp-2">
                    {newsItem.description}
                  </p>
                  <span className="text-white text-sm">{newsItem.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center mt-12 mb-8">
            <button
              onClick={onLoadMore}
              disabled={loading}
              className="inline-flex items-center gap-2 px-8 py-2 rounded-full bg-transparent border border-white text-white font-semibold transition-all duration-300 disabled:opacity-50 cursor-pointer hover:bg-white hover:text-black active:bg-gray-200 active:text-black"
            >
              {loading ? "Loading..." : "SHOW ALL"}
            </button>
          </div>
        )}
        
        {showLess && (
          <div className="flex justify-center mt-12 mb-8">
            <button
              onClick={onLoadLess}
              disabled={loading}
              className="inline-flex items-center gap-2 px-8 py-2 rounded-full bg-transparent border border-white text-white font-semibold transition-all duration-300 disabled:opacity-50 cursor-pointer hover:bg-white hover:text-black active:bg-gray-200 active:text-black"
            >
              {loading ? "Loading..." : "SHOW LESS"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}