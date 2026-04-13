"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b sticky top-0 z-50">
    <div className="max-w-7xl mx-auto pl-6 pr-1 md:px-6 flex items-center justify-between h-16">

        {/* LEFT LOGO */}
        <div className="flex items-center gap-3">
          <span className="font-semibold text-lg py-3.5 text-gray-800 ">
            Hi-Tech Services
          </span>
        </div>

        {/* RIGHT SIDE - Always visible on mobile & desktop */}
        <div className="flex items-center ">

          {/* Search - Hidden on mobile, visible on desktop */}
          <input
            type="text"
            placeholder="Search..."
            className="hidden md:block border rounded-full px-4 py-2 text-sm w-48 focus:outline-none focus:ring-2 focus:ring-gray-200"
          />

          {/* Social Media Icons - Always visible */}
          <div className="flex items-end gap-3">
            <a 
              href="#" 
              className="text-gray-800 hover:text-gray-600 transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={20} />
            </a>
            <a 
              href="#" 
              className="text-gray-800 hover:text-gray-600 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a 
              href="#" 
              className="text-gray-800 hover:text-gray-600 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          </div>

          {/* MOBILE MENU BUTTON - Visible only on mobile */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU - Only shows when 'open' is true */}
      {open && (
        <div className="md:hidden px-6 pb-6 bg-white border-t">
          {/* Search - Mobile */}
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