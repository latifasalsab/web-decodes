"use client";
import React, { useState, useMemo, useCallback} from "react";
import { motion } from 'motion/react';
import NavbarProps from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import BookADemo from "./components/BookADemo/BookADemo";
import Link from 'next/link';
import Logos from './components/Logos/Logos';
import { Button } from "@/components/ui/button"

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(1);
  
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

  const handleMouseLeave = useCallback((): void => {
    
  }, []);


  return (
    <div className='relative w-screen bg-[#000] flex flex-col items-center justify-center w-full max-w-[100%] mx-auto'>
      <NavbarProps />
      <div className="w-full min-h-screen flex flex-col items-center justify-center
        bg-cover bg-center bg-no-repeat bg-fixed
        before:absolute before:inset-0 before:bg-black/20 before:z-0 pt-20"
        style={{
          backgroundImage: "url('/hero-bg.png')",
        }}
        >
          <div className="z-10 flex flex-col items-center w-full gap-8 sm:px-6 lg:px-8 ">
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
              }}
              className="text-4xl md:text-5xl font-bold text-white text-center"
            >
              EMPOWERING YOUR <br /> DIGITAL FUTURE
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0.5, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                  delay: 0.5,
                  duration: 0.8,
                  ease: "easeInOut",
              }}
              className="bg-gradient-to-br from-[#F7DDEE] to-[#C1ABF7] bg-clip-text 
                         text-center text-sm sm:text-base md:text-lg lg:text-xl
                         font-medium tracking-tight text-transparent
                         max-w-2xl mx-auto px-4"
            >
              Delivering creative solutions that help your brand grow, connect, and lead in the digital era.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0.5, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                  delay: 0.7,
                  duration: 0.8,
                  ease: "easeInOut",
              }}
            >
              <Link href="/services">
                <Button className="text-white justify-center px-6 py-3 sm:px-8 sm:py-4
                                 text-sm sm:text-base font-medium
                                 hover:scale-105 transition-transform duration-200">
                  SEE ALL OUR SERVICES
                </Button> 
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                  delay: 0.9,
                  duration: 1,
                  ease: "easeInOut",
              }}
              className="w-full px-4"
            >
              <img 
                src="/home/hero.png" 
                alt="Hero illustration" 
                className="w-full max-h-[30vh] object-contain hidden md:flex"
              />
              <img 
                src="/home/hero-mobile.png" 
                alt="Hero illustration" 
                className="w-full h-auto object-contain max-h-[40vh] flex md:hidden"
              />
            </motion.div>
          </div>
      </div>

      {/* FEATURED PRODUCT */}
      <div className="relative w-full overflow-x-hidden flex h-full lg:h-screen items-center justify-center">
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
      </div>

      {/* THE VALUE */}
      <section className="py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.h1
              initial={{ opacity: 0.5, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                  delay: 0.3,
                  duration: 0.6,
                  ease: "easeInOut",
              }}
          >
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                The Value Behind{' '}
                <span className="text-[#9933EF]">Our Solutions</span>
              </h2>
            </div>
          </motion.h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="group">
              <div 
                className="h-full rounded-2xl p-8 transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#1f1f1f' }}
              >
                <img src="home/value/1.png" alt="" className="mb-6 w-[36px] h-auto" />
                <h3 className="text-xl font-semibold text-white mb-4 leading-tight">
                  Fast and Flexible Integration
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  Our product is designed to integrate seamlessly with your existing systems, allowing you to launch quickly without disrupting current workflows.
                </p>
              </div>
            </div>
            <div className="group">
              <div 
                className="h-full rounded-2xl p-8 transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#1f1f1f' }}
              >
                <img src="home/value/2.png" alt="" className="mb-6 w-[36px] h-auto" />
                <h3 className="text-xl font-semibold text-white mb-4 leading-tight">
                  Secure and Reliable
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  With enterprise-grade security and continuous monitoring, your data stays safe and your operations run without interruption
                </p>
              </div>
            </div>
            <div className="group">
              <div 
                className="h-full rounded-2xl p-8 transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#1f1f1f' }}
              >
                <img src="home/value/3.png" alt="" className="mb-6 w-[36px] h-auto" />
                <h3 className="text-xl font-semibold text-white mb-4 leading-tight">
                  Customer-Centric Experience
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  Every feature is built with the end-user in mind, ensuring a smooth, intuitive, and engaging experience for your customers.
                </p>
              </div>
            </div>
            <div className="group">
              <div 
                className="h-full rounded-2xl p-8 transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#1f1f1f' }}
              >
                <img src="home/value/4.png" alt="" className="mb-6 w-[36px] h-auto" />
                <h3 className="text-xl font-semibold text-white mb-4 leading-tight">
                  Scalable for Growth
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  Whether you're a startup or an enterprise, our solution grows with you, supporting higher demands without performance loss.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <BookADemo />

      <Logos />

      <Footer />
    </div>
  );
}

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

const ExpandedCard: React.FC<ExpandedCardProps> = React.memo(({ 
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
    role="button"
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
                className="w-70 bg-gradient-to-r from-[#0421DE] to-[#5D56E9] text-white rounded-3xl shadow-md hover:opacity-90 transition-all px-6 md:px-8 py-2 md:py-3 text-sm md:text-base"
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