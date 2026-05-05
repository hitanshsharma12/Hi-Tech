"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Rocket, Shield, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Lightning Fast",
    description: "Websites optimized for speed. Average load time under 2 seconds.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "SSL secured, regularly updated, and protected against threats.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Every pixel crafted with attention to detail and modern design.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    description: "24/7 WhatsApp support. We are always here when you need us.",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "2+", label: "Years Experience" },
  { value: "24/7", label: "Support Available" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden bg-card/30">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-muted-foreground mb-6"
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              About Us
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              <span className="text-foreground">Crafting Digital</span>
              <br />
              <span className="gradient-text-accent">Excellence</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Hi-Tech Services is a premium digital agency specializing in creating 
              stunning, high-performance websites for local businesses. We combine 
              cutting-edge technology with thoughtful design to help businesses 
              establish a powerful online presence.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              From cozy cafes to bustling gyms, we understand the unique needs of 
              each business and deliver tailored solutions that drive real results. 
              Our commitment to quality and customer satisfaction has made us the 
              trusted choice for businesses across India.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center p-4 glass rounded-xl"
                >
                  <div className="text-2xl font-bold gradient-text-accent">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right content - Features grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="group p-6 glass rounded-2xl hover-glow transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    <Icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
