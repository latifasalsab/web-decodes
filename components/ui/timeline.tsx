"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full max-w-full font-sans md:px-10 mx-auto relative"
      ref={containerRef}
    >
      {/* <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-gradient-to-r from-[#0421DE] to-[#C1ABF7] opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute top-96 left-1/4 w-[250px] md:w-[350px] h-[250px] md:h-[350px] bg-gradient-to-r from-[#0421DE] to-[#C1ABF7] opacity-15 blur-3xl rounded-full"></div>
        <div className="absolute bottom-32 right-1/4 w-[250px] md:w-[350px] h-[250px] md:h-[350px] bg-gradient-to-r from-[#C1ABF7] to-[#0421DE] opacity-15 blur-3xl rounded-full"></div>
      </div> */}
      
      <div ref={ref} className="relative max-w-[80%] mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 lg:pt-20 lg:gap-10 relative min-h-[60vh] lg:min-h-[80vh]"
          >
            <div className="sticky top-10 lg:top-20 self-start max-w-xs lg:max-w-sm lg:w-full h-fit z-40">
              <div className="h-6 lg:h-10 w-6 lg:w-10 absolute -left-5 lg:left-3 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-2 lg:h-4 w-2 lg:w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>

              <motion.h1
                initial={{ opacity: 0.5, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="hidden lg:block text-xl lg:pl-20 lg:text-3xl font-bold text-white"
              >
                {item.title}
              </motion.h1>
            </div>

            <div className="relative pl-8 lg:pl-16 pr-4 w-full">
              <motion.h1
                initial={{ opacity: 0.5, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="lg:hidden block text-2xl lg:text-2xl mb-4 text-left font-bold text-white"
              >
                {item.title}
              </motion.h1>

              <div className="min-h-[50vh] lg:min-h-[70vh]">
                {item.content}
              </div>
            </div>
          </div>
        ))}
        
        <div
          style={{
            height: height + "px",
          }}
          className="absolute -left-2 md:-left-2 lg:left-8 top-0 w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};