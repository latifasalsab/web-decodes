import Link from "next/link";
import Image from "next/image";
import { TrendingNews } from "@/app/types/news";

export default function NewsTrendingSection({ trendingNews }: Readonly<{ trendingNews: TrendingNews }>) {
  return (
    <div className="w-full px-6">
      <div className="h-auto min-h-96 flex items-center justify-center py-6 px-1">
        <Link href={`/news/${trendingNews.slug}`} key={trendingNews.id} className="block">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-[1fr_2fr]">
              <div className="lg:order-1">
                <div className="relative rounded-2xl shadow-2xl">
                  <div className="absolute -top-3 left-3/4 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#FA8E49] to-[#FF6300] text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </span>
                  </div>
                  <Image
                    src={trendingNews.image}
                    alt="News Image"
                    width={400}
                    height={200}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2 py-0 px-2">
                <div className="inline-block">
                  <span className="text-white text-sm font-medium">
                    {trendingNews.category}
                  </span>
                </div>
                <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">
                  {trendingNews.title}
                </h1>
                <p className="text-white text-sm leading-relaxed max-w-7xl">
                  {trendingNews.description}
                </p>
                <div className="flex items-center space-x-3 pt-2">
                  <span className="text-white text-xs">{trendingNews.date}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}