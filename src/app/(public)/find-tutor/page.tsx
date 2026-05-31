import HeroSection from "@/modules/find-tutor/components/HeroSection";
import FormSection from "@/modules/find-tutor/components/FormSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find a Tutor - Wanna Tutor",
  description:
    "Find the perfect tutor for your learning needs. Submit your details and our team will contact you within 24 hours to connect you with the right tutor.",
};

export default function FindTutorPage() {
  return (
    <section className="flex flex-col gap-10">
      <HeroSection />
      <FormSection />
    </section>
  );
}
