"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Code2, TrendingUp, GraduationCap, ArrowRight, ChevronDown } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Advanced Website Creation",
    desc: "High-converting websites for local businesses.",
    details:
      "Fast, modern, mobile-friendly websites with WhatsApp integration, online ordering & SEO optimization.",
    features: ["Responsive Design", "WhatsApp Integration", "SEO Optimized", "Lightning Fast"],
  },
  {
    icon: TrendingUp,
    title: "Business Growth Solutions",
    desc: "Turn visitors into customers.",
    details:
      "We improve conversions, visibility & engagement using smart UI/UX and strategy.",
    features: ["Conversion Optimization", "Analytics Dashboard", "A/B Testing", "Growth Strategy"],
  },
  {
    icon: GraduationCap,
    title: "Hi-Tech Courses",
    desc: "Learn & earn online.",
    details:
      "Step-by-step courses to help you build websites and start freelancing.",
    features: ["Video Tutorials", "Live Support", "Certification", "Job Assistance"],
  },
];

export default function Services() {
  const [active, setActive] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6">
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
            What We Offer
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            <span className="gradient-text">Premium Solutions</span>
            <br />
            <span className="text-foreground">For Your Business</span>
          </h2>
          
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto text-pretty">
            From stunning websites to growth strategies, we provide everything you need to succeed online.
          </p>
        </motion.div>

        {/* Services accordion */}
        <div className="space-y-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = active === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`glass rounded-2xl overflow-hidden transition-all duration-500 ${
                  isActive ? "ring-1 ring-accent/50" : ""
                }`}
              >
                {/* Header */}
                <button
                  onClick={() => setActive(isActive ? null : index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isActive ? "bg-accent text-accent-foreground" : "bg-secondary text-muted-foreground group-hover:bg-accent/20 group-hover:text-accent"
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {service.desc}
                      </p>
                    </div>
                  </div>

                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive ? "bg-accent text-accent-foreground rotate-180" : "bg-secondary text-muted-foreground"
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Expandable content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0">
                        <div className="h-px bg-border mb-6" />
                        
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {service.details}
                        </p>

                        <div className="grid grid-cols-2 gap-3">
                          {service.features.map((feature, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                              {feature}
                            </motion.div>
                          ))}
                        </div>

                        <motion.a
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          href="https://wa.me/917018796714"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 mt-6 text-accent hover:underline text-sm font-medium group"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </motion.a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="https://wa.me/917018796714"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-semibold rounded-xl transition-all duration-300 hover:bg-accent hover:scale-105"
          >
            Discuss Your Project
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
