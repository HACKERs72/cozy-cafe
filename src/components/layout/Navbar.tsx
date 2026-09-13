"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Menu", href: "/menu" },
    { name: "Contact", href: "/contact" },
  ];

  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50 || isMobileMenuOpen) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      const diff = currentScrollY - lastScrollY.current;

      if (diff > 10 && currentScrollY > 100) {
        setIsVisible(false);
        lastScrollY.current = currentScrollY;
      } else if (diff < -10) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  return (
    <header 
      className={`sticky top-0 z-50 w-full border-b border-black/5 bg-[var(--background)]/90 backdrop-blur-md transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container-main flex h-20 items-center justify-between">
        {/* Brand */}
        <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-[--color-primary] hover:opacity-80 transition-opacity">
          COZY CAFE
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[--color-espresso] hover:text-[--color-primary] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[--color-primary] transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <Link href="/menu" className={buttonVariants({ variant: "primary", size: "sm" })}>
            View Menu
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-[--color-espresso] focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[--color-secondary] border-b border-black/5 shadow-lg shadow-black/5 animate-in slide-in-from-top-2 fade-in duration-200">
          <nav className="container-main py-6 flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-[--color-espresso] hover:text-[--color-primary] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-black/5">
               <Link href="/menu" className={buttonVariants({ variant: "primary", className: "w-full" })} onClick={() => setIsMobileMenuOpen(false)}>
                 View Menu
               </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
