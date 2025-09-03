"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import type { FormData, ContactCardProps } from "../../types/contact";


const ContactCard: React.FC<ContactCardProps> = ({ 
  onSubmit,
  className = ""
}) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phoneNumber: "",
    email: "",
    businessName: "",
    subject: "",
    messages: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(formData);
    } else {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div
      className={`w-full h-full bg-black flex items-center justify-center py-18 ${className}`}
    >
      <Card className="w-full max-w-7xl bg-black border-2 rounded-4xl border-white">
        <CardContent className="p-0">
          <div className="flex flex-col lg:flex-row">
            {/* LEFT SIDE */}
            <div className="flex-1">
              <div className="p-6 pb-6">
                <CardTitle className="text-white text-xl font-semibold mb-2">
                  SEND US A MESSAGES
                </CardTitle>
                <CardDescription className="text-gray-300 text-sm leading-relaxed">
                  Do you have a question? A complaint? Or need any help to choose
                  the right service from Decodes. <br />
                  Feel free to contact us
                </CardDescription>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* LEFT FORM */}
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-white text-sm mb-2"
                      >
                        Full Name
                      </label>
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
                      <label
                        htmlFor="phoneNumber"
                        className="block text-white text-sm mb-2"
                      >
                        Phone Number
                      </label>
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
                      <label
                        htmlFor="email"
                        className="block text-white text-sm mb-2"
                      >
                        Email
                      </label>
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
                      <label
                        htmlFor="businessName"
                        className="block text-white text-sm mb-2"
                      >
                        Business Name
                      </label>
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

                  {/* RIGHT FORM */}
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-white text-sm mb-2"
                      >
                        Subject
                      </label>
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
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <label
                        htmlFor="messages"
                        className="block text-white text-sm mb-2"
                      >
                        Messages
                      </label>
                      <textarea
                        name="messages"
                        placeholder="Enter your messages"
                        value={formData.messages}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full bg-[#1F1F1F] border-[#1F1F1F] rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 text-sm resize-none"
                      />
                    </div>

                    <div className="mt-auto flex justify-center">
                      <Button
                        onClick={handleSubmit}
                        variant="gradientOutline"
                        className="w-auto sm:w-auto text-white font-medium py-3 px-24 sm:px-24 text-sm items-center cursor-pointer"
                      >
                        SUBMIT
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE IMAGE */}
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
  );
};

export default ContactCard;
