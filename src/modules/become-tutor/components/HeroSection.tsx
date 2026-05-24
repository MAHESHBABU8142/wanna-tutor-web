import { NavButton } from "@/components/ui/Button";
import Text from "@/components/ui/Text";
export default function HeroSection() {
  return (
    <main className="bg-linear-to-r from-blue-300/20 to-transparent py-12 px-8 flex flex-col gap-4 md:gap-6 md:px-[8%]">
      <Text>Become a Tutor on WannaTutor</Text>
      <Text variant="secondary">
        Join our community of passionate tutors and make a difference in
        students lives.
      </Text>
      <NavButton href="/become-tutor/#become-tutor-form" className="text-base">
        Join Now
      </NavButton>
      <p className="text-blue-600 font-semibold">Finish in under 1 minute.</p>
    </main>
  );
}
