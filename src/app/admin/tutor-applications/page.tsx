import Header from "@/modules/admin/components/Header";
import ApplicationsList from "@/modules/admin/tutor-applications/components/ApplicationsList";

export default function TutorApplicationsPage() {
  return (
    <section className="flex flex-col pt-13 md:pt-18">
      <Header />
      <ApplicationsList />
    </section>
  );
}
