import logo from "@public/icons/wanna-tutor.png";
import Image from "next/image";

export default function LoadingPage() {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center">
      <Image
        src={logo}
        alt="KieSpace Logo"
        width={32}
        height={32}
        className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"
      />
      <div className="h-17 w-17 animate-spin rounded-full border border-blue-600 border-t-transparent"></div>
    </div>
  );
}
