"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileSpreadsheet, Sparkles, Layers, Download } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Stock Metadata CSV",
      description: "Generate SEO titles & 50+ tags for Adobe Stock & Shutterstock",
      href: "#service-stock-csv",
      icon: FileSpreadsheet,
    },
    {
      title: "Batch Image AI",
      description: "Upload 1,000+ photos or AI art files and export ready CSVs",
      href: "#service-batch-ai",
      icon: Sparkles,
    },
    {
      title: "Vector & Video Support",
      description: "Full metadata tagging for vector art EPS/SVG & video stock formats",
      href: "#service-vectors-video",
      icon: Layers,
    },
    {
      title: "1-Click CSV Export",
      description: "Pre-formatted CSV files ready for instant microstock upload",
      href: "#service-csv-export",
      icon: Download,
    },
  ];

  return (
    <section id="services" className="relative py-24 md:py-32 px-4 max-w-[1180px] mx-auto z-10">
      {/* 1. Header Section */}
      <div id="services-header" className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-[40px] font-medium tracking-[-0.4px] leading-tight text-white"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            What{" "}
            <span className="font-serif-italic font-normal text-5xl md:text-[48px] text-[#fef9ff]">
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
          className="text-[#fef9ff] text-sm md:text-base font-normal max-w-sm"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Powerful AI tools engineered specifically for microstock contributors and digital asset creators.
        </motion.p>
      </div>

      {/* 2. Services Grid (4 Column Layout matching aspect ratio 0.736:1) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => {
          const IconComp = service.icon;

          return (
            <motion.a
              key={service.title}
              href={service.href}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative aspect-[0.736/1] rounded-[24px] overflow-hidden p-6 flex flex-col justify-between group border border-white/10 shadow-2xl transition-transform duration-300"
              style={{ backgroundColor: "rgba(25, 25, 25, 0.9)" }}
            >
              {/* Card Background Texture */}
              <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                <img
                  src="https://framerusercontent.com/images/bkXBz88246VcreTivsMF657bbY.png?width=1120&height=1520"
                  alt="Card Texture"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Single Clean 3D Glowing Icon Container */}
              <div className="relative z-10">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-[20px] bg-gradient-to-br from-[#4555fd] to-[#1e2478] border border-[#4555fd]/80 flex items-center justify-center text-white shadow-[0_0_25px_rgba(69,85,253,0.6)] group-hover:scale-110 group-hover:shadow-[0_0_35px_rgba(69,85,253,0.9)] transition-all duration-500">
                  <IconComp className="w-8 h-8 md:w-10 md:h-10 text-white stroke-[1.75]" />
                </div>
              </div>

              {/* Title Wrapper */}
              <div className="relative z-10 mt-auto">
                <h3 className="text-xl md:text-2xl font-bold text-[#fef9ff] tracking-tight mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[#cfcbd0] font-medium leading-normal">
                  {service.description}
                </p>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
