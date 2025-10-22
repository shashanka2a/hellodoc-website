"use client";

import { motion } from "motion/react";
import { MessageSquare, Palette, Code } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Consultation & Planning",
    description: "We meet with you to understand your practice goals, target patients, and digital requirements. We create a comprehensive strategy for your online presence.",
  },
  {
    icon: Palette,
    title: "Design & Development",
    description: "Our team designs and builds your custom website with all the features you need. We handle everything from UI/UX to backend development and integrations.",
  },
  {
    icon: Code,
    title: "Launch & Support",
    description: "We launch your website, optimize it for search engines, and provide ongoing support to ensure your digital presence continues to grow your practice.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[48px] mb-4" style={{ fontFamily: "ClashDisplay, system-ui, sans-serif", fontWeight: 600 }}>
            Our Process
          </h2>
          <p className="text-[#B0B0B0] max-w-[600px] mx-auto">
            From initial consultation to ongoing support, we handle every aspect of your digital transformation. Your complete web solution delivered professionally.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="group relative bg-[#1A1A1A] rounded-2xl p-8 shadow-lg border border-[#2A2A2A] hover:border-[#7C4DFF]/50 transition-all duration-300"
            >
              {/* Card number */}
              <div className="absolute top-6 right-6 text-[64px] text-[#2A2A2A] group-hover:text-[#7C4DFF]/20 transition-colors" style={{ fontFamily: "ClashDisplay, system-ui, sans-serif", fontWeight: 600 }}>
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#7C4DFF] to-[#00BCD4] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-[24px] mb-3" style={{ fontFamily: "ClashDisplay, system-ui, sans-serif", fontWeight: 600 }}>
                  {step.title}
                </h3>
                <p className="text-[#B0B0B0] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}