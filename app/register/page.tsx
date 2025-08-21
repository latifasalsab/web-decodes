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
				className="mb-3 w-full px-4 py-2 rounded bg-[#232336] text-white border-none outline-none"
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
				className="mb-3 w-full px-4 py-2 rounded bg-[#232336] text-white border-none outline-none"
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
				className="mb-3 w-full px-4 py-2 rounded bg-[#232336] text-white border-none outline-none"
				required
			/>
		),
	},
];

export default function LoginRegisterWithImage() {
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
		<div className="min-h-screen bg-[#100425] relative flex items-center justify-center w-full">
			<Aurora
				colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
				blend={0.5}
				amplitude={1.0}
				speed={0.5}
			/>
			<div className="relative flex items-center justify-center h-full w-full">
				{/* Sisi Kiri */}
				<div className="w-[420px] h-[500px] hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-[#a084f7] via-[#7f5af0] to-[#100425] rounded-l-3xl shadow-2xl">
					<MetaBalls
						color="#ffffff"
						cursorBallColor="#ffffff"
						cursorBallSize={2}
						ballCount={15}
						animationSize={30}
						enableMouseInteraction={true}
						enableTransparency={true}
						hoverSmoothness={0.05}
						clumpFactor={1}
						speed={0.3}
					/>
				</div>
				{/* Sisi Kanan: Form (Animasi Slide/Fade) */}
				<div className="relative w-[420px] h-[500px] bg-[#0A011B] rounded-r-3xl shadow-2xl overflow-hidden flex items-center justify-center">
					<div className="relative w-full h-full flex items-center justify-center">
						{/* Login Form */}
						<div
							className={`absolute top-0 left-0 w-full h-full flex flex-col justify-between p-8 transition-all duration-500 ${
								isRegister
									? "opacity-0 translate-x-10 pointer-events-none"
									: "opacity-100 translate-x-0 pointer-events-auto"
							}`}
						>
							<Button variant="link" className="text-white justify-start p-0">
								<Link href="/">Back</Link>
							</Button>
							<div className="w-full flex flex-col items-center">
								<h2 className="text-2xl font-bold text-white mb-6">Login</h2>
								<input
									type="email"
									placeholder="Email"
									className="mb-3 w-full px-4 py-2 rounded bg-[#232336] text-white border-none outline-none"
								/>
								<input
									type="password"
									placeholder="Password"
									className="mb-1 w-full px-4 py-2 rounded bg-[#232336] text-white border-none outline-none"
								/>
								<div className="flex w-full items-center justify-between mb-4">
									<div className="flex items-center gap-2">
										<Checkbox id="terms" />
										<Label className="text-white text-xs" htmlFor="terms">Remember Me</Label>
									</div>
									<div>
										<Button variant="link" className="text-white p-0 text-xs">Forgot Password?</Button>
									</div>
								</div>
								<Button className="w-full rounded">
									Login
								</Button>
							</div>
							<p className="text-white/70 text-sm">
								Belum punya akun?{" "}
								<button
									className="text-[#a084f7] underline"
									onClick={() => setIsRegister(true)}
									type="button"
								>
									Register
								</button>
							</p>
						</div>
						{/* Register Stepper Form */}
						<div
							className={`absolute top-0 left-0 w-full h-full flex flex-col justify-between p-8 transition-all duration-500 ${
								isRegister
									? "opacity-100 translate-x-0 pointer-events-auto"
									: "opacity-0 -translate-x-10 pointer-events-none"
							}`}
						>
							<Button variant="link" className="text-white justify-start p-0">
								<Link href="/">Back</Link>
							</Button>
							<div className="w-full flex flex-col items-center">
								<h2 className="text-2xl font-bold text-white mb-6">Register</h2>
								{/* Stepper Indicator */}
								<div className="flex items-center justify-center mb-6 gap-2">
									{registerSteps.map((stepObj, idx) => (
										<span
											key={stepObj.label}
											className={`w-3 h-3 rounded-full border-2 ${step === idx ? "bg-[#a084f7] border-[#a084f7]" : "bg-transparent border-white/30"}`}
										/>
									))}
								</div>
								{/* Stepper Form */}
								{registerSteps[step].render(registerValues[step], handleChange)}
								{/* Stepper Navigation */}
								<div className="flex w-full justify-between mt-2">
									<Button
										variant="secondary"
										className="rounded px-4"
										onClick={handleBack}
										disabled={step === 0}
										type="button"
									>
										Back
									</Button>
									{step < registerSteps.length - 1 ? (
										<Button
											className="rounded px-4"
											onClick={handleNext}
											disabled={!registerValues[step]}
											type="button"
										>
											Next
										</Button>
									) : (
										<Button
											className="rounded px-4"
											onClick={handleRegister}
											disabled={registerValues.some(v => !v)}
											type="button"
										>
											Register
										</Button>
									)}
								</div>
							</div>
							<p className="text-white/70 text-sm">
								Sudah punya akun?{" "}
								<button
									className="text-[#a084f7] underline"
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
	);
}