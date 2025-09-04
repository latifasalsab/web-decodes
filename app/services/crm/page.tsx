import ServicePageLayout from '../components/ServiceLayout';
import { crmServiceData, servicePlans } from '@/app/data/serviceData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "CRM Service",
}

export default function CRMService() {
  return (
    <ServicePageLayout 
      serviceData={crmServiceData} 
      plans={servicePlans} 
    />
  );
}