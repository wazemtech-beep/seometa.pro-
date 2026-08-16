"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section id="about-hero" className="relative pt-36 pb-24 md:pt-48 md:pb-36 flex flex-col items-center justify-center text-center px-4 overflow-hidden select-none min-h-[520px]">
      {/* Framer About Hero Background Image Banner (itzob070QXgeyETsF51Rmi8cxE.png) */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none">
        <img
          decoding="auto"
          width={5760}
          height={1736}
          sizes="100vw"
          srcSet="https://framerusercontent.com/images/itzob070QXgeyETsF51Rmi8cxE.png?scale-down-to=512&width=5760&height=1736 512w, https://framerusercontent.com/images/itzob070QXgeyETsF51Rmi8cxE.png?scale-down-to=1024&width=5760&height=1736 1024w, https://framerusercontent.com/images/itzob070QXgeyETsF51Rmi8cxE.png?scale-down-to=2048&width=5760&height=1736 2048w, https://framerusercontent.com/images/itzob070QXgeyETsF51Rmi8cxE.png?scale-down-to=4096&width=5760&height=1736 4096w, https://framerusercontent.com/images/itzob070QXgeyETsF51Rmi8cxE.png?width=5760&height=1736 5760w"
          src="https://framerusercontent.com/images/itzob070QXgeyETsF51Rmi8cxE.png?width=5760&height=1736"
          alt="About Hero Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Royal Blue Ambient Lighting Overlay */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[350px] bg-gradient-to-r from-blue-600/30 via-[#4555fd]/45 to-indigo-600/30 blur-[120px] rounded-full z-0" />

      {/* Hero Content Container */}
      <div className="max-w-[1180px] mx-auto w-full relative z-10 flex flex-col items-center justify-center">
        {/* Main Title: About Our Company */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-7xl lg:text-[88px] font-bold tracking-[-0.03em] leading-tight text-white max-w-5xl mx-auto mb-4 text-center"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          About{" "}
          <span className="font-serif-italic font-normal text-6xl sm:text-8xl lg:text-[100px] tracking-tight text-[#fef9ff] italic">
            Our
          </span>{" "}
          Company
        </motion.h1>

        {/* Subtitle Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-[#cfcbd0] opacity-80 max-w-2xl mx-auto font-normal leading-relaxed text-center"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          We offer a curated selection of AI tools engineered to automate stock metadata, keyword tagging, and bulk CSV generation for creators worldwide.
        </motion.p>
      </div>
    </section>
  );
}
