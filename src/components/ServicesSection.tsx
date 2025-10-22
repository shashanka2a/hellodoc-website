"use client";

import { motion } from "motion/react";
import { Calendar, CreditCard, Sparkles } from "lucide-react";

const services = [
  {
    icon: Calendar,
    title: "Custom Website Development",
    description: "Professional, responsive websites built from scratch for your medical practice. Modern design, fast loading, and mobile-optimized for the best patient experience.",
  },
  {
    icon: CreditCard,
    title: "SEO Optimization",
    description: "Get found by patients searching for your services. We optimize your website for search engines to increase visibility and attract more patients to your practice.",
  },
  {
    icon: Sparkles,
    title: "Complete Digital Solutions",
    description: "From appointment scheduling and online payments to patient portals and practice management integration. We build everything your clinic needs to succeed online.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-br from-[#7C4DFF]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-[#00BCD4]/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[48px] mb-4" style={{ fontFamily: "ClashDisplay, system-ui, sans-serif", fontWeight: 600 }}>
            Our{" "}
            <span className="bg-gradient-to-r from-[#7C4DFF] to-[#00BCD4] bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-[#B0B0B0] max-w-[600px] mx-auto">
            We're a full-service web development agency specializing in complete digital solutions for doctors and medical practices.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              className="relative group"
            >
              <div className="bg-gradient-to-r from-[#1A1A1A] to-[#0E0E0E] rounded-2xl p-8 border border-[#2A2A2A] group-hover:border-[#00BCD4]/50 transition-all duration-300 shadow-lg group-hover:shadow-[#00BCD4]/20">
                <div className="flex items-start gap-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7C4DFF]/20 to-[#00BCD4]/20 border border-[#7C4DFF]/30 flex items-center justify-center flex-shrink-0"
                  >
                    <service.icon className="w-8 h-8 text-[#00BCD4]" strokeWidth={1.5} />
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="text-[32px] mb-4" style={{ fontFamily: "ClashDisplay, system-ui, sans-serif", fontWeight: 600 }}>
                      {service.title}
                    </h3>
                    <p className="text-[#B0B0B0] leading-relaxed text-lg">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
