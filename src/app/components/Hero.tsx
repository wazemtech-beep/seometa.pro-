"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookCallButton, GrowthPlanButton } from "./Button";

export default function Hero() {
  return (
    <section id="hero-header" className="relative pt-36 pb-24 md:pt-44 md:pb-32 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Framer Hero Background Texture Image (Scoped strictly to Hero section) */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-60 select-none">
        <img
          src="https://framerusercontent.com/images/cvl0WGIbhRITULkOtQcZWK6Y.webp?scale-down-to=2048&width=2880&height=1600"
          alt="Hero Background Texture"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Bright Royal Blue & Electric Blue Ambient Background Glow */}
      <div className="pointer-events-none absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[450px] bg-gradient-to-r from-blue-600/35 via-[#4555fd]/50 to-indigo-600/35 blur-[120px] rounded-full z-0" />

      {/* 1. Subtitle Badge ("10k+ Creators" + Avatars + 10k+ with exact #4555fd Blue Border & Glow) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="inline-flex items-center gap-[16px] pl-[6px] pr-[24px] py-[6px] rounded-[40px] mb-8 relative z-10 select-none"
        style={{
          backgroundColor: "#191919",
          border: "1px solid #4555fd",
          boxShadow: "0 0 20px rgba(69, 85, 253, 0.5)",
          maxWidth: "280px",
        }}
      >
        {/* Profile Images Wrapper (Max width 90px) */}
        <div className="relative w-[90px] h-[30px] flex items-center shrink-0">
          {/* Avatar 1 */}
          <div className="w-[30px] h-[30px] rounded-full overflow-hidden border-[1.25px] border-[#191919] absolute left-0 z-10">
            <img
              src="https://framerusercontent.com/images/hUuAKK2w1VWPhbsJ3ZlA0oQ2Ks.png?width=200&height=200"
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Avatar 2 */}
          <div className="w-[30px] h-[30px] rounded-full overflow-hidden border-[1.25px] border-[#191919] absolute left-[20px] z-20">
            <img
              src="https://framerusercontent.com/images/tRBqYs2UMEC5SP7MT9DaoBR8jF0.png?width=250&height=250"
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Avatar 3 */}
          <div className="w-[30px] h-[30px] rounded-full overflow-hidden border-[1.25px] border-[#191919] absolute left-[40px] z-30">
            <img
              src="https://framerusercontent.com/images/ViNlb2cIOWTKreb0bSvAB5hA.png?width=250&height=250"
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Member Count Tag (10k+) */}
          <div
            className="absolute left-[61px] top-1/2 -translate-y-1/2 z-40 px-1.5 py-0.5 rounded-full border-[1.25px] border-[#191919] flex items-center justify-center text-[10px] font-bold text-[#fef9ff]"
            style={{ backgroundColor: "#4555fd" }}
          >
            10k+
          </div>
        </div>

        {/* Badge Text ("Stock Contributors") */}
        <span className="text-xs font-medium text-[#fef9ff] tracking-normal">
          Stock Contributors
        </span>
      </motion.div>

      {/* 2. Hero Title with Instrument Serif Italic */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-5xl sm:text-7xl lg:text-[92px] font-medium tracking-[-0.05em] leading-[1.02] text-white max-w-5xl mx-auto relative z-10"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        AI Metadata &amp;{" "}
        <span className="font-serif-italic font-normal text-6xl sm:text-8xl lg:text-[104px] tracking-tight text-[#fef9ff]">
          CSV Generation
        </span>{" "}
        Made{" "}
        <span className="font-serif-italic font-normal text-6xl sm:text-8xl lg:text-[104px] tracking-tight text-[#fef9ff]">
          Effortless
        </span>
      </motion.h1>

      {/* 3. Hero Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8 text-lg sm:text-xl text-[#cfcbd0] max-w-[620px] mx-auto font-normal leading-relaxed text-center relative z-10"
      >
        Automatically generate SEO titles, descriptions, and 50+ keywords for stock photos, vectors &amp; AI art. Export platform-ready CSV files in seconds.
      </motion.p>

      {/* 4. Reusable Buttons Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10"
      >
        {/* Button 1: "GENERATE CSV NOW" */}
        <GrowthPlanButton text="GENERATE CSV NOW" href="#pricing" />

        {/* Button 2: "START FOR FREE" */}
        <BookCallButton text="START FOR FREE" href="#pricing" />
      </motion.div>
    </section>
  );
}
