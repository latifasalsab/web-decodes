"use client";
import { useState, useRef, useLayoutEffect } from "react";
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import NavbarProps from "../components/Navbar/Navbar";
export default function AboutPage() {
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

  const logos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const loopLogos = [...logos, ...logos];

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
            About Us <br /> Know Us More Closely
          </motion.h1>
      </div>
      <div className="w-full max-w-[80%] mx-auto h-screen gap-8 flex flex-col py-8">
        <p className="text-base text-white">
          We are a creative digital agency committed to transforming ideas into impactful solutions. With a blend of innovation, strategy, and technology, we help businesses face digital challenges and unlock new opportunities for growth.
        </p>
        <div className="flex items-center justify-between w-full">
          <div className="w-[30%] flex flex-col gap-4">
            <p className="text-4xl text-white">Our Proven Track Record</p>
            <div className="bg-white w-full h-[1px] rounded"></div>
            <div className="flex flex-col items-center h-full">
              <div className="flex flex-col items-center p-4">
                <p className="text-xl text-white">100+</p>
                <p className="text-xs text-white">Project Completed</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center p-4 border border-solid border-white rounded-md">
                  <p className="text-xl text-white">5+</p>
                  <p className="text-xs text-white">Years Of Experience</p>
                </div>
                <div className="flex flex-col items-center p-4 border border-solid border-white rounded-md">
                  <p className="text-xl text-white">7+</p>
                  <p className="text-xs text-white">Company Partners</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center h-full gap-6">
            <div className="flex flex-col items-center justify-between h-96">
              <img className="w-80 h-45 object-cover rounded-md" src="/about/about1.png" alt="" />
              <img className="w-80 h-45 object-cover rounded-md" src="/about/about2.png" alt="" />
            </div>
            <img className="w-80 h-96 object-cover rounded-md" src="/about/about3.png" alt="" />
          </div>
        </div>
        <p className="text-base text-white">
          For us, our clients' success is our success. Let's collaborate to create a digital strategy that is not only effective but also takes your business to the next level.
        </p>
      </div>
      <div className="flex max-w-[80%] w-full justify-between items-center">
        <div className='flex justify-center w-[85%]'>
          <div className='wrapper-a max-w-4xl w-full overflow-hidden relative'>
            <div className='wrapper-b'>
              {loopLogos.map((num, idx) => (
                <Image
                  key={idx}
                  src={`/logo/logo${num}.png`}
                  alt={`Logo ${num}`}
                  width={60}
                  height={60}
                  className="item"
                  style={{ animationDelay: `calc(20s / ${logos.length} * (${logos.length} - ${idx}) * -1)` }}
                />
              ))}
            </div>
          </div>
        </div>
        <div>
          <p className="text-lg text-white text-right">Clients We’ve <br /> Worked With</p>
        </div>
      </div>
    </div>
  );
}