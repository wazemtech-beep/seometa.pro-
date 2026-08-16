"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MissionVision() {
  const cards = [
    {
      id: "mission-wrapper",
      title: "Our Mission",
      description: "To empower stock creators with AI metadata tools that actually rank and generate sales.",
      icon: "https://framerusercontent.com/images/8VXoax44Gj804dhhLuRKInHbFs.png?width=320&height=320",
    },
    {
      id: "vission-wrapper",
      title: "Our Vision",
      description: "To become the ultimate metadata generation platform for stock contributors worldwide.",
      icon: "https://framerusercontent.com/images/IXmXXHQhoexCFzOS1uaRLV7Q.png?width=320&height=320",
    },
  ];

  return (
    <section id="mission-vision" className="relative py-16 md:py-24 px-4 max-w-[1180px] mx-auto z-10 select-none">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            id={card.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
            className="relative rounded-[32px] md:rounded-[40px] bg-[#191919] border border-white/10 p-8 sm:p-10 md:p-12 flex flex-col justify-between group overflow-hidden shadow-2xl transition-all duration-300 min-h-[380px]"
          >
            {/* Ambient Royal Blue Glow on Hover */}
            <div
              className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full pointer-events-none opacity-0 group-hover:opacity-50 transition-opacity duration-500"
              style={{
                backgroundColor: "rgb(69, 85, 253)",
                filter: "blur(90px)",
                WebkitFilter: "blur(90px)",
              }}
            />

            {/* Top 3D Icon Container */}
            <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-8">
              <img
                decoding="auto"
                loading="lazy"
                width={320}
                height={320}
                src={card.icon}
                alt={`${card.title} Icon`}
                className="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content Container */}
            <div className="relative z-10 mt-auto">
              <h3
                className="text-3xl sm:text-[36px] font-medium tracking-[-0.4px] text-white leading-tight mb-3"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {card.title}
              </h3>
              <p
                className="text-base sm:text-lg text-[#cfcbd0] opacity-75 font-normal leading-relaxed max-w-md"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
