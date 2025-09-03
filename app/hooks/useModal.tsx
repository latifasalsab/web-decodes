'use client';

import { useState } from 'react';

interface ModalState {
    isOpen: boolean;
    title: string;
    message: string;
    type?: 'success' | 'error' | 'info';
    onConfirm?: () => void;
    confirmText?: string;
    cancelText?: string;
}

export function useModal() {
    const [modal, setModal] = useState<ModalState>({
        isOpen: false,
        title: '',
        message: '',
        type: 'info'
    });

    const showModal = (
        title: string,
        message: string,
        type: 'success' | 'error' | 'info' = 'info',
        options?: {
            onConfirm?: () => void;
            confirmText?: string;
            cancelText?: string;
        }
    ) => {
        setModal({
            isOpen: true,
            title,
            message,
            type,
            onConfirm: options?.onConfirm,
            confirmText: options?.confirmText,
            cancelText: options?.cancelText
        });
    };

    const closeModal = () => {
        setModal(prev => ({ ...prev, isOpen: false }));
    };

    const showSuccess = (
        title: string,
        message: string,
        options?: {
            onConfirm?: () => void;
            confirmText?: string;
            cancelText?: string;
        }
    ) => showModal(title, message, 'success', options);

    const showError = (
        title: string,
        message: string,
        options?: {
            onConfirm?: () => void;
            confirmText?: string;
            cancelText?: string;
        }
    ) => showModal(title, message, 'error', options);

    const showInfo = (
        title: string,
        message: string,
        options?: {
            onConfirm?: () => void;
            confirmText?: string;
            cancelText?: string;
        }
    ) => showModal(title, message, 'info', options);

    return {
        modal,
        showModal,
        showSuccess,
        showError,
        showInfo,
        closeModal
    };
}