"use client";
import { useSession } from "next-auth/react";
import { BrandName } from "@/components/layout/Header";
import Image from "next/image";
import { useState } from "react";
import { signOut } from "next-auth/react";
import Button from "@/components/ui/Button";

export default function Header() {
  const { data: session, status } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="p-4 flex justify-between bg-blue-50">
      <BrandName />

      {status !== "loading" && (
        <Image
          src={session?.user?.image || ""}
          alt="profile image"
          width={35}
          height={35}
          className="rounded-full"
          onClick={() => setIsMenuOpen(true)}
        />
      )}
      {isMenuOpen && (
        <Menu
          setIsMenuOpen={setIsMenuOpen}
          name={session?.user?.name || ""}
          email={session?.user?.email || ""}
        />
      )}
    </header>
  );
}

function Menu({
  setIsMenuOpen,
  name,
  email,
}: {
  setIsMenuOpen: (value: boolean) => void;
  name?: string;
  email?: string;
}) {
  return (
    <aside
      onClick={() => setIsMenuOpen(false)}
      className="w-full h-full absolute top-0 right-0 z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col gap-2 p-4 bg-blue-100 text-end absolute top-15 right-2 rounded-lg"
      >
        <h2 className="text-xl font-medium">{name}</h2>
        <p>{email}</p>
        <Button
          className="bg-red-500"
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
        >
          Logout
        </Button>
      </div>
    </aside>
  );
}
