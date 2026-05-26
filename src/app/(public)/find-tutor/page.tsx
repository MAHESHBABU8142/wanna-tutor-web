import HeroSection from "@/modules/find-tutor/components/HeroSection";
import FormSection from "@/modules/find-tutor/components/FormSection";

export default function FindTutorPage() {
  return (
    <section className="flex flex-col gap-10">
      <HeroSection />
      <FormSection />
    </section>
  );
}
