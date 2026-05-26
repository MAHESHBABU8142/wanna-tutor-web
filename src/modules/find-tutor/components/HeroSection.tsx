import { NavButton } from "@/components/ui/Button";
import Text from "@/components/ui/Text";

export default function HeroSection() {
  return (
    <main className="bg-linear-to-r from-blue-300/20 to-transparent py-12 px-8 flex flex-col gap-4 md:gap-6 md:px-[8%]">
      <Text>Find the Right Tutor</Text>
      <Text variant="secondary">
        Tell us what you need, we&apos;ll help find a suitable tutor for you
      </Text>
      <NavButton href="/become-tutor/#become-tutor-form" className="text-base">
        Find a Tutor
      </NavButton>
      <p className="text-blue-600 font-semibold">Finish in under 1 minute.</p>
    </main>
  );
}
