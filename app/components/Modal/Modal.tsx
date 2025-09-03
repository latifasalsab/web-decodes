'use client';

import { Button } from "@/components/ui/button";

interface ModalProps {
    readonly isOpen: boolean;
    readonly onClose: () => void;
    readonly title: string;
    readonly message: string;
    readonly type?: 'success' | 'error' | 'info';
    readonly onConfirm?: () => void;
    readonly confirmText?: string;
    readonly cancelText?: string;
}

export default function Modal({ 
    isOpen, 
    onClose, 
    title, 
    message, 
    type = 'info', 
    onConfirm, 
    confirmText = 'OK', 
    cancelText 
}: ModalProps) {
    if (!isOpen) return null;

    const getIcon = () => {
        switch (type) {
            case 'success':
                return (
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                );
            case 'error':
                return (
                    <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                );
            default:
                return (
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                );
        }
    };

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-[#1a1a1a] border border-white/20 rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl">
                <div className="text-center flex flex-col items-center">
                    <div className="flex gap-4 items-center justify-center mb-6">
                        {getIcon()}
                        <h3 className="text-xl font-semibold text-white">{title}</h3>    
                    </div>
                    
                    <p className="text-white/70 text-sm mb-6 whitespace-pre-line">{message}</p>
                    
                    <div className="flex gap-3 justify-center w-full">
                        {cancelText && (
                            <Button
                                variant="outline"
                                onClick={onClose}
                                className="px-6 w-full bg-transparent border-white/30 text-white hover:bg-white/10"
                            >
                                {cancelText}
                            </Button>
                        )}
                        <Button
                            onClick={onConfirm || onClose}
                            className="px-6 w-full text-white"
                        >
                            {confirmText}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}