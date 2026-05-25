import HeroSection from "@/modules/home/components/HeroSection";
import ProcessSection from "@/modules/home/components/ProcessSection";
import FaqSection from "@/modules/home/components/FaqSection";
import WhyChooseUsSection from "@/modules/home/components/WhyChooseSection";
import FinalCtaSection from "@/modules/home/components/FinalCtaSection";
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
