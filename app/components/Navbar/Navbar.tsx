"use client";
import { useState, useRef, useLayoutEffect } from "react";
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
import Link from 'next/link';

export default function NavbarProps() {
    const navItems = [
        { name: "Home", link: "/" },
        { name: "Contact", link: "/contact" },
        { name: "About Us", link: "/about" },
        { name: "Services", link: "/services" },
        { name: "News", link: "/news" },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navbarRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={navbarRef}>
            <Navbar className="fixed w-[90%] left-1/2 -translate-x-1/2">
            <NavBody>
                <NavbarLogo />
                <NavItems items={navItems} />
                <div className="flex items-center gap-2 ml-8">
                <NavbarButton href="/login" variant="primary" className="rounded-full shadow-md">LOGIN</NavbarButton>
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
                    className="relative text-[#F7DDEE] dark:text-neutral-300"
                    >
                    <span className="block">{item.name}</span>
                    </a>
                ))}
                <div className="flex w-full flex-col gap-4 mt-4">
                    <NavbarButton
                        href="/login"
                        variant="secondary"
                        className="w-full bg-gradient-to-r from-[#0421DE] to-[#BA8EF4] text-white"
                    >
                        Login
                    </NavbarButton>
                </div>
                </MobileNavMenu>
            </MobileNav>
            </Navbar>
        </div>
    )
}