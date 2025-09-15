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

export interface ValidationErrors {
  fullName: boolean;
  phoneNumber: boolean;
  email: boolean;
  businessName: boolean;
  subject: boolean;
  messages: boolean;
}

export interface UseContactFormReturn {
  formData: FormData;
  errors: ValidationErrors;
  isSubmitted: boolean;
  showDialog: boolean;
  showSuccessDialog: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  handleSubmit: () => void;
  handleConfirmSubmit: () => void;
  handleCancelSubmit: () => void;
  handleCloseSuccessDialog: () => void;
}
