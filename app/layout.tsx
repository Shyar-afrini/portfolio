import type { Metadata } from "next";
import { Teko } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const inter = Teko({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Welcome to my portfolio",
  description:
    "This is a web page to showcase my abilities as a web developer and a also a diverged cross platform mobile app developer and UI/UX designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
