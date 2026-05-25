import { getServerSession } from "next-auth";
import Main from "@/modules/admin/dashboard/components/Main";

export default async function DashboardPage() {
  const session = await getServerSession();
  if (!session) return <h1>Access Denied</h1>;
  return (
    <section className="flex flex-col gap-10">
      <h1>Admin Dashboard {session.user?.name}</h1>
      <Main />
    </section>
  );
}
