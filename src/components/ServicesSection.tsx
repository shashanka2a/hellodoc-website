"use client";

import { motion } from "motion/react";
import { Calendar, CreditCard, Sparkles } from "lucide-react";

const services = [
  {
    icon: Calendar,
    title: "Appointment Booking",
    description: "Integrated calendar system that lets patients book, reschedule, and manage appointments 24/7. Syncs with your practice management software.",
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    description: "Secure payment processing for consultations, copays, and services. Accept credit cards, HSA/FSA, and insurance payments seamlessly.",
  },
  {
    icon: Sparkles,
    title: "Customized Design",
    description: "Fully bespoke design that reflects your brand, specialty, and values. No generic templates—every element is crafted for your unique practice.",
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
            Everything You Need,{" "}
            <span className="bg-gradient-to-r from-[#7C4DFF] to-[#00BCD4] bg-clip-text text-transparent">Built In</span>
          </h2>
          <p className="text-[#B0B0B0] max-w-[600px] mx-auto">
            We design and develop custom websites with all the features modern medical practices need.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.15, ease: "easeOut" }}
              className="relative group"
            >
              <div className="h-full bg-gradient-to-b from-[#1A1A1A] to-[#0E0E0E] rounded-2xl p-8 border border-[#2A2A2A] group-hover:border-[#00BCD4]/50 transition-all duration-300 shadow-lg group-hover:shadow-[#00BCD4]/20">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#7C4DFF]/20 to-[#00BCD4]/20 border border-[#7C4DFF]/30 flex items-center justify-center mb-6"
                >
                  <service.icon className="w-10 h-10 text-[#00BCD4]" strokeWidth={1.5} />
                </motion.div>

                <h3 className="text-[28px] mb-4" style={{ fontFamily: "ClashDisplay, system-ui, sans-serif", fontWeight: 600 }}>
                  {service.title}
                </h3>
                <p className="text-[#B0B0B0] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
