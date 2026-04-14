"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaDiscord, FaYoutube, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto pl-6 pr-2 md:px-6 flex items-center justify-between h-16">

        {/* 🔥 LOGO */}
        <span className="font-semibold text-lg text-gray-800">
          Hi-Tech Services
        </span>

        {/* 🔥 RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* Desktop Search */}
          <input
            type="text"
            placeholder="Search..."
            className="hidden md:block border rounded-full px-4 py-1.5 text-sm w-44 focus:outline-none focus:ring-2 focus:ring-gray-200"
          />

          {/* 🔥 SOCIAL ICONS */}
          <div className="flex items-center gap-3 text-gray-800">

            <a
              href="https://www.linkedin.com/in/hitansh-sharma-357911307"
              target="_blank"
            >
              <FaLinkedin size={20} className="hover:text-blue-600 transition" />
            </a>

            <a
              href="https://wa.me/917018796714"
              target="_blank"
            >
              <FaWhatsapp size={20} className="hover:text-green-500 transition" />
            </a>

        

            <a
              href="https://www.youtube.com/@hitanshsharma7266"
              target="_blank"
            >
              <FaYoutube size={20} className="hover:text-red-500 transition" />
            </a>

            {/* 🔥 EMAIL (placeholder) */}
            <a
              href="mailto:your@email.com"
            >
              <FaEnvelope size={20} className="hover:text-gray-600 transition" />
            </a>

          </div>

          {/* 🔥 MOBILE MENU BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* 🔥 MOBILE MENU */}
      {open && (
        <div className="md:hidden px-6 pb-6 bg-white border-t">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-full px-4 py-2 text-sm w-full mt-4"
          />
        </div>
      )}
    </header>
  );
}