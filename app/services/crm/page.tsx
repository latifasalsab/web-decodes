import ServicePageLayout from '../components/ServiceLayout';
import { crmServiceData, servicePlans } from '@/app/data/serviceData';

export default function CRMService() {
  return (
    <ServicePageLayout 
      serviceData={crmServiceData} 
      plans={servicePlans} 
    />
  );
}