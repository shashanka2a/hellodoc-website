import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { ServicesSection } from "@/components/ServicesSection";
import { DoctorQuestionnaire } from "@/components/DoctorQuestionnaire";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white dark overflow-x-hidden">
      <HeroSection />
      <HowItWorksSection />
      <ServicesSection />
      <DoctorQuestionnaire />
      <CTASection />
      <Footer />
    </div>
  );
}
