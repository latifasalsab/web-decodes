"use client";
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FormData, ContactCardProps, AccordionItemType } from "../../types/contact";

interface CustomAccordionProps {
  items: AccordionItemType[];
  defaultValue?: string;
  className?: string;
}

const CustomAccordion: React.FC<CustomAccordionProps> = ({ 
  items, 
  defaultValue = "item-1",
  className = ""
}) => {
  return (
    <Accordion
      type="single"
      collapsible
      className={`w-full space-y-3 ${className}`}
      defaultValue={defaultValue}
    >
      {items.map((item) => (
        <AccordionItem 
          key={item.id} 
          value={item.id} 
          className="bg-gray-800 rounded-lg border-none"
        >
          <AccordionTrigger className="text-white hover:no-underline px-6 py-3 text-left">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-white px-6 pb-4">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CustomAccordion;