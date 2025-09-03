export interface FormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  businessName: string;
  subject: string;
  messages: string;
}

export interface ContactCardProps {
  onSubmit?: (formData: FormData) => void;
  className?: string;
}

export interface AccordionItemType {
  id: string;
  question: string;
  answer: string;
}