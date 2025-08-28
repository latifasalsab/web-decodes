"use client";
import { motion } from 'motion/react';
import NavbarProps from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BookADemo from "../../components/BookADemo/BookADemo";
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface Plan {
  id: string;
  name: string;
  price: string;
  subtitle: string;
  popular: boolean;
  features: string[];
}

export default function ChatbotService() {
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('credit-card');

    const plans: Plan[] = [
        {
        id: 'pro',
        name: 'Pro',
        price: '1.499K',
        subtitle: 'Equivalent to 1-2 Additional Admin',
        popular: false,
        features: [
            '3.000 Maximum Active Users',
            '5 Human Agents',
            'Unlimited AI Agents',
            'Unlimited Inboxes',
            '15.000 AI Responses',
            'Decodes Advanced AI Models',
            'Complete Documentation',
            'Free App Training',
            'Free Support'
        ]
        },
        {
        id: 'business',
        name: 'Business',
        price: '3.799K',
        subtitle: 'Equivalent to 3-5 Additional Admin',
        popular: true,
        features: [
            '10.000 Maximum Active Users',
            '7 Human Agents',
            'Unlimited AI Agents',
            'Unlimited Inboxes',
            '50.000 AI Responses',
            'Decodes Advanced AI Models',
            'Free Onboarding and Setup',
            'Dedicated Support',
            'Complete Documentation',
            'OpenAPI Access',
            'Free App Training',
            'Free 1 No. WA whitelist'
        ]
        },
        {
        id: 'enterprise',
        name: 'Enterprise',
        price: '5.799K',
        subtitle: 'Equivalent to 7-10 Additional Admin',
        popular: false,
        features: [
            '30.000 Maximum Active Users',
            '10 Human Agents',
            'Unlimited AI Agents',
            'Unlimited Inboxes',
            '150.000 AI Responses',
            'Decodes Advanced AI Models',
            'Free Onboarding and Setup',
            'Dedicated Support',
            'Complete Documentation',
            'OpenAPI Access',
            'Free App Training',
            'Free 1 No. WA whitelist'
        ]
        },
        {
        id: 'unlimited',
        name: 'Unlimited+',
        price: '15.799K',
        subtitle: 'Equivalent to 20-30 Additional Admin',
        popular: false,
        features: [
            'Unlimited Maximum Active Users',
            '30 Human Agents',
            'Unlimited AI Agents',
            'Unlimited Inboxes',
            '500.000 AI Responses',
            'Decodes Advanced AI Models',
            'Free Onboarding and Setup',
            'Dedicated Support',
            'Complete Documentation',
            'OpenAPI Access',
            '24/7 On Call Support',
            'Free 2 No. WA whitelist'
        ]
        }
    ];

    const openModal = (planId: string) => {
        setSelectedPlan(planId);
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

    const selectedPlanData = plans.find(plan => plan.id === selectedPlan);
    
    return (
        <div className='relative w-screen bg-[#000] flex flex-col items-center justify-center mx-auto custom-scrollbar'>
            <NavbarProps />
            
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
                className="mt-8 py-4 text-white bg-clip-text text-center tracking-tight text-transparent z-10"
                >
                    <div>
                        <h1 className='text-2xl font-medium md:text-5xl mb-2'>
                            SERVICE
                        </h1>
                        <h6 className='text-2xl font-normal md:text-5xl'>
                            What You Get
                        </h6>
                    </div>
                </motion.h1>
            </div>
            
            <div className="w-full min-h-screen flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 h-64 md:h-96 lg:h-screen">
                    <Image
                        src="/services/service-chatbot.png"
                        alt="service-chatbot"
                        width={500}
                        height={500}
                        className="w-full h-full object-cover"
                    />
                </div>
                
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
                                    {' '} 24/7 automated customer support
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    {' '} Natural language processing for human-like conversations
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    {' '} Integration with multiple platforms (Web, WhatsApp, Messenger, etc.)
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    {' '} Multi-language support
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    {' '} Lead generation and qualification capabilities
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    {' '} Personalized responses based on customer data
                                </li>
                                <li className="flex items-start">
                                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    {' '} Analytics dashboard for performance tracking
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

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
                    <div className="mb-10 flex flex-col items-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                        Price & Packages
                        </h2>
                        <p className="text-base md:text-lg text-white mb-4">Maximum Performance at The Best Price</p>
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
                        onClick={() => openModal(plan.id)}
                        className={`w-full transition-all duration-300 cursor-pointer ${
                            plan.popular
                            ? 'text-white'
                            : 'bg-transparent border-2 border-[#363FE4] text-white'
                        }`}
                        >
                            REGIST NOW
                        </Button>
                    </div>
                    ))}
                </div>

                {selectedPlan && selectedPlanData && (
                    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-[#2a2a2a] rounded-3xl max-w-3xl w-full mx-auto relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2 z-10"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="p-6 pb-4 w-full">
                        <h3 className="text-white text-xl font-semibold mb-4 text-center">Choose Payment Method</h3>
                        
                        <div className="grid grid-cols-2 gap-3 mb-6">
                            <button
                                type="button"
                                className={`border rounded-lg py-4 px-4 md:px-10 cursor-pointer text-left transition-all ${
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

                        <div className="bg-[#3a3a3a] rounded-lg p-4 mb-6 flex justify-between items-center mb-2">
                            <div className="flex flex-col justify-between">
                                <div className="text-white font-medium">{selectedPlanData.name.toUpperCase()}</div>
                                <div className="text-gray-400 text-sm">3 Months (-5% Discount)</div>
                            </div>
                            <div className="text-white font-bold">{(parseFloat(selectedPlanData.price.replace('.', '').replace('K', '000')) * 3 * 0.95).toLocaleString('id-ID')} IDR</div>
                        </div>

                        <div className="bg-[#4a4a4a] rounded-lg p-3 mb-6">
                            <div className="text-gray-300 text-sm text-center">
                            The {selectedPlanData.name} plan will be active for 3 months, from today until November 14, 2025.
                            </div>
                        </div>

                        <div className="space-y-2 mb-4 text-sm">
                            <div className="flex justify-between text-white">
                            <span>Plan Price</span>
                            <span>{(parseFloat(selectedPlanData.price.replace('.', '').replace('K', '000')) * 3).toLocaleString('id-ID')} IDR</span>
                            </div>
                            <div className="flex justify-between text-white">
                            <span>Duration Discount</span>
                            <span>-{(parseFloat(selectedPlanData.price.replace('.', '').replace('K', '000')) * 3 * 0.05).toLocaleString('id-ID')} IDR</span>
                            </div>
                            <hr className="border-gray-600" />
                            <div className="flex justify-between text-white font-bold">
                            <span>Total Payment</span>
                            <span>{(parseFloat(selectedPlanData.price.replace('.', '').replace('K', '000')) * 3 * 0.95).toLocaleString('id-ID')} IDR</span>
                            </div>
                        </div>

                        <div className="text-gray-400 text-xs mb-6 text-center">
                            Subscription renewal will only extend the active period. And AI Response will reset automatically every month on the 1st.
                        </div>
                        </div>

                        <div className="p-6 pt-0">
                        <button className="w-full bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] hover:from-[#4338ca] hover:to-[#6d28d9] text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300">
                            CONFIRM AND PAY
                        </button>
                        </div>
                    </div>
                    </div>
                )}
            </div>

            <BookADemo />
            
            <Footer />
        </div>
    )
}