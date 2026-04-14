"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Khop-Chah HP10",
    description: "Modern cafe website with WhatsApp ordering & smooth UI.",
    image: "/cafe.png",
    link: "https://khop-chah.vercel.app/",
    review: "⭐ 5 • Orders increased after website launch!",
  },
  {
    title: "Modern Gym Website",
    description: "Clean UI with membership plans & booking system.",
    image: "/gym1.png",
    link: "https://goldsgym.in/",
    review: "⭐ 4.9 • Very professional design",
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