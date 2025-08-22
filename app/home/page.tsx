"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import DarkVeil from "@/app/components/DarkVeil/DarkVeil";
import { Button } from "@/components/ui/button"

export default function NavbarDemo() {
  const navItems = [
    { name: "Home", link: "#features" },
    { name: "Contact", link: "#contact" },
    { name: "About Us", link: "#about-us" },
    { name: "Services", link: "#services" },
    { name: "News", link: "#news" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div style={{width: "100vw", height: "100vh", position: "fixed", top: 0, left: 0, zIndex: 0, background: "#100425"}} />


        <div className="relative w-full" style={{zIndex: 2}}>
          <Navbar>
            <NavBody>
              <NavbarLogo />
              <NavItems items={navItems} />
              <div className="flex items-center gap-2 ml-8">
                <NavbarButton variant="primary" className="rounded-full shadow-md">LOGIN</NavbarButton>
              </div>
            </NavBody>
            <MobileNav>
              <MobileNavHeader>
                <NavbarLogo />
                <MobileNavToggle
                  isOpen={isMobileMenuOpen}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />
              </MobileNavHeader>
              <MobileNavMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
              >
                {navItems.map((item, idx) => (
                  <a
                    key={`mobile-link-${idx}`}
                    href={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="relative text-neutral-600 dark:text-neutral-300"
                  >
                    <span className="block">{item.name}</span>
                  </a>
                ))}
                <div className="flex w-full flex-col gap-4 mt-4">
                  <NavbarButton
                    onClick={() => setIsMobileMenuOpen(false)}
                    variant="secondary"
                    className="w-full"
                  >
                    Login
                  </NavbarButton>
                </div>
              </MobileNavMenu>
            </MobileNav>
          </Navbar>
        </div>

        <div>
          <section style={{position: "relative", width: "100%", height: "100vh", overflow: "hidden"}}>

            <div className="absolute inset-0" 
              style={{ 
                background: `
                radial-gradient(ellipse at bottom, rgba(3, 25, 168, 0.5) 0%, rgba(16, 4, 37, 0) 60%),
                linear-gradient(to bottom, #100425 50%, #ffffff 120%)`}}>
              </div>
              
              <div
                style={{position: "relative", zIndex: 1, height: "100%"}}
                className="flex flex-col items-start justify-center h-full"
              >
              {/* Logo */}
              <div className="mb-12">
                <img
                  src="/logo_decodes/logo_decodes.png"
                  alt="Logo Decodes"
                  className="ml-34 h-56"
                />
              </div>
              {/* Deskripsi */}
              <div className="ml-34 mb-14">
                <p className="text-white text-lg font-semibold leading-relaxed">
                  WEB DEVELOPMENT | MOBILE APP DEVELOPMENT<br />
                  UI/UX DESIGN | E-COMMERCE ENABLER | DIGITAL MARKETING
                </p>
              </div>
              {/* Button */}
              <div className="ml-34 mt-2">
                <Button variant="default" className="bg-gradient-to-r from-[#0421DE] to-[#BA8EF4] text-white rounded-lg shadow-md hover:opacity-90 transition-all btn-gradient px-8 py-3">
                  SEE ALL PROJECT
                </Button>
              </div>
            </div>
          </section>
        </div>

        <div> 
          <section style={{position: "relative", width: "100%", height: "100vh", overflow: "hidden", marginTop:"0px"}}>
            <div style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100vh", zIndex: 0}}>
              <DarkVeil />
            </div>
            <div style={{position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%"}}>
              <h2 className="text-white text-3xl font-bold mb-4">Featured Project</h2>
            </div>
          </section>
        </div>
          <div className="h-[1000px]" />
        
    </>
  );
}
