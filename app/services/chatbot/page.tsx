"use client";
import { useState, useRef, useLayoutEffect } from "react";
import { AnimatePresence, motion } from 'motion/react';
import NavbarProps from "../../components/Navbar/Navbar";
import Image from 'next/image';
import Link from 'next/link';

export default function ChatbotService() {
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
            }}>
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
            <div className="w-full h-screen flex">
                <div className="flex w-[50%]">
                    <Image
                        src="/services/service-chatbot.png"
                        alt="service-chatbot"
                        width={500}
                        height={500}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex flex-col w-[50%] p-4 w-[90%] items-center justify-center">
                    <p className="text-white">Chatbot AI</p>
                    <p className="text-white">Our Chatbot AI is designed to transform the way businesses interact with customers. By leveraging advanced natural language processing, it enables seamless communication, instant responses, and personalized customer experiences. Whether for customer service, lead generation, or internal support, our AI-powered chatbot helps reduce response time, increase engagement, and provide consistent support 24/7. With intelligent automation, businesses can save valuable resources while improving customer satisfaction.</p>
                    <div className="flex flex-col gap-4 mt-4">
                        <p className="text-white">Key Features</p>
                        <ul>
                            <li className="text-white">24/7 automated customer support</li>
                            <li className="text-white">Natural language processing for human-like conversations</li>
                            <li className="text-white">Integration with multiple platforms (Web, WhatsApp, Messenger, etc.)</li>
                            <li className="text-white">Multi-language support</li>
                            <li className="text-white">Lead generation and qualification capabilities</li>
                            <li className="text-white">Personalized responses based on customer data</li>
                            <li className="text-white">Analytics dashboard for performance tracking</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}