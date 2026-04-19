import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import brandLogo from "../../../assets/Brand Logo.PNG";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-4 bg-background/80 backdrop-blur-xl border-b border-white/5" : "py-6 sm:py-8 bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-20 flex items-center justify-between">
        <a href="#" className="hover:opacity-80 transition-opacity flex items-center">
          <img src={brandLogo} alt="Brand Logo" className="h-16 sm:h-20 md:h-24 w-auto object-contain object-left" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <a 
            href={import.meta.env.BASE_URL + "src/assets/Blessing_Amos-Aleonomoh_Resume.pdf"}
            target="_blank"
            rel="noreferrer"
            className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-primary hover:text-primary-foreground transition-all"
          >
            View CV
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background border-b border-white/5 p-6 flex flex-col gap-6 md:hidden backdrop-blur-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold uppercase tracking-widest text-muted-foreground hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={import.meta.env.BASE_URL + "src/assets/Blessing_Amos-Aleonomoh_Resume.pdf"}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-primary text-primary-foreground px-6 py-4 rounded-full text-center font-bold"
            >
              View CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
