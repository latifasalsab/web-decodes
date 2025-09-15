import ServicePageLayout from '../components/ServiceLayout';
import { chatbotServiceData, servicePlans } from '@/app/data/serviceData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Chatbot Service",
  description: "Discover Decodes chatbot solutions to enhance your customer engagement and support."
}

export default function ChatbotService() {
  return (
    <ServicePageLayout 
      serviceData={chatbotServiceData} 
      plans={servicePlans} 
    />
  );
}