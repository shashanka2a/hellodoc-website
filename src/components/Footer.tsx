import { Heart, Twitter, Linkedin, Github, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-[#2A2A2A]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C4DFF] to-[#00BCD4] flex items-center justify-center">
              <Heart className="w-6 h-6 text-white fill-white" />
            </div>
            <span className="text-[24px]" style={{ fontFamily: "ClashDisplay, system-ui, sans-serif", fontWeight: 600 }}>
              HelloDoc
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-8 text-[#B0B0B0]">
            <a href="#" className="hover:text-[#00BCD4] transition-colors">About</a>
            <a href="#" className="hover:text-[#00BCD4] transition-colors">Templates</a>
            <a href="#" className="hover:text-[#00BCD4] transition-colors">Pricing</a>
            <a href="#" className="hover:text-[#00BCD4] transition-colors">Features</a>
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
            <p className="mt-1">Empowering doctors to build professional online presences.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}