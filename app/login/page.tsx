'use client';
import { JSX, useState } from "react";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import LoginForm from "../components/Form/LoginForm/LoginForm";
import RegisterForm from "../components/Form/RegisterForm/RegisterForm";
import ForgotPasswordForm from "../components/Form/ForgotPasswordForm/ForgotPasswordForm";
import ResetPasswordForm from "../components/Form/ResetPasswordForm/ResetPasswordForm";
import Modal from "@/app/components/Modal/Modal";
import { useModal } from "@/app/hooks/useModal";
import { PersonalInfo, BusinessInfo, ServiceInfo } from "@/app/types/register";

export default function Login(): JSX.Element {
    const [currentView, setCurrentView] = useState<'login' | 'register' | 'forgot' | 'reset'>('login');
    const [resetData, setResetData] = useState({ newPassword: '', confirmPassword: '' });
    const { modal, showSuccess, showError, closeModal } = useModal();
    const router = useRouter();

    const resetStates = (): void => {
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

    const handleForgotSubmit = (email: string): void => {
        const message = `Password reset email will be sent to:\n${email}`;
        showSuccess('Reset Email Sent', message, {
            onConfirm: () => {
                closeModal();
                handleShowReset();
            }
        });
    };

    const handleResetSubmit = (): void => {
        if (resetData.newPassword === resetData.confirmPassword) {
            showSuccess('Success', 'Password has been reset successfully!', {
                onConfirm: () => {
                    closeModal();
                    handleShowLogin();
                }
            });
        } else {
            showError('Error', 'Passwords do not match!\nPlease make sure both passwords are identical.');
        }
    };

    const handleLogin = (email: string): void => {
        const message = `Welcome back!\nYou've logged in successfully using ${email}`;
        
        showSuccess('Login Successful', message, {
            onConfirm: () => {
                closeModal();
                router.push('/');
            },
            confirmText: 'Continue'
        });
    };

    const handleRegister = (data: {
        personal: PersonalInfo;
        business: BusinessInfo;
        service: ServiceInfo;
    }) => {
        const serviceText = data.service.selectedService === "complete" ? "Chatbot & CRM" : 
                          data.service.selectedService === "chatbot" ? "Chatbot AI" : 
                          data.service.selectedService === "crm" ? "CRM Integration" : 
                          data.service.selectedService;
                          
        const message = `Your account has been successfully created with the following details:\n\n Name: ${data.personal.fullName}\nEmail: ${data.personal.email}\nBusiness: ${data.business.businessName}\nService: ${serviceText}\n\n Welcome aboard! 🚀`;
        
        showSuccess('Registration Successful', message, {
            onConfirm: () => {
                closeModal();
                router.push('/');
            },
            confirmText: 'Continue'
        });
    };

    return (
        <div className="h-screen w-full bg-[#000] relative flex items-center justify-center overflow-x-hidden">
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('hero-bg.png')",
                }}
            ></div>
            
            <Modal
                isOpen={modal.isOpen}
                onClose={closeModal}
                title={modal.title}
                message={modal.message}
                type={modal.type}
                onConfirm={modal.onConfirm}
                confirmText={modal.confirmText}
                cancelText={modal.cancelText}
            />  
            
            <div className="relative flex items-center justify-center w-full max-w-7xl">
                <div className="flex flex-col md:flex-row w-full max-w-6xl bg-[#000] rounded-3xl md:rounded-l-3xl shadow-2xl overflow-hidden mx-6 md:mx-10 justify-center">
                    
                    <div className="hidden lg:flex lg:w-1/2 min-h-[85vh] flex-col justify-center items-center bg-black relative overflow-hidden">
                        <div className="relative z-10 flex items-center justify-center h-full w-full">
                            <Image 
                                src="/login/logo.png"
                                width={100}
                                height={100} 
                                alt="Logo Decodes" 
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

                        <div className="absolute -top-25 left-0 w-32 h-32 bg-[#6366f1]/60 rounded-full blur-3xl w-full"></div>

                        <div className="relative w-full min-h-[80vh] flex items-start justify-center">

                            {/* Login */}
                            <div
                                className={`absolute top-0 left-0 w-full min-h-[80vh] flex flex-col justify-start transition-all duration-500 ${
                                    currentView === 'login'
                                        ? "opacity-100 translate-x-0 pointer-events-auto"
                                        : "opacity-0 translate-x-10 pointer-events-none"
                                }`}
                            >
                                <LoginForm 
                                    onShowForgot={() => setCurrentView('forgot')}
                                    onShowRegister={() => setCurrentView('register')}
                                    onLogin={handleLogin}
                                />
                            </div>

                            {/* Forgot Password */}
                            <div
                                className={`absolute top-0 left-0 w-full min-h-[80vh] flex flex-col justify-start transition-all duration-500 ${
                                    currentView === 'forgot'
                                        ? "opacity-100 translate-x-0 pointer-events-auto"
                                        : "opacity-0 translate-x-10 pointer-events-none"
                                }`}
                            >
                                <ForgotPasswordForm
                                    onShowLogin={handleShowLogin}
                                    onShowRegister={handleShowRegister}
                                    onShowReset={handleShowReset}
                                    onForgotSubmit={handleForgotSubmit}
                                />
                            </div>

                            {/* Reset Password*/}
                            <div
                                className={`absolute top-0 left-0 w-full min-h-[80vh] flex flex-col justify-start transition-all duration-500 ${
                                    currentView === 'reset'
                                        ? "opacity-100 translate-x-0 pointer-events-auto"
                                        : "opacity-0 translate-x-10 pointer-events-none"
                                }`}
                            >
                                <ResetPasswordForm
                                    onShowLogin={handleShowLogin}
                                    onShowRegister={handleShowRegister}
                                    onShowForgot={handleShowForgot}
                                    onResetSubmit={handleResetSubmit}
                                />
                            </div>
                            
                            {/* Register */}
                            <div
                                className={`absolute top-0 left-0 w-full min-h-[80vh] flex flex-col justify-start transition-all duration-500 ${
                                    currentView === 'register'
                                        ? "opacity-100 translate-x-0 pointer-events-auto"
                                        : "opacity-0 -translate-x-10 pointer-events-none"
                                }`}
                            >
                                <RegisterForm 
                                    onShowLogin={handleShowLogin}
                                    onRegisterSuccess={handleRegister}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}