// File: data/faqData.ts

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const contactFAQData: FAQItem[] = [
  {
    id: "item-1",
    question: "What is the AI Chatbot offered?",
    answer: "Our AI Chatbot helps your business respond to customers automatically with intelligent conversations 24/7."
  },
  {
    id: "item-2",
    question: "Can the CRM Integration be customized to my business needs?",
    answer: "Yes, our CRM Integration can be customized according to your workflow and business needs."
  },
  {
    id: "item-3",
    question: "How can I request a demo of the service?",
    answer: "You can click the \"Book a Demo\" button on our website, and our team will contact you to schedule a presentation."
  },
  {
    id: "item-4",
    question: "Is there a free trial available?",
    answer: "A free trial is available for certain packages so you can try the features before subscribing."
  },
  {
    id: "item-5",
    question: "What payment methods are available?",
    answer: "We accept payments via bank transfer, credit card, and commonly used e-wallets in Indonesia."
  },
  {
    id: "item-6",
    question: "What if I need technical support?",
    answer: "Our support team is ready to assist you via email, chat, or support tickets with a quick response."
  }
];