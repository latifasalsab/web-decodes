'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface LoginFormProps {
  readonly onShowForgot: () => void;
  readonly onShowRegister: () => void;
  readonly onLogin: (email: string) => void;
}

export default function LoginForm({ onShowForgot, onShowRegister, onLogin }: LoginFormProps) {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      onLogin(loginData.email);
    }
  };

  const isFormValid = loginData.email && loginData.password;

  return (
    <div className="relative w-full p-10 min-h-[80vh] flex flex-col justify-center py-16">
      <Link href="/" className="flex gap-2 items-center absolute top-4 left-4">
        <Image 
          src="/login/back.png"
          width={100}
          height={100} 
          alt="Back Arrow" 
          className="h-3 w-auto"                          
        />
        <Button variant="link" className="text-white p-0 m-0 cursor-pointer">
          Back
        </Button>
      </Link>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 h-fit mt-16">
        <div className="text-center">
          <h1 className="text-2xl xl:text-4xl font-bold text-white">WELCOME BACK</h1>
          <p className="text-white/70 text-sm xl:text-base">Login to your decodes account</p>
        </div>

        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-col gap-2">
            <label htmlFor='email' className="text-white text-sm font-medium">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              value={loginData.email}
              onChange={e => setLoginData({...loginData, email: e.target.value})}
              className="w-full px-3 py-2 xl:px-4 xl:py-3 rounded-lg bg-[#3a3a3a] text-white border-none outline-none focus:bg-[#4a4a4a] transition-colors placeholder-white/50"
              required
            />
          </div>
          
          <div className="w-full flex flex-col gap-2">
            <label htmlFor='password' className="text-white text-sm font-medium">Password</label>
            <div className="relative">
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                value={loginData.password}
                onChange={e => setLoginData({...loginData, password: e.target.value})}
                className="w-full px-3 py-2 xl:px-4 xl:py-3 pr-12 rounded-lg bg-[#3a3a3a] text-white border-none outline-none focus:bg-[#4a4a4a] transition-colors placeholder-white/50"
                required
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox 
                  id="remember" 
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked === true)}
                  className="border-white/30 data-[state=checked]:bg-[#6366f1] data-[state=checked]:border-[#6366f1]" 
                />
                <Label className="text-white text-sm" htmlFor="remember">
                  Remember Me
                </Label>
              </div>
              <Button 
                type="button"
                variant="link" 
                onClick={onShowForgot}
                className="text-[#8b5cf6] p-0 text-sm hover:text-[#a78bfa] transition-colors"
              >
                Forgot password?
              </Button>
            </div>
            
            <Button 
              type="submit"
              disabled={!isFormValid}
              variant="gradientOutline"
              className="w-full px-3 py-2 xl:px-4 xl:py-3 rounded-lg text-white text-base cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              SIGN IN
            </Button>
            
            <p className="text-white/70 text-sm text-center">
              Don't have an account?{" "}
              <button
                type="button"
                className="text-[#8b5cf6] hover:text-[#a78bfa] transition-colors font-medium cursor-pointer"
                onClick={onShowRegister}
              >
                Sign up
              </button>
            </p> 
          </div>
        </div>
      </form>
    </div>
  );
}