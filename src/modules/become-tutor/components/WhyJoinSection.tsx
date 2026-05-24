import WhyChooseList from "@/components/shared/WhyChooseList";
import Text from "@/components/ui/Text";
import MoreStudentsImage from "@/modules/become-tutor/assets/why-join/more-students.png";
import OnlineOfflineImage from "@/modules/become-tutor/assets/why-join/online-offline.png";
import FreeImage from "@/modules/become-tutor/assets/why-join/free.png";
import TimeImage from "@/modules/become-tutor/assets/why-join/time.png";

export default function WhyJoinSection() {
  return (
    <section className="flex flex-col items-center gap-8 px-3">
      <Text>Why Join WannaTutor</Text>
      <WhyChooseList
        reasons={[
          {
            title: "Reach more students",
            description:
              "Expand your reach and connect with more students who are looking for tutors in your subject area.",
            image: MoreStudentsImage,
          },
          {
            title: "Online & offline teaching",
            description:
              "Choose from a range of online and offline teaching options to suit your schedule and preferences.",
            image: OnlineOfflineImage,
          },
          {
            title: "Free registration",
            description:
              "Register for free and start teaching today. No hidden fees or contracts.",
            image: FreeImage,
          },
          {
            title: "Flexible schedule",
            description:
              "Choose your own teaching schedule and work hours that work best for you.",
            image: TimeImage,
          },
        ]}
      />
    </section>
  );
}
