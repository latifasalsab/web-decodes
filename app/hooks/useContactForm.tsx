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
    phoneNumberInvalid: false, 
    email: false,
    emailInvalid: false,
    businessName: false,
    subject: false,
    messages: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phone: string): boolean => {
    const cleanPhone = phone.replace(/\D/g, '');
    const phoneRegex = /^(\+62|62|0)8[1-9][0-9]{6,9}$/;
    
    return phoneRegex.test(cleanPhone);
  };

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
        ...(name === 'email' && { emailInvalid: false }),
        ...(name === 'phoneNumber' && { phoneNumberInvalid: false }),
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {
      fullName: formData.fullName.trim() === "",
      phoneNumber: formData.phoneNumber.trim() === "",
      phoneNumberInvalid: formData.phoneNumber.trim() !== "" && !validatePhoneNumber(formData.phoneNumber),
      email: formData.email.trim() === "",
      emailInvalid: formData.email.trim() !== "" && !validateEmail(formData.email),
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
      phoneNumberInvalid: false,
      email: false,
      emailInvalid: false,
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