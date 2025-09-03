"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  if (pathname === "/login") return null;
  
  return (
    <div 
    className="w-full md:h-[30vh] bg-cover bg-center"
    style={{ backgroundImage: "url('/footer.png')" }}
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
                    src="/icons/location.png"
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
                    src="/icons/telephone.png"
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
            <div className="group flex items-center justify-center py-2 px-4 rounded-full border border-neutral-400 border-solid transition-all duration-300 hover:bg-white cursor-pointer">
                <p className="text-white text-xs lg:text-sm xl:text-base group-hover:text-black">INSTAGRAM</p>
            </div>
            <div className="group flex items-center justify-center py-2 px-4 rounded-full border border-neutral-400 border-solid transition-all duration-300 hover:bg-white cursor-pointer">
                <p className="text-white text-xs lg:text-sm xl:text-base group-hover:text-black">LINKEDIN</p>
            </div>
            </div>
            <p className="text-white text-xs lg:text-xs xl:text-sm text-center lg:text-right">
            ©2025 PT Byde Cloudata Ekosistem. All Rights Reserved
            </p>
        </div>
        
        </div>
    </div>
    </div>
  );
}