export interface Plan {
  id: string;
  name: string;
  price: string;
  subtitle: string;
  popular: boolean;
  features: string[];
}

export interface ServiceData {
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface ServicePageProps {
  serviceData: ServiceData;
  plans: Plan[];
}