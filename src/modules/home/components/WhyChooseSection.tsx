import Text from "@/components/ui/Text";
import SearchImage from "@/modules/home/assets/images/why-choose/search.png";
import OnlineOfflineImage from "@/modules/home/assets/images/why-choose/online-offline.png";
import VerifiedImage from "@/modules/home/assets/images/why-choose/verified.png";
import EasyProcessImage from "@/modules/home/assets/images/why-choose/easy-process.png";
import WhyChooseList from "@/components/shared/WhyChooseList";

export default function WhyChoose() {
  return (
    <section className="flex flex-col items-center gap-5 px-3">
      <Text className="text-center">Why choose WannaTutor?</Text>
      <WhyChooseList
        reasons={[
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
        ]}
      />
    </section>
  );
}
