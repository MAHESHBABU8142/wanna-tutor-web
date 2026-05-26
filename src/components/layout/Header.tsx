"use client";
import { Orbitron } from "next/font/google";
import cn from "@/lib/class-merge";
import { HiMenu } from "react-icons/hi";
import { NavButton } from "../ui/Button";
import Link from "next/link";
import Image from "next/image";
import Logo from "@public/icons/wanna-tutor.png";
import { useState } from "react";

const orbitron = Orbitron({
  subsets: ["latin"],
});

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      <NavButton href="/become-tutor">Join For Free</NavButton>
    </header>
  );
}

const BrandName = ({ className }: { className?: string }) => {
  return (
    <h1
      className={cn(
        "text-xl text-blue-950 font-bold md:text-2xl",
        orbitron.className,
        className,
      )}
    >
      Wanna<strong className="font-bold text-orange-400">Tutor</strong>
    </h1>
  );
};

export { BrandName };
