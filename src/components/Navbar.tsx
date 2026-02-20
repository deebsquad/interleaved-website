"use client";

import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Music", href: "#music" },
  { label: "About", href: "#about" },
  { label: "Tour", href: "#tour" },
  { label: "Merch", href: "#merch" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo — symbol on mobile, full wordmark on desktop */}
        <a href="#" className="relative z-50">
          <Image
            src="/logos/Interelaved-Symbol-Border-White.svg"
            alt="INTERLEAVED"
            width={32}
            height={33}
            className="h-8 w-auto md:hidden"
            priority
          />
          <Image
            src="/logos/Interelaved-Logo-White.svg"
            alt="INTERLEAVED"
            width={180}
            height={38}
            className="h-8 w-auto hidden md:block"
            priority
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-[0.2em] text-text-secondary hover:text-amber transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <button
            className="snipcart-checkout relative text-text-secondary hover:text-amber transition-colors duration-300"
            aria-label="Shopping cart"
          >
            <ShoppingCart size={20} />
            <span className="snipcart-items-count absolute -top-2 -right-2 bg-crimson text-text-primary text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center" />
          </button>
        </div>

        {/* Mobile: Cart + Hamburger */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            className="snipcart-checkout relative z-50 text-text-primary"
            aria-label="Shopping cart"
          >
            <ShoppingCart size={20} />
            <span className="snipcart-items-count absolute -top-2 -right-2 bg-crimson text-text-primary text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center" />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 text-text-primary"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-bg/98 backdrop-blur-lg transition-all duration-500 md:hidden flex flex-col items-center justify-center gap-8 ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src="/logos/Interelaved-Symbol-Border-White.svg"
            alt=""
            width={48}
            height={50}
            className="opacity-20 mb-2"
            aria-hidden="true"
            style={{
              opacity: isOpen ? 0.2 : 0,
              transform: isOpen ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.5s ease",
            }}
          />
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-2xl uppercase tracking-[0.3em] text-text-primary hover:text-amber transition-all duration-300"
              style={{
                transitionDelay: isOpen ? `${i * 75}ms` : "0ms",
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateY(0)" : "translateY(20px)",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
