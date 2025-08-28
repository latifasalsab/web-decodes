"use client";
import { motion } from 'motion/react';
import NavbarProps from "../components/Navbar/Navbar";
import Footer from '../components/Footer/Footer';
import Logos from '../components/Logos/Logos';
import React, { useState } from "react";
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    businessName: '',
    subject: '',
    messages: ''
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    
  };

  return (
    <div className='relative w-screen bg-[#000] flex flex-col items-center justify-center w-full max-w-[100%] mx-auto custom-scrollbar'>
      <NavbarProps />
      <div className="relative w-full flex items-center justify-center h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-65"
          style={{ backgroundImage: "url('/contact/img_herocontact.png')" }}
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
                CONTACT US
            </h1>
            <h6 className='text-2xl font-normal md:text-5xl'>
                Get In Touch With Us Today
            </h6>
        </div>
        </motion.h1>
      </div>

      {/* CONTENT */}
      <div className="w-full px-6 bg-black min-h-screen">
        <div className="max-w-7xl mx-auto py-12 bg-black">
          <div className="grid gird-cols-1 lg:grid-cols-2 gap-12 items-start bg-black">
            <div className="flex flex-col justify-center items-center h-full text-white bg-black">
              <div className="text-left">
                <h1  className="text-4xl lg:text-5xl font-bold">  
                  Hi! We are always<br />here to <span className="text-blue-500">help you.</span>
                </h1>
                <p className="text-gray-400 text-lg mt-4">
                  Want to find out how Decodes can solve<br />
                  problems specifics to your business? Let's talk.
                </p>
              </div>
            </div>

            <div>
              <Accordion
                type="single"
                collapsible
                className="w-full space-y-3"
                defaultValue="item-1"
              >
                <AccordionItem value="item-1" className="bg-gray-800 rounded-lg border-none">
                  <AccordionTrigger className="text-white hover:no-underline px-6 py-3 text-left">
                    What is the AI Chatbot offered?
                  </AccordionTrigger>
                  <AccordionContent className="text-white px-6 pb-4">
                    Our AI Chatbot helps your business respond to customers automatically with intelligent conversations 24/7.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2 " className="bg-gray-800 rounded-lg border-none">
                  <AccordionTrigger className="text-white hover:no-underline px-6 py-3 text-left">
                    Can the CRM Integration be customized to my business needs?

                  </AccordionTrigger>
                  <AccordionContent className="text-white px-6 pb-4">
                    Yes, our CRM Integration can be customized according to your workflow and business needs.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-gray-800 rounded-lg border-none">
                  <AccordionTrigger className="text-white hover:no-underline px-6 py-3 text-left">
                    How can I request a demo of the service?
                  </AccordionTrigger>
                  <AccordionContent className="text-white px-6 pb-4">
                    You can click the “Book a Demo” button on our website, and our team will contact you to schedule a presentation.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-gray-800 rounded-lg border-none">
                  <AccordionTrigger className="text-white hover:no-underline px-6 py-3 text-left">
                    Is there a free trial available?
                  </AccordionTrigger>
                  <AccordionContent className="text-white px-6 pb-4">
                    A free trial is available for certain packages so you can try the features before subscribing.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-gray-800 rounded-lg border-none">
                  <AccordionTrigger className="text-white hover:no-underline px-6 py-3 text-left">
                    What payment methods are available?
                  </AccordionTrigger>
                  <AccordionContent className="text-white px-6 pb-4">
                    We accept payments via bank transfer, credit card, and commonly used e-wallets in Indonesia.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-gray-800 rounded-lg border-none">
                  <AccordionTrigger className="text-white hover:no-underline px-6 py-3 text-left">
                    What if I need technical support?
                  </AccordionTrigger>
                  <AccordionContent className="text-white px-6 pb-4">
                    Our support team is ready to assist you via email, chat, or support tickets with a quick response.
                  </AccordionContent>
                </AccordionItem>

              </Accordion>
            </div>
          </div>



        </div>

        <div className="w-full h-full bg-black flex items-center justify-center py-12">
          <Card className="w-full max-w-7xl bg-black border-2 rounded-4xl border-white">
            <CardContent className="p-0">
              {/* Container utama dengan 3 bagian: header + form (2 col) + image */}
              <div className="flex flex-col lg:flex-row">
                <div className="flex-1">
                  <div className="p-6 pb-6">
                    <CardTitle className="text-white text-xl font-semibold mb-2">
                      SEND US A MESSAGES
                    </CardTitle>
                    <CardDescription className="text-gray-300 text-sm leading-relaxed">
                      Do you have a question? A complaint? Or need any help to choose the right service from
                      Decodes. <br />Feel free to contact us
                    </CardDescription>
                  </div>

                  {/* Form content - 2 kolom */}
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-white text-sm mb-2">Full Name</label>
                          <input
                            type="text"
                            name="fullName"
                            placeholder="Enter your full name"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className="w-full bg-[#1F1F1F] border-[#1F1F1F] rounded-md px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-white text-sm mb-2">Phone Number</label>
                          <input
                            type="tel"
                            name="phoneNumber"
                            placeholder="Enter your phone number"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            className="w-full bg-[#1F1F1F] border-[#1F1F1F] rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-white text-sm mb-2">Email</label>
                          <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full bg-[#1F1F1F] border-[#1F1F1F] rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-white text-sm mb-2">Business Name</label>
                          <input
                            type="text"
                            name="businessName"
                            placeholder="Enter your business name"
                            value={formData.businessName}
                            onChange={handleInputChange}
                            className="w-full bg-[#1F1F1F] border-[#1F1F1F] rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 text-sm"
                          />
                        </div>
                      </div>

                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-white text-sm mb-2">Subject</label>
                          <div className="relative">
                            <select
                              name="subject"
                              value={formData.subject}
                              onChange={handleInputChange}
                              className="w-full bg-[#1F1F1F] border-[#1F1F1F] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-400 text-sm appearance-none cursor-pointer"
                            >
                              <option value="">Choose a subject</option>
                              <option value="general">General Inquiry</option>
                              <option value="support">Technical Support</option>
                              <option value="billing">Billing Question</option>
                              <option value="complaint">Complaint</option>
                              <option value="feedback">Feedback</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                              <svg
                                className="w-4 h-4 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div className="flex-1">
                          <label className="block text-white text-sm mb-2">Messages</label>
                          <textarea
                            name="messages"
                            placeholder="Enter your messages"
                            value={formData.messages}
                            onChange={handleInputChange}
                            rows={6.5}
                            className="w-full bg-[#1F1F1F] border-[#1F1F1F] rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 text-sm resize-none"
                          />
                        </div>

                        <div className="mt-auto flex justify-center">
                          <Button
                            onClick={handleSubmit}
                            className="w-auto sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-24 sm:px-24 rounded-3xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-sm items-center"
                          >
                            SUBMIT
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex items-start justify-center lg:justify-start lg:order-last">
                  <Image
                    src="/contact/img_contact.png"
                    alt="Contact Image"
                    width={260}
                    height={260}
                    className="hidden lg:block" 

                    
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
