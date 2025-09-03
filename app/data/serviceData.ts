import { ServiceData, Plan } from '../types/service';

export const chatbotServiceData: ServiceData = {
  title: 'Chatbot AI',
  image: '/services/service-chatbot.png',
  description: `Our Chatbot AI is designed to transform the way businesses interact with customers. 
    By leveraging advanced natural language processing, it enables seamless communication, 
    instant responses, and personalized customer experiences. Whether for customer service, 
    lead generation, or internal support, our AI-powered chatbot helps reduce response time, 
    increase engagement, and provide consistent support 24/7. With intelligent automation, 
    businesses can save valuable resources while improving customer satisfaction.`,
  features: [
    '24/7 automated customer support',
    'Natural language processing for human-like conversations',
    'Integration with multiple platforms (Web, WhatsApp, Messenger, etc.)',
    'Multi-language support',
    'Lead generation and qualification capabilities',
    'Personalized responses based on customer data',
    'Analytics dashboard for performance tracking'
  ]
};

export const crmServiceData: ServiceData = {
  title: 'CRM Integration',
  image: '/services/service-crm.png',
  description: `Our CRM Integration service helps businesses streamline their operations and build stronger customer relationships. 
    By connecting all customer data into a single platform, you can improve communication, track customer journeys, 
    and make data-driven decisions. Our solution ensures that your sales, marketing, and customer support teams work seamlessly together, 
    resulting in improved efficiency, better collaboration, and enhanced customer satisfaction. With smart automation and insightful reporting, 
    CRM Integration enables your business to scale faster and more effectively.`,
  features: [
    'Centralized customer data management',
    'Seamless integration with existing tools and platforms',
    'Automated workflows to boost productivity',
    'Sales pipeline and lead tracking',
    'Customer support ticketing integration',
    'Real-time reporting and analytics',
    'Secure data storage and compliance support'
  ]
};

export const servicePlans: Plan[] = [
  {
    id: 'pro',
    name: 'Pro',
    price: '1.499K',
    subtitle: 'Equivalent to 1-2 Additional Admin',
    popular: false,
    features: [
      '3.000 Maximum Active Users',
      '5 Human Agents',
      'Unlimited AI Agents',
      'Unlimited Inboxes',
      '15.000 AI Responses',
      'Decodes Advanced AI Models',
      'Complete Documentation',
      'Free App Training',
      'Free Support'
    ]
  },
  {
    id: 'business',
    name: 'Business',
    price: '3.799K',
    subtitle: 'Equivalent to 3-5 Additional Admin',
    popular: true,
    features: [
      '10.000 Maximum Active Users',
      '7 Human Agents',
      'Unlimited AI Agents',
      'Unlimited Inboxes',
      '50.000 AI Responses',
      'Decodes Advanced AI Models',
      'Free Onboarding and Setup',
      'Dedicated Support',
      'Complete Documentation',
      'OpenAPI Access',
      'Free App Training',
      'Free 1 No. WA whitelist'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '5.799K',
    subtitle: 'Equivalent to 7-10 Additional Admin',
    popular: false,
    features: [
      '30.000 Maximum Active Users',
      '10 Human Agents',
      'Unlimited AI Agents',
      'Unlimited Inboxes',
      '150.000 AI Responses',
      'Decodes Advanced AI Models',
      'Free Onboarding and Setup',
      'Dedicated Support',
      'Complete Documentation',
      'OpenAPI Access',
      'Free App Training',
      'Free 1 No. WA whitelist'
    ]
  },
  {
    id: 'unlimited',
    name: 'Unlimited+',
    price: '15.799K',
    subtitle: 'Equivalent to 20-30 Additional Admin',
    popular: false,
    features: [
      'Unlimited Maximum Active Users',
      '30 Human Agents',
      'Unlimited AI Agents',
      'Unlimited Inboxes',
      '500.000 AI Responses',
      'Decodes Advanced AI Models',
      'Free Onboarding and Setup',
      'Dedicated Support',
      'Complete Documentation',
      'OpenAPI Access',
      '24/7 On Call Support',
      'Free 2 No. WA whitelist'
    ]
  }
];