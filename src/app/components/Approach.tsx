"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Zap, TrendingUp } from "lucide-react";

export default function Approach() {
  const approaches = [
    {
      id: "approach-card-1",
      title: "Briefing",
      description:
        "We begin by deeply understanding your business goals, target audience, and overall vision. Through detailed research and strategic planning, we define a clear direction that aligns perfectly with your brand identity and project objectives.",
      icon: FileText,
      svgPath: (
        <svg viewBox="0 0 65 65" className="w-12 h-12 text-[#fef9ff] flex-shrink-0">
          <defs>
            <linearGradient id="briefingGrad" x1="0.5" x2="0.5" y1="0" y2="1">
              <stop offset="0%" stopColor="rgb(254, 249, 255)" />
              <stop offset="100%" stopColor="rgba(254, 249, 255, 0.2)" />
            </linearGradient>
          </defs>
          <path
            d="M 47.397 7.447 L 47.397 41.534 C 47.397 42.791 46.897 43.996 46.007 44.884 L 34.053 56.839 C 33.166 57.729 31.96 58.229 30.703 58.229 L 7.448 58.229 C 5.473 58.228 3.578 57.444 2.18 56.049 C 0.784 54.651 0 52.756 0 50.78 L 0 7.448 C 0 5.474 0.785 3.578 2.18 2.18 C 3.578 0.785 5.473 0.001 7.448 0 L 39.948 0 C 41.923 0.001 43.817 0.785 45.215 2.18 C 46.61 3.578 47.394 5.473 47.395 7.448 Z M 30.47 53.489 L 42.657 41.301 L 33.177 41.301 C 31.682 41.302 30.47 42.515 30.47 44.01 Z M 12.865 14.894 L 34.532 14.894 C 35.654 14.894 36.563 13.985 36.563 12.863 C 36.563 11.741 35.654 10.832 34.532 10.832 L 12.865 10.832 C 11.743 10.832 10.834 11.741 10.834 12.863 C 10.834 13.985 11.743 14.894 12.865 14.894 Z M 12.865 47.394 L 22.345 47.394 C 23.467 47.394 24.376 46.485 24.376 45.363 C 24.376 44.241 23.467 43.332 22.345 43.332 L 12.865 43.332 C 11.743 43.332 10.834 44.241 10.834 45.363 C 10.834 46.485 11.743 47.394 12.865 47.394 Z M 12.865 36.561 L 26.408 36.561 C 27.53 36.561 28.439 35.651 28.439 34.53 C 28.439 33.408 27.53 32.498 26.408 32.498 L 12.865 32.498 C 11.743 32.498 10.833 33.408 10.833 34.53 C 10.833 35.651 11.743 36.561 12.865 36.561 Z M 12.865 25.727 L 34.532 25.727 C 35.654 25.727 36.563 24.818 36.563 23.696 C 36.563 22.574 35.654 21.665 34.532 21.665 L 12.865 21.665 C 11.743 21.665 10.834 22.574 10.834 23.696 C 10.834 24.818 11.743 25.727 12.865 25.727 Z"
            fill="url(#briefingGrad)"
          />
        </svg>
      ),
    },
    {
      id: "approach-card-2",
      title: "Action",
      description:
        "Our team brings ideas to life through a structured and creative execution process. By combining modern design, clean development, and innovative thinking, we build powerful digital solutions that effectively communicate your message and engage users.",
      icon: Zap,
      svgPath: (
        <svg viewBox="0 0 65 65" className="w-12 h-12 text-[#fef9ff] flex-shrink-0">
          <defs>
            <linearGradient id="actionGrad" x1="0.5" x2="0.5" y1="0" y2="1">
              <stop offset="0%" stopColor="rgb(254, 249, 255)" />
              <stop offset="100%" stopColor="rgba(254, 249, 255, 0.2)" />
            </linearGradient>
          </defs>
          <path
            d="M 20.094 20.601 L 20.094 2.076 C 20.094 1.119 19.44 0.286 18.511 0.059 C 17.582 -0.167 16.618 0.27 16.176 1.119 L 0.468 31.108 C -0.195 32.383 -0.151 33.911 0.584 35.147 C 1.32 36.382 2.642 37.15 4.079 37.175 L 20.094 37.175 L 20.094 55.7 C 20.096 56.655 20.75 57.486 21.678 57.713 C 22.607 57.94 23.57 57.504 24.012 56.657 L 39.721 26.648 C 40.384 25.372 40.34 23.844 39.605 22.609 C 38.87 21.374 37.548 20.607 36.11 20.582 L 20.094 20.6 Z"
            fill="url(#actionGrad)"
          />
        </svg>
      ),
    },
    {
      id: "approach-card-3",
      title: "Results",
      description:
        "We focus on delivering measurable and impactful results that drive real growth. From improved user experience to stronger brand presence, our solutions are designed to ensure long-term success and consistent performance.",
      icon: TrendingUp,
      svgPath: (
        <svg viewBox="0 0 65 65" className="w-12 h-12 text-[#fef9ff] flex-shrink-0">
          <defs>
            <linearGradient id="resultsGrad" x1="0.5" x2="0.5" y1="0" y2="1">
              <stop offset="0%" stopColor="rgb(254, 249, 255)" />
              <stop offset="100%" stopColor="rgba(254, 249, 255, 0.2)" />
            </linearGradient>
          </defs>
          <path
            d="M 33.154 36.453 C 35.534 36.554 36.904 37.332 38.004 37.957 C 39.043 38.547 39.794 38.975 41.513 38.975 C 43.231 38.975 43.983 38.548 45.022 37.957 C 46.122 37.332 47.491 36.554 49.872 36.453 L 51.07 36.403 L 43.417 21.996 L 43.417 13.965 L 56.747 13.965 C 57.469 13.966 58.129 13.558 58.452 12.913 C 58.774 12.267 58.704 11.495 58.27 10.918 L 55.319 6.982 L 58.27 3.047 C 58.702 2.47 58.772 1.698 58.449 1.053 C 58.127 0.408 57.468 0.001 56.747 0 L 41.513 0 C 41.008 0 40.524 0.2 40.166 0.557 C 39.809 0.914 39.608 1.399 39.608 1.904 L 39.608 21.996 L 31.955 36.403 Z M 15.801 43.751 C 16.62 44.315 17.161 44.688 18.407 44.688 C 19.654 44.688 20.195 44.315 21.014 43.751 C 21.799 43.211 22.776 42.537 24.312 42.266 L 24.55 42.224 L 25.154 41.086 L 20.081 31.72 C 19.748 31.106 19.106 30.723 18.407 30.723 C 17.709 30.723 17.066 31.106 16.733 31.72 L 11.149 42.027 L 12.501 42.266 C 14.037 42.537 15.014 43.21 15.8 43.751 Z M 18.407 48.496 C 15.977 48.496 14.681 47.604 13.641 46.888 C 13.013 46.456 12.559 46.144 11.839 46.016 L 9.239 45.556 L 0.229 62.189 C -0.09 62.779 -0.075 63.493 0.268 64.07 C 0.611 64.646 1.232 64.999 1.903 65 L 12.45 65 L 21.56 47.852 C 20.759 48.22 19.76 48.496 18.407 48.496 Z M 64.777 62.202 L 53.05 40.131 L 50.031 40.259 C 48.571 40.32 47.871 40.719 46.902 41.269 C 45.715 41.943 44.237 42.783 41.512 42.783 C 38.786 42.783 37.308 41.943 36.121 41.268 C 35.152 40.718 34.453 40.32 32.991 40.258 L 29.973 40.131 L 16.763 65 L 63.095 65 C 63.764 65 64.383 64.649 64.727 64.077 C 65.071 63.504 65.09 62.792 64.776 62.202 Z"
            fill="url(#resultsGrad)"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="approach" className="relative py-20 md:py-32 px-4 max-w-[1180px] mx-auto z-10 select-none">
      <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-start">
        {/* Left Column: Sticky Title & Subtitle */}
        <div id="approch-header" className="w-full md:w-5/12 lg:w-4/12 sticky top-36 z-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-[40px] font-medium tracking-[-0.4px] leading-tight text-white mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Our{" "}
            <span className="font-serif-italic font-normal text-5xl md:text-[48px] text-[#fef9ff] italic">
              Approach
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#cfcbd0] opacity-60 text-sm md:text-base font-normal max-w-xs leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            You can adapt them to your brand, tone, and target audience.
          </motion.p>
        </div>

        {/* Right Column: Vertically Stacked Cards */}
        <div className="w-full md:w-7/12 lg:w-8/12 space-y-6 md:space-y-8 relative z-10">
          {approaches.map((item, index) => (
            <motion.div
              key={item.id}
              id={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="relative rounded-[24px] bg-[#191919] border border-white/10 p-6 sm:p-8 md:p-10 shadow-2xl flex flex-col sm:flex-row gap-6 md:gap-8 items-start group overflow-hidden transition-all duration-300"
            >
              {/* Ambient Royal Blue Glow Accent */}
              <div
                className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity duration-500"
                style={{
                  backgroundColor: "rgb(69, 85, 253)",
                  filter: "blur(91px)",
                  WebkitFilter: "blur(91px)",
                }}
              />

              {/* Icon Container Left */}
              <div className="relative z-10 p-3 rounded-2xl bg-white/5 border border-white/10 flex-shrink-0 flex items-center justify-center">
                {item.svgPath}
              </div>

              {/* Text Container Right */}
              <div className="relative z-10 flex-1">
                <h5
                  className="text-2xl sm:text-[28px] font-semibold text-white tracking-tight mb-3"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item.title}
                </h5>
                <p
                  className="text-sm sm:text-base text-[#cfcbd0] leading-relaxed font-normal opacity-85"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
