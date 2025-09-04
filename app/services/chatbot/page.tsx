import ServicePageLayout from '../components/ServiceLayout';
import { chatbotServiceData, servicePlans } from '@/app/data/serviceData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Chatbot Service",
}

export default function ChatbotService() {
  return (
    <ServicePageLayout 
      serviceData={chatbotServiceData} 
      plans={servicePlans} 
    />
  );
}