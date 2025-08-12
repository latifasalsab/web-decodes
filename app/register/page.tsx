import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import SplitText from "@/app/components/SplitText/SplitText";

export default function Register() {
  return (
    <div className="overflow-hidden relative bg-[#100425] flex flex-col items-center justify-center h-screen">
      <div className="absolute -right-60 top-1/2 -translate-y-1/2 w-[2000px] h-[800px] bg-gradient-to-r from-[#0421DE] to-[#C1ABF7] opacity-50 blur-3xl rounded-full"></div>
      <SplitText
        text="HALOOOOO Salsa Tiaraaaa"
        className="text-2xl font-semibold text-center text-white mb-2"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
      />
      <Button variant="link" className="absolute top-4 left-4 text-white text-lg">
          <Link href="/">Back</Link>
      </Button>
      <div className="wrapper-login1 relative flex flex-col items-center p-8">
        <h1 className="text-4xl text-white font-bold mb-8">Register</h1>
        <div className="flex flex-col gap-2 mb-4 w-sm">
            <Input type="email" placeholder="Email" className="text-white" />
            <Input type="password" placeholder="Password" className="text-white" />
        </div>
        <div className="flex w-full items-center justify-between mb-8">
            <div className="flex items-center gap-2">
                <Checkbox id="terms" />
                <Label className="text-white" htmlFor="terms">Remember Me</Label>
            </div>
            <div>
                <Button variant="link" className="text-white p-0">Forgot Password?</Button>
            </div>
        </div>
        <Button size="lg" className="w-full">
            Login
        </Button>
      </div>
    </div>
  );
}