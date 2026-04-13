"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Advanced Website Creation",
    desc: "High-converting websites for local businesses.",
    details:
      "Fast, modern, mobile-friendly websites with WhatsApp integration, online ordering & SEO optimization.",
  },
  {
    title: "Business Growth Solutions",
    desc: "Turn visitors into customers.",
    details:
      "We improve conversions, visibility & engagement using smart UI/UX and strategy.",
  },
  {
    title: "Hi-Tech Courses",
    desc: "Learn & earn online.",
    details:
      "Step-by-step courses to help you build websites and start freelancing.",
  },
];

export default function Services() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">

        {/* 🔥 HEADING */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Our Services
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Simple solutions to grow your business 🚀
          </p>
        </div>

        {/* 🔥 COMPACT LIST */}
        <div className="space-y-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="border rounded-xl overflow-hidden"
            >
              {/* HEADER */}
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="w-full flex justify-between items-center px-4 py-4 text-left"
              >
                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {service.desc}
                  </p>
                </div>

                <span className="text-lg font-bold text-gray-500">
                  {active === index ? "−" : "+"}
                </span>
              </button>

              {/* 🔥 EXPAND */}
              <AnimatePresence>
                {active === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-4 pb-4 text-sm text-gray-600">
                      {service.details}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}