"use client";
import { motion } from 'motion/react';
import NavbarProps from "../components/Navbar/Navbar";
import Footer from '../components/Footer/Footer';
import React, { useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import Image from "next/image";


type CategoryType = "Design" | "Technology" | "Business Security";

interface NewsItem {
  id: number;
  category: CategoryType;
  tittle: string;
  description: string;
  date: string;
  image: string;
}

export default function NewsPage() {
  const newsData: NewsItem[] = [
    {
      id: 1,
      category: "Design",
      tittle: "Creative Branding Strategies to Elevate Business Identity",
      description:
        "Decodes introduces a revolutionary approach that blends modern design principles with data-driven insights. This strategy allows businesses to create impactful brand stories, improve market reach.",
      date: "22 January, 2025",
      image: "/news/news_2.png",
    },
    {
      id: 2,
      category: "Technology",
      tittle: "Building Scalable Websites for the Future of Digital Business",
      description:
        "To meet the growing demand for performance and security, Decodes has launched its next-generation web development services. These solutions are tailored to ensure faster load times, seamless integrations, and adaptive designs that provide an excellent user experience on any device.",
      date: "25 January, 2025",
      image: "/news/news_3.png",
    },
    {
      id: 3,
      category: "Business Security",
      tittle: "Enhancing Cybersecurity Measures in the Modern Digital Landscape",
      description:
        "In response to the increasing cyber threats faced by businesses today, Decodes has developed advanced cybersecurity solutions. These measures include real-time threat detection, robust encryption protocols, and comprehensive risk assessments to safeguard sensitive data and ensure business continuity.",
      date: "28 January, 2025",
      image: "/news/news_4.png",
    },
  ];

  // const getCategoryColor = (category: CategoryType): string => {
  //   const colors: Record<CategoryType, string> = {
  //     Design: "text-blue-700",
  //     Technology: "text-purple-300",
  //     "Business Security": "text-purple-700",
  //   };
  //   return colors[category];
  // };

  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Handle form submission here
  };


  

  return (
    <div className='relative w-screen bg-[#000] flex flex-col items-center justify-center w-full max-w-[100%] mx-auto'>
      <NavbarProps />
      <div className="relative w-full flex items-center justify-center h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-65"
          style={{ backgroundImage: "url('news/hero_news.png')" }}
        ></div>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 py-4 text-white bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent md:text-6xl z-10"
        >
          News <br /> Know Us More Closely
        </motion.h1>
      </div>

      {/* CONTENT */}
      <div className="w-full bg-black min-h-screen">

        {/* search */}
        <div className="pt-6 sm:pt-6">
          <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-0">
            <div className="flex justify-end mb-8">
              <div className="relative w-64">
                <Input
                  type="text"
                  placeholder="Search"
                  className="w-full bg-gray-800 text-white px-3 py-4 rounded-full border-gray-800 pl-10 pr-10 focus:bg-gray-700 text-sm"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
                  <img
                    src="/icons/icon_search.png"
                    alt="icon search"
                    width="18"
                    height="18"
                    className="opacity-70"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* semua news */}
        <div className="w-full px-6 min-h-screen">
          {/* news trend */}
          <div className="h-auto min-h-96 flex items-center py-6 px-1">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-[1fr_2fr]">
                {/* img news 1 */}
                <div className="oder-2 lg:order-1">
                  <div className="relative rounded-2xl oferflow-hidden shadow-2xl">
                    <img
                      src="/news/news_1.png"
                      alt="News Image"
                      width={400}
                      height={200}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                {/* kategori */}
                <div className="order-1 lg:order-2 py-0 px-2">
                  <div className="inline-block">
                    <span className="text-white text-sm uppercase-wider font-medium">
                      Web Development
                    </span>
                  </div>

                  <div>
                    <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">
                      Building Scalable Website for
                      <span className="block text-white">
                        the Future of Digital Business
                      </span>
                    </h1>
                  </div>

                  {/* deskripsi */}
                  <div>
                    <p className="text-white text-sm leading-relaxed max-w-7xl">
                      To meet the growing demand for performance and security,
                      Decades has launched its next-generation web development
                      services. These solutions are tailored to ensure faster
                      load times, seamless integrations, and adaptive designs
                      that provide an excellent user experience on any device.
                    </p>
                  </div>

                  <div className="flex items-center space-x-3 pt-2">
                    <div className="flex-shrink-0">
                      <div className="text-white text-xs">
                        28 Januari 2025
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* article 3 */}
          <div className="h-auto flex items-center px-2 md:px-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsData.map((news) => (
                  <div
                    key={news.id}
                    className="bg-[#1F1F1F] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-gray-900/20 group"
                  >
                    <div className="relative overflow-hidden">
                      <div className="w-full h-48 bg-gray-800 relative">
                        <img
                          src={news.image}
                          alt={news.tittle}
                          className="w-full h-full object-cover group group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    {/* content */}
                    <div className="p-3">
                      <div className="mb-1">
                        <span className="text-xs font-semibold text-white">
                          {news.category}
                        </span>
                      </div>

                      {/* Tittle */}
                      <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-purple-400 transition-colors duration-200">
                        {news.tittle}
                      </h3>

                      {/* Deskripsi */}
                      <p className="text-white text-sm leading-relaxed mb-3 line-clamp-2">
                        {news.description}
                      </p>

                      {/* footer */}
                      <div className="pt-2">
                        {/* Date */}
                        <div className="flex items-center space-x-2">
                          <span className="text-white text-sm">
                            {news.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* join */}
        <div className="w-full my-10 px-8 md:px-10 py-10 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="relative bg-gradient-to-br from-[#1F1F1F] via-[#1F1F1F] to-purple-700/50 rounded-3xl shadow-2xl px-8 py-8 overflow-hidden">
              
              <div className="relative z-10 justify-start">
                
                <div className="mb-4 flex flex-col items-start">
                  <img 
                    src="/logo_decodes/logo_decodes.png"
                    alt="logo decodes"
                    width={80}
                    height={96}
                    className="mb-3"/>
                  
                  <div className="w-70 md:w-100 h-px bg-gradient-to-r from-[#2032E0] to-[#7666EB]"></div>
                </div>

                
                <h1 className="text-white text-base md:text-lg lg:text-xl font-bold mb-8 leading-tight">
                  JOIN OUR DIGITAL INSIGHT!
                </h1>

                <div className="flex flex-col md:flex-row justify-start items-start text-white gap-4 md:gap-6 mb-6 text-sm">
                  <div>
                    <p>
                      Tren updates, Technology and Exclusive Tips Straight to Your Inbox
                    </p>
                  </div>
                  
                </div>

                <div className="flex flex-col sm:flex-row justify-start items-start gap-3">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full sm:w-96 md:w-96 lg:w-120 bg-transparent backdrop-blur-sm text-white placeholder-white/70 px-2 py-2 pr-32 rounded-full border border-blue-900 max-w-7xl transition-all duration-200
                      focus:ring-0 focus:outline-none"
                    />
                    <button
                      onClick={handleSubmit}
                      className="absolute right-1 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-500 text-white px-6 py-1 rounded-full font-semibold hover:from-blue-700 hover:to-purple-600 transition-all duration-300 text-sm"
                    >
                      JOIN NOW
                    </button>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  );
}
