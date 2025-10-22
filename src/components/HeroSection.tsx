"use client";

import { motion } from "motion/react";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center py-24 px-6 pt-32">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: "radial-gradient(circle at 20% 50%, #7C4DFF 0%, transparent 50%), radial-gradient(circle at 80% 50%, #00BCD4 0%, transparent 50%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-4xl"
          >
            <h1 className="text-[64px] leading-[1.1] mb-12" style={{ fontFamily: "ClashDisplay, system-ui, sans-serif", fontWeight: 600 }}>
              Transform Your Practice,{" "}
              <span className="bg-gradient-to-r from-[#7C4DFF] to-[#00BCD4] bg-clip-text text-transparent">
                Build Your Presence.
              </span>
            </h1>
            
            <p className="text-[#B0B0B0] mb-16 max-w-[700px] mx-auto text-center text-xl leading-relaxed">
              From appointment scheduling and online payments to SEO-optimized, custom websites. We build everything your medical practice needs to thrive online.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#7C4DFF] to-[#00BCD4] hover:opacity-90 transition-opacity border-0 px-8 py-6"
                style={{ fontFamily: "Manrope, system-ui, sans-serif", fontWeight: 700, fontSize: "20px" }}
              >
                Get Started Today
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-[#7C4DFF] text-white hover:bg-[#7C4DFF]/10 px-8 py-6"
                style={{ fontFamily: "Manrope, system-ui, sans-serif", fontWeight: 700, fontSize: "20px" }}
              >
                View Our Work
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}