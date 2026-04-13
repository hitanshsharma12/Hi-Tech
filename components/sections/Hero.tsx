"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* 🔥 TOP BADGE */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1 mb-6 text-sm rounded-full bg-gray-100 text-gray-700"
        >
          🚀 Introducing Hi-Tech Services
        </motion.div>

        {/* 🔥 MAIN HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
        >
          The Foundation for your <br />
          <span className="text-black">Business Website</span>
        </motion.h1>

        {/* 🔥 SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-500 text-base md:text-lg max-w-2xl mx-auto"
        >
          We build high-converting websites for cafes & local businesses.
          Clean design, WhatsApp integration, and real results.
        </motion.p>

        {/* 🔥 BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        >
          {/* PRIMARY */}
          <button className="bg-black text-white px-6 py-3 rounded-xl font-medium hover:scale-105 transition shadow-md">
            Start Project
          </button>

          {/* SECONDARY */}
          <button className="border border-gray-200 px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition">
            View Projects
          </button>
        </motion.div>

        {/* 🔥 FEATURE PREVIEW CARDS (like image niche wala feel) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16"
        >
          <div className="border rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-gray-800">Fast Websites</h3>
            <p className="text-sm text-gray-500 mt-2">
              Optimized for speed & performance
            </p>
          </div>

          <div className="border rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-gray-800">WhatsApp Orders</h3>
            <p className="text-sm text-gray-500 mt-2">
              Direct customer communication
            </p>
          </div>

          <div className="border rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-gray-800">SEO Ready</h3>
            <p className="text-sm text-gray-500 mt-2">
              Rank higher on Google
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}