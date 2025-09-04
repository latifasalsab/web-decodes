"use client";
import { motion } from 'framer-motion';
import React from "react";

export default function NewsHero() {
  return (
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
  );
}