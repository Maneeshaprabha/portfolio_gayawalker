'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-6 bg-black/90 backdrop-blur-md fixed w-full top-0 z-50 border-b border-[#0BB671]/20">
      
      {/* Logo */}
      <div className="text-2xl font-bold text-white tracking-wider">
        GAYAN <span className="text-[#0BB671]">KANCHANA</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-300">
        <Link href="#about" className="hover:text-[#0BB671] transition-colors">
          About
        </Link>
        <Link href="#portfolio" className="hover:text-[#0BB671] transition-colors">
          Portfolio
        </Link>
        <Link href="#Packages" className="hover:text-[#0BB671] transition-colors">
         Packages
        </Link>
        <Link href="#contact" className="px-4 py-2 bg-[#0BB671] text-black rounded-full hover:bg-[#16d98a] transition-colors font-bold">
          Let's Discuss
        </Link>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#0BB671] focus:outline-none"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              // Close Icon
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              // Menu Icon
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 border-b border-[#0BB671]/20 flex flex-col items-center py-6 space-y-6 md:hidden backdrop-blur-lg">
          <Link 
            href="#about" 
            onClick={() => setIsOpen(false)} 
            className="text-gray-300 text-lg hover:text-[#0BB671] transition-colors"
          >
            About
          </Link>
          <Link 
            href="#portfolio" 
            onClick={() => setIsOpen(false)} 
            className="text-gray-300 text-lg hover:text-[#0BB671] transition-colors"
          >
            Portfolio
          </Link>
          <Link 
            href="#Packages" 
            onClick={() => setIsOpen(false)} 
            className="text-gray-300 text-lg hover:text-[#0BB671] transition-colors"
          >
            Packages
          </Link>
          <Link 
            href="#contact" 
            onClick={() => setIsOpen(false)} 
            className="px-8 py-3 bg-[#0BB671] text-black rounded-full hover:bg-[#16d98a] transition-colors font-bold"
          >
            Let's Discuss
          </Link>
        </div>
      )}
      
    </nav>
  );
}