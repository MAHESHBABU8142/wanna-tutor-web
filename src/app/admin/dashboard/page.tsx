import { getServerSession } from "next-auth";
import AccessDenied from "@/modules/admin/components/AccessDenied";
import TutorApplicationsSection from "@/modules/admin/dashboard/components/TutorApplicationsSection";
import Header from "@/modules/admin/components/Header";
import { authOptions } from "@/lib/auth";
export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== "Admin") return <AccessDenied />;
  return (
    <section className="flex flex-col gap-10">
      <Header />
      <TutorApplicationsSection />
    </section>
  );
}
