import Link from 'next/link';
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function Login() {
  return (
    <div className="overflow-hidden relative bg-[#100425] flex items-center justify-center h-screen">
        <div className="absolute -right-60 top-1/2 -translate-y-1/2 w-[2000px] h-[800px] bg-gradient-to-r from-[#0421DE] to-[#C1ABF7] opacity-50 blur-3xl rounded-full"></div>
        <Button variant="link" className="absolute top-4 left-4 text-white">
            <Link href="/">Back</Link>
        </Button>
        <div className="wrapper-login relative flex flex-col items-center p-8">
            <h1 className="text-2xl text-white font-bold mb-8">Login</h1>
            <div className="flex flex-col gap-2 mb-2 w-2xs">
                <Input type="email" placeholder="Email" className="text-white" />
                <Input type="password" placeholder="Password" className="text-white" />
            </div>
            <div className="flex w-full items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <Checkbox id="terms" />
                    <Label className="text-white text-xs" htmlFor="terms">Remember Me</Label>
                </div>
                <div>
                    <Button variant="link" className="text-white p-0 text-xs">Forgot Password?</Button>
                </div>
            </div>
            <Button size="sm" className="w-full">
                Login
            </Button>
        </div>
    </div>
  );
}