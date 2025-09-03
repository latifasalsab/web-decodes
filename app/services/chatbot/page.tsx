import ServicePageLayout from '../components/ServiceLayout';
import { chatbotServiceData, servicePlans } from '@/app/data/serviceData';

export default function ChatbotService() {
  return (
    <ServicePageLayout 
      serviceData={chatbotServiceData} 
      plans={servicePlans} 
    />
  );
}