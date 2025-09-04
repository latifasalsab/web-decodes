
"use client";
import { motion } from "framer-motion";
import React from "react";

export default function HeroMotion() {
  return (
    <div className="relative bg-[#000] flex flex-col items-center justify-center w-full max-w-[100%] mx-auto custom-scrollbar">
      <div className="relative w-full flex items-center justify-center h-screen">
        
        <div
          className="absolute inset-0 bg-cover bg-center brightness-65"
          style={{ backgroundImage: "url('/contact/img_herocontact.png')" }}
        ></div>

        
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="mt-8 py-4 text-white text-center tracking-tight z-10"
        >
          <h1 className="text-2xl font-bold md:text-5xl mb-2">CONTACT US</h1>
          <h6 className="text-2xl font-normal md:text-5xl">
            Get In Touch With Us Today
          </h6>
        </motion.div>
      </div>
    </div>
  );
}
