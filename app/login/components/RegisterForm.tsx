'use client';
import { JSX, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { PersonalInfo, BusinessInfo, ServiceInfo, RegisterStep, RegisterStepConfig, RegisterProps } from "@/app/types/register";

export default function RegisterForm({ onShowLogin, onRegisterSuccess }: RegisterProps): JSX.Element {
    const [step, setStep] = useState<number>(0);
    const [registerValues, setRegisterValues] = useState<RegisterStep[]>([{}, {}, {}]);
    const [errors, setErrors] = useState<{ [key: number]: { [key: string]: string } }>({
        0: { fullName: '', email: '', password: '' },
        1: { businessName: '', businessPhone: '', businessEmail: '', businessAddress: '' },
        2: { selectedService: '' }
    });

    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isValidPassword = (password: string) => {
        return password.length >= 8;
    };

    const isValidPhone = (phone: string) => {
        const phoneRegex = /^[0-9+\-\s()]{8,}$/;
        return phoneRegex.test(phone);
    };

    const isValidFullName = (name: string) => {
        return name.trim().length >= 2;
    };

    const validateStep = (stepIndex: number, values: RegisterStep) => {
        const newErrors: { [key: string]: string } = {};
        
        switch(stepIndex) {
            case 0: {
                const personal = values as PersonalInfo;
                
                if (!personal.fullName) {
                    newErrors.fullName = 'Please enter your full name';
                } else if (!isValidFullName(personal.fullName)) {
                    newErrors.fullName = 'Please enter at least 2 characters for the full name';
                }

                if (!personal.email) {
                    newErrors.email = 'Please enter your email address';
                } else if (!isValidEmail(personal.email)) {
                    newErrors.email = 'Please enter a valid email address';
                }

                if (!personal.password) {
                    newErrors.password = 'Please enter your password';
                } else if (!isValidPassword(personal.password)) {
                    newErrors.password = 'Please enter a password with a minimum of 8 characters';
                }
                break;
            }
            case 1: {
                const business = values as BusinessInfo;
                
                if (!business.businessName) {
                    newErrors.businessName = 'Please enter your business name';
                } else if (business.businessName.trim().length < 2) {
                    newErrors.businessName = 'Please enter a business name with a minimum of 2 characters';
                }

                if (!business.businessPhone) {
                    newErrors.businessPhone = 'Please enter your phone number';
                } else if (!isValidPhone(business.businessPhone)) {
                    newErrors.businessPhone = 'Please enter a valid phone number';
                }

                if (!business.businessEmail) {
                    newErrors.businessEmail = 'Please enter your business email address';
                } else if (!isValidEmail(business.businessEmail)) {
                    newErrors.businessEmail = 'Please enter a valid email address';
                }

                if (!business.businessAddress) {
                    newErrors.businessAddress = 'Please enter your business address';
                } else if (business.businessAddress.trim().length < 5) {
                    newErrors.businessAddress = 'Please enter a business address with at least 5 characters';
                }
                break;
            }
            case 2: {
                const service = values as ServiceInfo;
                if (!service.selectedService) {
                    newErrors.selectedService = 'Please choose a service option';
                }
                break;
            }
        }

        setErrors(prev => ({
            ...prev,
            [stepIndex]: newErrors
        }));

        return Object.keys(newErrors).length === 0;
    };

    const registerSteps: RegisterStepConfig[] = [
        {
            label: "Personal Information",
            render: (values: PersonalInfo, setValues: (values: PersonalInfo) => void) => (
                <div className="flex flex-col gap-4">
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="fullname" className="text-white text-sm font-medium">Full Name</label>
                        <input
                            type="text"
                            name="fullname"
                            placeholder="Enter your full name"
                            value={values.fullName || ''}
                            onChange={e => {
                                const newValues = {...values, fullName: e.target.value};
                                setValues(newValues);
                                if (errors[0].fullName && e.target.value && isValidFullName(e.target.value)) {
                                    setErrors(prev => ({
                                        ...prev,
                                        0: { ...prev[0], fullName: '' }
                                    }));
                                }
                            }}
                            className={`w-full px-3 py-2 xl:px-4 xl:py-3 rounded-lg bg-[#3a3a3a] text-white border-none outline-none focus:bg-[#4a4a4a] transition-colors placeholder-white/50 ${
                                errors[0].fullName ? 'ring-2 ring-red-500' : ''
                            }`}
                        />
                        {errors[0].fullName && (
                            <p className="text-red-400 text-xs mt-1">{errors[0].fullName}</p>
                        )}
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="email" className="text-white text-sm font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={values.email || ''}
                            onChange={e => {
                                const newValues = {...values, email: e.target.value};
                                setValues(newValues);
                                // Clear error saat user mengetik
                                if (errors[0].email && e.target.value && isValidEmail(e.target.value)) {
                                    setErrors(prev => ({
                                        ...prev,
                                        0: { ...prev[0], email: '' }
                                    }));
                                }
                            }}
                            className={`w-full px-3 py-2 xl:px-4 xl:py-3 rounded-lg bg-[#3a3a3a] text-white border-none outline-none focus:bg-[#4a4a4a] transition-colors placeholder-white/50 ${
                                errors[0].email ? 'ring-2 ring-red-500' : ''
                            }`}
                        />
                        {errors[0].email && (
                            <p className="text-red-400 text-xs mt-1">{errors[0].email}</p>
                        )}
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="password" className="text-white text-sm font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password (min. 8 characters)"
                            value={values.password || ''}
                            onChange={e => {
                                const newValues = {...values, password: e.target.value};
                                setValues(newValues);
                                // Clear error saat user mengetik
                                if (errors[0].password && e.target.value && isValidPassword(e.target.value)) {
                                    setErrors(prev => ({
                                        ...prev,
                                        0: { ...prev[0], password: '' }
                                    }));
                                }
                            }}
                            className={`w-full px-3 py-2 xl:px-4 xl:py-3 rounded-lg bg-[#3a3a3a] text-white border-none outline-none focus:bg-[#4a4a4a] transition-colors placeholder-white/50 ${
                                errors[0].password ? 'ring-2 ring-red-500' : ''
                            }`}
                        />
                        {errors[0].password && (
                            <p className="text-red-400 text-xs mt-1">{errors[0].password}</p>
                        )}
                    </div>            
                </div>
            ),
        },
        {
            label: "Business Details",
            render: (values: BusinessInfo, setValues: (values: BusinessInfo) => void) => (
                <div className="flex flex-col gap-4">
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="business" className="text-white text-sm font-medium">Business Name</label>
                        <input
                            type="text"
                            name="business"
                            placeholder="Enter your business name"
                            value={values.businessName || ''}
                            onChange={e => {
                                const newValues = {...values, businessName: e.target.value};
                                setValues(newValues);
                                if (errors[1].businessName && e.target.value && e.target.value.trim().length >= 2) {
                                    setErrors(prev => ({
                                        ...prev,
                                        1: { ...prev[1], businessName: '' }
                                    }));
                                }
                            }}
                            className={`w-full px-3 py-2 xl:px-4 xl:py-3 rounded-lg bg-[#3a3a3a] text-white border-none outline-none focus:bg-[#4a4a4a] transition-colors placeholder-white/50 ${
                                errors[1].businessName ? 'ring-2 ring-red-500' : ''
                            }`}
                        />
                        {errors[1].businessName && (
                            <p className="text-red-400 text-xs mt-1">{errors[1].businessName}</p>
                        )}
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="phonenumber" className="text-white text-sm font-medium">Business Phone Number</label>
                        <input
                            type="tel"
                            name="phonenumber"
                            placeholder="Enter your phone number (e.g. +62812345678)"
                            value={values.businessPhone || ''}
                            onChange={e => {
                                const newValues = {...values, businessPhone: e.target.value};
                                setValues(newValues);
                                if (errors[1].businessPhone && e.target.value && isValidPhone(e.target.value)) {
                                    setErrors(prev => ({
                                        ...prev,
                                        1: { ...prev[1], businessPhone: '' }
                                    }));
                                }
                            }}
                            className={`w-full px-3 py-2 xl:px-4 xl:py-3 rounded-lg bg-[#3a3a3a] text-white border-none outline-none focus:bg-[#4a4a4a] transition-colors placeholder-white/50 ${
                                errors[1].businessPhone ? 'ring-2 ring-red-500' : ''
                            }`}
                        />
                        {errors[1].businessPhone && (
                            <p className="text-red-400 text-xs mt-1">{errors[1].businessPhone}</p>
                        )}
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="businessemail" className="text-white text-sm font-medium">Business Email</label>
                        <input
                            type="email"
                            name="businessemail"
                            placeholder="Enter your business email"
                            value={values.businessEmail || ''}
                            onChange={e => {
                                const newValues = {...values, businessEmail: e.target.value};
                                setValues(newValues);
                                if (errors[1].businessEmail && e.target.value && isValidEmail(e.target.value)) {
                                    setErrors(prev => ({
                                        ...prev,
                                        1: { ...prev[1], businessEmail: '' }
                                    }));
                                }
                            }}
                            className={`w-full px-3 py-2 xl:px-4 xl:py-3 rounded-lg bg-[#3a3a3a] text-white border-none outline-none focus:bg-[#4a4a4a] transition-colors placeholder-white/50 ${
                                errors[1].businessEmail ? 'ring-2 ring-red-500' : ''
                            }`}
                        />
                        {errors[1].businessEmail && (
                            <p className="text-red-400 text-xs mt-1">{errors[1].businessEmail}</p>
                        )}
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="businessaddress" className="text-white text-sm font-medium">Business Address</label>
                        <textarea
                            placeholder="Enter your complete business address"
                            name="businessaddress"
                            value={values.businessAddress || ''}
                            onChange={e => {
                                const newValues = {...values, businessAddress: e.target.value};
                                setValues(newValues);
                                if (errors[1].businessAddress && e.target.value && e.target.value.trim().length >= 10) {
                                    setErrors(prev => ({
                                        ...prev,
                                        1: { ...prev[1], businessAddress: '' }
                                    }));
                                }
                            }}
                            className={`w-full px-3 py-2 xl:px-4 xl:py-3 rounded-lg bg-[#3a3a3a] text-white border-none outline-none focus:bg-[#4a4a4a] transition-colors placeholder-white/50 resize-none ${
                                errors[1].businessAddress ? 'ring-2 ring-red-500' : ''
                            }`}
                            rows={3}
                        />
                        {errors[1].businessAddress && (
                            <p className="text-red-400 text-xs mt-1">{errors[1].businessAddress}</p>
                        )}
                    </div>            
                </div>
            ),
        },
        {
            label: "Choose Services",
            render: (values: ServiceInfo, setValues: (values: ServiceInfo) => void) => {
                const services = [
                    {
                        id: 'chatbot',
                        title: 'Chatbot AI',
                        description: 'Intelligent customer support automation'
                    },
                    {
                        id: 'crm',
                        title: 'CRM Integration',
                        description: 'Seamless customer relationship management'
                    },
                    {
                        id: 'complete',
                        title: 'Complete Package',
                        description: 'Chatbot AI + CRM Integration'
                    }
                ];

                return (
                    <div className="flex flex-col gap-4">
                        {services.map(service => (
                            <div
                                key={service.id}
                                onClick={() => {
                                    const newValues = {...values, selectedService: service.id};
                                    setValues(newValues);
                                    if (errors[2].selectedService) {
                                        setErrors(prev => ({
                                            ...prev,
                                            2: { ...prev[2], selectedService: '' }
                                        }));
                                    }
                                }}
                                className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                                    values.selectedService === service.id
                                        ? 'border-[#a084f7] bg-[#a084f7]/10'
                                        : 'border-white/20 bg-[#3a3a3a] hover:border-white/40 hover:bg-[#4a4a4a]'
                                } ${
                                    errors[2].selectedService ? 'ring-2 ring-red-500' : ''
                                }`}
                            >
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-white font-medium">{service.title}</h3>
                                    <p className="text-white/70 text-sm">{service.description}</p>
                                </div>
                            </div>
                        ))}
                        {errors[2].selectedService && (
                            <p className="text-red-400 text-xs mt-1">{errors[2].selectedService}</p>
                        )}
                    </div>
                );
            },
        },
    ];

    const handleNext = (): void => {
        if (validateStep(step, registerValues[step])) {
            setStep(s => Math.min(s + 1, registerSteps.length - 1));
        }
    };

    const handleBack = (): void => setStep(s => Math.max(s - 1, 0));
    
    const handleChange = (newValues: RegisterStep): void => {
        setRegisterValues(vals => {
            const updated = [...vals];
            updated[step] = newValues;
            return updated;
        });
    };

    const isStepValid = (stepIndex: number): boolean => {
        const values = registerValues[stepIndex];
        switch(stepIndex) {
            case 0: {
                const personal = values as PersonalInfo;
                return !!(
                    personal.fullName && 
                    personal.email && 
                    personal.password &&
                    isValidFullName(personal.fullName) &&
                    isValidEmail(personal.email) &&
                    isValidPassword(personal.password)
                );
            }
            case 1: {
                const business = values as BusinessInfo;
                return !!(
                    business.businessName && 
                    business.businessPhone && 
                    business.businessEmail && 
                    business.businessAddress &&
                    business.businessName.trim().length >= 2 &&
                    isValidPhone(business.businessPhone) &&
                    isValidEmail(business.businessEmail) &&
                    business.businessAddress.trim().length >= 10
                );
            }
            case 2: {
                const service = values as ServiceInfo;
                return !!(service.selectedService);
            }
            default:
                return false;
        }
    };

    const handleRegister = (): void => {
        if (validateStep(step, registerValues[step])) {
            const [personal, business, service] = registerValues as [PersonalInfo, BusinessInfo, ServiceInfo];
            onRegisterSuccess({ personal, business, service });
        }
    };

    const resetStates = (): void => {
        setStep(0);
        setRegisterValues([{}, {}, {}]);
        setErrors({
            0: { fullName: '', email: '', password: '' },
            1: { businessName: '', businessPhone: '', businessEmail: '', businessAddress: '' },
            2: { selectedService: '' }
        });
    };

    return (
        <div className="relative w-full p-10 min-h-[80vh] flex flex-col justify-center py-16">
            <Link href="/" className="flex gap-2 items-center absolute top-4 left-4">
                <Image 
                    src="/login/back.png"
                    width={100}
                    height={100} 
                    alt="Back" 
                    className="h-3 w-auto"                          
                />
                <Button variant="link" className="text-white p-0 m-0">
                    Back
                </Button>
            </Link>
            
            <div className="w-full flex flex-col gap-6 mt-16">
                <div className="text-center">
                    <h1 className="text-2xl xl:text-4xl font-bold text-white">CREATE ACCOUNT</h1>
                    <p className="text-white/70 text-sm xl:text-base">
                        {
                            step === 0 ? "Step 1 of 3 - Personal Information"
                            : step === 1 ? "Step 2 of 3 - Business Details" 
                            : step === 2 ? "Step 3 of 3 - Choose Services" 
                            : null
                        }
                    </p>
                </div>
                
                <div className="flex items-center justify-center gap-3">
                    {registerSteps.map((stepObj, idx) => (
                        <div key={stepObj.label} className="flex flex-col items-center gap-2">
                            <span
                                className={`w-7 h-7 text-white rounded-full border-2 transition-all duration-300 flex items-center justify-center text-sm ${
                                    step === idx 
                                        ? "bg-[#a084f7] border-[#a084f7] scale-110" 
                                        : step > idx
                                        ? "bg-[#a084f7]/50 border-[#a084f7]"
                                        : "bg-transparent border-white/30"
                                }`}>
                                {idx + 1}
                            </span>
                        </div>
                    ))}
                </div>
                
                <div className="w-full flex-1">
                    {registerSteps[step].render(registerValues[step], handleChange)}
                </div>
                
                <div className="flex w-full justify-between gap-4">
                    <Button
                        variant="secondary"
                        className="rounded w-[47%] px-6 flex-1 sm:flex-none hover:bg-transparent hover:border hover:text-white active:bg-gray-200 active:text-black"
                        onClick={handleBack}
                        disabled={step === 0}
                        type="button"
                    >
                        Back
                    </Button>
                    {step < registerSteps.length - 1 ? (
                        <Button
                            className="rounded w-[47%] px-6 flex-1 sm:flex-none"
                            onClick={handleNext}
                            type="button"
                            variant="gradientOutline"
                        >
                            Next
                        </Button>
                    ) : (
                        <Button
                            className="rounded w-[47%] px-6 flex-1 sm:flex-none"
                            onClick={handleRegister}
                            type="button"
                            variant="gradientOutline"
                        >
                            Register
                        </Button>
                    )}
                </div>
                
                <p className="text-white/70 text-sm text-center">
                    Already have an account?{" "}
                    <button
                        className="text-[#a084f7] underline hover:text-[#8f6ff7] transition-colors cursor-pointer"
                        onClick={onShowLogin}
                        type="button"
                    >
                        Sign In
                    </button>
                </p>
            </div>
        </div>
    );
}