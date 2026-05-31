import HeroSection from "@/modules/become-tutor/components/HeroSection";
import FormSection from "@/modules/become-tutor/components/FormSection";
import WhyJoinSection from "@/modules/become-tutor/components/WhyJoinSection";
import ProcessSection from "@/modules/become-tutor/components/ProcessSection";
import FaqsSection from "@/modules/become-tutor/components/FaqsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become a Tutor - Wanna Tutor",
  description:
    "Join Wanna Tutor as a tutor and share your knowledge with eager learners. Submit your details and our team will contact you within 24 hours to verify and complete your profile.",
};
export default function BecomeTutorPage() {
  return (
    <section className="flex flex-col gap-10">
      <HeroSection />
      <FormSection />
      <WhyJoinSection />
      <ProcessSection />
      <FaqsSection />
    </section>
  );
}
