'use client';
import { useState } from "react";
import Aurora from '@/app/components/Aurora/Aurora';
import MetaBalls from '@/app/components/MetaBalls/MetaBalls';
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import Link from 'next/link';
import { Button } from "@/components/ui/button"

const registerSteps = [
    {
        label: "Email",
        render: (value: string, setValue: (v: string) => void) => (
            <input
                type="email"
                placeholder="Email"
                value={value}
                onChange={e => setValue(e.target.value)}
                className="mb-3 w-full px-4 py-2 rounded bg-[#232336] text-white border-none outline-none focus:bg-[#2a2a3f] transition-colors"
                required
            />
        ),
    },
    {
        label: "Password",
        render: (value: string, setValue: (v: string) => void) => (
            <input
                type="password"
                placeholder="Password"
                value={value}
                onChange={e => setValue(e.target.value)}
                className="mb-3 w-full px-4 py-2 rounded bg-[#232336] text-white border-none outline-none focus:bg-[#2a2a3f] transition-colors"
                required
            />
        ),
    },
    {
        label: "Full Name",
        render: (value: string, setValue: (v: string) => void) => (
            <input
                type="text"
                placeholder="Full Name"
                value={value}
                onChange={e => setValue(e.target.value)}
                className="mb-3 w-full px-4 py-2 rounded bg-[#232336] text-white border-none outline-none focus:bg-[#2a2a3f] transition-colors"
                required
            />
        ),
    },
];

