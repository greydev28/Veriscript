import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Load Google Font (example: Inter)
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter", // optional: lets you use it in Tailwind
});

// Load Google Font (example: plus jakarta sans)
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

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
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="bg-gradient-to-l from-white to-[#e6f7ee]">
        <main>{children}</main>
      </body>
    </html>
  );
}
