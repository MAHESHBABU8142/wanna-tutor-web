import Image, { StaticImageData } from "next/image";
import Text from "@/components/ui/Text";

export default function WhyChooseList({
  reasons,
}: {
  reasons: Reason[];
}) {
  return (
    <ul className="grid w-full grid-cols-1 gap-5 md:grid-cols-4 md:gap-3">
      {reasons.map((reason, index) => (
        <ReasonCard key={index} reason={reason} />
      ))}
    </ul>
  );
}

type Reason = {
  title: string;
  description: string;
  image: StaticImageData;
};

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
