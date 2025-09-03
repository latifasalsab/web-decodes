import { JSX } from "react";

export interface PersonalInfo {
    fullName?: string;
    email?: string;
    password?: string;
}

export interface BusinessInfo {
    businessName?: string;
    businessPhone?: string;
    businessEmail?: string;
    businessAddress?: string;
}

export interface ServiceInfo {
    selectedService?: string;
}

export type RegisterStep = PersonalInfo | BusinessInfo | ServiceInfo;

export interface RegisterStepConfig {
    label: string;
    render: (values: any, setValues: (values: any) => void) => JSX.Element;
}

export interface RegisterProps {
    onShowLogin: () => void;
    onRegisterSuccess: (data: {
        personal: PersonalInfo;
        business: BusinessInfo;
        service: ServiceInfo;
    }) => void;
}