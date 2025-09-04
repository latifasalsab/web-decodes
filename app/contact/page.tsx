
import CustomAccordion from "./component/Accordion";
import { contactFAQData } from "../data/faqData";
import CardContact from "./component/cardContact";
import HeroMotion from "./component/HeroMotion"; 
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact",
}

export default function ContactPage() {
  return (
      <div>
      <HeroMotion />
      
      <div className="w-full px-6 bg-black min-h-screen">
        <div className="max-w-7xl mx-auto py-18 bg-black">
          <div className="grid gird-cols-1 lg:grid-cols-2 gap-12 items-start bg-black">
            <div className="flex flex-col justify-center items-center h-full text-white bg-black">
              <div className="text-left">
                <h1 className="text-4xl lg:text-5xl font-bold">
                  Hi! We are always
                  <br />
                  here to <span className="text-blue-500">help you.</span>
                </h1>
                <p className="text-gray-400 text-lg mt-4">
                  Want to find out how Decodes can solve
                  <br />
                  problems specifics to your business? Let's talk.
                </p>
              </div>
            </div>
              <CustomAccordion items={contactFAQData} />
          </div>
        </div>
          <CardContact />
      </div>
    </div>
  );
}
