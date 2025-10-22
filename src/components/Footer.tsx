import { Twitter, Linkedin, Github, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-[#2A2A2A]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C4DFF] to-[#00BCD4] flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#7C4DFF;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#00BCD4;stop-opacity:1" />
                  </linearGradient>
                </defs>
                <g transform="translate(16, 16)">
                  <path d="M-6,2 Q-3,-1 0,0 Q3,1 6,2" stroke="url(#logoGradient)" stroke-width="2.5" fill="none" stroke-linecap="round"/>
                  <circle cx="6" cy="2" r="4" fill="url(#logoGradient)"/>
                  <circle cx="6" cy="2" r="2.5" fill="#0E0E0E"/>
                  <circle cx="6" cy="2" r="1" fill="url(#logoGradient)" opacity="0.3"/>
                  <circle cx="-6" cy="2" r="2.5" fill="url(#logoGradient)"/>
                  <circle cx="-6" cy="2" r="1.5" fill="#0E0E0E"/>
                  <path d="M-6,2 Q-4,0 -2,2" stroke="url(#logoGradient)" stroke-width="2" fill="none" stroke-linecap="round"/>
                  <path d="M-6,2 Q-4,4 -2,2" stroke="url(#logoGradient)" stroke-width="2" fill="none" stroke-linecap="round"/>
                </g>
              </svg>
            </div>
            <span className="text-[24px]" style={{ fontFamily: "ClashDisplay, system-ui, sans-serif", fontWeight: 600 }}>
              HelloDoc
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-8 text-[#B0B0B0]">
            <a href="#" className="hover:text-[#00BCD4] transition-colors">About</a>
            <a href="#" className="hover:text-[#00BCD4] transition-colors">Services</a>
            <a href="#" className="hover:text-[#00BCD4] transition-colors">Portfolio</a>
            <a href="#" className="hover:text-[#00BCD4] transition-colors">Contact</a>
            <a href="#" className="hover:text-[#00BCD4] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#00BCD4] transition-colors">Terms of Service</a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center hover:bg-[#7C4DFF]/20 hover:border-[#7C4DFF] transition-all"
            >
              <Twitter className="w-5 h-5 text-[#B0B0B0]" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center hover:bg-[#7C4DFF]/20 hover:border-[#7C4DFF] transition-all"
            >
              <Linkedin className="w-5 h-5 text-[#B0B0B0]" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center hover:bg-[#7C4DFF]/20 hover:border-[#7C4DFF] transition-all"
            >
              <Instagram className="w-5 h-5 text-[#B0B0B0]" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center hover:bg-[#7C4DFF]/20 hover:border-[#7C4DFF] transition-all"
            >
              <Github className="w-5 h-5 text-[#B0B0B0]" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-[#808080] text-sm text-center">
            <p>© 2025 HelloDoc. All rights reserved.</p>
            <p className="mt-1">Complete digital solutions for doctors and medical practices.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}