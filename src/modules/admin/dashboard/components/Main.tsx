"use client";

import { signOut } from "next-auth/react";
import Button from "@/components/ui/Button";

export default function Main() {
  return (
    <div className="flex flex-col gap-10">
      <Button
        onClick={() =>
          signOut({
            callbackUrl: "/admin/login",
          })
        }
      >
        Logout
      </Button>
    </div>
  );
}
