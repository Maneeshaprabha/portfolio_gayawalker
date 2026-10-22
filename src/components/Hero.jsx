"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  
  // නිශ්චිත Section ID එකකට Smooth Scroll කිරීම සඳහා Function එක
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[100svh] min-h-[600px] flex items-center bg-[#0a0a0a] overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src="./gayawalker.png" // ඔබගේ පින්තූරය මෙතනට දෙන්න
          alt="Gaya Walker Background" 
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 md:via-[#0a0a0a]/60 to-transparent"></div>
        {/* Mobile සඳහා පහළින් අමතර අඳුරක් */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:hidden"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-20">
        <div className="max-w-2xl">
          
          {/* Overline Text */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[#0BB671] text-xs md:text-sm font-bold tracking-widest uppercase mb-4"
          >
            Professional Content Creator
          </motion.p>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold text-white mb-6 leading-[1.1] tracking-tight"
          >
            Your Brand. My Lens<br />
            Viral Stories
          </motion.h1>

          {/* Sub-headline / Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-gray-300 text-base md:text-lg lg:text-xl mb-10 max-w-lg leading-relaxed"
          >
            Seamlessly blending your promotions into cinematic travel reels that capture attention and inspire action.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 md:pt-4">
              
              {/* Work with Me -> Packages Section */}
              <button 
                onClick={() => scrollToSection('Packages')} // Pricing අංශයේ id එක 'Packages' ලෙස සිතා ඇත
                className="px-6 md:px-8 py-3.5 bg-[#0BB671] text-black font-bold rounded-lg hover:bg-[#16d98a] transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(11,182,113,0.25)]"
              >
                Work with Me
              </button>
              
              {/* View Portfolio -> VideoGrid Section */}
              <button 
                onClick={() => scrollToSection('portfolio')} // VideoGrid අංශයේ id එක 'portfolio' ලෙස ලබා දෙන්න
                className="px-6 md:px-8 py-3.5 bg-transparent border border-zinc-700 text-white font-semibold rounded-lg hover:border-[#0BB671] hover:text-[#0BB671] transition-all duration-300"
              >
                View Portfolio
              </button>

            </div>
          </motion.div>

          {/* Divider & Reviews Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="mt-16 pt-6 border-t border-gray-600/50 flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4"
          >
            {/* Stars */}
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-[#0BB671]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            
          </motion.div>

        </div>
      </div>

    </section>
  );
}