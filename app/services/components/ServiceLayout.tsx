import BookADemo from "../../components/BookADemo/BookADemo";
import ServiceHeroSection from './ServiceHeroSection';
import ServiceInfoSection from './ServiceInfoSection';
import PricingSection from './PricingSection';
import { ServicePageProps } from '@/app/types/service';

export default function ServicePageLayout({ serviceData, plans }: Readonly<ServicePageProps>) {
  return (
    <div className='flex flex-col items-center justify-center mx-auto'>
      <ServiceHeroSection />
      <ServiceInfoSection serviceData={serviceData} />
      <PricingSection plans={plans} />
      <BookADemo />
    </div>
  );
}