import { ProductItem } from '../types/home';

export const featuredProducts: ProductItem[] = [
  { 
    id: 'product-1',
    img: "/featured_product/crm_integration.png", 
    alt: "CRM Integration Solution",
    title: "CRM Integration",
    description: "CRM Integration by Decodes is a comprehensive solution designed to streamline business processes by connecting your sales, marketing, and customer service data in one platform. With powerful analytics, automated workflows, and real-time insights, it helps businesses improve efficiency, strengthen customer relationships, and boost overall performance. This integration empowers teams to work smarter and deliver exceptional customer experiences.",
    button: { text: "LEARN MORE", link: "/services/crm" } 
  },
  { 
    id: 'product-2',
    img: "/featured_product/chatbot_ai.png", 
    alt: "AI Chatbot Solution",
    title: "AI Chatbot",
    description: "Chatbot AI by Decodes is an intelligent solution designed to enhance customer engagement and streamline communication across multiple channels. With natural language processing, real-time responses, and seamless integration into websites, apps, and messaging platforms, it helps businesses provide instant support, reduce response times, and improve overall customer satisfaction. Equipped with advanced analytics and automated workflows, this chatbot empowers teams to work smarter, personalize interactions, and deliver exceptional customer experiences 24/7",
    button: { text: "LEARN MORE", link: "/services/chatbot" } 
  },
];