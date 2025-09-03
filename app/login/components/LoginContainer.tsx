'use client';

import { JSX, useState, useCallback } from "react";
import { useRouter } from 'next/navigation';
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ForgotPasswordForm from "./ForgotPasswordForm";
import ResetPasswordForm from "./ResetPasswordForm";
import Modal from "@/app/components/Modal/Modal";
import { useModal } from "@/app/hooks/useModal";
import { PersonalInfo, BusinessInfo, ServiceInfo } from "@/app/types/register";

type ViewType = 'login' | 'register' | 'forgot' | 'reset';

type FormComponents = {
    [K in ViewType]: {
        component: React.ComponentType<any>;
        getProps: () => any;
    };
};

export default function LoginContainer(): JSX.Element {
    const [currentView, setCurrentView] = useState<ViewType>('login');
    const [resetData, setResetData] = useState({ newPassword: '', confirmPassword: '' });
    const { modal, showSuccess, showError, closeModal } = useModal();
    const router = useRouter();

    // Generic function untuk mengubah view dan reset state
    const changeView = useCallback((view: ViewType, shouldResetStates: boolean = true) => {
        setCurrentView(view);
        if (shouldResetStates) {
            setResetData({ newPassword: '', confirmPassword: '' });
        }
    }, []);

    // Handlers
    const handleShowLogin = useCallback(() => changeView('login'), [changeView]);
    const handleShowRegister = useCallback(() => changeView('register'), [changeView]);
    const handleShowForgot = useCallback(() => changeView('forgot'), [changeView]);
    const handleShowReset = useCallback(() => changeView('reset', false), [changeView]);

    const handleForgotSubmit = useCallback((email: string): void => {
        const message = `Password reset email will be sent to:\n${email}`;
        showSuccess('Reset Email Sent', message, {
            onConfirm: () => {
                closeModal();
                handleShowReset();
            }
        });
    }, [showSuccess, closeModal, handleShowReset]);

    const handleResetSubmit = useCallback((): void => {
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
    }, [resetData, showSuccess, showError, closeModal, handleShowLogin]);

    const handleLogin = useCallback((email: string): void => {
        const message = `Welcome back!\nYou've logged in successfully using ${email}`;
        
        showSuccess('Login Successful', message, {
            onConfirm: () => {
                closeModal();
                router.push('/');
            },
            confirmText: 'Continue'
        });
    }, [showSuccess, closeModal, router]);

    const handleRegister = useCallback((data: {
        personal: PersonalInfo;
        business: BusinessInfo;
        service: ServiceInfo;
    }) => {
        const serviceMap = {
            complete: "Chatbot & CRM",
            chatbot: "Chatbot AI",
            crm: "CRM Integration"
        } as const;
        
        const serviceText = serviceMap[data.service.selectedService as keyof typeof serviceMap] || data.service.selectedService;
                          
        const message = `Your account has been successfully created with the following details:\n\n Name: ${data.personal.fullName}\nEmail: ${data.personal.email}\nBusiness: ${data.business.businessName}\nService: ${serviceText}\n\n Welcome aboard! 🚀`;
        
        showSuccess('Registration Successful', message, {
            onConfirm: () => {
                closeModal();
                router.push('/');
            },
            confirmText: 'Continue'
        });
    }, [showSuccess, closeModal, router]);

    const formComponents: FormComponents = {
        login: {
            component: LoginForm,
            getProps: () => ({
                onShowForgot: handleShowForgot,
                onShowRegister: handleShowRegister,
                onLogin: handleLogin
            })
        },
        forgot: {
            component: ForgotPasswordForm,
            getProps: () => ({
                onShowLogin: handleShowLogin,
                onShowRegister: handleShowRegister,
                onShowReset: handleShowReset,
                onForgotSubmit: handleForgotSubmit
            })
        },
        reset: {
            component: ResetPasswordForm,
            getProps: () => ({
                onShowLogin: handleShowLogin,
                onShowRegister: handleShowRegister,
                onShowForgot: handleShowForgot,
                onResetSubmit: handleResetSubmit
            })
        },
        register: {
            component: RegisterForm,
            getProps: () => ({
                onShowLogin: handleShowLogin,
                onRegisterSuccess: handleRegister
            })
        }
    };

    const FormWrapper = useCallback(({ 
        viewType, 
        children 
    }: { 
        viewType: ViewType; 
        children: React.ReactNode; 
    }) => {
        const baseClassName = "absolute top-0 left-0 w-full min-h-[80vh] flex flex-col justify-start transition-all duration-500";
        const isActive = currentView === viewType;
        const activeClassName = "opacity-100 translate-x-0 pointer-events-auto";
        const hiddenClassName = `opacity-0 ${viewType === 'register' ? '-translate-x-10' : 'translate-x-10'} pointer-events-none`;
        
        return (
            <div className={`${baseClassName} ${isActive ? activeClassName : hiddenClassName}`}>
                {children}
            </div>
        );
    }, [currentView]);

    const renderForm = useCallback((viewType: ViewType) => {
        const { component: Component, getProps } = formComponents[viewType];
        const props = getProps();
        
        return (
            <FormWrapper key={viewType} viewType={viewType}>
                <Component {...props} />
            </FormWrapper>
        );
    }, [formComponents, FormWrapper]);

    return (
        <>
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
            
            <div className="relative w-full min-h-[80vh] flex items-start justify-center">
                {renderForm('login')}
                {renderForm('forgot')}
                {renderForm('reset')}
                {renderForm('register')}
            </div>
        </>
    );
}