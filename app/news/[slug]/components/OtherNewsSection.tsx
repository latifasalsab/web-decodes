import { NewsItem } from "@/app/types/news";
import Link from "next/link";

export default function OtherNewsSection({ otherNews, currentSlug }: Readonly<{ otherNews: NewsItem[]; currentSlug: string }>) {
  const filteredOtherNews = otherNews.filter((news) => news.slug !== currentSlug);

  return (
    <div className="mt-16 max-w-7xl mx-auto px-8 sm:px-6 lg:px-0">
      <h2 className="text-2xl font-bold mb-8">Other News</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {filteredOtherNews.slice(0, 3).map((news, index) => (
          <Link href={`/news/${news.slug}`} key={index + 1} className="block group">
            <div className="bg-[#1F1F1F] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-gray-900/20 group cursor-pointer">
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gray-800 relative">
                  <img
                    src={news.image}
                    alt={news.title || ""}
                    className="w-full h-full object-cover group group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <div className="p-3">
                <div className="mb-1">
                  <span className="text-xs font-semibold text-white">
                    {news.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-purple-400 transition-colors duration-200">
                  {news.title}
                </h3>

                <p className="text-white text-sm leading-relaxed mb-3 line-clamp-2">
                  {news.description}
                </p>

                <div className="pt-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-white text-sm">
                      {news.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}