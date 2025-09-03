// components/PricingModal.tsx
'use client';
import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Plan } from '@/app/types/service';

interface PricingModalProps {
  readonly selectedPlan: Plan | null;
  readonly onClose: () => void;
}

export default function PricingModal({ selectedPlan, onClose }: PricingModalProps) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('credit-card');

  if (!selectedPlan) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#2a2a2a] rounded-3xl max-w-3xl w-full mx-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2 z-10 cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-6 pb-4 w-full">
          <h3 className="text-white text-xl font-semibold mb-4 text-center">Choose Payment Method</h3>
          
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              type="button"
              className={`border rounded-lg py-4 px-4 md:px-10 text-left transition-all cursor-pointer ${
                selectedPaymentMethod === 'credit-card' 
                ? 'border-[#3740E4] bg-[#3740E4]/10' 
                : 'border-gray-600 hover:border-gray-500'
              }`}
              onClick={() => setSelectedPaymentMethod('credit-card')}
            >
              <div className='flex flex-col w-full items-start'>
                <p className="text-white font-medium text-sm">Credit Card (Subscription)</p>
                <p className="text-gray-400 text-sm">Enjoy automatic renewal</p>
              </div>
            </button>
            
            <button
              type="button"
              className={`border rounded-lg py-4 px-4 md:px-10 cursor-pointer text-left transition-all ${
                selectedPaymentMethod === 'bank-transfer' 
                ? 'border-[#3740E4] bg-[#3740E4]/10' 
                : 'border-gray-600 hover:border-gray-500'
              }`}
              onClick={() => setSelectedPaymentMethod('bank-transfer')}
            >
              <div className="text-white font-medium text-sm">Bank Transfer / QRIS</div>
              <div className="text-gray-400 text-xs">Pay once and top up as needed</div>
            </button>
          </div>

          <div className="bg-[#3a3a3a] rounded-lg p-4 flex justify-between items-center mb-2">
            <div className="flex flex-col justify-between">
              <div className="text-white font-medium">{selectedPlan.name.toUpperCase()}</div>
              <div className="text-gray-400 text-sm">3 Months (-5% Discount)</div>
            </div>
            <div className="text-white font-bold">
              {(parseFloat(selectedPlan.price.replace('.', '').replace('K', '000')) * 3 * 0.95).toLocaleString('id-ID')} IDR
            </div>
          </div>

          <div className="bg-[#4a4a4a] rounded-lg p-3 mb-6">
            <div className="text-gray-300 text-sm text-center">
              The {selectedPlan.name} plan will be active for 3 months, from today until November 14, 2025.
            </div>
          </div>

          <div className="space-y-2 mb-4 text-sm">
            <div className="flex justify-between text-white">
              <span>Plan Price</span>
              <span>{(parseFloat(selectedPlan.price.replace('.', '').replace('K', '000')) * 3).toLocaleString('id-ID')} IDR</span>
            </div>
            <div className="flex justify-between text-white">
              <span>Duration Discount</span>
              <span>-{(parseFloat(selectedPlan.price.replace('.', '').replace('K', '000')) * 3 * 0.05).toLocaleString('id-ID')} IDR</span>
            </div>
            <hr className="border-gray-600" />
            <div className="flex justify-between text-white font-bold">
              <span>Total Payment</span>
              <span>{(parseFloat(selectedPlan.price.replace('.', '').replace('K', '000')) * 3 * 0.95).toLocaleString('id-ID')} IDR</span>
            </div>
          </div>

          <div className="text-gray-400 text-xs mb-6 text-center">
            Subscription renewal will only extend the active period. And AI Response will reset automatically every month on the 1st.
          </div>
        </div>

        <div className="p-6 pt-0">
          <Button 
            variant="gradientOutline"
            className="w-full transition-all duration-300 cursor-pointer"
            onClick={onClose}
          >
            CONFIRM AND PAY
          </Button>
        </div>
      </div>
    </div>
  );
}