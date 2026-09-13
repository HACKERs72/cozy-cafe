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
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isMobileMenuOpen 
          ? "bg-[var(--background)] border-[--color-muted-brown]/10" 
          : "bg-[var(--background)]/90 backdrop-blur-md border-[--color-muted-brown]/10"
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
          className="md:hidden p-2 text-[--color-espresso] focus:outline-none relative w-10 h-10 flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          <div className="flex flex-col justify-center items-center w-6 h-5 relative">
            <span 
              className={`block absolute h-[2px] w-full bg-current rounded transition-all duration-300 ease-out motion-reduce:transition-none ${
                isMobileMenuOpen ? "rotate-45 top-2" : "top-0"
              }`} 
            />
            <span 
              className={`block absolute h-[2px] w-full bg-current rounded transition-all duration-300 ease-out motion-reduce:transition-none top-2 ${
                isMobileMenuOpen ? "opacity-0 translate-x-2" : "opacity-100 translate-x-0"
              }`} 
            />
            <span 
              className={`block absolute h-[2px] w-full bg-current rounded transition-all duration-300 ease-out motion-reduce:transition-none ${
                isMobileMenuOpen ? "-rotate-45 top-2" : "top-4"
              }`} 
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-20 left-0 w-full bg-[var(--background)] border-b border-[--color-muted-brown]/10 shadow-xl shadow-black/5 transition-all duration-300 ease-out origin-top motion-reduce:transition-none ${
          isMobileMenuOpen 
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="container-main py-6 flex flex-col space-y-2">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block py-3 text-lg font-medium text-[--color-espresso] hover:text-[--color-accent] hover:pl-2 transition-all duration-300 ease-out motion-reduce:transition-none ${
                isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? `${index * 40}ms` : '0ms' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div 
            className={`pt-6 mt-4 border-t border-[--color-muted-brown]/10 transition-all duration-300 ease-out motion-reduce:transition-none ${
              isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? `${navLinks.length * 40}ms` : '0ms' }}
          >
             <Link href="/menu" className={buttonVariants({ variant: "primary", className: "w-full" })} onClick={() => setIsMobileMenuOpen(false)}>
               View Menu
             </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
