import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavbarProps from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Decodes",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} overflow-x-hidden w-screen antialiased custom-scrollbar`}
      >
        <div className="relative bg-[#000] custom-scrollbar">
          <NavbarProps />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}