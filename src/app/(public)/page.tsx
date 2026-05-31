import HeroSection from "@/modules/home/components/HeroSection";
import ProcessSection from "@/modules/home/components/ProcessSection";
import FaqSection from "@/modules/home/components/FaqSection";
import WhyChooseUsSection from "@/modules/home/components/WhyChooseSection";
import FinalCtaSection from "@/modules/home/components/FinalCtaSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Wanna Tutor",
  description:
    "Welcome to Wanna Tutor, the best platform to find and become a tutor. Connect with qualified tutors and students in your area.",
};

export default function Home() {
  return (
    <section className="flex flex-col gap-10">
      <HeroSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <FinalCtaSection />
      <FaqSection />
    </section>
  );
}
