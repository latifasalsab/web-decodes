"use client";
import { Timeline } from "@/components/ui/timeline"; 
import { Magnetic } from '@/components/motion-primitives/magnetic'; 
import { InView } from '@/components/ui/in-view';
import { Cursor } from '@/components/motion-primitives/cursor';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import ScrollReveal from '@/app/components/ScrollReveal/ScrollReveal';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import NavbarProps from "../components/Navbar/Navbar";
import { useState, useRef, useLayoutEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function ContactPage() {

    const [formData, setFormData] = useState({
      fullName: '',
      phoneNumber: '',
      email: '',
      businessName: '',
      subject: '',
      messages: ''
    });

    const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission here
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

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

          {/* Isi contact */}
          <div></div>

          {/* form contact */}
          <div className="w-full h-full bg-black flex items-center justify-center p-4">
            <Card className="w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[80%] bg-black border-2 rounded-4xl border-white">
              <CardContent className="p-0">
                {/* Container utama dengan 3 bagian: header + form (2 col) + image */}
                <div className="flex flex-col lg:flex-row">
                  <div className="flex-1">
                    <div className="p-6 pb-6">
                      <CardTitle className="text-white text-xl font-semibold mb-2">
                        SEND US A MESSAGES
                      </CardTitle>
                      <CardDescription className="text-gray-300 text-sm leading-relaxed">
                        Do you have a question? A complaint? Or need any help to choose the right service from 
                        Decodes. <br />Feel free to contact us
                      </CardDescription>
                    </div>
                    
                    {/* Form content - 2 kolom */}
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <div className="space-y-4">
                    <div>
                      <label className="block text-white text-sm mb-2">Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full bg-[#1F1F1F] border-[#1F1F1F] rounded-md px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 text-sm"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white text-sm mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Enter your phone number"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className="w-full bg-[#1F1F1F] border-[#1F1F1F] rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 text-sm"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white text-sm mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-[#1F1F1F] border-[#1F1F1F] rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 text-sm"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white text-sm mb-2">Business Name</label>
                      <input
                        type="text"
                        name="businessName"
                        placeholder="Enter your business name"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        className="w-full bg-[#1F1F1F] border-[#1F1F1F] rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 text-sm"
                      />
                    </div>
                  </div>

                  {/* Right Column: Subject, Messages, Submit */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-white text-sm mb-2">Subject</label>
                      <div className="relative">
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full bg-[#1F1F1F] border-[#1F1F1F] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-400 text-sm appearance-none cursor-pointer"
                        >
                          <option value="">Choose a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="support">Technical Support</option>
                          <option value="billing">Billing Question</option>
                          <option value="complaint">Complaint</option>
                          <option value="feedback">Feedback</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <label className="block text-white text-sm mb-2">Messages</label>
                      <textarea
                        name="messages"
                        placeholder="Enter your messages"
                        value={formData.messages}
                        onChange={handleInputChange}
                        rows={6.5}
                        className="w-full bg-[#1F1F1F] border-[#1F1F1F] rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 text-sm resize-none"
                      />
                    </div>
                    
                    <div className="mt-auto flex justify-center lg:justify-center ">
                      <Button
                        onClick={handleSubmit}
                        className="w-70 sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-24  rounded-3xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-sm items-center"
                      >
                        SUBMIT
                      </Button>
                    </div>
                  </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Image section - di samping header dan form */}
                  <div className="p-6 flex items-start justify-center lg:justify-start lg:order-last">
                    <Image
                      src="/contact/img_contact.png" 
                      alt="Contact Image"
                      width={260}
                      height={260}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
              
          </div>
          <div 
            className="w-full md:h-[30vh] bg-cover bg-center"
            style={{ backgroundImage: "url('footer.png')" }}
        >
            <div className="relative z-10 container mx-auto max-w-[90%] py-8 h-full flex flex-col justify-between">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-8">
                

                <div className="flex-1 w-full lg:w-auto">
                <div className="mb-4 lg:mb-6">
                    <img
                    src="/logo_decodes/logo_new.png"
                    alt="logo footer"
                    className="h-12 lg:h-16" 
                    />
                </div>

                <div className="flex flex-col gap-3">
                    <div className="flex items-start gap-3">
                    <div className="w-4 h-4 flex items-center justify-center mt-0.5">
                        <img
                        src="icons/location.png"
                        alt="location"
                        className="h-4"
                        />
                    </div>
                    <p className="text-white text-sm lg:text-sm xl:text-base leading-relaxed">
                        Semarang Office - Wologito Utara No.3, Semarang
                        Barat, Semarang City, Central Java, Indonesia
                        50148
                    </p>
                    </div>

                    <div className="flex items-center gap-3">
                    <div className="w-4 h-4 flex items-center justify-center">
                        <img
                        src="icons/telephone.png"
                        alt="telephone"
                        className="h-4"
                        />
                    </div>
                    <p className="text-white text-sm lg:text-sm xl:text-base">+62-812-2692-2617</p>
                    </div>
                </div>
                </div>

                <div className="flex flex-col w-full lg:w-auto lg:items-end items-center gap-4 mt-8 lg:mt-8">
                <div className="flex gap-3 lg:gap-2 items-center">
                    <div className="flex items-center justify-center py-2 px-4 rounded-full border border-neutral-400 border-solid">
                    <p className="text-white text-xs lg:text-sm xl:text-base">INSTAGRAM</p>
                    </div>
                    <div className="flex items-center justify-center py-2 px-4 rounded-full border border-neutral-400 border-solid">
                    <p className="text-white text-xs lg:text-sm xl:text-base">LINKEDIN</p>
                    </div>
                </div>
                <p className="text-white text-xs lg:text-xs xl:text-sm text-center lg:text-right">
                    ©2025 PT Byde Cloudata Ekosistem. All Rights Reserved
                </p>
                </div>
                
            </div>
            </div>
        </div>
      </div>
    </>
  );
}