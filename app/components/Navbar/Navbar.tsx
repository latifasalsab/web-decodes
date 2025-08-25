"use client";
import React, { useState, useRef, useLayoutEffect } from "react";
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
import Link from "next/link";
import { IconChevronDown } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";

export default function NavbarProps() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Contact", link: "/contact" },
    { name: "About Us", link: "/about" },
    {
      name: "Services",
      link: "/services",
      children: [
        { name: "Chatbot AI", link: "/services/chatbot" },
        { name: "CRM Integration", link: "/services/crm" },
      ],
    },
    { name: "News", link: "/news" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null
  );

  const navbarRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={navbarRef}>
      <Navbar className="fixed w-[90%] left-1/2 -translate-x-1/2">
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-2 ml-8">
            <NavbarButton
              href="/login"
              variant="primary"
              className="rounded-full shadow-md"
            >
              LOGIN
            </NavbarButton>
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
              <React.Fragment key={`mobile-link-fragment-${idx}`}>
                {item.children ? (
                  // Render item dengan children sebagai dropdown akordeon
                  <div className="w-full">
                    <button
                      onClick={() =>
                        setOpenMobileDropdown(
                          openMobileDropdown === item.name ? null : item.name
                        )
                      }
                      className="flex w-full items-center justify-between text-[#F7DDEE] dark:text-neutral-300"
                    >
                      <span>{item.name}</span>
                      <IconChevronDown
                        className="h-4 w-4 transition-transform duration-200"
                        style={{
                          transform:
                            openMobileDropdown === item.name
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                        }}
                      />
                    </button>
                    <AnimatePresence>
                      {openMobileDropdown === item.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                            marginTop: "8px",
                          }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          className="flex flex-col gap-2 overflow-hidden pl-4"
                        >
                          {item.children.map((child, childIdx) => (
                            <Link
                              key={`mobile-child-link-${childIdx}`}
                              href={child.link}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="relative text-[#F7DDEE]/80 dark:text-neutral-400"
                            >
                              <span>{child.name}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="relative text-[#F7DDEE] dark:text-neutral-300"
                  >
                    <span className="block">{item.name}</span>
                  </Link>
                )}
              </React.Fragment>
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
  );
}
