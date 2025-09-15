import { useState } from "react";
import type { FormData, ValidationErrors, UseContactFormReturn } from "../types/contact";

export const useContactForm = (onSubmit?: (data: FormData) => void): UseContactFormReturn => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phoneNumber: "",
    email: "",
    businessName: "",
    subject: "",
    messages: "",
  });

  const [errors, setErrors] = useState<ValidationErrors>({
    fullName: false,
    phoneNumber: false,
    email: false,
    businessName: false,
    subject: false,
    messages: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (isSubmitted && value.trim() !== "") {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {
      fullName: formData.fullName.trim() === "",
      phoneNumber: formData.phoneNumber.trim() === "",
      email: formData.email.trim() === "",
      businessName: formData.businessName.trim() === "",
      subject: formData.subject.trim() === "",
      messages: formData.messages.trim() === "",
    };

    setErrors(newErrors);
    
    
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    
    if (validateForm()) {
      
      setShowDialog(true);
    } else {
      
      setTimeout(() => {
        setErrors({
          fullName: false,
          phoneNumber: false,
          email: false,
          businessName: false,
          subject: false,
          messages: false,
        });
        setIsSubmitted(false);
      }, 3000); 
    }
  };

  const handleConfirmSubmit = () => {
    if (onSubmit) {
      onSubmit(formData);
    } else {
      console.log("Form submitted:", formData);
    }
    
    
    setFormData({
      fullName: "",
      phoneNumber: "",
      email: "",
      businessName: "",
      subject: "",
      messages: "",
    });
    setErrors({
      fullName: false,
      phoneNumber: false,
      email: false,
      businessName: false,
      subject: false,
      messages: false,
    });
    setIsSubmitted(false);
    setShowDialog(false);
    setShowSuccessDialog(true);
  };

  const handleCloseSuccessDialog = () => {
    setShowSuccessDialog(false)
  }

  const handleCancelSubmit = () => {
    setShowDialog(false);
  };

  const [showSuccessDialog, setShowSuccessDialog] = useState(false);




  return {
    formData,
    errors,
    isSubmitted,
    showDialog,
    showSuccessDialog, 
    handleInputChange,
    handleSubmit,
    handleConfirmSubmit,
    handleCancelSubmit,
    handleCloseSuccessDialog,
  };
};