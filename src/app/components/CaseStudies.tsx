"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, TrendingUp } from "lucide-react";
import { GrowthPlanButton } from "./Button";

export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0); // Card 1 active by default on Desktop

  const caseStudies = [
    {
      id: "case-study-1",
      title: "3.5x Earnings Boost on Adobe Stock",
      description:
        "Optimized 4,500 stock photos using automated AI tagging, resulting in top page keyword search rankings.",
      href: "#case-study-1",
      image: "https://framerusercontent.com/images/sdExJfMbeETJGq7NASbftEUdpU.png?width=3074&height=2208",
      badges: [
        { text: "4.2x Keyword Reach", icon: Briefcase },
        { text: "85% Tagging Time Saved", icon: TrendingUp },
      ],
    },
    {
      id: "case-study-2",
      title: "10,000+ Vector Uploads to Freepik",
      description:
        "Processed massive batches of vector EPS assets effortlessly with zero metadata rejection from major microstock sites.",
      href: "#case-study-2",
      image: "https://framerusercontent.com/images/6ZX0Kq0TW1esq90xyiNykHU4Ync.png?width=3074&height=2208",
      badges: [
        { text: "10,000+ Assets Tagged", icon: Briefcase },
        { text: "100% Acceptance Rate", icon: TrendingUp },
      ],
    },
    {
      id: "case-study-3",
      title: "AI Art Portfolio Metadata Scaling",
      description:
        "Generated rich, buyer-optimized metadata CSVs for 25,000 Midjourney & DALL-E generated image assets.",
      href: "#case-study-3",
      image: "https://framerusercontent.com/images/8G3GWsyOIJrLunWVMxKT44XtiE.png?width=3074&height=2208",
      badges: [
        { text: "25k CSV Rows Exported", icon: Briefcase },
        { text: "1-Click Batch Process", icon: TrendingUp },
      ],
    },
  ];

  return (
    <section id="case-studies" className="relative py-16 md:py-32 px-4 max-w-[1180px] mx-auto z-10 select-none">
      {/* 1. Header Section */}
      <div id="case-study-header" className="flex flex-col items-center text-center mb-12 md:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-[48px] font-medium tracking-[-0.4px] leading-tight text-white mb-3"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Contributor{" "}
          <span className="font-serif-italic font-normal text-5xl sm:text-6xl md:text-[54px] text-[#fef9ff] italic">
            Success Stories
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[#cfcbd0] opacity-70 text-sm sm:text-base font-normal max-w-md text-center"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          See how top photographers, vector artists, and studios scale their earnings.
        </motion.p>
      </div>

      {/* 2. DESKTOP VIEW: Interactive Accordion Tabs (1 Active, 2 Off - md:flex) */}
      <div className="hidden md:flex flex-row h-[500px] gap-5 w-full items-stretch relative z-10">
        {caseStudies.map((study, index) => {
          const isActive = activeIndex === index;

          return (
            <motion.div
              key={study.id}
              onClick={() => setActiveIndex(index)}
              layout
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-[24px] overflow-hidden cursor-pointer border border-white/10 flex transition-all duration-500 ${
                isActive
                  ? "flex-[3.5] bg-[#191919] p-7 lg:p-8 shadow-2xl"
                  : "flex-[0.6] bg-[#191919]/60 hover:bg-[#191919] p-3"
              }`}
            >
              {/* Royal Blue Ambient Glow Shadow for Active Desktop Card */}
              {isActive && (
                <div
                  className="absolute -bottom-12 -right-12 w-96 h-96 rounded-full pointer-events-none opacity-50"
                  style={{
                    backgroundColor: "rgb(69, 85, 253)",
                    filter: "blur(95px)",
                    WebkitFilter: "blur(95px)",
                  }}
                />
              )}

              {/* CARD CONTAINER */}
              <div className="w-full h-full flex flex-row gap-6 relative z-10 items-stretch">
                {/* Image Section */}
                <div
                  className={`relative rounded-[20px] overflow-hidden transition-all duration-500 shrink-0 ${
                    isActive ? "w-[48%] h-full" : "w-full h-full"
                  }`}
                >
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Section (Visible when active) */}
                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.35, delay: 0.15 }}
                      className="flex-1 flex flex-col justify-between py-1 pr-2"
                    >
                      {/* Result Badges */}
                      <div className="flex flex-col gap-3 mb-4 items-start">
                        {study.badges.map((badge, bIdx) => {
                          const IconComp = badge.icon;
                          return (
                            <div
                              key={bIdx}
                              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#4555fd] bg-[#191919] shadow-lg"
                            >
                              <div className="w-6 h-6 rounded-full bg-[#4555fd] flex items-center justify-center text-white shrink-0">
                                <IconComp className="w-3.5 h-3.5" />
                              </div>
                              <span
                                className="text-sm font-medium text-[#fef9ff] tracking-tight"
                                style={{ fontFamily: "'Inter', sans-serif" }}
                              >
                                {badge.text}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Title & Description */}
                      <div className="mb-4">
                        <h3
                          className="text-2xl lg:text-[28px] font-bold text-white tracking-tight leading-snug mb-3"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {study.title}
                        </h3>
                        <p
                          className="text-sm text-[#cfcbd0] opacity-80 leading-relaxed max-w-lg"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {study.description}
                        </p>
                      </div>

                      {/* VIEW CASE STUDY Button */}
                      <div>
                        <GrowthPlanButton text="View case study" href={study.href} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 3. MOBILE VIEW: All 3 Cards Active & Fully Expanded (md:hidden) */}
      <div className="flex flex-col md:hidden gap-6 w-full relative z-10">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full bg-[#191919] border border-white/10 rounded-[24px] p-6 shadow-2xl relative overflow-hidden flex flex-col gap-5"
          >
            {/* Background Ambient Royal Blue Glow */}
            <div
              className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full pointer-events-none opacity-50"
              style={{
                backgroundColor: "rgb(69, 85, 253)",
                filter: "blur(85px)",
                WebkitFilter: "blur(85px)",
              }}
            />

            {/* Case Study Top Image */}
            <div className="w-full aspect-[1.39/1] rounded-[16px] overflow-hidden border border-white/5 relative z-10">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Case Study Details */}
            <div className="flex flex-col gap-4 relative z-10 text-left">
              {/* Result Badges */}
              <div className="flex flex-wrap gap-2.5 items-center">
                {study.badges.map((badge, bIdx) => {
                  const IconComp = badge.icon;
                  return (
                    <div
                      key={bIdx}
                      className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#4555fd] bg-[#141416]"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#4555fd] flex items-center justify-center text-white shrink-0">
                        <IconComp className="w-3 h-3" />
                      </div>
                      <span
                        className="text-xs sm:text-sm font-medium text-[#fef9ff] tracking-tight"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {badge.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Title & Description */}
              <div>
                <h3
                  className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug mb-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {study.title}
                </h3>
                <p
                  className="text-xs sm:text-sm text-[#cfcbd0] opacity-80 leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {study.description}
                </p>
              </div>

              {/* Compact Inline "View case study" Button */}
              <div className="pt-2 flex justify-start">
                <GrowthPlanButton text="View case study" href={study.href} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
