"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-[#111111] overflow-hidden px-6 md:px-12 lg:px-24 pt-24 lg:pt-0">
      
      {/* Background Glowing Effects */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#0BB671]/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-[#0BB671]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* වම් පස: Text සහ Buttons */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-6 text-center lg:text-left order-2 lg:order-1"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0BB671] to-[#089159] font-serif italic">
              Capturing Moments,
            </span>
            <br />
            <span className="text-white">
              Creating Stories
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto lg:mx-0">
            Specialized in creating stunning promotional videos for hotels, events, and destinations worldwide. Let's bring your vision to life.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <button className="px-8 py-3 bg-[#0BB671] text-black font-bold rounded-lg hover:bg-[#16d98a] transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(11,182,113,0.3)]">
              Work with Me
            </button>
            <button className="px-8 py-3 bg-transparent border border-zinc-700 text-white font-semibold rounded-lg hover:border-[#0BB671] hover:text-[#0BB671] transition-all duration-300">
              View Portfolio
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center lg:justify-start space-x-6 pt-6 text-gray-400">
            {/* YouTube */}
            <a href="#" className="hover:text-[#0BB671] transition-colors transform hover:scale-110 duration-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            {/* Facebook */}
            <a href="#" className="hover:text-[#0BB671] transition-colors transform hover:scale-110 duration-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            {/* TikTok */}
            <a href="#" className="hover:text-[#0BB671] transition-colors transform hover:scale-110 duration-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
            </a>
            {/* Instagram */}
            <a href="#" className="hover:text-[#0BB671] transition-colors transform hover:scale-110 duration-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
        </motion.div>

        {/* දකුණු පස: Circular Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center lg:justify-end order-1 lg:order-2 mb-10 lg:mb-0"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden flex items-center justify-center bg-zinc-900 border border-[#0BB671]/50 shadow-[0_0_50px_rgba(11,182,113,0.15)] group">
            
            {/* Dummy Image for testing */}
            <img 
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=800&fit=crop" 
              alt="Gayan Kanchana" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0BB671]/20 to-transparent mix-blend-overlay"></div>
          </div>
        </motion.div>
        
      </div>

      {/* Scroll Down Arrow Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg className="w-6 h-6 text-gray-500 hover:text-[#0BB671] cursor-pointer transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>

    </section>
  );
}