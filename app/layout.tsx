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
  title: "Welcome shyar afrini's portfolio",
  description:
    "Hello, i am shyar abdalhanan this is a web page to showcase my abilities as a web developer and a also a diverged cross platform mobile app developer and UI/UX designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={teko.className}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
