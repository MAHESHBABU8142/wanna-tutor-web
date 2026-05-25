import MainSection from "@/modules/admin/login/components/MainSection";
import { Suspense } from "react";

export default function LoginPage() {
  return (
    <section>
      <Suspense fallback={<div>Loading...</div>}>
        <MainSection />
      </Suspense>
    </section>
  );
}
