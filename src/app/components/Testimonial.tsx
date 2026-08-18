"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(4); // Start at index 4 (T0 of middle set)
  const [enableTransition, setEnableTransition] = useState(true);
  const [windowWidth, setWindowWidth] = useState(1200);
  const dragX = useMotionValue(0);

  const baseTestimonials = [
    {
      id: "testimonial-1",
      quote:
        "“This AI CSV generator saved me over 20 hours of manual tagging every week. Uploading 1,000 photos to Adobe Stock & Freepik used to take days — now it takes 2 minutes!”",
      author: "Elena Rostova",
      role: "Stock Photographer & Contributor",
      image:
        "https://framerusercontent.com/images/VYxb5kCQ7uAPuhlJUWioPfL4.png?width=2320&height=1960",
      quoteIcon:
        "https://framerusercontent.com/images/FZFqFFGOD537cbETcUtphwQxI.png?width=400&height=400",
    },
    {
      id: "testimonial-2",
      quote:
        "“The AI generated titles and keywords are incredibly precise. My sales on Shutterstock increased by 300% within the first month of re-tagging my vector portfolio.”",
      author: "Marcus Vance",
      role: "Vector Illustrator & AI Artist",
      image:
        "https://framerusercontent.com/images/ys3KxRBjOKbvabObXVTvceuwagM.png?width=2320&height=1960",
      quoteIcon:
        "https://framerusercontent.com/images/FZFqFFGOD537cbETcUtphwQxI.png?width=400&height=400",
    },
    {
      id: "testimonial-3",
      quote:
        "“Exporting perfectly formatted CSV files for 10+ microstock sites in one click is a game-changer. Absolutely essential tool for any serious stock creator.”",
      author: "Laura Gomez",
      role: "Digital Asset Creator",
      image:
        "https://framerusercontent.com/images/EyT8aR6Uh43C9HqaZVJl87RGK5Y.png?width=2320&height=1960",
      quoteIcon:
        "https://framerusercontent.com/images/FZFqFFGOD537cbETcUtphwQxI.png?width=400&height=400",
    },
    {
      id: "testimonial-4",
      quote:
        "“No more rejected CSV uploads due to formatting errors! The CSV specs are 100% compliant with Adobe Stock and Freepik guidelines. Highly recommended!”",
      author: "Mark Thompson",
      role: "Microstock Studio Director",
      image:
        "https://framerusercontent.com/images/gZIKtZ4cWuxUYSsCsgy8okR9r5E.png?width=904&height=1200",
      quoteIcon:
        "https://framerusercontent.com/images/FZFqFFGOD537cbETcUtphwQxI.png?width=400&height=400",
    },
  ];

  // Tripled array for 100% infinite continuous loop (12 items total)
  const extendedTestimonials = [
    ...baseTestimonials.map((t, i) => ({ ...t, uniqueKey: `set1-${i}` })),
    ...baseTestimonials.map((t, i) => ({ ...t, uniqueKey: `set2-${i}` })),
    ...baseTestimonials.map((t, i) => ({ ...t, uniqueKey: `set3-${i}` })),
  ];

  // Responsive Viewport width tracking
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Card Width & Gap math matching Reference Image 1 exactly
  let cardWidth = 880;
  let gap = 20;

  if (windowWidth < 640) {
    cardWidth = Math.min(360, windowWidth * 0.88);
    gap = 12;
  } else if (windowWidth < 1024) {
    cardWidth = Math.min(680, windowWidth * 0.84);
    gap = 16;
  } else {
    cardWidth = Math.min(880, windowWidth * 0.72);
    gap = 20;
  }

  // Exact math to center active card in viewport with close side peeking
  const centerOffset = windowWidth / 2 - cardWidth / 2;
  const targetX = centerOffset - currentIndex * (cardWidth + gap);

  // Automatic Smooth Auto-Slide (runs every 4 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setEnableTransition(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setEnableTransition(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // Silent infinite loop reset when outside middle set (indices 4..7)
  const handleAnimationComplete = () => {
    if (currentIndex >= 8) {
      setEnableTransition(false);
      setCurrentIndex((prev) => prev - 4);
    } else if (currentIndex < 4) {
      setEnableTransition(false);
      setCurrentIndex((prev) => prev + 4);
    }
  };

  const handleDragEnd = () => {
    const offset = dragX.get();
    if (offset <= -40) {
      handleNext();
    } else if (offset >= 40) {
      handlePrev();
    }
  };

  // Active indicator index (0..3)
  const activeIndicatorIndex = currentIndex % 4;

  return (
    <section
      id="testimonial"
      className="framer-s12ybv relative py-20 md:py-28 w-full overflow-hidden z-10 select-none"
      data-framer-name="Testimonial"
    >
      {/* 1. Header Section */}
      <div
        className="framer-15ycxk3 flex flex-col items-center text-center mb-14 max-w-[1180px] mx-auto px-4"
        data-framer-name="Header"
        id="testimonial-header"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-[40px] font-medium tracking-[-0.4px] leading-tight text-white mb-3"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          What our{" "}
          <span className="font-serif-italic font-normal text-5xl md:text-[48px] text-[#fef9ff]">
            Clients
          </span>{" "}
          Say
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[#cfcbd0] opacity-60 text-sm md:text-base font-normal max-w-md text-center"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          You can adapt them to your brand, tone, and target audience.
        </motion.p>
      </div>

      {/* 2. Full-Width Peeking Slider Track (Matching Reference Image 1) */}
      <div
        className="framer-7aoqoh relative w-full overflow-hidden py-2 cursor-grab active:cursor-grabbing"
        data-framer-name="Slider Wrapper"
      >
        <motion.div
          className="framer-rpo2d8 flex flex-row items-center cursor-grab active:cursor-grabbing w-max"
          data-framer-name="Case Study Slider"
          drag="x"
          dragConstraints={{ left: targetX - 50, right: targetX + 50 }}
          style={{ x: dragX }}
          onDragEnd={handleDragEnd}
          animate={{ x: targetX }}
          transition={
            enableTransition
              ? { type: "spring", stiffness: 220, damping: 26, mass: 0.8 }
              : { duration: 0 }
          }
          onAnimationComplete={handleAnimationComplete}
        >
          {extendedTestimonials.map((item, index) => {
            const isActive = currentIndex === index;

            return (
              <div
                key={item.uniqueKey}
                onClick={() => {
                  setEnableTransition(true);
                  setCurrentIndex(index);
                }}
                className={`shrink-0 flex-none transition-[opacity,transform] duration-500 cursor-grab active:cursor-grabbing ${
                  isActive
                    ? "opacity-100 scale-100 z-20"
                    : "opacity-45 hover:opacity-75 scale-[0.98] z-10"
                }`}
                style={{
                  width: `${cardWidth}px`,
                  marginRight: `${gap}px`,
                }}
              >
                {/* Outer Card Container */}
                <div
                  className="framer-b4Fe6 framer-elw8R framer-nDV8t framer-FlbrD framer-1a7aglm framer-v-1a7aglm relative rounded-[20px] bg-[#191919] border border-white/10 p-6 md:p-8 lg:p-10 overflow-hidden shadow-2xl h-[460px] sm:h-[400px] lg:h-[390px] flex flex-col justify-between"
                  data-framer-name="Primary"
                >
                  {/* Framer Background Glow Shadow 1 */}
                  <div
                    className="framer-1f2ato2 absolute top-0 left-0 w-[450px] h-[450px] rounded-full pointer-events-none opacity-50"
                    data-framer-name="Shadow 1"
                    style={{
                      backgroundColor: "rgb(69, 85, 253)",
                      filter: "blur(94.4px)",
                      WebkitFilter: "blur(94.4px)",
                    }}
                  />

                  {/* Framer Background Glow Shadow 2 */}
                  <div
                    className="framer-13j2qmr absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full pointer-events-none opacity-50"
                    data-framer-name="Shadow 2"
                    style={{
                      backgroundColor: "rgb(69, 85, 253)",
                      filter: "blur(91.1px)",
                      WebkitFilter: "blur(91.1px)",
                    }}
                  />

                  {/* Card Content Layout */}
                  <div
                    className="framer-1dmq8k9 relative z-10 flex flex-col-reverse lg:flex-row items-stretch gap-6 lg:gap-10 h-full"
                    data-framer-name="Content"
                  >
                    {/* Left Side: Quote & Author Details */}
                    <div
                      className="framer-aep2q0 flex-1 flex flex-col justify-between py-1 text-left"
                      data-framer-name="Card Left Side"
                    >
                      <div>
                        {/* Quote Icon PNG */}
                        <div
                          className="framer-co1opj relative w-9 h-9 mb-4 pointer-events-none select-none"
                          data-framer-name="Quotes"
                        >
                          <img
                            src={item.quoteIcon}
                            alt="Testimonial Quotes Icon"
                            className="w-full h-full object-contain pointer-events-none select-none"
                            draggable={false}
                          />
                        </div>

                        {/* Quote Text */}
                        <div
                          className="framer-c6b7cg mb-6"
                          data-framer-name="Description Wrapper"
                        >
                          <div
                            className="framer-kwfruy"
                            data-framer-name="Description"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h5
                              className="framer-text framer-styles-preset-opgytf text-base sm:text-lg lg:text-[22px] font-medium text-[#cfcbd0] leading-relaxed tracking-tight"
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              {item.quote}
                            </h5>
                          </div>
                        </div>
                      </div>

                      {/* Author Info */}
                      <div
                        className="framer-rw6xes pt-3 border-t border-white/10"
                        data-framer-name="Author Details"
                      >
                        <div
                          className="framer-s8ts6m mb-0.5"
                          data-framer-name="Author Name"
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-g4v7q8 text-base md:text-lg font-semibold text-[#fef9ff] tracking-tight"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {item.author}
                          </p>
                        </div>

                        <div
                          className="framer-kdj2bu"
                          data-framer-name="Author Role"
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-zl56 text-xs md:text-sm text-[#cfcbd0] opacity-70 font-normal"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {item.role}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right Side: Image Box */}
                    <div
                      className="framer-1nz18fd w-full lg:w-[380px] shrink-0 h-[220px] sm:h-[250px] lg:h-full"
                      data-framer-name="Testimonial Image Wrapper"
                    >
                      <div
                        className="framer-10xc1k6 relative w-full h-full rounded-[16px] overflow-hidden border border-white/10 shadow-lg"
                        data-framer-name="Testimonial Image"
                      >
                        <img
                          src={item.image}
                          alt={item.author}
                          className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105 pointer-events-none select-none"
                          draggable={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* 3. Framer Progress Bar Line Indicator ("Slider Color" expanding 25% -> 50% -> 75% -> 100%) */}
      <div
        className="framer-jtg3mu mt-12 flex justify-center items-center w-full px-4"
        data-framer-name="Indicator"
      >
        <div
          className="framer-26v79p w-[450px] max-w-[90vw] h-[4px] bg-[#333333] rounded-[99px] relative overflow-hidden flex items-center cursor-pointer"
          data-framer-name="Line"
        >
          {/* Smooth Expanding Blue Progress Fill Bar ("Slider Color") */}
          <motion.div
            className="framer-imsyeb h-full bg-[#4555fd] rounded-[99px] shadow-[0_0_14px_#4555fd]"
            data-framer-name="Slider Color"
            animate={{ width: `${((activeIndicatorIndex + 1) / 4) * 100}%` }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
          />

          {/* 4 Invisible Click Zones to jump directly to any card */}
          <div className="absolute inset-0 flex items-center z-10">
            {baseTestimonials.map((_, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setEnableTransition(true);
                  setCurrentIndex(4 + idx);
                }}
                className="flex-1 h-full cursor-pointer"
                title={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
