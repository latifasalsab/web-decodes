import React from 'react';
import { motion } from 'motion/react';
import { valueData } from '../../data/valueData';

const TheValue = () => {
  return (
    <section className="py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0.5, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Value Behind{' '}
            <span className="text-[#9933EF]">Our Solutions</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {valueData.map((item, index) => (
            <div key={index} className="group">
              <div 
                className="h-full rounded-2xl p-8 transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#1f1f1f' }}
              >
                <img 
                  src={item.icon} 
                  alt="" 
                  className="mb-6 w-[36px] h-auto" 
                />
                <h3 className="text-xl font-semibold text-white mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheValue;