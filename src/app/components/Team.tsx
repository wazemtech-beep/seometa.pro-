"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Team() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Card 1 (Left card): Starts shifted right behind center card (+105%, +6.42deg) and fans out left (0%, 0deg)
  const card1X = useTransform(scrollYProgress, [0.05, 0.75], ["105%", "0%"]);
  const card1Rotate = useTransform(scrollYProgress, [0.05, 0.75], [6.42, 0]);

  // Card 3 (Right card): Starts shifted left behind center card (-105%, -6.42deg) and fans out right (0%, 0deg)
  const card3X = useTransform(scrollYProgress, [0.05, 0.75], ["-105%", "0%"]);
  const card3Rotate = useTransform(scrollYProgress, [0.05, 0.75], [-6.42, 0]);

  return (
    <section ref={targetRef} id="team" className="relative h-[220vh] z-10 select-none">
      {/* Sticky Pinned Screen Wrapper */}
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center px-4 max-w-[1180px] mx-auto overflow-hidden">
        {/* 1. Header Section */}
        <div id="team-header" className="flex flex-col items-center text-center mb-10 md:mb-14">
          <h2
            className="text-4xl md:text-[40px] font-medium tracking-[-0.4px] leading-tight text-white mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Our{" "}
            <span className="font-serif-italic font-normal text-5xl md:text-[48px] text-[#fef9ff] italic">
              Professional
            </span>{" "}
            Members
          </h2>

          <p
            className="text-[#fef9ff] opacity-60 text-sm md:text-base font-normal max-w-md text-center"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Behind every campaign is a passionate team of experts
          </p>
        </div>

        {/* 2. Team Cards 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center w-full relative">
          {/* Card 1: David Carter (Left Card - Fans Out Left) */}
          <motion.div
            id="team-card-1"
            style={{ x: card1X, rotate: card1Rotate }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="relative rounded-[24px] bg-[#191919] border border-white/10 p-5 md:p-6 shadow-2xl flex flex-col justify-between group overflow-hidden cursor-pointer z-10"
          >
            {/* Ambient Royal Blue Glow Shadow */}
            <div
              className="absolute -bottom-12 -right-12 w-60 h-60 rounded-full pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity duration-500"
              style={{
                backgroundColor: "rgb(69, 85, 253)",
                filter: "blur(80px)",
                WebkitFilter: "blur(80px)",
              }}
            />

            <div className="w-full aspect-[0.8129/1] rounded-[16px] overflow-hidden mb-5 bg-[#07090e] relative z-10">
              <img
                src="https://framerusercontent.com/images/wLHeuH0JRgWVHeWZXn7u5WmGw.png?width=1360&height=1673"
                alt="David Carter"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            <div className="relative z-10 text-center">
              <h4
                className="text-xl md:text-2xl font-semibold text-[#fef9ff] tracking-tight mb-1"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                David Carter
              </h4>
              <p
                className="text-sm text-[#cfcbd0] opacity-70 font-normal"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Founder
              </p>
            </div>
          </motion.div>

          {/* Card 2: Ethan Collins (Center Card - Sits cleanly on top with z-30) */}
          <motion.div
            id="team-card-2"
            whileHover={{ y: -8, scale: 1.02 }}
            className="relative rounded-[24px] bg-[#191919] border border-white/10 p-5 md:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.9)] flex flex-col justify-between group overflow-hidden cursor-pointer z-30"
          >
            {/* Ambient Royal Blue Glow Shadow */}
            <div
              className="absolute -bottom-12 -right-12 w-60 h-60 rounded-full pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity duration-500"
              style={{
                backgroundColor: "rgb(69, 85, 253)",
                filter: "blur(80px)",
                WebkitFilter: "blur(80px)",
              }}
            />

            <div className="w-full aspect-[0.8129/1] rounded-[16px] overflow-hidden mb-5 bg-[#07090e] relative z-10">
              <img
                src="https://framerusercontent.com/images/dnivQV3qhfFPjZnayJCGfRR5Y.png?width=1360&height=1673"
                alt="Ethan Collins"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            <div className="relative z-10 text-center">
              <h4
                className="text-xl md:text-2xl font-semibold text-[#fef9ff] tracking-tight mb-1"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Ethan Collins
              </h4>
              <p
                className="text-sm text-[#cfcbd0] opacity-70 font-normal"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Co Founder
              </p>
            </div>
          </motion.div>

          {/* Card 3: Liam Parker (Right Card - Fans Out Right) */}
          <motion.div
            id="team-card-3"
            style={{ x: card3X, rotate: card3Rotate }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="relative rounded-[24px] bg-[#191919] border border-white/10 p-5 md:p-6 shadow-2xl flex flex-col justify-between group overflow-hidden cursor-pointer z-20"
          >
            {/* Ambient Royal Blue Glow Shadow */}
            <div
              className="absolute -bottom-12 -right-12 w-60 h-60 rounded-full pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity duration-500"
              style={{
                backgroundColor: "rgb(69, 85, 253)",
                filter: "blur(80px)",
                WebkitFilter: "blur(80px)",
              }}
            />

            <div className="w-full aspect-[0.8129/1] rounded-[16px] overflow-hidden mb-5 bg-[#07090e] relative z-10">
              <img
                src="https://framerusercontent.com/images/zozRH9q3Kqjnz7P6I3q6qHSGwAo.png?width=1360&height=1673"
                alt="Liam Parker"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            <div className="relative z-10 text-center">
              <h4
                className="text-xl md:text-2xl font-semibold text-[#fef9ff] tracking-tight mb-1"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Liam Parker
              </h4>
              <p
                className="text-sm text-[#cfcbd0] opacity-70 font-normal"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                CEO
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
