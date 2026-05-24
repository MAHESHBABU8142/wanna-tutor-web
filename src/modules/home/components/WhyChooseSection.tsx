import Text from "@/components/ui/Text";
import SearchImage from "@/modules/home/assets/images/why-choose/search.png";
import OnlineOfflineImage from "@/modules/home/assets/images/why-choose/online-offline.png";
import VerifiedImage from "@/modules/home/assets/images/why-choose/verified.png";
import EasyProcessImage from "@/modules/home/assets/images/why-choose/easy-process.png";
import Image from "next/image";
import { StaticImageData } from "next/image";

export default function WhyChoose() {
  return (
    <section className="flex flex-col items-center gap-5 px-3">
      <Text className="text-center">Why choose TutorMatch?</Text>
      <ul className="grid w-full grid-cols-1 gap-5 md:grid-cols-4 md:gap-3">
        {REASONS.map((reason, index) => (
          <ReasonCard key={index} reason={reason} />
        ))}
      </ul>
    </section>
  );
}

type Reason = {
  title: string;
  description: string;
  image: StaticImageData;
};

const REASONS = [
  {
    title: "Easy Tutor Search",
    description:
      "Quickly find the perfect tutor for your needs with our intuitive search and filtering options.",
    image: SearchImage,
  },
  {
    title: "Online and Offline Learning",
    description:
      "Choose from a range of online and offline learning options to suit your schedule and preferences.",
    image: OnlineOfflineImage,
  },
  {
    title: "Verified Tutors Profiles",
    description:
      "All tutors on TutorMatch are verified for quality and reliability, ensuring you get the best learning experience.",
    image: VerifiedImage,
  },
  {
    title: "Simple Connection Process",
    description:
      "Easily connect with tutors through our platform, making the process of finding and communicating with tutors seamless.",
    image: EasyProcessImage,
  },
];

function ReasonCard({ reason }: { reason: Reason }) {
  return (
    <li className="flex flex-col items-start gap-3 rounded-lg border border-gray-200 p-5">
      <Image src={reason.image} alt="Reason Icon" width={80} height={80} />
      <Text variant="secondary" className="text-2xl text-black font-semibold">
        {reason.title}
      </Text>
      <p className=" text-gray-600 font-normal">{reason.description}</p>
    </li>
  );
}
