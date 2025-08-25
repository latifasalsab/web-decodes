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
      <div className="min-h-screen p-4 md:p-6 lg:p-8">
        <div className="max-w-5xl mx-auto h-full flex flex-col justify-center">
          
          {/* Introduction Text */}
          <div className="mb-8 lg:mb-12">
            <p className="text-sm md:text-base lg:text-lg text-white/90 text-center md:text-left leading-relaxed max-w-5xl mx-auto">
              We are a creative digital agency committed to transforming ideas into impactful solutions. With a blend of innovation, strategy, and technology, we help businesses face digital challenges and unlock new opportunities for growth.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-12 mb-8 lg:mb-12 lg:items-stretch">
            
            {/* Stats Section */}
            <div className="order-2 lg:order-1 mb-8 lg:mb-0 lg:flex lg:flex-col lg:justify-between">
              <div className="text-center lg:text-left mb-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                  Our Proven<br />Track Record
                </h2>
                <div className="w-full h-px bg-white/30 mb-6"></div>
              </div>

              {/* Stats Cards */}
              <div className="space-y-6 lg:flex lg:flex-col lg:justify-center">
                {/* Main Stat */}
                <div className="text-center bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                  <p className="text-3xl md:text-4xl font-bold text-white mb-2">100+</p>
                  <p className="text-sm text-white/80">Project Completed</p>
                </div>

                {/* Side by side stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <p className="text-xl md:text-2xl font-bold text-white mb-1">5+</p>
                    <p className="text-xs text-white/80 leading-tight">Years Of<br />Experience</p>
                  </div>
                  <div className="text-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <p className="text-xl md:text-2xl font-bold text-white mb-1">7+</p>
                    <p className="text-xs text-white/80 leading-tight">Company<br />Partners</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Images Section */}
            <div className="order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:h-full">
                
                {/* Left Column - Two stacked images */}
                <div className="flex flex-col gap-4 order-2 md:order-1">
                  <div className="flex-1 min-h-[150px] md:min-h-[140px] lg:min-h-[160px] xl:min-h-[180px]">
                    <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg overflow-hidden shadow-xl">
                      <img 
                        className="w-full h-full object-cover" 
                        src="/about/about1.png" 
                        alt="Digital workspace setup"
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-h-[150px] md:min-h-[140px] lg:min-h-[160px] xl:min-h-[180px]">
                    <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg overflow-hidden shadow-xl">
                      <img 
                        className="w-full h-full object-cover" 
                        src="/about/about2.png" 
                        alt="Team collaboration meeting"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Column - Single tall image */}
                <div className="min-h-[250px] md:min-h-[300px] lg:min-h-[340px] xl:min-h-[380px] order-1 md:order-2">
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg overflow-hidden shadow-xl">
                    <img 
                      className="w-full h-full object-cover" 
                      src="/about/about3.png" 
                      alt="Modern office environment"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Closing Text */}
          <div className="text-center lg:text-left">
            <p className="text-sm md:text-base lg:text-lg text-white/90 leading-relaxed max-w-5xl mx-auto">
              For us, our clients' success is our success. Let's collaborate to create a digital strategy that is not only effective but also takes your business to the next level.
            </p>
          </div>
        </div>
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