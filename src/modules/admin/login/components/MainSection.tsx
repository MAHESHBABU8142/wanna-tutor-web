"use client";
import LoginForm from "@/modules/admin/login/components/LoginForm";
import { useSearchParams } from "next/navigation";
export default function MainSection() {
  const searchParams = useSearchParams();
  const message = searchParams.get("message");
  console.log("seachparems", searchParams.size);
  return (
    <main className="flex flex-col items-center gap-4">
      {searchParams.size === 0 && <LoginForm />}
      {message && <p>{message}</p>}
    </main>
  );
}
