import type { Metadata } from "next";
import { Teko } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { Analytics } from "@vercel/analytics/react";

const teko = Teko({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Shyar Afrini's Portfolio | Web Developer, Mobile App Developer, UI/UX Designer",
  description:
    "Hello, I am Shyar Abdalhanan. This web page showcases my abilities as a web developer, cross-platform mobile app developer, and UI/UX designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://shyar-afrini.vercel.app/" />
      </head>
      <body className={teko.className}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
