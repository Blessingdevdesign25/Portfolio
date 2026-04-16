import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
        scrolled ? "py-4 bg-background/80 backdrop-blur-xl border-b border-white/5" : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-20 flex items-center justify-between">
        <a href="#" className="text-xl font-black tracking-tighter hover:text-primary transition-colors">
          BKD.
        </a>

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

        {/* Mobile menu button could go here if needed, but keeping it minimalist for now */}
      </div>
    </nav>
  );
}
