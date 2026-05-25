import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wanna Tutor",
  description:
    "A platform connecting students with tutors for personalized learning experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ibmPlexSans.className} antialiased`}>
      <body className="bg-white text-gray-900 pt-14">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
