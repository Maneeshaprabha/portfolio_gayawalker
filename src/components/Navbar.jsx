'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-5 py-4 md:p-6 bg-black/80 backdrop-blur-xl fixed w-full top-0 z-50 border-b border-[#0BB671]/20 shadow-lg shadow-black/50">
      
      {/* Logo - Clickable Link to Home */}
      <Link href="/" className="text-xl md:text-2xl font-bold text-white tracking-wider z-50 whitespace-nowrap hover:opacity-80 transition-opacity cursor-pointer">
        GAYA <span className="text-[#0BB671]">WALKER</span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-gray-300">
        <Link href="#about" className="hover:text-[#0BB671] transition-all duration-300 hover:-translate-y-0.5">
          About
        </Link>
        <Link href="#portfolio" className="hover:text-[#0BB671] transition-all duration-300 hover:-translate-y-0.5">
          Portfolio
        </Link>
        <Link href="#Packages" className="hover:text-[#0BB671] transition-all duration-300 hover:-translate-y-0.5">
         Packages
        </Link>
        <Link href="#contact" className="px-6 py-2.5 bg-[#0BB671] text-black rounded-full hover:bg-[#16d98a] transition-all duration-300 font-bold shadow-[0_0_15px_rgba(11,182,113,0.4)] hover:shadow-[0_0_25px_rgba(11,182,113,0.6)] hover:-translate-y-0.5">
          Let's Discuss
        </Link>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden z-50">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#0BB671] focus:outline-none p-2 rounded-lg bg-[#0BB671]/10 hover:bg-[#0BB671]/20 transition-colors"
        >
          <motion.svg 
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-7 h-7" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </motion.svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-[70px] left-0 w-full bg-[#0a0a0a]/95 border-b border-[#0BB671]/20 flex flex-col items-center py-8 space-y-8 md:hidden backdrop-blur-2xl shadow-2xl overflow-hidden"
          >
            <Link href="#about" onClick={() => setIsOpen(false)} className="text-gray-300 text-xl font-semibold hover:text-[#0BB671] transition-colors">
              About
            </Link>
            <Link href="#portfolio" onClick={() => setIsOpen(false)} className="text-gray-300 text-xl font-semibold hover:text-[#0BB671] transition-colors">
              Portfolio
            </Link>
            <Link href="#Packages" onClick={() => setIsOpen(false)} className="text-gray-300 text-xl font-semibold hover:text-[#0BB671] transition-colors">
              Packages
            </Link>
            <Link href="#contact" onClick={() => setIsOpen(false)} className="px-10 py-3 mt-4 bg-[#0BB671] text-black rounded-full hover:bg-[#16d98a] transition-colors font-bold shadow-[0_0_15px_rgba(11,182,113,0.3)] text-lg">
              Let's Discuss
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
      
    </nav>
  );
}