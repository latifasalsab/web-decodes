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

    const handleSubmit = () => {
        onResetSubmit(passwords.newPassword, passwords.confirmPassword);
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
                            placeholder="Enter new password"
                            value={passwords.newPassword}
                            onChange={e => setPasswords({...passwords, newPassword: e.target.value})}
                            className="w-full px-3 py-2 xl:px-4 xl:py-3 rounded-lg bg-[#3a3a3a] text-white border-none outline-none focus:bg-[#4a4a4a] transition-colors placeholder-white/50"
                        />
                    </div>
                    
                    <div className="w-full flex flex-col gap-2">
                        <label className="text-white text-sm font-medium">Retype New Password</label>
                        <input
                            type="password"
                            placeholder="Enter retype new password"
                            value={passwords.confirmPassword}
                            onChange={e => setPasswords({...passwords, confirmPassword: e.target.value})}
                            className="w-full px-3 py-2 xl:px-4 xl:py-3 rounded-lg bg-[#3a3a3a] text-white border-none outline-none focus:bg-[#4a4a4a] transition-colors placeholder-white/50"
                        />
                    </div>
                    
                    <Button 
                        onClick={handleSubmit}
                        variant="gradientOutline"
                        disabled={!passwords.newPassword || !passwords.confirmPassword}
                        className="w-full px-3 py-2 xl:px-4 xl:py-3 rounded-lg text-white text-base"
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