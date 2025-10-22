"use client";

import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            "linear-gradient(135deg, #6A5AE0 0%, #00C2A8 100%)",
            "linear-gradient(135deg, #00C2A8 0%, #6A5AE0 100%)",
            "linear-gradient(135deg, #6A5AE0 0%, #00C2A8 100%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          opacity: 0.1,
        }}
      />

      <div className="max-w-[800px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[56px] leading-tight mb-6" style={{ fontFamily: "ClashDisplay, system-ui, sans-serif", fontWeight: 600 }}>
            Ready to transform your{" "}
            <span className="bg-gradient-to-r from-[#6A5AE0] to-[#00C2A8] bg-clip-text text-transparent">
              practice online?
            </span>
          </h2>
          
          <p className="text-[#B0B0B0] text-[18px] mb-8 max-w-[500px] mx-auto">
            Let's discuss your digital needs and create a custom solution that grows your practice. Free consultation to get started.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#6A5AE0] to-[#00C2A8] hover:opacity-90 transition-all border-0 px-8 py-6 group"
              style={{ fontFamily: "Manrope, system-ui, sans-serif", fontWeight: 700, fontSize: "18px" }}
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <p className="text-[#808080] text-sm mt-6">
            Free consultation • No obligation • Custom solutions for your practice
          </p>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-br from-[#6A5AE0]/20 to-transparent rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-gradient-to-bl from-[#00C2A8]/20 to-transparent rounded-full blur-3xl -translate-y-1/2" />
    </section>
  );
}