import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";

// Load Google Font (example: Inter)

// Page metadata
export const metadata: Metadata = {
  title: "Veriscript",
  description: "A modern web app built with Next.js 15 and Tailwind CSS.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-l from-white to-[#e6f7ee]">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
