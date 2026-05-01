"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  
 
  {
    title: "Cafe 98 ",
    description: "Cafe 98 is a modern, all‑in‑one cafe website featuring a sleek UI, seamless WhatsApp‑based ordering, and integrated booking systems for rooms, events, and tables. It streamlines the entire customer experience from ordering food to reserving spaces, all within one responsive platform.",
    image: "/cafe98.png",
    link: "https://cafe-98.vercel.app/",
    review: "⭐ 5 • Very professional design",
  },
  {
    title: "YumiGo Bakery ",
    description: "YumiGo Bakery is a modern, all-in-one bakery website featuring a clean, premium UI, seamless WhatsApp-based ordering, and a fully customizable cake builder. It allows customers to design their cakes (flavour, size, shape, egg preference, add-ons, and photo cakes) and place instant orders directly via WhatsApp. The platform also includes smart delivery scheduling, pickup options, and real-time cart management, streamlining the entire customer experience—from browsing and customization to order confirmation—within one fully responsive and user-friendly interface.",
    image: "/yumigo.png",
    link: "https://yumigo-mocha.vercel.app/",
    review: "⭐ 5 • Next Generation Ordering System",
  },
  {
    title: "Sushnova Salon ",
    description: "Sushnova is a premium salon website designed with a refined interface, effortless appointment booking, and a complete showcase of hair and beauty services. It delivers a smooth, high-end digital experience that reflects the elegance of the salon itself.",
    image: "/salon.png",
    link: "https://sushnova.vercel.app/",
    review: "⭐ 5 • Customer Increased 3x",
  },
  {
    title: "Khop-Chah HP10",
    description: "Modern cafe website with WhatsApp ordering & smooth UI.",
    image: "/cafe.png",
    link: "https://khop-chah.vercel.app/",
    review: "⭐ 5 • Orders increased after website launch!",
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-4 bg-[#0B0F19] text-white">
      
      {/* 🔥 HEADING */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Our Successful Projects 🚀
        </h2>
        <p className="text-gray-400 mt-4 text-sm md:text-base">
          Real websites we built for real businesses
        </p>
      </div>

      {/* 🔥 PROJECT GRID */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:scale-[1.03] transition-all duration-300 shadow-lg hover:shadow-2xl"
          >

            {/* 🔥 IMAGE */}
            <div className="relative h-52 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index === 0}
                quality={80}
                className="object-cover group-hover:scale-110 transition duration-500"
              />

              {/* 🔥 Overlay effect */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="text-sm bg-white text-black px-4 py-2 rounded-full font-medium">
                  View Live →
                </span>
              </div>
            </div>

            {/* 🔥 CONTENT */}
            <div className="p-5">
              <h3 className="text-xl font-semibold group-hover:text-blue-400 transition">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                {project.description}
              </p>

              <p className="text-xs text-green-400 mt-4">
                {project.review}
              </p>

              <span className="inline-block mt-4 text-sm text-blue-400">
                View Project →
              </span>
            </div>

          </motion.a>
        ))}

      </div>
    </section>
  );
}