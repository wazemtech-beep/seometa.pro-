import React from "react";
import Navbar from "../components/Navbar";
import AboutHero from "../components/AboutHero";
import AboutSection from "../components/AboutSection";
import MissionVision from "../components/MissionVision";
import AboutBanner from "../components/AboutBanner";
import Approach from "../components/Approach";
import AboutWhyChooseUs from "../components/AboutWhyChooseUs";
import Team from "../components/Team";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#07090e] text-slate-100 relative">
      <Navbar />
      <AboutHero />
      <AboutSection />
      <MissionVision />
      <AboutBanner />
      <Approach />
      <AboutWhyChooseUs />
      <Team />
      <CTA />
      <Footer />
    </main>
  );
}
