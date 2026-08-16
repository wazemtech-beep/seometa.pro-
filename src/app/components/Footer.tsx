"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer({ className = "bg-[#141414]" }: { className?: string }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with ${email}!`);
      setEmail("");
    }
  };

  return (
    <footer
      id="footer"
      className={`framer-kh1ao5 relative w-full text-[#fef9ff] pt-20 pb-12 px-6 sm:px-10 lg:px-16 overflow-hidden select-none ${className}`}
      data-framer-name="Footer"
    >
      {/* Background Ambient Radial Blue Glow Filters */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-60">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 604"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <g filter="url(#footer_glow_1)" style={{ mixBlendMode: "plus-lighter" }}>
            <ellipse
              cx="845.469"
              cy="393.436"
              rx="845.469"
              ry="393.436"
              transform="matrix(-0.972921 -0.231139 -0.337907 0.94118 1107.67 378.346)"
              fill="#0016FF"
            />
          </g>
          <g filter="url(#footer_glow_2)">
            <ellipse
              cx="912.864"
              cy="393.436"
              rx="912.864"
              ry="393.436"
              transform="matrix(-0.972921 -0.231139 -0.337907 0.94118 1154.59 445.862)"
              fill="#838EFF"
            />
          </g>
          <g filter="url(#footer_glow_3)">
            <ellipse
              cx="845.469"
              cy="393.436"
              rx="845.469"
              ry="393.436"
              transform="matrix(-0.972921 -0.231139 -0.337907 0.94118 1042.06 561.099)"
              fill="#4555FD"
            />
          </g>
          <defs>
            <filter
              id="footer_glow_1"
              x="-804.721"
              y="10.9386"
              width="1913.75"
              height="1084.56"
              filterUnits="userSpaceOnUse"
            >
              <feGaussianBlur stdDeviation="61.75" />
            </filter>
            <filter
              id="footer_glow_2"
              x="-855.158"
              y="88.3947"
              width="1977.32"
              height="1033.53"
              filterUnits="userSpaceOnUse"
            >
              <feGaussianBlur stdDeviation="45.25" />
            </filter>
            <filter
              id="footer_glow_3"
              x="-917.433"
              y="146.592"
              width="2007.95"
              height="1178.76"
              filterUnits="userSpaceOnUse"
            >
              <feGaussianBlur stdDeviation="85.3" />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="framer-15l6wwu max-w-[1280px] mx-auto relative z-10">
        {/* Footer Top Grid */}
        <div className="framer-agj9tt flex flex-col lg:flex-row justify-between gap-12 lg:gap-16 pb-16 border-b border-white/10">
          {/* Footer Top Left (Logo, Tagline, Newsletter Form) */}
          <div className="framer-2k4k6w flex flex-col space-y-8 max-w-xl">
            <div className="framer-ixnzxy flex flex-col space-y-3">
              {/* Huge Serif Logo */}
              <Link
                href="/"
                className="framer-text text-[60px] sm:text-[90px] lg:text-[110px] font-normal leading-[0.9] tracking-[-3px] sm:tracking-[-4.5px] text-[#fef9ff] hover:opacity-90 transition-opacity"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                SEOMeta.pro
              </Link>
              {/* Small Tagline */}
              <p
                className="framer-text text-base sm:text-lg text-[#fef9ff]/80 font-normal tracking-wide"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                AI Metadata &amp; CSV Generator for Stock Contributors &amp; Creators
              </p>
            </div>

            {/* Newsletter Form: Single-Row Pill on Desktop (PC), Vertical Stack on Mobile */}
            <form onSubmit={handleSubmit} className="framer-1wscj2b max-w-md w-full">
              {/* Desktop Single-Row Pill Layout (hidden on mobile) */}
              <div className="hidden sm:flex items-center p-1.5 rounded-full bg-transparent border border-white/25 focus-within:border-[#4555fd] shadow-[0_0_20px_rgba(69,85,253,0.2)] w-full transition-all duration-300">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your work email"
                  className="flex-1 bg-transparent px-5 py-3 text-sm text-[#fef9ff] placeholder-[#fef9ff]/50 focus:outline-none"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
                <button
                  type="submit"
                  className="px-7 py-3 rounded-full bg-[#fef9ff] text-[#4555fd] text-sm font-semibold hover:bg-white hover:shadow-lg transition-all duration-300 shrink-0 cursor-pointer"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Submit
                </button>
              </div>

              {/* Mobile Vertical Stacked Layout (hidden on desktop) */}
              <div className="flex sm:hidden flex-col space-y-3 w-full">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your work email"
                  className="w-full bg-transparent border border-white/30 rounded-full px-6 py-3.5 text-base text-[#fef9ff] placeholder:text-[#cfcbd0]/50 focus:outline-none focus:border-[#4555fd] transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#fef9ff] text-[#4555fd] text-sm font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 cursor-pointer text-center"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>

          {/* Footer Links Wrapper (Pages, Social, Utility Pages) */}
          <div className="framer-16gn2m grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 pt-4 lg:pt-8">
            {/* Column 1: Pages */}
            <div className="framer-4j0rr9 flex flex-col space-y-4">
              <h5
                className="text-base font-semibold text-[#fef9ff] tracking-wide"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Pages
              </h5>
              <ul className="flex flex-col space-y-2.5 text-sm text-[#cfcbd0]">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/career" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Social Links */}
            <div className="framer-f6k3de flex flex-col space-y-4">
              <h5
                className="text-base font-semibold text-[#fef9ff] tracking-wide opacity-0 pointer-events-none hidden sm:block"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Social
              </h5>
              <ul className="flex flex-col space-y-2.5 text-sm text-[#cfcbd0]">
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Utility Pages */}
            <div className="framer-1aldx90 flex flex-col space-y-4 col-span-2 sm:col-span-1">
              <h5
                className="text-base font-semibold text-[#fef9ff] tracking-wide"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Utility Pages
              </h5>
              <ul className="flex flex-col space-y-2.5 text-sm text-[#cfcbd0]">
                <li>
                  <Link href="/style-guide" className="hover:text-white transition-colors">
                    Style Guide
                  </Link>
                </li>
                <li>
                  <Link href="/404" className="hover:text-white transition-colors">
                    404
                  </Link>
                </li>
                <li>
                  <Link href="/changelog" className="hover:text-white transition-colors">
                    Changelog
                  </Link>
                </li>
                <li>
                  <Link href="/licenses" className="hover:text-white transition-colors">
                    Licenses
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="framer-cu9x5d flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-10 text-xs sm:text-sm text-[#cfcbd0]">
          {/* Office Address */}
          <div className="framer-x9gjn flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
            <span className="font-medium text-[#cfcbd0]">Office</span>
            <span className="hidden sm:inline opacity-40">•</span>
            <span className="text-[#fef9ff] font-normal">
              Canal Road, Faisalabad, Punjab, Pakistan
            </span>
          </div>

          {/* Copyright & Links */}
          <div className="framer-1b3lays text-[#cfcbd0]">
            <p>
              © Copyright -{" "}
              <Link href="/" className="text-[#fef9ff] hover:underline">
                SEOMeta.pro
              </Link>{" "}
              | Designed by{" "}
              <a
                href="https://wa.me/+923230284330"
                target="_blank"
                rel="noreferrer"
                className="text-[#fef9ff] hover:underline font-semibold"
              >
                Waseem Akram
              </a>{" "}
              |{" "}
              <Link href="#pricing" className="text-[#fef9ff] hover:underline">
                License
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
