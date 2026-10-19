import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Sujit | Video Designer & Motion Creator",
  description:
    "Personal portfolio of Sujit — Video Designer, Motion Creator, and B.Tech CSE (Class of 2024, Lucknow) graduate specializing in Motion Graphics, Commercial Edits, VFX, and Color Grading.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#090d16] font-sans text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
