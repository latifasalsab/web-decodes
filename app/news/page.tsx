"use client";
import { motion } from 'motion/react';
import NavbarProps from "../components/Navbar/Navbar";
import Footer from '../components/Footer/Footer';
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import JoinUs from '../components/JoinUs/JoinUs';
import Link from "next/link";
import Image from "next/image";

import { trendingNews, newsData } from "@/data/newsData";

export default function NewsPage() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const filteredNews = newsData.filter((news) =>
    news.tittle.toLowerCase().includes(search.toLowerCase()) ||
    news.description.toLowerCase().includes(search.toLowerCase())
  );

  const visibleNews = filteredNews.slice(0, visibleCount);
  const hasMore = visibleCount < filteredNews.length;

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

  return (
    <div className='relative bg-[#000] flex flex-col items-center justify-center w-full max-w-[100%] mx-auto'>
      <NavbarProps />
      <div className="relative w-full flex items-center justify-center h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-65"
          style={{ backgroundImage: "url('/news/hero_news.png')" }}
        ></div>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 py-4 text-white bg-clip-text text-center text-2xl font-medium tracking-tight md:text-6xl z-10"
        >
          <div>
            <h1 className='text-2xl font-medium md:text-5xl mb-2'>
              News
            </h1>
            <h6 className='text-2xl font-normal md:text-5xl'>
              Know Us More Closely
            </h6>
          </div>
        </motion.h1>
      </div>

      <div className="w-full bg-black min-h-screen">
        <div className="pt-6 sm:pt-6">
          <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-0">
            <div className="flex justify-end mb-8">
              <div className="relative w-64">
                <Input
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-gray-800 text-white px-3 py-4 rounded-full border-gray-800 pl-10 pr-10 focus:bg-gray-700 text-sm"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
                  <Image
                    src="/icons/icon_search.png"
                    alt="icon search"
                    width={18}
                    height={18}
                    className="opacity-70"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-6 min-h-screen">
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
                      {trendingNews.tittle}
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

          <div className="h-auto flex items-center px-2 md:px-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {visibleNews.map((news) => (
                  <Link href={`/news/${news.slug}`} key={news.id} className="block">
                    <div className="bg-[#1F1F1F] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-gray-900/20 group cursor-pointer">
                      <div className="relative overflow-hidden">
                        <div className="w-full h-48 bg-gray-800 relative">
                          <Image
                            src={news.image}
                            alt={news.tittle}
                            width={400}
                            height={200}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                      <div className="p-3">
                        <span className="text-xs font-semibold text-white">{news.category}</span>
                        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-purple-400 transition-colors duration-200">
                          {news.tittle}
                        </h3>
                        <p className="text-white text-sm leading-relaxed mb-3 line-clamp-2">
                          {news.description}
                        </p>
                        <span className="text-white text-sm">{news.date}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {hasMore && (
            <div className="flex justify-center mt-12 mb-8">
              <button
                onClick={handleLoadMore}
                disabled={loading}
                className="inline-flex items-center gap-2 px-8 py-2 rounded-full bg-transparent border border-white text-white font-semibold transition-all duration-300 disabled:opacity-50 cursor-pointer
                hover:bg-white hover:text-black active:bg-gray-200 active:text-black"
              >
                {loading ? "Loading..." : "SHOW ALL"}
              </button>
            </div>
          )}
          {!hasMore && filteredNews.length > 3 && (
            <div className="flex justify-center mt-12 mb-8">
              <button
                onClick={handleLoadLess}
                disabled={loading}
                className="inline-flex items-center gap-2 px-8 py-2 rounded-full bg-transparent border border-white text-white font-semibold transition-all duration-300 disabled:opacity-50 cursor-pointer
                hover:bg-white hover:text-black active:bg-gray-200 active:text-black"
              >
                {loading ? "Loading..." : "SHOW LESS"}
              </button>
            </div>
          )}
        </div>

        <JoinUs />
        <Footer />
      </div>
    </div>
  );
}
