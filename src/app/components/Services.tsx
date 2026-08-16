"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Stock Metadata CSV",
      description: "Generate SEO titles & 50+ tags for Adobe Stock & Shutterstock",
      href: "#service-stock-csv",
      iconImg: "https://framerusercontent.com/images/jxmeEOwaW32GmrcjPEwu6mgba1o.png?width=324&height=372",
    },
    {
      title: "Batch Image AI",
      description: "Upload 1,000+ photos or AI art files and export ready CSVs",
      href: "#service-batch-ai",
      iconImg: "https://framerusercontent.com/images/rD2TaCivrkuXHO6IspDjHqJng.png?width=324&height=372",
    },
    {
      title: "Vector & Video Support",
      description: "Full metadata tagging for vector art EPS/SVG & video stock formats",
      href: "#service-vectors-video",
      iconImg: "https://framerusercontent.com/images/ND3cuTOkd4wQ9wzHm1YwpMTXKI.png?width=325&height=372",
    },
    {
      title: "1-Click CSV Export",
      description: "Pre-formatted CSV files ready for instant microstock upload",
      href: "#service-csv-export",
      iconImg: "https://framerusercontent.com/images/xp1ZqqroEz3Ku5NDInejFfcPiCI.png?width=324&height=372",
    },
  ];

  return (
    <section id="services" className="relative py-16 md:py-32 px-4 max-w-[1180px] mx-auto z-10 select-none">
      {/* 1. Header Section */}
      <div id="services-header" className="flex flex-col items-center text-center md:flex-row md:items-end md:justify-between md:text-left mb-12 md:mb-16 gap-4 sm:gap-6">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-[48px] font-medium tracking-[-0.4px] leading-tight text-white"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            What{" "}
            <span className="font-serif-italic font-normal text-5xl sm:text-6xl md:text-[54px] text-[#fef9ff] italic">
              You
            </span>{" "}
            Get
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[#fef9ff] text-sm sm:text-base font-normal max-w-sm text-center md:text-left opacity-90"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Powerful AI tools engineered specifically for microstock contributors and digital asset creators.
        </motion.p>
      </div>

      {/* 2. Responsive Square Services Grid (Matching Screenshot 2 100%) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {services.map((service, index) => (
          <motion.a
            key={service.title}
            href={service.href}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="relative w-full aspect-square rounded-[28px] overflow-hidden p-6 sm:p-7 flex flex-col justify-between group border border-white/10 shadow-2xl transition-all duration-300 bg-[#161618] hover:border-white/20"
          >
            {/* Top-Left Diagonal Royal Blue Spotlight Beam Glow (Framer Light Effect) */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#4555fd]/60 via-[#4555fd]/15 to-transparent pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-500 z-0" />

            {/* Card Texture Background */}
            <div className="absolute inset-0 z-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none">
              <img
                src="https://framerusercontent.com/images/bkXBz88246VcreTivsMF657bbY.png?width=1120&height=1520"
                alt="Card Texture"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Centered 3D Megaphone Icon */}
            <div className="relative z-10 my-auto flex items-center justify-center w-full">
              <img
                src={service.iconImg}
                alt={service.title}
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain group-hover:scale-110 transition-transform duration-500 filter drop-shadow-[0_10px_20px_rgba(69,85,253,0.3)]"
              />
            </div>

            {/* Bottom Title & Description */}
            <div className="relative z-10 text-left mt-auto">
              <h3
                className="text-xl sm:text-[22px] font-bold text-white tracking-tight mb-1.5 leading-snug"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {service.title}
              </h3>
              <p
                className="text-xs sm:text-sm text-[#cfcbd0] font-normal leading-relaxed opacity-75"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {service.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
