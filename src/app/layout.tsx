import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import PageTransition from "./components/PageTransition";

const inter = Inter({ subsets: ["latin"] });
const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: "SEOMeta.pro | AI Metadata & CSV Generator for Stock Creators",
  description: "SEOMeta.pro helps stock photographers, vector artists, and microstock contributors generate SEO titles, descriptions, and 50+ keywords for Adobe Stock, Shutterstock & Freepik.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${instrumentSerif.variable}`}>
      <body className={`${inter.className} bg-[#07090e] text-slate-100 antialiased selection:bg-indigo-500 selection:text-white`}>
        <SmoothScroll>
          <PageTransition>{children}</PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}
