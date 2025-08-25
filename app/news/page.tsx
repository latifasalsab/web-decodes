"use client";
import { Timeline } from "@/components/ui/timeline"; 
import { Magnetic } from '@/components/motion-primitives/magnetic'; 
import { InView } from '@/components/ui/in-view';
import { Cursor } from '@/components/motion-primitives/cursor';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import ScrollReveal from '@/app/components/ScrollReveal/ScrollReveal';
import NavbarProps from "../components/Navbar/Navbar";
import { useState, useRef, useLayoutEffect } from "react";

export default function NewsPage() {
    const [isHovering, setIsHovering] = useState(false);
    const targetRefs = useRef<(HTMLDivElement | null)[]>([]);

    const handlePositionChange = (x: number, y: number) => {
      let hovering = false;
      targetRefs.current.forEach(ref => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
            hovering = true;
          }
        }
      });
      setIsHovering(hovering);
    };

    const data = [
      {
        title: "Decodes Launches Next-Gen AI-Powered Project Management Tool",
        slug: "ai-project-management-tool", // tambahkan slug
        content: (
          <div className="flex flex-col gap-4">
            <InView
              variants={{
                hidden: { opacity: 0, y: 70, filter: 'blur(4px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
              }}
              viewOptions={{ margin: '0px 0px -200px 0px' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <Magnetic>
                <Link href={`/news/ai-project-management-tool`}>
                  <div ref={el => { targetRefs.current[0] = el; }}>
                  <img
                    src="news/news1.jpg"
                    alt="startup template"
                    className="h-50 sm:h-60 md:h-80 lg:h-60 xl:h-80 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 cursor-pointer transition-transform hover:scale-[1.02]"
                  />
                  </div>
                </Link>
              </Magnetic>
            </InView>
            <ScrollReveal
              baseOpacity={0.1}
              enableBlur={true}
              baseRotation={0}
              blurStrength={0}
              textClassName="text-sm font-normal text-neutral-500 md:text-sm"
            >
              August 10, 2025
            </ScrollReveal>
            <ScrollReveal
              baseOpacity={0.1}
              enableBlur={true}
              baseRotation={0}
              blurStrength={0}
              textClassName="text-justify text-sm font-normal text-white md:text-base dark:text-neutral-200"
            >
              Decodes Software House has taken a bold step into the future of productivity with the launch of its AI-powered project management tool. Designed for teams of all sizes, this innovative platform combines task automation, predictive analytics, and smart collaboration features into one seamless experience. Early testers have described it as "the assistant you never knew you needed," thanks to its ability to anticipate bottlenecks and provide solutions before they become problems.
              Decodes Software House has taken a bold step into the future of productivity with the launch of its AI-powered project management tool. Designed for teams of all sizes, this innovative platform combines task automation, predictive analytics, and smart collaboration features into one seamless experience. Early testers have described it as "the assistant you never knew you needed," thanks to its ability to anticipate bottlenecks and provide solutions before they become problems.
            </ScrollReveal>
            <Link href={`/news/ai-project-management-tool`}>
              <Button className="text-white justify-start">
                View More
              </Button> 
            </Link>
          </div>
        ),
      },
      // {
      //   title: "Partnership with Global Fintech Leader to Enhance Security Systems",
      //   slug: "fintech-security-partnership",
      //   content: (
      //     <div className="flex flex-col gap-4">
      //       <InView
      //         variants={{
      //           hidden: { opacity: 0, y: 70, filter: 'blur(4px)' },
      //           visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
      //         }}
      //         viewOptions={{ margin: '0px 0px -200px 0px' }}
      //         transition={{ duration: 0.5, ease: 'easeInOut' }}
      //       >
      //         <Magnetic>
      //           <Link href={`/news/fintech-security-partnership`}>
      //             <div ref={el => { targetRefs.current[1] = el; }}>
      //             <img
      //               src="news/news2.jpg"
      //               alt="startup template"
      //               className="h-50 sm:h-60 md:h-80 lg:h-60 xl:h-80 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 cursor-pointer transition-transform hover:scale-[1.02]"
      //             />
      //             </div>
      //           </Link>
      //         </Magnetic>
      //       </InView>
      //       <ScrollReveal
      //         baseOpacity={0.1}
      //         enableBlur={true}
      //         baseRotation={0}
      //         blurStrength={0}
      //         textClassName="text-sm font-normal text-neutral-500 md:text-sm"
      //       >
      //         July 28, 2025
      //       </ScrollReveal>
      //       <ScrollReveal
      //         baseOpacity={0.1}
      //         enableBlur={true}
      //         baseRotation={0}
      //         blurStrength={0}
      //         textClassName="text-justify text-sm font-normal text-neutral-500 md:text-base"
      //       >
      //         In a significant move for the fintech and software development industries, Decodes has announced a strategic alliance with one of the world's top fintech enterprises. The collaboration focuses on building next-generation security infrastructure for digital transactions, integrating AI-driven fraud detection, biometric verification, and blockchain-powered audit trails.
      //         The partnership comes at a time when digital fraud is becoming increasingly sophisticated. By pooling their expertise, the two companies aim to stay ahead of cybercriminals with proactive security measures that can detect and neutralize threats in real time. This will not only protect end-users but also restore trust in digital financial platforms worldwide.
      //       </ScrollReveal>
              
      //       <Link href={`/news/fintech-security-partnership`}>
      //         <Button className="text-white justify-start">
      //           View More
      //         </Button>
      //       </Link>
      //     </div>
      //   ),
      // },
      // {
      //   title: "Decodes Expands Operations with New Development Hub in Singapore",
      //   slug: "singapore-development-hub",
      //   content: (
      //     <div className="flex flex-col gap-4">
      //       <InView
      //         variants={{
      //           hidden: { opacity: 0, y: 70, filter: 'blur(4px)' },
      //           visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
      //         }}
      //         viewOptions={{ margin: '0px 0px -200px 0px' }}
      //         transition={{ duration: 0.5, ease: 'easeInOut' }}
      //       >
      //         <Magnetic>
      //           <Link href={`/news/singapore-development-hub`}>
      //             <div ref={el => { targetRefs.current[2] = el; }}>
      //               <img
      //                 src="news/news3.jpg"
      //                 alt="startup template"
      //                 className="h-50 sm:h-60 md:h-80 lg:h-60 xl:h-80 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 cursor-pointer transition-transform hover:scale-[1.02]"
      //               />
      //             </div>
      //           </Link>
      //         </Magnetic>
      //       </InView>
      //       <ScrollReveal
      //         baseOpacity={0.1}
      //         enableBlur={true}
      //         baseRotation={0}
      //         blurStrength={0}
      //         textClassName="text-sm font-normal text-neutral-500 md:text-sm"
      //       >
      //         July 12, 2025
      //       </ScrollReveal>
      //       <ScrollReveal
      //         baseOpacity={0.1}
      //         enableBlur={true}
      //         baseRotation={0}
      //         blurStrength={0}
      //         textClassName="text-justify text-sm font-normal text-neutral-500 md:text-base"
      //       >
      //         To meet the growing demand for high-quality software solutions in Southeast Asia, Decodes has opened a brand-new development hub in Singapore. This expansion enables the company to provide faster response times, localized support, and closer collaboration with regional clients.
      //         The Singapore hub will focus on emerging technologies, including AI, IoT, and cloud-native solutions, while also serving as a center for innovation and talent development. With this move, Decodes strengthens its presence in the region and reaffirms its commitment to delivering world-class digital solutions.
      //       </ScrollReveal>
      //       <Link href={`/news/singapore-development-hub`}>
      //         <Button className="text-white justify-start">
      //           View More
      //         </Button>
      //       </Link>
      //     </div>
      //   ),
      // },
    ];

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
    <>
      <Cursor
        attachToParent
        variants={{
          initial: { scale: 0.3, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.3, opacity: 0 },
        }}
        springConfig={{
          bounce: 0.001,
        }}
        transition={{
          ease: 'easeInOut',
          duration: 0.15,
        }}
        onPositionChange={handlePositionChange}
      >
        <motion.div
          animate={{
            width: isHovering ? 100 : 16,
            height: isHovering ? 32 : 16,
          }}
          className='flex items-center justify-center rounded-[24px] bg-gray-500/40 backdrop-blur-md dark:bg-gray-300/40'
        >
          <AnimatePresence>
            {isHovering ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className='inline-flex w-full items-center justify-center'
              >
                <div className='inline-flex items-center text-sm text-white dark:text-black'>
                  View More
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </Cursor>
      <div className='relative w-screen bg-[#100425] flex flex-col items-center justify-center w-full max-w-[100%] mx-auto'>
          <div ref={navbarRef}>
            <NavbarProps />
          </div>
          <div className="w-full flex items-center justify-center"
              style={{
              paddingTop: navbarHeight,
              minHeight: `calc(100vh - ${navbarHeight}px)`,
              backgroundImage: "url('hero-bg.png')",
              // background: "linear-gradient(180deg, #100425 10%, #7A6AFF 60%, #BA8EF4 100%)",
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
                  News & Stories <br /> from Decodes Software House
                </motion.h1>
          </div>
          <Timeline data={data} />
          {/* <div className="w-full max-w-full relative mx-auto overflow-hidden h-full">
            <div className="absolute -right-100 top-140 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#0421DE] to-[#C1ABF7] opacity-20 blur-3xl rounded-full"></div>
            <div className="absolute -left-100 top-400 -translate-y-1/2 w-[1000px] h-[800px] bg-gradient-to-r from-[#0421DE] to-[#C1ABF7] opacity-15 blur-3xl rounded-full"></div>
            <div className="absolute -right-100 top-680 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-[#C1ABF7] to-[#0421DE] opacity-15 blur-3xl rounded-full"></div>
            <Timeline data={data} />
          </div> */}
          <div 
            className="w-full md:h-[50vh] bg-cover bg-center relative"
            style={{ backgroundImage: "url('footer.png')" }}
          >
            <div className="absolute top-0 inset-0 flex flex-col p-4 xl:p-10 h-full justify-between">
              <div className="text-white px-8 md:px-16 lg:px-32 pt-4">
                <p className="text-sm lg:text-sm xl:text-base font-light">DIGITAL DESIGN EXPERIENCE</p>
                <h1 className="text-7xl lg:text-7xl xl:text-8xl font-medium">GET IN TOUCH</h1>
              </div>
              <div className="pl-[30%] flex flex-col justify-center">
                <p className="text-4xl lg:text-3xl xl:text-4xl text-white italic">business@bydecodes.com </p>
              </div>
              <div className="flex flex-col lg:flex-row items-start justify-between px-8">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <img
                        src="icons/location.png"
                        alt="location"
                        className="h-4"
                      />
                    </div>
                    <p className="text-white text-sm max-w-xs md:max-w-md md:text-lg lg:text-sm lg:max-w-xs xl:max-w-sm xl:text-base">
                      Semarang Office - Wologito Utara No.3, Semarang
                      Barat, Semarang City, Central Java, Indonesia
                      50148
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <img
                        src="icons/telephone.png"
                        alt="telephone"
                        className="h-4"
                      />
                    </div>
                    <p className="text-white text-sm md:text-lg lg:text-sm xl:text-base">+62-812-2692-2617</p>
                  </div>
                </div>
                <div className="flex flex-col justify-between lg:items-end items-center">
                  <div className="flex gap-2 md:gap-8 lg:gap-2 items-center">
                    <div className="flex items-center justify-center py-2 px-4 rounded-full border border-neutral-400 border-solid">
                      <p className="text-white text-xs md:text-lg lg:text-sm xl:text-base">INSTAGRAM</p>
                    </div>
                    <div className="flex items-center justify-center py-2 px-4 rounded-full border border-neutral-400 border-solid">
                      <p className="text-white text-xs md:text-lg lg:text-sm xl:text-base">LINKEDIN</p>
                    </div>
                  </div>
                  <p className="text-white md:text-lg lg:text-sm xl:text-base">©2025 PT Byde Cloudata Ekosistem. All Rights Reserved</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}