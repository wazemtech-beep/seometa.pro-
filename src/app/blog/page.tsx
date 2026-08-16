import React from "react";
import Navbar from "../components/Navbar";
import BlogHero from "../components/BlogHero";
import Blog from "../components/Blog";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export const metadata = {
  title: "Blog & Insights | SEOMeta.pro",
  description:
    "Expert tips, AI metadata guides, and microstock SEO strategies to skyrocket your Adobe Stock and Shutterstock earnings.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0c0c0e] text-slate-100 relative">
      <Navbar />
      <BlogHero />
      <Blog />
      <CTA />
      <Footer />
    </main>
  );
}
