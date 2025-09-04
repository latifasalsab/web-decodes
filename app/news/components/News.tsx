
"use client";
import { newsData, trendingNews } from "@/app/data/newsData";
import React, { useState } from "react";
import NewsHero from "./NewsHeroSection";
import NewsTrendingSection from "./NewsTrendingSection";
import NewsGrid from "./NewsGrid";
import JoinUs from "@/app/components/JoinUs/JoinUs";
import SearchBar from "@/app/components/Input/SearchBar";

export default function NewsClient() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const filteredNews = newsData.filter((news) =>
    (news.title || news.title || "").toLowerCase().includes(search.toLowerCase()) ||
    news.description.toLowerCase().includes(search.toLowerCase())
  );

  const hasMore = visibleCount + 1 < filteredNews.length;
  const showLess = !hasMore && filteredNews.length > 3;

  const handleLoadMore = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    setVisibleCount(prev => Math.min(prev + 3, filteredNews.length));
    setLoading(false);
  };

  const handleLoadLess = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    setVisibleCount(3);
    setLoading(false);
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setVisibleCount(3);
  };

  return (
    <div className='flex flex-col items-center justify-center max-w-[100%] mx-auto'>
      <NewsHero />

      <div className="w-full bg-black min-h-screen">
        <SearchBar search={search} onSearchChange={handleSearchChange} />
        
        <NewsTrendingSection trendingNews={trendingNews} />
        
        <NewsGrid
          news={filteredNews}
          visibleCount={visibleCount}
          loading={loading}
          hasMore={hasMore}
          showLess={showLess}
          onLoadMore={handleLoadMore}
          onLoadLess={handleLoadLess}
        />

        <JoinUs />
      </div>
    </div>
  );
}