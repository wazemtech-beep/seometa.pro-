"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FramerPillButton } from "./components/Button";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#141414] text-slate-100 relative flex flex-col justify-between overflow-hidden select-none">
      <Navbar />

      {/* 404 Main Section */}
      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-28 px-4 max-w-[1180px] mx-auto w-full flex flex-col items-center justify-center text-center my-auto">
        {/* 1. Giant 404 Gradient Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <h1
            className="text-[150px] sm:text-[280px] md:text-[360px] lg:text-[420px] font-semibold tracking-[-0.03em] leading-[0.76] text-center bg-gradient-to-b from-[#4555fd] via-[#4555fd]/80 to-[#141414] bg-clip-text text-transparent select-none drop-shadow-[0_0_90px_rgba(69,85,253,0.35)]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            404
          </h1>
        </motion.div>

        {/* 2. Title & Action Button Stacked Below 404 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center text-center -mt-8 sm:-mt-14 md:-mt-20 z-10"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-[44px] font-medium tracking-[-0.4px] leading-tight text-white mb-8"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Oops! Page not found
          </h2>

          {/* Pricing Section Style Sliding Arrow & Vertical Text Pill Button */}
          <FramerPillButton text="GO HOME" href="/" />
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
