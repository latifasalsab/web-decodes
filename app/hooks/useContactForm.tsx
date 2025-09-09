import { useState } from "react";
import type { FormData } from "../types/contact";

export const useContactForm = (onSubmit?: (data: FormData) => void) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phoneNumber: "",
    email: "",
    businessName: "",
    subject: "",
    messages: "",
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState<"empty" | "confirm">("empty");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormEmpty = () => {
    return (
      !formData.fullName.trim() ||
      !formData.phoneNumber.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.messages.trim()
    );
  };

  const handleSubmitClick = () => {
    if (isFormEmpty()) {
      setDialogType("empty");
    } else {
      setDialogType("confirm");
    }
    setIsDialogOpen(true);
  };

  const handleConfirmSubmit = () => {
    if (onSubmit) {
      onSubmit(formData);
    } else {
      console.log("Form submitted:", formData);
    }
    setIsDialogOpen(false);

    // Reset form 
    setFormData({
      fullName: "",
      phoneNumber: "",
      email: "",
      businessName: "",
      subject: "",
      messages: "",
    });
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return {
    formData,
    handleInputChange,
    handleSubmitClick,
    handleConfirmSubmit,
    handleCloseDialog,
    isDialogOpen,
    setIsDialogOpen,
    dialogType,
  };
};
