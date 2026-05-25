import { getServerSession } from "next-auth";
import Main from "@/modules/admin/dashboard/components/Main";
import { authOptions } from "@/lib/auth";
export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  //if (session?.user?.role !== "Admin") return <h1>Access Denied</h1>;
  console.log("session", session);
  return (
    <section className="flex flex-col gap-10">
      <h1>Role: {session?.user.role}</h1>
      <Main />
    </section>
  );
}
