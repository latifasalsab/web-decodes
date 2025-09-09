import { Button } from "@/components/ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


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
                            alt="icon-checklist"
                            className="w-4 h-4"
                            />
                        </div>
                        <span className="text-gray-300">Customized setup for your needs</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div>
                        <img
                            src="/icons/checklist.png"
                            alt="icon-checklist"
                            className="w-4 h-4"
                            />
                        </div>
                        <span className="text-gray-300">Fast & secure integration</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div>
                        <img
                            src="/icons/checklist.png"
                            alt="icon-checklist"
                            className="w-4 h-4"
                            />
                        </div>
                        <span className="text-gray-300">Clear and transparent pricing</span>
                    </div>
                    </div>
    
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button 
                                variant="gradientOutline" 
                                className="px-6 py-2.5 rounded-3xl font-semibold text-sm"
                            >
                                BOOK A DEMO
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="bg-gray-950 border-gray-700">
                            <AlertDialogHeader>
                                <AlertDialogTitle className="text-white font-bold text-lg">Thank you for your interest</AlertDialogTitle>
                                <AlertDialogDescription className="text-gray-300 text-sm">
                                    We'll be contacting you within 24 hours to arrange your personalized demo. Please keep an eye on your inbox.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogAction>Oke</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
    
                    <Button 
                        variant="outlineToDefault" 
                        className="px-6 py-2.5 rounded-3xl font-semibold text-sm"
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