export default function Login() {
    const [isRegister, setIsRegister] = useState(false);

    // Stepper state
    const [step, setStep] = useState(0);
    const [registerValues, setRegisterValues] = useState(["", "", ""]);

    // Reset stepper saat keluar dari register
    const handleShowLogin = () => {
        setIsRegister(false);
        setStep(0);
        setRegisterValues(["", "", ""]);
    };

    // Stepper navigation
    const handleNext = () => setStep(s => Math.min(s + 1, registerSteps.length - 1));
    const handleBack = () => setStep(s => Math.max(s - 1, 0));
    const handleChange = (val: string) => {
        setRegisterValues(vals => {
            const newVals = [...vals];
            newVals[step] = val;
            return newVals;
        });
    };

    // Simulasi submit
    const handleRegister = () => {
        alert(`Register:\nEmail: ${registerValues[0]}\nPassword: ${registerValues[1]}\nFull Name: ${registerValues[2]}`);
        handleShowLogin();
    };

    return (
        <div className="min-h-screen bg-[#100425] relative flex items-center justify-center p-4">
            <Aurora
                colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                blend={0.5}
                amplitude={1.0}
                speed={0.5}
            />
            
            <div className="relative flex items-center justify-center w-full max-w-6xl">
                {/* Container with responsive layout */}
                <div className="flex flex-col md:flex-row w-full max-w-4xl bg-[#0A011B] rounded-3xl md:rounded-l-3xl shadow-2xl overflow-hidden">
                    
                    {/* Left Side - 3D Logo (Hidden on mobile) */}
                    <div className="hidden md:flex md:w-1/2 lg:w-[420px] h-64 md:h-[500px] flex-col justify-center items-center bg-black relative overflow-hidden">
                        {/* 3D Cubes Logo */}
                        <div className="relative z-10 flex flex-col items-center">
                            {/* 3D Cubes */}
                            <div className="relative mb-4">
                                <div className="flex flex-col gap-1">
                                    {/* Top Row */}
                                    <div className="flex gap-1">
                                        <div className="w-8 h-8 bg-gradient-to-br from-[#4f46e5] to-[#3730a3] transform rotate-12 shadow-lg"></div>
                                        <div className="w-8 h-8 bg-gradient-to-br from-[#6366f1] to-[#4f46e5] transform -rotate-6 shadow-lg"></div>
                                    </div>
                                    {/* Bottom Row */}
                                    <div className="flex gap-1">
                                        <div className="w-8 h-8 bg-gradient-to-br from-[#8b5cf6] to-[#6366f1] transform rotate-6 shadow-lg"></div>
                                        <div className="w-8 h-8 bg-gradient-to-br from-[#a855f7] to-[#8b5cf6] transform -rotate-12 shadow-lg"></div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Text Logo */}
                            <div className="text-center">
                                <div className="text-white/60 text-lg font-light mb-1">by</div>
                                <div className="text-white text-4xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] bg-clip-text text-transparent">
                                    Decodes
                                </div>
                            </div>
                        </div>
                        
                        {/* Background Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1e1b4b]/20 via-transparent to-[#581c87]/20"></div>
                        <div className="absolute top-10 left-10 w-32 h-32 bg-[#6366f1]/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#8b5cf6]/10 rounded-full blur-3xl"></div>
                    </div>
                    
                    {/* Right Side - Forms */}
                    <div className="w-full md:w-1/2 lg:w-[420px] min-h-[500px] relative flex items-center justify-center">
                        <div className="relative w-full h-full flex items-center justify-center">
                            
                            {/* Login Form */}
                            <div
                                className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center p-6 sm:p-8 transition-all duration-500 ${
                                    isRegister
                                        ? "opacity-0 translate-x-10 pointer-events-none"
                                        : "opacity-100 translate-x-0 pointer-events-auto"
                                }`}
                            >
                                {/* Back Button - Top Left */}
                                <Button variant="link" className="text-white justify-start p-0 self-start absolute top-6 left-6">
                                    <Link href="/">Back</Link>
                                </Button>
                                
                                <div className="w-full max-w-sm flex flex-col items-center space-y-6">
                                    {/* Welcome Header */}
                                    <div className="text-center mb-8">
                                        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">WELCOME BACK</h1>
                                        <p className="text-white/70 text-base">Login in to your decodes account</p>
                                    </div>
                                    
                                    {/* Email Field */}
                                    <div className="w-full space-y-2">
                                        <label className="text-white text-sm font-medium">Email</label>
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="w-full px-4 py-3 rounded-lg bg-[#3a3a3a] text-white border-none outline-none focus:bg-[#4a4a4a] transition-colors placeholder-white/50"
                                        />
                                    </div>
                                    
                                    {/* Password Field */}
                                    <div className="w-full space-y-2">
                                        <label className="text-white text-sm font-medium">Password</label>
                                        <div className="relative">
                                            <input
                                                type="password"
                                                placeholder="Enter your password"
                                                className="w-full px-4 py-3 pr-12 rounded-lg bg-[#3a3a3a] text-white border-none outline-none focus:bg-[#4a4a4a] transition-colors placeholder-white/50"
                                            />
                                            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z" stroke="currentColor" strokeWidth="2"/>
                                                    <path d="M21 12C19.1114 14.991 15.7183 18 12 18C8.2817 18 4.88856 14.991 3 12C4.88856 9.00901 8.2817 6 12 6C15.7183 6 19.1114 9.00901 21 12Z" stroke="currentColor" strokeWidth="2"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    
                                    {/* Remember Me & Forgot Password */}
                                    <div className="flex w-full items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Checkbox id="remember" className="border-white/30 data-[state=checked]:bg-[#6366f1] data-[state=checked]:border-[#6366f1]" />
                                            <Label className="text-white text-sm" htmlFor="remember">
                                                Remember Me
                                            </Label>
                                        </div>
                                        <Button variant="link" className="text-[#8b5cf6] p-0 text-sm hover:text-[#a78bfa] transition-colors">
                                            Forgot password?
                                        </Button>
                                    </div>
                                    
                                    {/* Login Button */}
                                    <Button className="w-full rounded-lg py-3 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#5855eb] hover:to-[#7c3aed] transition-all duration-300 font-semibold text-white text-base">
                                        LOGIN
                                    </Button>
                                    
                                    {/* Sign Up Link */}
                                    <p className="text-white/70 text-sm text-center mt-6">
                                        Don't have an account?{" "}
                                        <button
                                            className="text-[#8b5cf6] hover:text-[#a78bfa] transition-colors font-medium"
                                            onClick={() => setIsRegister(true)}
                                            type="button"
                                        >
                                            Sign up
                                        </button>
                                    </p>
                                </div>
                            </div>
                            
                            {/* Register Stepper Form */}
                            <div
                                className={`absolute top-0 left-0 w-full h-full flex flex-col justify-between p-6 sm:p-8 transition-all duration-500 ${
                                    isRegister
                                        ? "opacity-100 translate-x-0 pointer-events-auto"
                                        : "opacity-0 -translate-x-10 pointer-events-none"
                                }`}
                            >
                                <Button variant="link" className="text-white justify-start p-0 self-start">
                                    <Link href="/">Back</Link>
                                </Button>
                                
                                <div className="w-full flex flex-col items-center space-y-4">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Register</h2>
                                    
                                    {/* Stepper Indicator */}
                                    <div className="flex items-center justify-center mb-6 gap-3">
                                        {registerSteps.map((stepObj, idx) => (
                                            <div key={stepObj.label} className="flex flex-col items-center gap-2">
                                                <span
                                                    className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                                                        step === idx 
                                                            ? "bg-[#a084f7] border-[#a084f7] scale-110" 
                                                            : step > idx
                                                            ? "bg-[#a084f7]/50 border-[#a084f7]"
                                                            : "bg-transparent border-white/30"
                                                    }`}
                                                />
                                                <span className={`text-xs hidden sm:block transition-colors ${
                                                    step === idx ? "text-[#a084f7]" : "text-white/50"
                                                }`}>
                                                    {stepObj.label}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    {/* Current Step Indicator for Mobile */}
                                    <div className="sm:hidden text-white/70 text-sm mb-2">
                                        Step {step + 1} of {registerSteps.length}: {registerSteps[step].label}
                                    </div>
                                    
                                    {/* Stepper Form */}
                                    <div className="w-full">
                                        {registerSteps[step].render(registerValues[step], handleChange)}
                                    </div>
                                    
                                    {/* Stepper Navigation */}
                                    <div className="flex w-full justify-between mt-4 gap-4">
                                        <Button
                                            variant="secondary"
                                            className="rounded px-6 flex-1 sm:flex-none"
                                            onClick={handleBack}
                                            disabled={step === 0}
                                            type="button"
                                        >
                                            Back
                                        </Button>
                                        {step < registerSteps.length - 1 ? (
                                            <Button
                                                className="rounded px-6 flex-1 sm:flex-none bg-[#a084f7] hover:bg-[#8f6ff7]"
                                                onClick={handleNext}
                                                disabled={!registerValues[step]}
                                                type="button"
                                            >
                                                Next
                                            </Button>
                                        ) : (
                                            <Button
                                                className="rounded px-6 flex-1 sm:flex-none bg-[#a084f7] hover:bg-[#8f6ff7]"
                                                onClick={handleRegister}
                                                disabled={registerValues.some(v => !v)}
                                                type="button"
                                            >
                                                Register
                                            </Button>
                                        )}
                                    </div>
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
    );
}