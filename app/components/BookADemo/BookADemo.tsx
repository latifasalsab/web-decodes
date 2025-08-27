import { Button } from "@/components/ui/button"

export default function BookADemo() {
    return (
        <div className="w-full my-10 px-8 md:px-10">
            <div className="max-w-7xl mx-auto">
                <div className="relative bg-gradient-to-br from-[#1F1F1F] via-[#1F1F1F] to-purple-700/50 rounded-3xl shadow-2xl px-8 py-8 overflow-hidden">
                
                <div className="relative z-10 text-center">
                    
                    <div className="mb-6 flex flex-col items-center">
                    <img 
                        src="/logo_decodes/logo_decodes.png"
                        alt="logo decodes"
                        width={80}
                        height={96}
                        className="mb-3"/>
                    
                    <div className="w-70 h-px bg-gradient-to-r from-[#2032E0] to-[#7666EB]"></div>
                    </div>
    
                    
                    <h1 className="text-white text-base md:text-lg lg:text-xl font-bold mb-6 leading-tight">
                    TRANSFORM YOUR WORKFLOW WITH DECODES!
                    </h1>
    
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 mb-6 text-sm">
                    <div className="flex items-center gap-2">
                        <div>
                        <img
                            src="/icons/checklist.png"
                            alt="icon checklist"
                            className="w-4 h-4"
                            />
                        </div>
                        <span className="text-gray-300">Customized setup for your needs</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div>
                        <img
                            src="/icons/checklist.png"
                            alt="icon checklist"
                            className="w-4 h-4"
                            />
                        </div>
                        <span className="text-gray-300">Fast & secure integration</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div>
                        <img
                            src="/icons/checklist.png"
                            alt="icon checklist"
                            className="w-4 h-4"
                            />
                        </div>
                        <span className="text-gray-300">Clear and transparent pricing</span>
                    </div>
                    </div>
    
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
                    <Button 
                        variant="default" 
                        className="bg-gradient-to-r from-[#0421DE] to-[#BA8EF4] text-white px-6 py-2.5 rounded-3xl font-semibold hover:opacity-90 transition-all shadow-lg text-sm"
                    >
                        BOOK A DEMO
                    </Button>
    
                    <Button 
                        variant="outline" 
                        className="border-2 border-[#0421DE] bg-transparent text-gray-300 px-6 py-2.5 rounded-3xl font-semibold hover:bg-gray-800 hover:text-white transition-all text-sm"
                    >
                        LEARN MORE
                    </Button>
                    </div>
                </div>
                </div>
            </div>
            </div>
    )
}