"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { Menu, X, Stethoscope } from "lucide-react";
import { FormPopup } from "./FormPopup";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0E0E0E]/95 backdrop-blur-md border-b border-[#2A2A2A]/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden">
              <svg width="40" height="40" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="navBg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#7C4DFF"/>
                    <stop offset="100%" stop-color="#00BCD4"/>
                  </linearGradient>
                </defs>
                <rect width="512" height="512" rx="80" fill="url(#navBg)" />
                <path
                  d="M176 96v80a64 64 0 0 0 128 0v-80
                     M304 176v16a80 80 0 0 1-160 0v-16
                     M256 256v48a48 48 0 0 0 96 0v-8
                     M352 296h24a32 32 0 0 1 0 64h-24"
                  stroke="white"
                  stroke-width="28"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                />
              </svg>
            </div>
            <span className="text-[24px] text-white" style={{ fontFamily: "ClashDisplay, system-ui, sans-serif", fontWeight: 600 }}>
              HelloDoc
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-[#B0B0B0] hover:text-[#00BCD4] transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-[#B0B0B0] hover:text-[#00BCD4] transition-colors font-medium"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection("questionnaire")}
              className="text-[#B0B0B0] hover:text-[#00BCD4] transition-colors font-medium"
            >
              Get Started
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-[#B0B0B0] hover:text-[#00BCD4] transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              onClick={() => setIsFormOpen(true)}
              size="sm"
              className="bg-gradient-to-r from-[#7C4DFF] to-[#00BCD4] hover:opacity-90 transition-opacity border-0"
              style={{ fontFamily: "Manrope, system-ui, sans-serif", fontWeight: 600 }}
            >
              Get Your Custom Website
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-[#00BCD4] transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-[#2A2A2A] mt-4 pt-6 pb-6"
            >
              <div className="flex flex-col gap-6">
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-[#B0B0B0] hover:text-[#00BCD4] transition-colors font-medium text-left"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("process")}
                  className="text-[#B0B0B0] hover:text-[#00BCD4] transition-colors font-medium text-left"
                >
                  Process
                </button>
                <button
                  onClick={() => scrollToSection("questionnaire")}
                  className="text-[#B0B0B0] hover:text-[#00BCD4] transition-colors font-medium text-left"
                >
                  Get Started
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-[#B0B0B0] hover:text-[#00BCD4] transition-colors font-medium text-left"
                >
                  Contact
                </button>
                <Button
                  onClick={() => {
                    setIsFormOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  size="sm"
                  className="bg-gradient-to-r from-[#7C4DFF] to-[#00BCD4] hover:opacity-90 transition-opacity border-0 w-full"
                  style={{ fontFamily: "Manrope, system-ui, sans-serif", fontWeight: 600 }}
                >
                  Get Your Custom Website
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Form Popup */}
      <FormPopup isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </motion.nav>
  );
}
