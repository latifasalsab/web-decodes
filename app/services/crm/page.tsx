import ServicePageLayout from '../components/ServiceLayout';
import { crmServiceData, servicePlans } from '@/app/data/serviceData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "CRM Service",
  description: "Learn about Decodes CRM services to optimize your business processes and customer relationships."
}

export default function CRMService() {
  return (
    <ServicePageLayout 
      serviceData={crmServiceData} 
      plans={servicePlans} 
    />
  );
}