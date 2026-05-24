import Link from "next/link";
import Text from "@/components/ui/Text";
export default function FinalCta() {
  return (
    <section className="flex flex-col items-center gap-5 bg-blue-700 text-white p-6 md:p-10">
      <Text className="text-white text-center text-2xl md:text-4xl">
        Teach students and grow your reach
      </Text>
      <Link
        href="/become-tutor"
        className="px-6 py-3 rounded-lg bg-white text-blue-600 font-semibold hover:bg-gray-100"
      >
        Register as a Tutor for Free
      </Link>
    </section>
  );
}
