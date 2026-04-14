"use client";

import { FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 relative overflow-hidden">

      {/* 🔥 TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-gray-800">

        {/* LOGO */}
        <h2 className="text-white text-lg font-semibold tracking-wide">
          <span className="text-gray-400">TECH</span>
          <span className="text-white">x</span>
        </h2>

        {/* LINKS */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 text-sm text-center">
          <a href="#" className="hover:text-white">Terms & Conditions</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Refund & Cancellation</a>
        </div>

        {/* SOCIALS */}
        <div className="flex gap-4 text-lg">
          <FaYoutube className="hover:text-white cursor-pointer" />
          <FaInstagram className="hover:text-white cursor-pointer" />
          <FaLinkedin className="hover:text-white cursor-pointer" />
          <a href="https://wa.me/917018796714" target="_blank">
            <FaWhatsapp className="hover:text-green-400 cursor-pointer" />
          </a>
        </div>
      </div>

      {/* 🔥 COPYRIGHT */}
      <p className="text-center text-xs text-gray-500 mt-4">
        © {new Date().getFullYear()} TECHx. All rights reserved.
      </p>

      {/* 🔥 HUGE BACKGROUND TEXT */}
      <h1 className="pointer-events-none select-none absolute bottom-[-40px] left-1/2 -translate-x-1/2 text-[80px] md:text-[160px] font-bold text-white/5 tracking-widest">
        TECHx
      </h1>

    </footer>
  );
}