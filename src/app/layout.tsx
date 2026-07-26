import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import SmoothScroll from "@/components/providers/SmoothScroll";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lakeside Roofing Co. | DFW Roofing Experts",
  description:
    "Trusted roofing experts serving the Dallas-Fort Worth Metroplex. Personal, reliable, professional roof replacement, storm damage repair, and gutter installation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink font-sans">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
