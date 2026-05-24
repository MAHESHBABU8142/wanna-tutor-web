import Button, { NavButton } from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import Image from "next/image";
import heroImage from "@/modules/home/assets/images/hero-image.png";
export default function HeroSection() {
  return (
    <main className="flex flex-col px-6 gap-6 py-10 items-start md:items-center md:flex-row md:gap-[5%]  md:px-[8%] bg-linear-to-r from-blue-400/10 to-transparent rounded-lg">
      <div className="flex flex-col gap-4 md:gap-6">
        <Text>Find the right tutor in minutes</Text>
        <Text variant="secondary">
          A platform for students and tutors to connect and learn together
          online and offline.
        </Text>
        <div className="flex gap-6 mt-3 items-center">
          <NavButton href="/become-tutor" className=" px-6 py-3 rounded-lg">
            Become a Tutor
          </NavButton>
          <NavButton
            href="/find-tutor"
            variant="secondary"
            className="px-6 py-3 rounded-lg"
          >
            Find a Tutor
          </NavButton>
        </div>
      </div>
      <Image
        src={heroImage}
        alt="Student getting help from a tutor"
        className="md:w-[37%]"
      />
    </main>
  );
}
