import { JSX } from "react";
import Image from 'next/image';
import LoginContainer from './components/LoginContainer';

export default function LoginPage(): JSX.Element {
    return (
        <div className="h-screen w-full bg-[#000] relative flex items-center justify-center overflow-x-hidden">
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('hero-bg.png')",
                }}
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
                                priority                       
                            />
                        </div>
                        
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1e1b4b]/20 via-transparent to-[#581c87]/20" />
                        <div className="absolute top-10 left-10 w-32 h-32 bg-[#6366f1]/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#8b5cf6]/10 rounded-full blur-3xl" />
                    </div>
                
                    <div className="w-full md:w-3/4 lg:w-1/2 min-h-[80vh] max-h-screen overflow-y-auto overflow-x-hidden relative flex items-center justify-center py-8 custom-scrollbar" 
                        style={{
                            scrollbarWidth: 'thin',
                            scrollbarColor: '#8b5cf6 transparent'
                        }}>

                        <div className="absolute -top-25 left-0 w-32 h-32 bg-[#6366f1]/60 rounded-full blur-3xl w-full" />
                        
                        <LoginContainer />
                    </div>
                </div>
            </div>
        </div>
    );
}