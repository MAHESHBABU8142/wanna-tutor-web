"use client";

import Image from "next/image";
import WannaTutorLogo from "@public/icons/wanna-tutor.png";
import Text from "@/components/ui/Text";
import Button, { NavButton } from "@/components/ui/Button";
import GoogleLogo from "@public/icons/google.png";
import { signIn} from "next-auth/react";

export default function LoginForm() {
  return (
    <section className="flex flex-col items-center gap-4">
      <Image
        src={WannaTutorLogo}
        alt="Wanna Tutor Logo"
        width={100}
        height={100}
      />
      <Text className="text-2xl">Admin Login</Text>
      <Button
        onClick={() => signIn("google", { callbackUrl: "/admin/dashboard" })}
        className="text-base flex p-1 gap-3 items-center pr-4 rounded-lg mt-5"
      >
        <Image
          src={GoogleLogo}
          alt="Google Logo"
          width={40}
          height={40}
          className="bg-white rounded-lg"
        />
        Continue with Google
      </Button>
      <div className="flex flex-col items-center gap-2 absolute bottom-30">
        <Text variant="secondary">Are you not an admin?</Text>
        <NavButton variant="secondary" href="/">
          Back to Home
        </NavButton>
      </div>
    </section>
  );
}
