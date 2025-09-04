"use client";
import React from 'react';
import { motion } from 'motion/react';
import { Button } from "@/components/ui/button";
import { useFeaturedProduct } from "../../hooks/useProduct";
import { featuredProducts } from "../../data/productData";
import { FeaturedProductProps, ProductItem } from "../../types/home";

export const FeaturedProduct: React.FC<FeaturedProductProps> = ({ className = "" }) => {
  const { hoveredIndex, handleMouseEnter, handleMouseLeave } = useFeaturedProduct(1);

  return (
    <div className={`relative w-full overflow-x-hidden flex h-full lg:h-screen items-center justify-center ${className}`}>
      <div className="absolute top-0 -translate-y-5/6 w-[120%] h-[900px] bg-gradient-to-r from-[#0421DE] to-[#C1ABF7] opacity-40 blur-[80px] rounded-full"></div>
      
      <div className="flex flex-col h-full w-full justify-center items-center">
        <div className="z-10 w-full flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0.5, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
              ease: "easeInOut",
            }}
          >
            <div className="text-center my-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#9933EF]">
                Featured{' '}
                <span className="text-white">Product</span>
              </h2>
            </div>
          </motion.h1>
        </div>
        
        <div className="mt-8 flex flex-col md:flex-row justify-center items-center md:items-start gap-4 md:gap-6 py-5 px-6 md:px-10">
          {featuredProducts.map((item, index) => (
            <ProductCard
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
    </div>
  );
};


const ProductCard: React.FC<{
  item: ProductItem;
  index: number;
  isExpanded: boolean;
  onMouseEnter: (index: number) => void;
  onMouseLeave: () => void;
}> = React.memo(({ 
  item, 
  index, 
  isExpanded, 
  onMouseEnter, 
  onMouseLeave 
}) => (
  <div
    className={`relative bg-[#1F1F1F] rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-500 ease-out ${
      isExpanded 
        ? 'w-full md:w-fit md:max-w-[80%] max-w-sm  h-96 md:h-115' 
        : 'w-full md:w-fit md:max-w-[80%] max-w-sm h-96 md:h-115'
    }`}
    onMouseEnter={() => onMouseEnter(index)}
    onMouseLeave={onMouseLeave}
    tabIndex={0}
    aria-label={`View ${item.alt}`}
  >
    <div className="flex flex-col md:flex-row h-full">
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
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
      </div>

      <div className={`bg-[#1F1F1F] transition-all duration-500 ease-out overflow-hidden ${
        isExpanded 
          ? 'w-full h-1/2 md:h-full md:w-150 opacity-100' 
          : 'w-0 h-0 md:w-0 md:h-auto opacity-0'
      }`}>
        <div className="relative p-4 md:p-6 h-full">
          <div className="text-center h-full pb-16 md:pb-16">
            <h1 className="text-lg md:text-2xl font-bold text-white mb-3 md:mb-4">{item.title}</h1>
            <div className="h-full overflow-y-auto pr-2 item-center justify-center">
              <p className="text-white text-xs md:text-sm leading-relaxed text-justify">
                {item.description}
              </p>
            </div>
          </div>

          <div className="absolute bottom-4 md:bottom-6 left-0 right-0 flex justify-center">
            <Button 
              variant="gradientOutline"
              className="w-70 px-6 md:px-8 py-2 md:py-3 text-sm md:text-base cursor-pointer rounded-3xl shadow-md "
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
              }}
              aria-label={`${item.button.text} for ${item.alt}`}
            >
              {item.button.text}
            </Button>
          </div>
        </div>
      </div>
    </div>
    
    <div className={`absolute top-3 md:top-4 right-3 md:right-4 transition-all duration-300 ${
      isExpanded ? 'opacity-100 transform rotate-0' : 'opacity-70 transform rotate-180'
    }`}>
      <svg className="w-4 h-4 md:w-5 md:h-5 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </div>
));