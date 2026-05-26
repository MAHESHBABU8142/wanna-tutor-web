import MainSection from "@/modules/admin/login/components/MainSection";
import { Suspense } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);
  if (session?.user?.role === "Admin") return redirect("/admin/dashboard");
  return (
    <section>
      <Suspense fallback={<div>Loading...</div>}>
        <MainSection />
      </Suspense>
    </section>
  );
}
