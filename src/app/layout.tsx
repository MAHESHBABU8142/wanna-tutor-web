import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Providers from "./providers";
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
});

export const metadata: Metadata = {
  title: "Wanna Tutor",
  description:
    "A platform connecting students with tutors for personalized learning experiences.",
  keywords: [
    "online tutors",
    "private tutors",
    "home tutors",
    "math tutor",
    "science tutor",
    "english tutor",
    "coding tutor",
    "online learning",
    "WannaTutor",
  ],
  authors: [{ name: "WannaTutor" }],
  creator: "WannaTutor",
  publisher: "WannaTutor",
  metadataBase: new URL("https:www.//wannatutor.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "WannaTutor",
    description: "Find expert tutors for any subject online or near you.",
    url: "https://www.wannatutor.in",
    siteName: "WannaTutor",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  category: "Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} antialiased`}>
      <body>
        <Providers>
          {children}
          <Analytics />
          <SpeedInsights />
        </Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "WannaTutor",
              url: "https://www.wannatutor.in",
              logo: "https://www.wannatutor.in/icons/wanna-tutor.png",
            }),
          }}
        />
      </body>
    </html>
  );
}
