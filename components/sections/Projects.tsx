"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Star, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Cafe 98",
    description: "Cafe 98 is a modern, all‑in‑one cafe website featuring a sleek UI, seamless WhatsApp‑based ordering, and integrated booking systems for rooms, events, and tables. It streamlines the entire customer experience from ordering food to reserving spaces, all within one responsive platform.",
    image: "/cafe98.jpg",
    link: "https://cafe-98.vercel.app/",
    review: "Very professional design",
    rating: 5,
    category: "Hospitality",
  },
  {
    title: "YumiGo Bakery",
    description: "YumiGo Bakery is a modern, all-in-one bakery website featuring a clean, premium UI, seamless WhatsApp-based ordering, and a fully customizable cake builder. It allows customers to design their cakes (flavour, size, shape, egg preference, add-ons, and photo cakes) and place instant orders directly via WhatsApp.",
    image: "/yumigo.jpg",
    link: "https://yumigo-mocha.vercel.app/",
    review: "Next Generation Ordering System",
    rating: 5,
    category: "Food & Beverage",
  },
  {
    title: "Sushnova Salon",
    description: "Sushnova is a premium salon website designed with a refined interface, effortless appointment booking, and a complete showcase of hair and beauty services. It delivers a smooth, high-end digital experience that reflects the elegance of the salon itself.",
    image: "/salon.jpg",
    link: "https://sushnova.vercel.app/",
    review: "Customer Increased 3x",
    rating: 5,
    category: "Beauty & Wellness",
  },
  {
    title: "Khop-Chah HP10",
    description: "Modern cafe website with WhatsApp ordering & smooth UI. Features real-time menu updates, location-based delivery, and seamless customer experience that boosted orders significantly after launch.",
    image: "/cafe.jpg",
    link: "https://khop-chah.vercel.app/",
    review: "Orders increased after website launch!",
    rating: 5,
    category: "Hospitality",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden bg-card/30">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-muted-foreground mb-6"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Our Portfolio
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            <span className="text-foreground">Successful</span>{" "}
            <span className="gradient-text-accent">Projects</span>
          </h2>
          
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto text-pretty">
            Real websites we built for real businesses. Each project is crafted with attention to detail and optimized for conversions.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative glass rounded-3xl overflow-hidden hover-glow"
            >
              {/* Image container */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index < 2}
                  quality={85}
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                
                {/* Category badge */}
                <div className="absolute top-4 left-4 px-3 py-1 glass-light rounded-full text-xs font-medium text-foreground">
                  {project.category}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="px-6 py-3 bg-foreground text-background rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Live
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 shrink-0">
                    {[...Array(project.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm text-green-400 font-medium">
                      {project.review}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-1 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    View Project
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Want to see your business here?
          </p>
          <a
            href="https://wa.me/917018796714"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 glass text-foreground font-semibold rounded-xl transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
