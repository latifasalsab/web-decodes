'use client';
import { JSX, useState } from "react";
import Image from 'next/image';
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import Link from 'next/link';
import { Button } from "@/components/ui/button"

interface PersonalInfo {
    fullName?: string;
    email?: string;
    password?: string;
}

interface BusinessInfo {
    businessName?: string;
    businessPhone?: string;
    businessEmail?: string;
    businessAddress?: string;
}

interface ServiceInfo {
    selectedService?: string;
}

type RegisterStep = PersonalInfo | BusinessInfo | ServiceInfo;

interface RegisterStepConfig {
    label: string;
    render: (values: any, setValues: (values: any) => void) => JSX.Element;
}

const registerSteps: RegisterStepConfig[] = [
    {
        label: "Personal Information",
        render: (values: PersonalInfo, setValues: (values: PersonalInfo) => void) => (
            <div className="flex flex-col gap-4">
                <div className="w-full flex flex-col gap-2">
                    <label className="text-white text-sm font-medium">Full Name</label>
                    <input
                        type="text"
                        placeholder="Enter your full name"
                        value={values.fullName || ''}
                        onChange={e => setValues({...values, fullName: e.target.value})}
                        className="w-full px-3 py-2 xl:px-4 xl:py-3 rounded-lg bg-[#3a3a3a] text-white border-none outline-none focus:bg-[#4a4a4a] transition-colors placeholder-white/50"
                    />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label className="text-white text-sm font-medium">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={values.email || ''}
                        onChange={e => setValues({...values, email: e.target.value})}
                        className="w-full px-3 py-2 xl:px-4 xl:py-3 rounded-lg bg-[#3a3a3a] text-white border-none outline-none focus:bg-[#4a4a4a] transition-colors placeholder-white/50"
                    />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label className="text-white text-sm font-medium">Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={values.password || ''}
                        onChange={e => setValues({...values, password: e.target.value})}
                        className="w-full px-3 py-2 xl:px-4 xl:py-3 rounded-lg bg-[#3a3a3a] text-white border-none outline-none focus:bg-[#4a4a4a] transition-colors placeholder-white/50"
                    />
                </div>            
            </div>
        ),
    },
    {
        label: "Business Details",
        render: (values: BusinessInfo, setValues: (values: BusinessInfo) => void) => (
            <div className="flex flex-col gap-4">
                <div className="w-full flex flex-col gap-2">
                    <label className="text-white text-sm font-medium">Business Name</label>
                    <input
                        type="text"
                        placeholder="Enter your business name"
                        value={values.businessName || ''}
                        onChange={e => setValues({...values, businessName: e.target.value})}
                        className="w-full px-3 py-2 xl:px-4 xl:py-3 rounded-lg bg-[#3a3a3a] text-white border-none outline-none focus:bg-[#4a4a4a] transition-colors placeholder-white/50"
                    />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label className="text-white text-sm font-medium">Business Phone Number</label>
                    <input
                        type="tel"
                        placeholder="Enter your phone number"
                        value={values.businessPhone || ''}
                        onChange={e => setValues({...values, businessPhone: e.target.value})}
                        className="w-full px-3 py-2 xl:px-4 xl:py-3 rounded-lg bg-[#3a3a3a] text-white border-none outline-none focus:bg-[#4a4a4a] transition-colors placeholder-white/50"
                    />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label className="text-white text-sm font-medium">Business Email</label>
                    <input
                        type="email"
                        placeholder="Enter your business email"
                        value={values.businessEmail || ''}
                        onChange={e => setValues({...values, businessEmail: e.target.value})}
                        className="w-full px-3 py-2 xl:px-4 xl:py-3 rounded-lg bg-[#3a3a3a] text-white border-none outline-none focus:bg-[#4a4a4a] transition-colors placeholder-white/50"
                    />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label className="text-white text-sm font-medium">Business Address</label>
                    <textarea
                        placeholder="Enter your business address"
                        value={values.businessAddress || ''}
                        onChange={e => setValues({...values, businessAddress: e.target.value})}
                        className="w-full px-3 py-2 xl:px-4 xl:py-3 rounded-lg bg-[#3a3a3a] text-white border-none outline-none focus:bg-[#4a4a4a] transition-colors placeholder-white/50 resize-none"
                        rows={3}
                    />
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
                            onClick={() => setValues({...values, selectedService: service.id})}
                            className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                                values.selectedService === service.id
                                    ? 'border-[#a084f7] bg-[#a084f7]/10'
                                    : 'border-white/20 bg-[#3a3a3a] hover:border-white/40 hover:bg-[#4a4a4a]'
                            }`}
                        >
                            <div className="flex flex-col gap-2">
                                <h3 className="text-white font-medium">{service.title}</h3>
                                <p className="text-white/70 text-sm">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            );
        },
    },
];

export default function Login(): JSX.Element {
    const [currentView, setCurrentView] = useState<'login' | 'register' | 'forgot' | 'reset'>('login');
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [forgotEmail, setForgotEmail] = useState('');
    const [resetData, setResetData] = useState({ newPassword: '', confirmPassword: '' });

    const [step, setStep] = useState<number>(0);
    const [registerValues, setRegisterValues] = useState<RegisterStep[]>([{}, {}, {}]);

    const resetStates = (): void => {
        setStep(0);
        setRegisterValues([{}, {}, {}]);
        setLoginData({ email: '', password: '' });
        setForgotEmail('');
        setResetData({ newPassword: '', confirmPassword: '' });
    };

    const handleShowLogin = (): void => {
        setCurrentView('login');
        resetStates();
    };

    const handleShowRegister = (): void => {
        setCurrentView('register');
        resetStates();
    };

    const handleShowForgot = (): void => {
        setCurrentView('forgot');
        resetStates();
    };

    const handleShowReset = (): void => {
        setCurrentView('reset');
    };

    const handleNext = (): void => setStep(s => Math.min(s + 1, registerSteps.length - 1));
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
                return !!(personal.fullName && personal.email && personal.password);
            }
            case 1: {
                const business = values as BusinessInfo;
                return !!(business.businessName && business.businessPhone && business.businessEmail && business.businessAddress);
            }
            case 2: {
                const service = values as ServiceInfo;
                return !!(service.selectedService);
            }
            default:
                return false;
        }
    };

    // Form handlers
    const handleLogin = (): void => {
        alert(`Login:\nEmail: ${loginData.email}\nPassword: ${loginData.password}`);
    };

    const handleForgotSubmit = (): void => {
        alert(`Password reset email sent to: ${forgotEmail}`);
        handleShowReset();
    };

    const handleResetSubmit = (): void => {
        if (resetData.newPassword === resetData.confirmPassword) {
            alert(`Password reset successfully!`);
            handleShowLogin();
        } else {
            alert('Passwords do not match!');
        }
    };

    const handleRegister = (): void => {
        const [personal, business, service] = registerValues as [PersonalInfo, BusinessInfo, ServiceInfo];
        alert(`Register:\nName: ${personal.fullName}\nEmail: ${personal.email}\nBusiness: ${business.businessName}\nService: ${service.selectedService}`);
        handleShowLogin();
    };

    return (
        <>
            <div className="h-screen w-full bg-[#000] relative flex items-center justify-center overflow-x-hidden">
                <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('hero-bg.png')",
                }}
                ></div>
                <div className="relative flex items-center justify-center w-full max-w-7xl">
                    <div className="flex flex-col md:flex-row w-full max-w-6xl bg-[#000] rounded-3xl md:rounded-l-3xl shadow-2xl overflow-hidden mx-6 md:mx-10 justify-center">
                        
                        <div className="hidden lg:flex lg:w-1/2 min-h-[85vh] flex-col justify-center items-center bg-black relative overflow-hidden">
                            <div className="relative z-10 flex items-center justify-center h-full w-full">
                                <Image 
                                    src="/login/logo.png"
                                    width={100}
                                    height={100} alt="Logo Decodes" 
                                    className="min-h-60 xl:min-h-70 w-auto"                          
                                />
                            </div>
                            
                            <div className="absolute inset-0 bg-gradient-to-br from-[#1e1b4b]/20 via-transparent to-[#581c87]/20"></div>
                            <div className="absolute top-10 left-10 w-32 h-32 bg-[#6366f1]/10 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#8b5cf6]/10 rounded-full blur-3xl"></div>
                        </div>
                    
                        <div className="w-full md:w-3/4 lg:w-1/2 min-h-[80vh] max-h-screen overflow-y-auto overflow-x-hidden relative flex items-center justify-center py-8 custom-scrollbar" 
                            style={{
                            scrollbarWidth: 'thin',
                            scrollbarColor: '#8b5cf6 transparent'
                            }}>
                            <div className="relative w-full min-h-[80vh] flex items-start justify-center">
                                
                                {/* Login */}
                                <div
                                    className={`absolute top-0 left-0 w-full min-h-[80vh] flex flex-col justify-start transition-all duration-500 ${
                                        currentView === 'login'
                                            ? "opacity-100 translate-x-0 pointer-events-auto"
                                            : "opacity-0 translate-x-10 pointer-events-none"
                                    }`}
                                >
                                    <div className="relative w-full p-10 min-h-[80vh] flex flex-col justify-center py-16">
                                        <Link href="/" className="flex gap-2 items-center absolute top-4 left-4">
                                            <Image 
                                                src="/login/back.png"
                                                width={100}
                                                height={100} alt="Logo Decodes" 
                                                className="h-3 w-auto"                          
                                            />
                                            <Button variant="link" className="text-white p-0 m-0">
                                                Back
                                            </Button>
                                        </Link>

                                        <div className="flex flex-col gap-6 h-fit mt-16">
                                            <div className="text-center">
                                                <h1 className="text-2xl xl:text-4xl font-bold text-white">WELCOME BACK</h1>
                                                <p className="text-white/70 text-sm xl:text-base">Login in to your decodes account</p>
                                            </div>

                                            <div className="w-full flex flex-col gap-4">
                                                <div className="w-full flex flex-col gap-2">
                                                    <label className="text-white text-sm font-medium">Email</label>
                                                    <input
                                                        type="email"
                                                        placeholder="Enter your email"
                                                        value={loginData.email}
                                                        onChange={e => setLoginData({...loginData, email: e.target.value})}
                                                        className="w-full px-3 py-2 xl:px-4 xl:py-3 rounded-lg bg-[#3a3a3a] text-white border-none outline-none focus:bg-[#4a4a4a] transition-colors placeholder-white/50"
                                                    />
                                                </div>
                                                
                                                <div className="w-full flex flex-col gap-2">
                                                    <label className="text-white text-sm font-medium">Password</label>
                                                    <div className="relative">
                                                        <input
                                                            type="password"
                                                            placeholder="Enter your password"
                                                            value={loginData.password}
                                                            onChange={e => setLoginData({...loginData, password: e.target.value})}
                                                            className="w-full px-3 py-2 xl:px-4 xl:py-3 pr-12 rounded-lg bg-[#3a3a3a] text-white border-none outline-none focus:bg-[#4a4a4a] transition-colors placeholder-white/50"
                                                        />
                                                    </div>
                                                </div>
                                                
                                                <div className="flex flex-col gap-4">
                                                    <div className="flex w-full items-center justify-between">
                                                        <div className="flex items-center gap-2">
                                                            <Checkbox id="remember" className="border-white/30 data-[state=checked]:bg-[#6366f1] data-[state=checked]:border-[#6366f1]" />
                                                            <Label className="text-white text-sm" htmlFor="remember">
                                                                Remember Me
                                                            </Label>
                                                        </div>
                                                        <Button 
                                                            variant="link" 
                                                            onClick={handleShowForgot}
                                                            className="text-[#8b5cf6] p-0 text-sm hover:text-[#a78bfa] transition-colors"
                                                        >
                                                            Forgot password?
                                                        </Button>
                                                    </div>
                                                    
                                                    <Button 
                                                        onClick={handleLogin}
                                                        className="w-full px-3 py-2 xl:px-4 xl:py-3 rounded-lg text-white text-base"
                                                    >
                                                        LOGIN
                                                    </Button>
                                                    
                                                    <p className="text-white/70 text-sm text-center">
                                                        Don't have an account?{" "}
                                                        <button
                                                            className="text-[#8b5cf6] hover:text-[#a78bfa] transition-colors font-medium"
                                                            onClick={handleShowRegister}
                                                            type="button"
                                                        >
                                                            Sign up
                                                        </button>
                                                    </p>   
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Forgot Password */}
                                <div
                                    className={`absolute top-0 left-0 w-full min-h-[80vh] flex flex-col justify-start transition-all duration-500 ${
                                        currentView === 'forgot'
                                            ? "opacity-100 translate-x-0 pointer-events-auto"
                                            : "opacity-0 translate-x-10 pointer-events-none"
                                    }`}
                                >
                                    <div className="relative w-full p-10 min-h-[80vh] flex flex-col justify-center py-16">
                                        <Link href="/" className="flex gap-2 items-center absolute top-4 left-4">
                                            <Image 
                                                src="/login/back.png"
                                                width={100}
                                                height={100} alt="Logo Decodes" 
                                                className="h-3 w-auto"                          
                                            />
                                            <Button variant="link" className="text-white p-0 m-0">
                                                Back
                                            </Button>
                                        </Link>

                                        <div className="flex flex-col gap-6 h-fit mt-16">
                                            <div className="text-center">
                                                <h1 className="text-2xl xl:text-4xl font-bold text-white">FORGOT PASSWORD</h1>
                                                <p className="text-white/70 text-sm xl:text-base">Please enter your email address and we will email you a link to reset your password</p>
                                            </div>

                                            <div className="w-full flex flex-col gap-4">
                                                <div className="w-full flex flex-col gap-2">
                                                    <label className="text-white text-sm font-medium">Email</label>
                                                    <input
                                                        type="email"
                                                        placeholder="Enter your email"
                                                        value={forgotEmail}
                                                        onChange={e => setForgotEmail(e.target.value)}
                                                        className="w-full px-3 py-2 xl:px-4 xl:py-3 rounded-lg bg-[#3a3a3a] text-white border-none outline-none focus:bg-[#4a4a4a] transition-colors placeholder-white/50"
                                                    />
                                                </div>
                                                
                                                <Button 
                                                    onClick={handleForgotSubmit}
                                                    disabled={!forgotEmail}
                                                    className="w-full px-3 py-2 xl:px-4 xl:py-3 rounded-lg text-white text-base"
                                                >
                                                    SEND EMAIL
                                                </Button>
                                                
                                                <p className="text-white/70 text-sm text-center">
                                                    Back to{" "}
                                                    <button
                                                        className="text-[#8b5cf6] hover:text-[#a78bfa] transition-colors font-medium"
                                                        onClick={handleShowLogin}
                                                        type="button"
                                                    >
                                                        LOGIN
                                                    </button>
                                                    {" "}or{" "}
                                                    <button
                                                        className="text-[#8b5cf6] hover:text-[#a78bfa] transition-colors font-medium"
                                                        onClick={handleShowRegister}
                                                        type="button"
                                                    >
                                                        SIGN UP
                                                    </button>
                                                </p>   
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Reset Password*/}
                                <div
                                    className={`absolute top-0 left-0 w-full min-h-[80vh] flex flex-col justify-start transition-all duration-500 ${
                                        currentView === 'reset'
                                            ? "opacity-100 translate-x-0 pointer-events-auto"
                                            : "opacity-0 translate-x-10 pointer-events-none"
                                    }`}
                                >
                                    <div className="relative w-full p-10 min-h-[80vh] flex flex-col justify-center py-16">
                                        <Link href="/" className="flex gap-2 items-center absolute top-4 left-4">
                                            <Image 
                                                src="/login/back.png"
                                                width={100}
                                                height={100} alt="Logo Decodes" 
                                                className="h-3 w-auto"                          
                                            />
                                            <Button variant="link" className="text-white p-0 m-0">
                                                Back
                                            </Button>
                                        </Link>

                                        <div className="flex flex-col gap-6 h-fit mt-16">
                                            <div className="text-center">
                                                <h1 className="text-2xl xl:text-4xl font-bold text-white">RESET PASSWORD</h1>
                                                <p className="text-white/70 text-sm xl:text-base">Please enter your new password and confirm it below to reset your account password</p>
                                            </div>

                                            <div className="w-full flex flex-col gap-4">
                                                <div className="w-full flex flex-col gap-2">
                                                    <label className="text-white text-sm font-medium">New Password</label>
                                                    <input
                                                        type="password"
                                                        placeholder="Enter new password"
                                                        value={resetData.newPassword}
                                                        onChange={e => setResetData({...resetData, newPassword: e.target.value})}
                                                        className="w-full px-3 py-2 xl:px-4 xl:py-3 rounded-lg bg-[#3a3a3a] text-white border-none outline-none focus:bg-[#4a4a4a] transition-colors placeholder-white/50"
                                                    />
                                                </div>
                                                
                                                <div className="w-full flex flex-col gap-2">
                                                    <label className="text-white text-sm font-medium">Retype New Password</label>
                                                    <input
                                                        type="password"
                                                        placeholder="Enter retype new password"
                                                        value={resetData.confirmPassword}
                                                        onChange={e => setResetData({...resetData, confirmPassword: e.target.value})}
                                                        className="w-full px-3 py-2 xl:px-4 xl:py-3 rounded-lg bg-[#3a3a3a] text-white border-none outline-none focus:bg-[#4a4a4a] transition-colors placeholder-white/50"
                                                    />
                                                </div>
                                                
                                                <Button 
                                                    onClick={handleResetSubmit}
                                                    disabled={!resetData.newPassword || !resetData.confirmPassword}
                                                    className="w-full px-3 py-2 xl:px-4 xl:py-3 rounded-lg text-white text-base"
                                                >
                                                    UPDATE PASSWORD
                                                </Button>
                                                
                                                <p className="text-white/70 text-sm text-center">
                                                    Back to{" "}
                                                    <button
                                                        className="text-[#8b5cf6] hover:text-[#a78bfa] transition-colors font-medium"
                                                        onClick={handleShowLogin}
                                                        type="button"
                                                    >
                                                        LOGIN
                                                    </button>
                                                    {" "}or{" "}
                                                    <button
                                                        className="text-[#8b5cf6] hover:text-[#a78bfa] transition-colors font-medium"
                                                        onClick={handleShowRegister}
                                                        type="button"
                                                    >
                                                        SIGN UP
                                                    </button>
                                                </p>   
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Register */}
                                <div
                                    className={`absolute top-0 left-0 w-full min-h-[80vh] flex flex-col justify-start transition-all duration-500 ${
                                        currentView === 'register'
                                            ? "opacity-100 translate-x-0 pointer-events-auto"
                                            : "opacity-0 -translate-x-10 pointer-events-none"
                                    }`}
                                >
                                    <div className="relative w-full p-10 min-h-[80vh] flex flex-col justify-center py-16">
                                        <Link href="/" className="flex gap-2 items-center absolute top-4 left-4">
                                            <Image 
                                                src="/login/back.png"
                                                width={100}
                                                height={100} alt="Logo Decodes" 
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
                                            
                                            {/* Stepper Indicator */}
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
                                            
                                            {/* Stepper Form */}
                                            <div className="w-full flex-1">
                                                {registerSteps[step].render(registerValues[step], handleChange)}
                                            </div>
                                            
                                            {/* Stepper Navigation */}
                                            <div className="flex w-full justify-between gap-4">
                                                <Button
                                                    variant="secondary"
                                                    className="rounded w-[47%] px-6 flex-1 sm:flex-none"
                                                    onClick={handleBack}
                                                    disabled={step === 0}
                                                    type="button"
                                                >
                                                    Back
                                                </Button>
                                                {step < registerSteps.length - 1 ? (
                                                    <Button
                                                        className="rounded w-[47%] px-6 flex-1 sm:flex-none bg-[#a084f7] hover:bg-[#8f6ff7]"
                                                        onClick={handleNext}
                                                        disabled={!isStepValid(step)}
                                                        type="button"
                                                    >
                                                        Next
                                                    </Button>
                                                ) : (
                                                    <Button
                                                        className="rounded w-[47%] px-6 flex-1 sm:flex-none bg-[#a084f7] hover:bg-[#8f6ff7]"
                                                        onClick={handleRegister}
                                                        disabled={!isStepValid(step)}
                                                        type="button"
                                                    >
                                                        Register
                                                    </Button>
                                                )}
                                            </div>
                                            
                                            <p className="text-white/70 text-sm text-center">
                                                Sudah punya akun?{" "}
                                                <button
                                                    className="text-[#a084f7] underline hover:text-[#8f6ff7] transition-colors"
                                                    onClick={handleShowLogin}
                                                    type="button"
                                                >
                                                    Login
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}