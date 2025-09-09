'use client';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from "next/link";

export default function ServiceCardSection() {
  return (
    <div className="w-full flex flex-col max-w-7xl px-8 md:px-10 justify-center">
        <motion.h1
            initial={{ opacity: 0.5, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
            }}
            className="mt-8 py-4 text-2xl md:text-4xl font-bold text-white mb-4 bg-clip-text text-center tracking-tight z-10"
            >
                Our Services
        </motion.h1>
        <div className='flex flex-col lg:flex-row justify-center gap-10'>
            <div className="flex flex-col justify-center gap-4">
                <Image
                    src="/services/service-chatbot.png"
                    alt="services-chatbot"
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover"
                />
                <Link href="/services/chatbot">
                    <Button 
                        type="submit"
                        variant="gradientOutline"
                        className="w-full px-6 md:px-8 py-2 md:py-3 text-sm md:text-base cursor-pointer rounded-3xl shadow-md"
                    >
                        SEE MORE
                    </Button>
                </Link>
            </div>
            <div className="flex flex-col justify-center gap-4">
                <Image
                    src="/services/service-crm.png"
                    alt="services-crm"
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover"
                />
                <Link href="/services/crm">
                    <Button 
                        type="submit"
                        variant="gradientOutline"
                        className="w-full px-6 md:px-8 py-2 md:py-3 text-sm md:text-base cursor-pointer rounded-3xl shadow-md"
                    >
                        SEE MORE
                    </Button>
                </Link>
            </div>
        </div>
    </div>
  );
}