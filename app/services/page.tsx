"use client";
import { useState, useRef, useLayoutEffect } from "react";
import { AnimatePresence, motion } from 'motion/react';
import NavbarProps from "../components/Navbar/Navbar";
import Link from 'next/link';

export default function ServicePage() {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useLayoutEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
    const handleResize = () => {
      if (navbarRef.current) setNavbarHeight(navbarRef.current.offsetHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className='relative w-screen bg-[#100425] flex flex-col items-center justify-center w-full max-w-[100%] mx-auto'>
      <div ref={navbarRef}>
        <NavbarProps />
      </div>
      <div className="w-full flex items-center justify-center"
        style={{
        paddingTop: navbarHeight,
        minHeight: `calc(100vh - ${navbarHeight}px)`,
        backgroundImage: "url('hero-bg.png')",
        // borderRadius: "0 0 1rem 1rem",
        boxShadow: "0 0 0 1px #222a35, 0 8px 32px 0 rgba(34,42,53,0.12)",
        position: "relative",
        overflow: "hidden",
        }}
        >
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-[#F7DDEE] to-[#C1ABF7] py-4 bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent md:text-6xl"
          >
            Service <br /> What You Get
          </motion.h1>
      </div>
      <div className="w-full h-screen flex items-center justify-center">
        <div className='flex items-center'>
          <Link href="/services/chatbot">
              <div className='rounded bg-white p-4 mr-4'>
                  <p>Chatbot AI</p>
              </div>
          </Link>
          <Link href="/services/crm">
              <div className='rounded bg-white p-4'>
                  <p>CRM Integration</p>
              </div>
          </Link>
        </div>
      </div>
    </div>
  );
}