"use client";

import React, { useState, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button"

// Type definitions
interface ProductItem {
  id: string;
  img: string;
  alt: string;
  title: string;
  description: string;
  button: {
    text: string;
    link: string;
  };
}

interface ExpandedCardProps {
  item: ProductItem;
  index: number;
  isExpanded: boolean;
  onMouseEnter: (index: number) => void;
  onMouseLeave: () => void;
}

export default function FeaturedProducts() {
  // Card 'AI Chatbot' ada di index 1, jadi default 1
  const [hoveredIndex, setHoveredIndex] = useState<number>(1);

  // Memoize items dengan data 
  const items = useMemo((): ProductItem[] => [
    { 
      id: 'product-1',
      img: "/featured_product/crm_integration.png", 
      alt: "CRM Integration Solution",
      title: "CRM Integration",
      description: "CRM Integration by Decodes is a comprehensive solution designed to streamline business processes by connecting your sales, marketing, and customer service data in one platform. With powerful analytics, automated workflows, and real-time insights, it helps businesses improve efficiency, strengthen customer relationships, and boost overall performance. This integration empowers teams to work smarter and deliver exceptional customer experiences.",
      button: { text: "LEARN MORE", link: "#product-1" } 
    },
    { 
      id: 'product-2',
      img: "/featured_product/chatbot_ai.png", 
      alt: "AI Chatbot Solution",
      title: "AI Chatbot",
      description: "Chatbot AI by Decodes is an intelligent solution designed to enhance customer engagement and streamline communication across multiple channels. With natural language processing, real-time responses, and seamless integration into websites, apps, and messaging platforms, it helps businesses provide instant support, reduce response times, and improve overall customer satisfaction. Equipped with advanced analytics and automated workflows, this chatbot empowers teams to work smarter, personalize interactions, and deliver exceptional customer experiences 24/7",
      button: { text: "LEARN MORE", link: "#product-2" } 
    },
  ], []);

  const handleMouseEnter = useCallback((index: number) => {
    setHoveredIndex(index);
  }, []);

  // Jangan reset hoveredIndex ke null agar card tetap terbuka
  const handleMouseLeave = useCallback((): void => {
    // Tidak melakukan apapun
  }, []);

  return (
    <section className="relative w-full h-[110vh] md:h-screen overflow-hidden" style={{background: "#100425"}}>
      <div className="min-h-screen bg-[#100425]">
        <div className="text-center mb-1 pt-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Project</h1>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start pt-8 md:pt-18 gap-4 md:gap-6 py-5 min-h-screen px-4 md:px-0 max-w-[90%] mx-auto">
          {items.map((item, index) => (
            <ExpandedCard
              key={item.id}
              item={item}
              index={index}
              isExpanded={hoveredIndex === index}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ExpandedCard: React.FC<ExpandedCardProps> = React.memo(({ 
  item, 
  index, 
  isExpanded, 
  onMouseEnter, 
  onMouseLeave 
}) => (
  <div
    className={`relative bg-black rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-500 ease-out ${
      isExpanded 
        ? 'w-full max-w-sm md:max-w-none md:w-[700px] h-96 md:h-115' 
        : 'w-full max-w-sm md:w-80 h-96 md:h-115'
    }`}
    onMouseEnter={() => onMouseEnter(index)}
    onMouseLeave={onMouseLeave}
    role="button"
    tabIndex={0}
    aria-label={`View ${item.alt}`}
  >
      {/* Container utama dengan flex */}
      <div className="flex flex-col md:flex-row h-full">
        {/* Image Section */}
        <div className={`relative transition-all duration-500 ease-out ${
          isExpanded 
            ? 'w-full h-1/2 md:h-full md:w-80 md:flex-shrink-0' 
            : 'w-full h-full'
        }`}>
          <img
            src={item.img}
            alt={item.alt}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
        </div>

        {/* Expanded Content Section */}
        <div className={`bg-black transition-all duration-500 ease-out overflow-hidden ${
          isExpanded 
            ? 'w-full h-1/2 md:h-full md:w-100 opacity-100' 
            : 'w-0 h-0 md:w-0 md:h-auto opacity-0'
        }`}>
          {/* Content structure */}
          <div className="relative p-4 md:p-6 h-full">
            {/* Content Area - dengan padding bottom untuk button space */}
            <div className="text-center h-full pb-16 md:pb-16">
              <h1 className="text-lg md:text-2xl font-bold text-white mb-3 md:mb-4">{item.title}</h1>
              {/* Scrollable description area dengan max height */}
              <div className="h-full overflow-y-auto pr-2">
                <p className="text-white text-xs md:text-sm leading-relaxed text-justify">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Button - ABSOLUTE POSITIONED di bagian bawah */}
            <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
              <Button 
                className="w-full bg-gradient-to-r from-[#0421DE] to-[#BA8EF4] text-white rounded-lg shadow-md hover:opacity-90 transition-all px-6 md:px-8 py-2 md:py-3 text-sm md:text-base"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  console.log(`Navigating to: ${item.button.link}`);
                }}
                aria-label={`${item.button.text} for ${item.alt}`}
              >
                {item.button.text}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hover indicator */}
      <div className={`absolute top-3 md:top-4 right-3 md:right-4 transition-all duration-300 ${
        isExpanded ? 'opacity-100 transform rotate-0' : 'opacity-70 transform rotate-180'
      }`}>
        <svg className="w-4 h-4 md:w-5 md:h-5 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  )
);