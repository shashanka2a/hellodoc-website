"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { X, Stethoscope } from "lucide-react";

interface FormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FormPopup({ isOpen, onClose }: FormPopupProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    qualification: "",
    specialization: "",
    experience: "",
    languages: "",
    profilePhoto: "",
    consultationLink: "",
    contactNumber: "",
    email: "",
    additionalInfo: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="bg-gradient-to-b from-[#1A1A1A] to-[#0E0E0E] border border-[#2A2A2A] shadow-2xl">
              <CardHeader className="relative">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 text-[#B0B0B0] hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7C4DFF] to-[#00BCD4] flex items-center justify-center">
                    <Stethoscope className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <CardTitle className="text-[32px] text-center mb-2" style={{ fontFamily: "ClashDisplay, system-ui, sans-serif", fontWeight: 600 }}>
                  Get Your{" "}
                  <span className="bg-gradient-to-r from-[#7C4DFF] to-[#00BCD4] bg-clip-text text-transparent">
                    Custom Website
                  </span>
                </CardTitle>
                <CardDescription className="text-[#B0B0B0] text-center text-lg">
                  Tell us about your practice and we'll create a professional website tailored to your specialty and needs.
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <h3 className="text-[24px]" style={{ fontFamily: "ClashDisplay, system-ui, sans-serif", fontWeight: 600 }}>
                        Personal Information
                      </h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName" className="text-[#B0B0B0] font-medium">
                          Full Name (with title) *
                        </Label>
                        <Input
                          id="fullName"
                          type="text"
                          placeholder="Dr. John Smith"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange("fullName", e.target.value)}
                          className="bg-[#1A1A1A] border-[#2A2A2A] text-white placeholder-[#666] focus:border-[#7C4DFF] focus:ring-[#7C4DFF]/20"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-[#B0B0B0] font-medium">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="doctor@example.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="bg-[#1A1A1A] border-[#2A2A2A] text-white placeholder-[#666] focus:border-[#7C4DFF] focus:ring-[#7C4DFF]/20"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="contactNumber" className="text-[#B0B0B0] font-medium">
                          Contact Number
                        </Label>
                        <Input
                          id="contactNumber"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          value={formData.contactNumber}
                          onChange={(e) => handleInputChange("contactNumber", e.target.value)}
                          className="bg-[#1A1A1A] border-[#2A2A2A] text-white placeholder-[#666] focus:border-[#7C4DFF] focus:ring-[#7C4DFF]/20"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="languages" className="text-[#B0B0B0] font-medium">
                          Languages Spoken
                        </Label>
                        <Input
                          id="languages"
                          type="text"
                          placeholder="English, Spanish, French"
                          value={formData.languages}
                          onChange={(e) => handleInputChange("languages", e.target.value)}
                          className="bg-[#1A1A1A] border-[#2A2A2A] text-white placeholder-[#666] focus:border-[#7C4DFF] focus:ring-[#7C4DFF]/20"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div className="space-y-6">
                    <h3 className="text-[24px]" style={{ fontFamily: "ClashDisplay, system-ui, sans-serif", fontWeight: 600 }}>
                      Professional Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="qualification" className="text-[#B0B0B0] font-medium">
                          Qualification *
                        </Label>
                        <Select onValueChange={(value) => handleInputChange("qualification", value)}>
                          <SelectTrigger className="bg-[#1A1A1A] border-[#2A2A2A] text-white focus:border-[#7C4DFF] focus:ring-[#7C4DFF]/20">
                            <SelectValue placeholder="Select qualification" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#1A1A1A] border-[#2A2A2A]">
                            <SelectItem value="MBBS">MBBS</SelectItem>
                            <SelectItem value="MS">MS</SelectItem>
                            <SelectItem value="MD">MD</SelectItem>
                            <SelectItem value="DNB">DNB</SelectItem>
                            <SelectItem value="MCh">MCh</SelectItem>
                            <SelectItem value="DM">DM</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="experience" className="text-[#B0B0B0] font-medium">
                          Years of Experience *
                        </Label>
                        <Select onValueChange={(value) => handleInputChange("experience", value)}>
                          <SelectTrigger className="bg-[#1A1A1A] border-[#2A2A2A] text-white focus:border-[#7C4DFF] focus:ring-[#7C4DFF]/20">
                            <SelectValue placeholder="Select experience" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#1A1A1A] border-[#2A2A2A]">
                            <SelectItem value="0-1">0-1 years</SelectItem>
                            <SelectItem value="2-5">2-5 years</SelectItem>
                            <SelectItem value="6-10">6-10 years</SelectItem>
                            <SelectItem value="11-15">11-15 years</SelectItem>
                            <SelectItem value="16-20">16-20 years</SelectItem>
                            <SelectItem value="20+">20+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="specialization" className="text-[#B0B0B0] font-medium">
                        Specialization *
                      </Label>
                      <Input
                        id="specialization"
                        type="text"
                        placeholder="e.g., Dermatology, Cardiology, Orthopedics"
                        value={formData.specialization}
                        onChange={(e) => handleInputChange("specialization", e.target.value)}
                        className="bg-[#1A1A1A] border-[#2A2A2A] text-white placeholder-[#666] focus:border-[#7C4DFF] focus:ring-[#7C4DFF]/20"
                        required
                      />
                    </div>
                  </div>

                  {/* Digital Presence */}
                  <div className="space-y-6">
                    <h3 className="text-[24px]" style={{ fontFamily: "ClashDisplay, system-ui, sans-serif", fontWeight: 600 }}>
                      Digital Presence
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="profilePhoto" className="text-[#B0B0B0] font-medium">
                          Profile Photo URL
                        </Label>
                        <Input
                          id="profilePhoto"
                          type="url"
                          placeholder="https://example.com/your-photo.jpg"
                          value={formData.profilePhoto}
                          onChange={(e) => handleInputChange("profilePhoto", e.target.value)}
                          className="bg-[#1A1A1A] border-[#2A2A2A] text-white placeholder-[#666] focus:border-[#7C4DFF] focus:ring-[#7C4DFF]/20"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="consultationLink" className="text-[#B0B0B0] font-medium">
                          Consultation/Appointment Link
                        </Label>
                        <Input
                          id="consultationLink"
                          type="url"
                          placeholder="https://cal.com/yourname"
                          value={formData.consultationLink}
                          onChange={(e) => handleInputChange("consultationLink", e.target.value)}
                          className="bg-[#1A1A1A] border-[#2A2A2A] text-white placeholder-[#666] focus:border-[#7C4DFF] focus:ring-[#7C4DFF]/20"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="additionalInfo" className="text-[#B0B0B0] font-medium">
                        Additional Information
                      </Label>
                      <Textarea
                        id="additionalInfo"
                        placeholder="Tell us about your practice, special services, or any specific requirements for your website..."
                        value={formData.additionalInfo}
                        onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                        className="bg-[#1A1A1A] border-[#2A2A2A] text-white placeholder-[#666] focus:border-[#7C4DFF] focus:ring-[#7C4DFF]/20 min-h-[120px]"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-[#7C4DFF] to-[#00BCD4] hover:opacity-90 transition-opacity border-0 py-6"
                      style={{ fontFamily: "Manrope, system-ui, sans-serif", fontWeight: 700, fontSize: "18px" }}
                    >
                      Submit Information & Get Started
                    </Button>
                    <p className="text-[#808080] text-sm text-center mt-4">
                      We'll review your information and contact you within 24 hours to discuss your custom website.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
