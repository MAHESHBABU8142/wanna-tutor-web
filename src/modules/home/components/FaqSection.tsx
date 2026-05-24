import FaqList from "@/components/ui/FaqList";
import Text from "@/components/ui/Text";
export default function FaqSection() {
  const faqList = [
    {
      q: "What is WannaTutor?",
      a: "WannaTutor is a platform that connects students with qualified tutors for personalized learning experiences.",
    },
    {
      q: "How do I find a tutor?",
      a: "Search tutors by subject, class, or location and explore profiles to find the right match.",
    },
    {
      q: "Can I become a tutor on WannaTutor?",
      a: "Yes, anyone with relevant expertise and teaching experience can apply to become a tutor on WannaTutor.",
    },
    {
      q: "Are tutors verified?",
      a: " Yes, all tutors on WannaTutor go through a verification process to ensure they meet our quality standards.",
    },
    {
      q: "Is WannaTutor free to use?",
      a: "Students and parents can browse and find tutors without registration charges.",
    },
    {
      q: "How will I receive student inquiries?",
      a: "Students and parents can contact you through your profile information.",
    },
  ];

  return (
    <section id="faq" className="px-5 flex flex-col gap-5 md:px-[8%] md:gap-10">
      <Text className="text-center">Frequently Asked Questions</Text>
      <FaqList list={faqList} />
    </section>
  );
}
