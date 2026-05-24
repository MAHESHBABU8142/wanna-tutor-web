import FaqList from "@/components/ui/FaqList";
import Text from "@/components/ui/Text";

export default function FaqsSection() {
  return (
    <section className="flex flex-col gap-8 px-4 md:px-[8%]">
      <Text className="text-center">Frequently Asked Questions</Text>
      <FaqList
        list={[
          {
            q: "What happens after I submit the form?",
            a: "Our team will contact you personally to collect additional details and complete verification.",
          },
          {
            q: "How long does it take to verify a tutor?",
            a: "We review profiles and contact tutors as early as possible.",
          },
          {
            q: "Can I teach both online and offline?",
            a: "Yes, you can choose online, offline, or both teaching modes.",
          },
          {
            q: "Can I update my profile details later?",
            a: "Yes, you can update your profile details at any time.",
          },
          {
            q: "Are there any additional fees?",
            a: "No, there are no additional fees for registration or verification.",
          },
          {
            q: "What if I need to cancel my registration?",
            a: "You can cancel your registration at any time by contacting our support team.",
          },
        ]}
      />
    </section>
  );
}
