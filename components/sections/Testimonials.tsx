"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Anand Dhindwan",
    business: "Khopcha Cafe, Rohru",
    message:
      "Bhai website ke baad orders 3x ho gaye 🔥 WhatsApp feature mast hai!",
    rating: 5,
    avatar: "AD",
  },
  {
    name: "Priya Sharma",
    business: "Urban Bites, Chandigarh",
    message:
      "Design clean hai aur customers easily order kar pa rahe hain. Loved it!",
    rating: 5,
    avatar: "PS",
  },
  {
    name: "Amit Singh",
    business: "Pizza Point, Chandigarh",
    message:
      "Pehle online kuch nahi tha, ab daily orders aa rahe hain 💸",
    rating: 4,
    avatar: "AS",
  },
  {
    name: "Himanshu",
    business: "The Physique GYM, Solan",
    message:
      "We can easily handle all details of gym in app thanks hitansh bhai 🚀",
    rating: 5,
    avatar: "HI",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
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
            Client Testimonials
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            <span className="text-foreground">What Our</span>{" "}
            <span className="gradient-text">Clients Say</span>
          </h2>
          
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto text-pretty">
            Real feedback from real business owners who transformed their online presence with us.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative glass rounded-3xl p-6 md:p-8 hover-glow transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform duration-300">
                <Quote className="w-6 h-6 text-accent" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < item.rating
                        ? "fill-accent text-accent"
                        : "text-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              {/* Message */}
              <p className="text-foreground text-lg leading-relaxed mb-6">
                {`"${item.message}"`}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center text-accent-foreground font-bold">
                  {item.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {item.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.business}
                  </p>
                </div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-accent/10 to-transparent rounded-3xl pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Trust banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 p-8 glass rounded-3xl text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text-accent">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Happy Clients</div>
            </div>
            <div className="w-px h-12 bg-border hidden md:block" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text-accent">4.9</div>
              <div className="text-sm text-muted-foreground mt-1">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-border hidden md:block" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text-accent">100%</div>
              <div className="text-sm text-muted-foreground mt-1">Project Delivery</div>
            </div>
            <div className="w-px h-12 bg-border hidden md:block" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text-accent">24/7</div>
              <div className="text-sm text-muted-foreground mt-1">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
