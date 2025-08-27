"use client";
import { useState, useRef, useLayoutEffect } from "react";
import { AnimatePresence, motion } from 'motion/react';
import NavbarProps from "../../components/Navbar/Navbar";
import Image from 'next/image';
import Link from 'next/link';

export default function ChatbotService() {
    return (
        <div className='relative w-screen bg-[#000] flex flex-col items-center justify-center w-full mx-auto'>
            <NavbarProps />
            
            {/* Hero Section */}
            <div className="relative w-full flex items-center justify-center h-screen">
                <div 
                className="absolute inset-0 bg-cover bg-center brightness-65"
                style={{
                    backgroundImage: "url('/services/bg.png')",
                }}
                ></div>
                <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="mt-8 py-4 text-white bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent md:text-6xl z-10"
                >
                    SERVICE <br /> What You Get
                </motion.h1>
            </div>
            
            {/* Content Section - Responsive 50/50 Layout */}
            <div className="w-full min-h-screen flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 h-64 md:h-96 lg:h-screen">
                    <Image
                        src="/services/service-chatbot.png"
                        alt="service-chatbot"
                        width={500}
                        height={500}
                        className="w-full h-full object-cover"
                    />
                </div>
                
                {/* Text Content Section */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 md:p-10 xl:p-16">
                    <div className="max-w-2xl mx-auto lg:mx-0">
                        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
                            Chatbot AI
                        </h2>
                        
                        <p className="text-gray-300 text-sm xl:text-lg leading-relaxed mb-8">
                            Our Chatbot AI is designed to transform the way businesses interact with customers. 
                            By leveraging advanced natural language processing, it enables seamless communication, 
                            instant responses, and personalized customer experiences. Whether for customer service, 
                            lead generation, or internal support, our AI-powered chatbot helps reduce response time, 
                            increase engagement, and provide consistent support 24/7. With intelligent automation, 
                            businesses can save valuable resources while improving customer satisfaction.
                        </p>
                        
                        <div className="space-y-4">
                            <h3 className="text-white text-lg md:text-xl font-semibold">Key Features</h3>
                            <ul className="space-y-2 text-gray-300 text-sm xl:text-lg">
                                <li className="flex items-start">
                                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    24/7 automated customer support
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Natural language processing for human-like conversations
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Integration with multiple platforms (Web, WhatsApp, Messenger, etc.)
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Multi-language support
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Lead generation and qualification capabilities
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Personalized responses based on customer data
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Analytics dashboard for performance tracking
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full my-10 px-8 md:px-10">
                <div className="max-w-7xl mx-auto w-full">
                    <motion.h1
                        initial={{ opacity: 0.5, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.6,
                            ease: "easeInOut",
                        }}
                        className="flex flex-col items-center"
                    >
                        <div className="mb-10 flex flex-col items-center">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                            Price & Packages
                            {/* {' '} */}
                            {/* <span className="text-[#9933EF]">Our Solutions</span> */}
                            </h2>
                            <p className="text-base md:text-lg font-bold text-white mb-4">Maximum Performance at The Best Price</p>
                        </div>
                    </motion.h1>
                </div>

            </div>
        </div>
    )
}