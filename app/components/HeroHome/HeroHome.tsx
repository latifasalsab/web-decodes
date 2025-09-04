import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";


const HeroHome = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center
      bg-cover bg-center bg-no-repeat bg-fixed
      before:absolute before:inset-0 before:bg-black/20 before:z-0 pt-20"
      style={{
        backgroundImage: "url('/hero-bg.png')",
      }}
    >
      <div className="z-10 flex flex-col items-center w-full gap-8 sm:px-6 lg:px-8">
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
                             hover:scale-105 transition-transform duration-200 cursor-pointer">
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
  );
};

export default HeroHome;