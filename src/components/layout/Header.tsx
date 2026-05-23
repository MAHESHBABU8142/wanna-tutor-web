import Image from "next/image";
import Icon from "@public/icons/wanna-tutor.png";
import { Orbitron } from "next/font/google";
import cn from "@/lib/class-merge";

const orbitron = Orbitron({
  subsets: ["latin"],
});

export default function Header() {
  return (
    <header className="min-h-[70vh] items-center flex justify-center flex-col">
      <div className={"flex items-center gap-2"}>
        <Image src={Icon} alt="logo" width={60} height={60} />
        <h1
          className={cn("text-2xl text-blue-950 font-bold", orbitron.className)}
        >
          Wanna<strong className="font-bold text-amber-500">Tutor</strong>
        </h1>
      </div>
      <p className="text-sm text-gray-500 mt-2">Coming soon...</p>
    </header>
  );
}
