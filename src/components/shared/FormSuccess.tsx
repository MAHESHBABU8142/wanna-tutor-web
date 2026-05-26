import { IoCheckmarkCircle } from "react-icons/io5";
import Text from "@/components/ui/Text";
import { NavButton } from "@/components/ui/Button";

export default function FormSuccess({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="fixed top-0 left-0 w-full h-full md:pt-[10%] bg-white py-12 px-8 flex flex-col items-center gap-8 pt-[25%] ">
      <IoCheckmarkCircle className="text-green-600 text-8xl" />
      <Text className="text-3xl text-center">{title}</Text>
      <Text variant="secondary" className="text-center text-lg text-gray-600">
        {description}
      </Text>
      <NavButton
        href="/"
        className="absolute bottom-20 right-8 left-8 text-base p-3 mt-1 rounded-md md:static"
      >
        Back to Home
      </NavButton>
    </section>
  );
}
