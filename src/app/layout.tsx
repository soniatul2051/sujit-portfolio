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
  title: "Sujit | 3D Artist & Video Editor",
  description:
    "Personal portfolio of Sujit — B.Tech CSE (Class of 2024, Lucknow) graduate specializing in Blender software, Video Editing, 3D Modeling, and 3D Animation.",
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
