import { NewsItem } from "@/app/types/news";
import Link from "next/link";

export default function NewsDetailContent({ news, nextSlug }: { news: NewsItem; nextSlug: string }) {
  return (
    <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-0">
      <div>
        <h1 className="text-2xl md:text-4xl font-bold mb-2 pt-32 leading-tight">
          {news.title}
        </h1>
      </div>
      
      <div className="flex flex-col md:flex-row md:items-center gap-2 text-white text-sm mb-6">
        <span>{news.date}</span>
        <span className="hidden md:inline">|</span>
        <span>{news.author}</span>
      </div>

      <div className="mb-8 rounded-lg overflow-hidden">
        <img
          src={news.image}
          alt={news.title || ""}
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center' }}
        />
      </div>

      {news.content && (
        <div className="prose prose-invert max-w-none mb-8">
          {news.content.map((paragraph, index) => (
            <p key={index} className="text-gray-300 leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {news.program && news.program.length > 0 && (
        <div className="mb-8">
          <h3 className="font-bold mb-2">Program Details</h3>
          <ul className="list-disc pl-6 text-gray-300">
            {news.program.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {news.objectives && news.objectives.length > 0 && (
        <div className="mb-8">
          <h3 className="font-bold mb-2">Objectives & Impact</h3>
          <ul className="list-disc pl-6 text-gray-300">
            {news.objectives.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {news.quotes && news.quotes.length > 0 && (
        <div className="mb-8">
          <h3 className="font-bold mb-2">Quote from a source</h3>
          {news.quotes.map((quote, index) => (
            <div key={index} className="mb-4">
              <div className="font-semibold mb-1">{quote.from}</div>
              <blockquote className="border-l-4 border-gray-600 pl-4 italic text-gray-300">
                {quote.text}
              </blockquote>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-end">
        <Link
          href={`/news/${nextSlug}`}
          className="group inline-flex items-center gap-2 mt-8 px-6 py-2 rounded-full bg-transparent border border-white text-white font-semibold transition-all duration-300 disabled:opacity-50 cursor-pointer hover:bg-white hover:text-black active:bg-gray-200 active:text-black"
        >
          NEXT
          <img src="/icons/panah.png" alt="Arrow Right" className="w-4 h-4 block group-hover:hidden" />
          <img src="/icons/panah_hitam.png" alt="Arrow Right" className="w-4 h-4 hidden group-hover:block"/>
        </Link>
      </div>
    </div>
  );
}