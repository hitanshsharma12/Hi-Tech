"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Users, Globe, Zap } from "lucide-react";

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    business: "",
    phone: "",
    message: "",
    call: "Yes, call me",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
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

  const stats = [
    { icon: Users, value: "50+", label: "Happy Clients" },
    { icon: Globe, value: "100+", label: "Websites Delivered" },
    { icon: Zap, value: "99%", label: "Client Satisfaction" },
  ];

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground">
            <Sparkles className="w-4 h-4 text-accent" />
            <span>Transforming Local Businesses Since 2023</span>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] text-balance">
            <span className="gradient-text">The Foundation for</span>
            <br />
            <span className="text-foreground">Your Digital</span>{" "}
            <span className="gradient-text-accent">Empire</span>
          </h1>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto text-center mt-8 leading-relaxed text-pretty"
        >
          Premium websites that convert visitors into customers. Built for cafes, 
          gyms, salons & ambitious local businesses ready to dominate online.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <button
            onClick={() => setOpen(true)}
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover-glow"
          >
            <span className="relative z-10">Start Your Project</span>
            <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <a
            href="https://wa.me/917018796714"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-foreground font-semibold rounded-xl transition-all duration-300 hover:bg-secondary/50"
          >
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span>WhatsApp Us</span>
          </a>

          <Link
            href="/clienthub"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-muted-foreground font-semibold rounded-xl transition-all duration-300 hover:border-accent hover:text-accent"
          >
            <Users className="w-5 h-5" />
            <span>Client Hub</span>
          </Link>
        </motion.div>

        {/* Client access line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center text-sm text-muted-foreground mt-6"
        >
          Already a client?{" "}
          <Link href="/clienthub" className="text-accent hover:underline">
            Access your dashboard →
          </Link>
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-3 gap-4 md:gap-8 mt-16 max-w-3xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              className="text-center p-4 md:p-6 glass rounded-2xl"
            >
              <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-accent mx-auto mb-2" />
              <div className="text-2xl md:text-4xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-wrap justify-center gap-4 md:gap-8 mt-12 text-xs md:text-sm text-muted-foreground"
        >
          <span className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-accent" /> Fast Delivery
          </span>
          <span className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-accent" /> SEO Optimized
          </span>
          <span className="flex items-center gap-2">
            <Users className="w-4 h-4 text-accent" /> 24/7 Support
          </span>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 px-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="glass rounded-2xl p-6 md:p-8 w-full max-w-md relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Start Your Project</h2>
                <p className="text-muted-foreground text-sm mt-2">{"Let's build something amazing together"}</p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  name="name"
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="bg-secondary/50 border border-border p-4 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  required
                />

                <input
                  name="business"
                  onChange={handleChange}
                  placeholder="Business Name"
                  className="bg-secondary/50 border border-border p-4 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  required
                />

                <input
                  name="phone"
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="bg-secondary/50 border border-border p-4 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  required
                />

                <textarea
                  name="message"
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={3}
                  className="bg-secondary/50 border border-border p-4 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                />

                <select
                  name="call"
                  onChange={handleChange}
                  className="bg-secondary/50 border border-border p-4 rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                >
                  <option>Yes, call me</option>
                  <option>No, WhatsApp only</option>
                </select>

                <button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground py-4 rounded-xl font-semibold hover:bg-accent/90 transition-all hover:scale-[1.02]"
                >
                  Send Request
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success toast */}
      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 glass px-6 py-4 rounded-xl flex items-center gap-3 z-50"
          >
            <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-foreground font-medium">Request Sent Successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
