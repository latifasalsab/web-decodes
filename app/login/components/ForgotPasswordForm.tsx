import { useState } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

interface ForgotPasswordFormProps {
    readonly onShowLogin: () => void;
    readonly onShowRegister: () => void;
    readonly onShowReset: () => void;
    readonly onForgotSubmit: (email: string) => void;
}

export default function ForgotPasswordForm({ 
    onShowLogin, 
    onShowRegister, 
    onShowReset, 
    onForgotSubmit 
}: ForgotPasswordFormProps) {
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        onForgotSubmit(email);
        onShowReset();
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
                <Button variant="link" onClick={onShowLogin} className="text-white p-0 m-0">
                    Back
                </Button>
            </div>

            <div className="flex flex-col gap-6 h-fit mt-16">
                <div className="text-center">
                    <h1 className="text-2xl xl:text-4xl font-bold text-white">FORGOT PASSWORD</h1>
                    <p className="text-white/70 text-sm xl:text-base">
                        Please enter your email address and we will email you a link to reset your password
                    </p>
                </div>

                <div className="w-full flex flex-col gap-4">
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor='email' className="text-white text-sm font-medium">Email</label>
                        <input
                            type="email"
                            name='email'
                            placeholder="Enter your email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="w-full px-3 py-2 xl:px-4 xl:py-3 rounded-lg bg-[#3a3a3a] text-white border-none outline-none focus:bg-[#4a4a4a] transition-colors placeholder-white/50"
                        />
                    </div>
                    
                    <Button 
                        onClick={handleSubmit}
                        disabled={!email}
                        className="w-full px-3 py-2 xl:px-4 xl:py-3 rounded-lg text-white text-base"
                    >
                        SEND EMAIL
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