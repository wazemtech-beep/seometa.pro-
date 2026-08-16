import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoTicker from "./components/LogoTicker";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import Counter from "./components/Counter";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07090e] text-slate-100 relative">
      {/* Ambient Lighting Glow for Page background */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[1100px] h-[480px] bg-gradient-to-r from-blue-600/30 via-[#4555fd]/45 to-indigo-500/25 blur-[130px] rounded-full z-0 opacity-70" />
      <div className="pointer-events-none absolute bottom-10 -left-20 w-[500px] h-[500px] bg-indigo-500/10 blur-[140px] rounded-full z-0" />

      {/* Main Content Sections */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <LogoTicker />
        <WhyChooseUs />
        <Services />
        <CaseStudies />
        <Counter />
        <Pricing />
        <Testimonial />
        <FAQ />
        <Blog limit={3} />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
