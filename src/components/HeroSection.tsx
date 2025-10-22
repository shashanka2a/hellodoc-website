"use client";

import { motion } from "motion/react";
import { Button } from "./ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 px-6 md:py-32">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h1 className="text-[56px] leading-[1.1] mb-6" style={{ fontFamily: "ClashDisplay, system-ui, sans-serif", fontWeight: 600 }}>
              Build Your Medical Practice Website.{" "}
              <span className="bg-gradient-to-r from-[#7C4DFF] to-[#00BCD4] bg-clip-text text-transparent">
                No Code Required.
              </span>
            </h1>
            
            <p className="text-[#B0B0B0] mb-8 max-w-[560px] mx-auto lg:mx-0">
              Professional, HIPAA-compliant websites designed specifically for doctors and medical practices. Launch in days, not months.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#7C4DFF] to-[#00BCD4] hover:opacity-90 transition-opacity border-0"
                style={{ fontFamily: "Manrope, system-ui, sans-serif", fontWeight: 700, fontSize: "18px" }}
              >
                Start Building Free
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-[#7C4DFF] text-white hover:bg-[#7C4DFF]/10"
                style={{ fontFamily: "Manrope, system-ui, sans-serif", fontWeight: 700, fontSize: "18px" }}
              >
                View Examples
              </Button>
            </div>
          </motion.div>

          {/* Right mockup with parallax */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#7C4DFF]/20"
            >
              <Image
                src="https://images.unsplash.com/photo-1747224317356-6dd1a4a078fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MTE0NzE0OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="HelloDoc Dashboard"
                width={1080}
                height={600}
                className="w-full h-auto"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-transparent opacity-60" />
            </motion.div>

            {/* Abstract decoration */}
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-gradient-to-br from-[#7C4DFF] to-[#00BCD4] rounded-full blur-3xl opacity-20 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}