import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { ServicesSection } from "@/components/ServicesSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white dark overflow-x-hidden">
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="process">
        <HowItWorksSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="contact">
        <CTASection />
      </div>
      <Footer />
    </div>
  );
}
