"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Anand Dhindwan",
    business: "Khopcha Cafe, Rohru ",
    message:
      "Bhai website ke baad orders 3x ho gaye 🔥 WhatsApp feature mast hai!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    business: "Urban Bites, Chandigarh",
    message:
      "Design clean hai aur customers easily order kar pa rahe hain. Loved it!",
    rating: 4.5,
  },
  {
    name: "Amit Singh",
    business: "Pizza Point, Chandigarh",
    message:
      "Pehle online kuch nahi tha, ab daily orders aa rahe hain 💸",
    rating: 4,
  },
  {
    name: "Himanshu",
    business: "The Physique GYM, Solan",
    message:
      " We can easily handle all details of gym in app thanks hitansh bhai  🚀",
    rating: 5,
  },
];

function renderStars(rating: number) {
  const full = Math.floor(rating);
  const half = rating % 1 !== 0;

  return (
    <div className="flex text-yellow-400 text-sm mb-1">
      {"★".repeat(full)}
      {half && "☆"}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-20 px-4">
      <div className="max-w-3xl mx-auto">

        {/* 🔥 HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Real Client Messages 💬
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Direct feedback from business owners
          </p>
        </div>

        {/* 🔥 CHAT UI */}
        <div className="space-y-6">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className="max-w-xs md:max-w-sm">

                {/* 💬 CHAT BUBBLE */}
                <div
                  className={`p-4 rounded-2xl shadow-md ${
                    index % 2 === 0
                      ? "bg-white text-gray-800 border"
                      : "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
                  }`}
                >
                  {/* ⭐ STARS */}
                  {renderStars(item.rating)}

                  {/* MESSAGE */}
                  <p className="text-sm leading-relaxed">
                    {item.message}
                  </p>
                </div>

                {/* 👤 NAME */}
                <div className="mt-2 text-xs text-gray-500">
                  <span className="font-semibold text-gray-700">
                    {item.name}
                  </span>{" "}
                  • {item.business}
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}