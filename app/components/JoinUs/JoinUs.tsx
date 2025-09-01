"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button"

export default function JoinUs() {
    const [email, setEmail] = useState('');
    
      const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('Email submitted:', email);
    
    };
    return (
        <div className="w-full my-10 px-8 md:px-10 py-10 bg-black">
            <div className="max-w-7xl mx-auto">
            <div className="relative bg-gradient-to-br from-[#1F1F1F] via-[#1F1F1F] to-purple-700/50 rounded-3xl shadow-2xl px-8 py-8 overflow-hidden">
                
                <div className="relative z-10 justify-start">
                
                <div className="mb-4 flex flex-col items-start">
                    <img 
                    src="/logo_decodes/logo_decodes.png"
                    alt="logo decodes"
                    width={80}
                    height={96}
                    className="mb-3"/>
                    
                    <div className="w-70 md:w-100 h-px bg-gradient-to-r from-[#2032E0] to-[#7666EB]"></div>
                </div>

                
                <h1 className="text-white text-base md:text-lg lg:text-xl font-bold mb-8 leading-tight">
                    JOIN OUR DIGITAL INSIGHT!
                </h1>

                <div className="flex flex-col md:flex-row justify-start items-start text-white gap-4 md:gap-6 mb-6 text-sm">
                    <div>
                    <p>
                        Tren updates, Technology and Exclusive Tips Straight to Your Inbox
                    </p>
                    </div>
                    
                </div>

                <div className="flex flex-col sm:flex-row justify-start items-start gap-3">
                    <div className="relative">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full sm:w-96 md:w-96 lg:w-120 bg-transparent backdrop-blur-sm text-white placeholder-white/70 px-2 py-2 pr-32 rounded-full border border-blue-900 max-w-7xl transition-all duration-200
                        focus:ring-0 focus:outline-none"
                    />
                    <Button
                        onClick={handleSubmit}
                        className="absolute right-1 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#0421DE] to-[#5D56E9] text-white px-6 py-1 rounded-full font-semibold text-sm"
                    >
                        JOIN NOW
                    </Button>
                    </div> 
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}