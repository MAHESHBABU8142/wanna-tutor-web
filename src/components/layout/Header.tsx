"use client";
import { Orbitron } from "next/font/google";
import cn from "@/lib/class-merge";
import { HiMenu } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import Logo from "@public/icons/wanna-tutor.png";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button, { NavButton } from "@/components/ui/Button";

const orbitron = Orbitron({
  subsets: ["latin"],
});

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isJoinDialogOpen, setIsJoinDialogOpen] = useState(false);

  return (
    <header className="flex shadow items-center md:px-[7%] justify-between py-3 px-4 bg-white fixed top-0 left-0 right-0 z-10">
      <div className="flex items-center gap-3 ">
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <HiMenu className="text-2xl" />
        </button>
        <Image
          src={Logo}
          alt="Wanna Tutor Logo"
          width={50}
          height={50}
          className="hidden md:block"
        />
        <BrandName />
      </div>
      <nav
        className={cn(
          "hidden md:flex gap-6 md:text-lg",
          isMenuOpen
            ? "absolute top-14 left-0 right-0 font-medium  bg-white flex flex-col gap-4 p-4 border-y border-gray-300"
            : "hidden",
        )}
      >
        <Link
          href="/"
          className="hover:underline"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          href="/find-tutor"
          className="hover:underline"
          onClick={() => setIsMenuOpen(false)}
        >
          Find a Tutor
        </Link>
        <Link
          href="/become-tutor"
          className="hover:underline"
          onClick={() => setIsMenuOpen(false)}
        >
          Become a Tutor
        </Link>
        <Link
          href="/#faq"
          className="hover:underline"
          onClick={() => setIsMenuOpen(false)}
        >
          FAQ
        </Link>
      </nav>
      <Button onClick={() => setIsJoinDialogOpen(true)}>Join For Free</Button>
      <JoinDialog
        isJoinDialogOpen={isJoinDialogOpen}
        setIsJoinDialogOpen={setIsJoinDialogOpen}
      />
    </header>
  );
}

const BrandName = ({ className }: { className?: string }) => {
  return (
    <Link href="/">
    <h1
      className={cn(
        "text-xl text-blue-950 font-bold md:text-2xl",
        orbitron.className,
        className,
      )}
    >
      Wanna<strong className="font-bold text-orange-400">Tutor</strong>
      </h1>
    </Link>
  );
};

export { BrandName };

function JoinDialog({
  isJoinDialogOpen,
  setIsJoinDialogOpen,
}: {
  isJoinDialogOpen: boolean;
  setIsJoinDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Dialog open={isJoinDialogOpen} onClose={() => setIsJoinDialogOpen(false)}>
      <DialogTitle>Join WannaTutor</DialogTitle>

      <DialogContent className="flex flex-col gap-4">
        <NavButton
          onClick={() => setIsJoinDialogOpen(false)}
          variant="secondary"
          href="/become-tutor"
          className="text-base py-2 px-4 rounded-md"
        >
          Join as a Tutor
        </NavButton>
        <NavButton
          onClick={() => setIsJoinDialogOpen(false)}
          variant="secondary"
          href="/find-tutor"
          className="text-base py-2 px-4 rounded-md"
        >
          Join as a Student/Parent
        </NavButton>
      </DialogContent>
    </Dialog>
  );
}
