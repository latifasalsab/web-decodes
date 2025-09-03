'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Plan } from '@/app/types/service';
import PricingModal from './PricingModal';

interface PricingSectionProps {
  plans: Plan[];
}

export default function PricingSection({ plans }: Readonly<PricingSectionProps>) {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const openModal = (plan: Plan) => {
    setSelectedPlan(plan);
  };

  const closeModal = () => {
    setSelectedPlan(null);
  };

  useEffect(() => {
    if (selectedPlan) {
      const originalStyle = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      document.body.style.overflowX = 'hidden';
      
      return () => {
        document.body.style.overflow = originalStyle;
        document.body.style.overflowX = '';
      };
    }
  }, [selectedPlan]);

  return (
    <>
      <div className="w-full my-10 px-8 md:px-10 max-w-7xl mx-auto">
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
          <div className="mb-10 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Price & Packages
            </h2>
            <p className="text-base font-light md:text-lg text-white mb-4">Maximum Performance at The Best Price</p>
          </div>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl border-2 p-5 h-fit ${
                plan.popular 
                  ? 'gradient-border-price' 
                  : 'border-[#363FE4] bg-gray-800/30'
              } backdrop-blur-sm transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#FA8E49] to-[#FF6300] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-white text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-white text-3xl font-bold">Rp.{plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-400 text-sm">{plan.subtitle}</p>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex">
                    <img src="/icons/checklist.png" className="h-5 mr-3 flex-shrink-0" alt="" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => openModal(plan)}
                className={`w-full transition-all duration-300 cursor-pointer ${
                  plan.popular
                    ? 'bg-gradient-to-r from-[#0421DE] to-[#5D56E9] text-white'
                    : 'bg-transparent border-2 border-[#363FE4] text-white hover:bg-gradient-to-r hover:from-[#0421DE] hover:to-[#5D56E9] hover:text-white hover:border-none'
                }`}
              >
                REGIST NOW
              </Button>
            </div>
          ))}
        </div>
      </div>

      <PricingModal 
        selectedPlan={selectedPlan} 
        onClose={closeModal} 
      />
    </>
  );
}