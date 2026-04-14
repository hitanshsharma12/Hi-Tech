"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const [form, setForm] = useState({
    name: "",
    business: "",
    phone: "",
    message: "",
    call: "Yes, call me",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const text = `🔥 New Project Request

👤 Name: ${form.name}
🏢 Business: ${form.business}
📞 Phone: ${form.phone}
📩 Message: ${form.message}
📲 Call Preference: ${form.call}`;

    const url = `https://wa.me/917018796714?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    setSent(true);
    setOpen(false);

    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="min-h-[85vh] flex items-center justify-center bg-white px-4 relative">

      <div className="max-w-4xl mx-auto text-center">

        {/* 🔥 SMALL BADGE */}
        <p className="text-sm text-gray-500 mb-4">
          🚀 Helping Local Businesses Go Online
        </p>

        {/* 🔥 HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-700"
        >
          The Foundation for your <br />
          <span className="bg-gradient-to-r from-gray-600 via-gray-800 to-black bg-clip-text text-transparent">
            Business Website
          </span>
        </motion.h1>

        {/* 🔥 SUBTEXT */}
        <p className="text-gray-500 mt-4 text-sm sm:text-base max-w-xl mx-auto">
          Get your cafe, gym or local business online with a clean, fast &
          mobile-friendly website that converts visitors into customers.
        </p>

        {/* 🔥 BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">

          <button
            onClick={() => setOpen(true)}
            className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition"
          >
            Start Project
          </button>

          <a
            href="https://wa.me/917018796714"
            target="_blank"
            className="px-6 py-3 rounded-lg font-medium border border-gray-300 bg-green-500 text-white hover:bg-green-600 transition"
          >
            WhatsApp
          </a>
        </div>

        {/* 🔥 TRUST LINE */}
        <p className="text-xs text-gray-400 mt-4">
          ⚡ Fast Delivery • 💬 WhatsApp Support • 💸 Affordable Pricing
        </p>
      </div>

      {/* 🔥 MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-3">

          <div className="bg-gray-900 text-white rounded-xl p-5 w-full max-w-md shadow-xl relative">

            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-400"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold mb-3">
              Start Your Project 🚀
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">

              <input
                name="name"
                onChange={handleChange}
                placeholder="Your Name"
                className="bg-gray-800 p-3 rounded-lg text-sm"
                required
              />

              <input
                name="business"
                onChange={handleChange}
                placeholder="Business Name"
                className="bg-gray-800 p-3 rounded-lg text-sm"
                required
              />

              <input
                name="phone"
                onChange={handleChange}
                placeholder="Phone Number"
                className="bg-gray-800 p-3 rounded-lg text-sm"
                required
              />

              <textarea
                name="message"
                onChange={handleChange}
                placeholder="Tell me about your business..."
                className="bg-gray-800 p-3 rounded-lg text-sm"
              />

              <select
                name="call"
                onChange={handleChange}
                className="bg-gray-800 p-3 rounded-lg text-sm"
              >
                <option>Yes, call me</option>
                <option>No, WhatsApp only</option>
              </select>

              <button className="bg-white text-black py-3 rounded-lg font-medium">
                Submit Request
              </button>

            </form>
          </div>
        </div>
      )}

      {/* 🔥 SUCCESS POPUP */}
      {sent && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-3 rounded-lg shadow-lg text-sm">
          ✅ Request Sent Successfully!
        </div>
      )}
    </section>
  );
}