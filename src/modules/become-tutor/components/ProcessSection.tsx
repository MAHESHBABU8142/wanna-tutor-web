import ProcessList from "@/components/shared/ProcessList";
import Text from "@/components/ui/Text";
import { FaRegRegistered } from "react-icons/fa";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { MdContactMail } from "react-icons/md";

export default function ProcessSection() {
  return (
    <section className="flex flex-col items-center gap-4 md:gap-6 p-4">
      <Text>How It Works</Text>
      <ProcessList
        steps={[
          {
            title: "Submit Details",
            description: "Submit your details and teaching experience",
            icon: <FaRegRegistered className="text-5xl text-blue-500" />,
          },
          {
            title: "We Contact You",
            description:
              "We will contact you personally and verify your details",
            icon: <MdContactMail className="text-5xl text-blue-500" />,
          },
          {
            title: "Get Approved",
            description: "Your profile is reviewed and published",
            icon: <FaPersonCircleCheck className="text-5xl text-blue-500" />,
          },
        ]}
      />
    </section>
  );
}
