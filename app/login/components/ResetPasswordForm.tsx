import { useState } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

interface ResetPasswordFormProps {
    readonly onShowLogin: () => void;
    readonly onShowRegister: () => void;
    readonly onShowForgot: () => void;
    readonly onResetSubmit: (newPassword: string, confirmPassword: string) => void;
}

export default function ResetPasswordForm({ 
    onShowLogin, 
    onShowRegister, 
    onShowForgot, 
    onResetSubmit 
}: ResetPasswordFormProps) {
    const [passwords, setPasswords] = useState({
        newPassword: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({
        newPassword: '',
        confirmPassword: ''
    });

    const isValidPassword = (password: string) => {
        return password.length >= 8;
    };

    const isPasswordMatch = (newPassword: string, confirmPassword: string) => {
        return newPassword === confirmPassword;
    };

    const validatePasswords = () => {
        const newErrors = { newPassword: '', confirmPassword: '' };
        
        if (!passwords.newPassword) {
            newErrors.newPassword = 'The new password cannot be empty';
        } else if (!isValidPassword(passwords.newPassword)) {
            newErrors.newPassword = 'Password must be at least 8 characters';
        }
        
        // Validasi confirm password
        if (!passwords.confirmPassword) {
            newErrors.confirmPassword = 'Password confirmation cannot be empty';
        } else if (!isPasswordMatch(passwords.newPassword, passwords.confirmPassword)) {
            newErrors.confirmPassword = 'The password and confirmation do not match';
        }
        
        setErrors(newErrors);
        return !newErrors.newPassword && !newErrors.confirmPassword;
    };

    const handleSubmit = () => {
        if (validatePasswords()) {
            onResetSubmit(passwords.newPassword, passwords.confirmPassword);
        }
    };

    const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setPasswords({...passwords, newPassword});
        
        if (errors.newPassword && newPassword) {
            if (isValidPassword(newPassword)) {
                setErrors({...errors, newPassword: ''});
            }
        }
        
        if (passwords.confirmPassword && errors.confirmPassword) {
            if (isPasswordMatch(newPassword, passwords.confirmPassword)) {
                setErrors({...errors, confirmPassword: ''});
            }
        }
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const confirmPassword = e.target.value;
        setPasswords({...passwords, confirmPassword});
        
        if (errors.confirmPassword && confirmPassword) {
            if (isPasswordMatch(passwords.newPassword, confirmPassword)) {
                setErrors({...errors, confirmPassword: ''});
            }
        }
    };

    return (
        <div className="relative w-full p-10 min-h-[80vh] flex flex-col justify-center py-16">
            <div className="flex gap-2 items-center absolute top-4 left-4">
                <Image 
                    src="/login/back.png"
                    width={100}
                    height={100} 
                    alt="Back" 
                    className="h-3 w-auto"                          
                />
                <Button onClick={onShowForgot} variant="link" className="text-white p-0 m-0">
                    Back
                </Button>
            </div>

            <div className="flex flex-col gap-6 h-fit mt-16">
                <div className="text-center">
                    <h1 className="text-2xl xl:text-4xl font-bold text-white">RESET PASSWORD</h1>
                    <p className="text-white/70 text-sm xl:text-base">
                        Please enter your new password and confirm it below to reset your account password
                    </p>
                </div>

                <div className="w-full flex flex-col gap-4">
                    <div className="w-full flex flex-col gap-2">
                        <label className="text-white text-sm font-medium">New Password</label>
                        <input
                            type="password"
                            placeholder="Enter new password (min. 8 characters)"
                            value={passwords.newPassword}
                            onChange={handleNewPasswordChange}
                            className={`w-full px-3 py-2 xl:px-4 xl:py-3 rounded-lg bg-[#3a3a3a] text-white border-none outline-none focus:bg-[#4a4a4a] transition-colors placeholder-white/50 ${
                                errors.newPassword ? 'ring-2 ring-red-500' : ''
                            }`}
                        />
                        {errors.newPassword && (
                            <p className="text-red-400 text-xs mt-1">{errors.newPassword}</p>
                        )}
                    </div>
                    
                    <div className="w-full flex flex-col gap-2">
                        <label className="text-white text-sm font-medium">Retype New Password</label>
                        <input
                            type="password"
                            placeholder="Confirm your new password"
                            value={passwords.confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            className={`w-full px-3 py-2 xl:px-4 xl:py-3 rounded-lg bg-[#3a3a3a] text-white border-none outline-none focus:bg-[#4a4a4a] transition-colors placeholder-white/50 ${
                                errors.confirmPassword ? 'ring-2 ring-red-500' : ''
                            }`}
                        />
                        {errors.confirmPassword && (
                            <p className="text-red-400 text-xs mt-1">{errors.confirmPassword}</p>
                        )}
                    </div>
                    
                    <Button 
                        onClick={handleSubmit}
                        variant="gradientOutline"
                        className="w-full px-3 py-2 xl:px-4 xl:py-3 rounded-lg text-white text-base cursor-pointer"
                    >
                        UPDATE PASSWORD
                    </Button>
                    
                    <p className="text-white/70 text-sm text-center">
                        Back to{" "}
                        <button
                            className="text-[#8b5cf6] hover:text-[#a78bfa] transition-colors font-medium cursor-pointer"
                            onClick={onShowLogin}
                            type="button"
                        >
                            SIGN IN
                        </button>
                        {" "}or{" "}
                        <button
                            className="text-[#8b5cf6] hover:text-[#a78bfa] transition-colors font-medium cursor-pointer"
                            onClick={onShowRegister}
                            type="button"
                        >
                            SIGN UP
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}