"use client";
import LoginForm from "@/modules/admin/login/components/LoginForm";
import AccessDenied from "@/modules/admin/components/AccessDenied";
import { useSearchParams } from "next/navigation";
export default function MainSection() {
  const searchParams = useSearchParams();
  const message = searchParams.get("message");
  return (
    <main className="flex flex-col items-center gap-4 pt-18">
      {searchParams.size === 0 && <LoginForm />}
      {message === "access_denied" && <AccessDenied />}
    </main>
  );
}
