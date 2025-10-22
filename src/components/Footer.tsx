import { Twitter, Linkedin, Github, Instagram, Stethoscope } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-[#2A2A2A]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl overflow-hidden">
              <svg width="40" height="40" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="footerBg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#7C4DFF"/>
                    <stop offset="100%" stop-color="#00BCD4"/>
                  </linearGradient>
                </defs>
                <rect width="512" height="512" rx="80" fill="url(#footerBg)" />
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