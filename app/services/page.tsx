import BookADemo from "./../components/BookADemo/BookADemo";
import ServiceHeroSection from "./components/ServiceHeroSection";
import ServiceCardSection from "./components/ServicesCardSection";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Service",
}

export default function NewsPage() {
    return (
        <div className='flex flex-col items-center justify-center mx-auto w-full'>
            <ServiceHeroSection />
            <ServiceCardSection />
            <BookADemo />
        </div>
    )
}