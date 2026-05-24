import HeroSection from "@/modules/become-tutor/components/HeroSection";
import FormSection from "@/modules/become-tutor/components/FormSection";
import WhyJoinSection from "@/modules/become-tutor/components/WhyJoinSection";
import ProcessSection from "@/modules/become-tutor/components/ProcessSection";
import FaqsSection from "@/modules/become-tutor/components/FaqsSection";
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
