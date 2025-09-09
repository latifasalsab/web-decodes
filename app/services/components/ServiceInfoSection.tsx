import Image from 'next/image';
import { ServiceData } from '@/app/types/service';

interface ServiceInfoSectionProps {
  readonly serviceData: ServiceData;
}

export default function ServiceInfoSection({ serviceData }: ServiceInfoSectionProps) {
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 p-6 md:p-10 xl:p-0">
        <Image
          src={serviceData.image}
          alt={serviceData.title}
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 md:p-10 xl:p-16">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
            {serviceData.title}
          </h2>
          
          <p className="text-gray-300 text-sm xl:text-lg leading-relaxed mb-8">
            {serviceData.description}
          </p>
          
          <div className="space-y-4">
            <h3 className="text-white text-lg md:text-xl font-semibold">Key Features</h3>
            <ul className="space-y-2 text-gray-300 text-sm xl:text-lg">
              {serviceData.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {' '} {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}