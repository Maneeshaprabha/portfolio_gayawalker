"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#111111] px-6 lg:px-20 border-t border-zinc-900/50">
      
      {/* Title & Subtitle */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-400 text-sm md:text-base">
          Ready to create amazing content? Let's discuss your project
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Email Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="flex items-center space-x-6 bg-[#1a1a1a] p-8 rounded-2xl border border-zinc-800 hover:border-[#0BB671]/50 transition-colors"
          >
            <div className="w-14 h-14 bg-zinc-900 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-1">Email Us</h4>
              <p className="text-gray-400 text-sm">mansaranna@gmail.com</p>
            </div>
          </motion.div>

          {/* WhatsApp Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="flex items-center space-x-6 bg-[#1a1a1a] p-8 rounded-2xl border border-zinc-800 hover:border-[#0BB671]/50 transition-colors"
          >
            <div className="w-14 h-14 bg-zinc-900 rounded-xl flex items-center justify-center flex-shrink-0">
              {/* WhatsApp Icon */}
              <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 0C5.385 0 0 5.388 0 12.035c0 2.124.553 4.195 1.603 6.01L.52 22l4.053-1.064c1.745.962 3.731 1.47 5.764 1.47 6.645 0 12.031-5.388 12.031-12.035S18.677 0 12.031 0zm.001 20.354c-1.782 0-3.528-.479-5.056-1.385l-.362-.214-2.99.785.798-2.915-.235-.374a9.923 9.923 0 01-1.517-5.334c0-5.496 4.475-9.972 9.971-9.972 5.497 0 9.971 4.476 9.971 9.972 0 5.496-4.474 9.972-9.971 9.972zm5.474-7.483c-.3-.15-1.776-.877-2.052-.977-.275-.1-.475-.15-.675.15-.2.3-.776.977-.951 1.177-.175.2-.35.225-.65.075-1.282-.642-2.385-1.554-3.149-2.617-.212-.295-.023-.454.127-.603.136-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.25-.6-.5-.525-.675-.525-.175 0-.375-.025-.575-.025-.2 0-.525.075-.8.375-.275.3-.1.05-1.05 1.5-.95 1.45.2 3.025 1.15 4.3 1.25 1.7 3.325 2.75 5.5 3.675 1.35.575 2.15.825 2.925 1.075.75.25 1.45.225 1.975.125.6-.1 1.776-.725 2.025-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z"/>
              </svg>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-1">WhatsApp</h4>
              <p className="text-gray-400 text-sm">+94 78 882 5183</p>
            </div>
          </motion.div>

        </div>

        {/* Contact Form */}
        <div className="bg-[#1a1a1a] p-8 md:p-10 rounded-2xl border border-zinc-800">
          <form className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="text-white font-semibold text-sm">Name</label>
                <input 
                  type="text" 
                  placeholder="Your name" 
                  className="w-full bg-[#111111] border border-zinc-800 focus:border-[#0BB671] rounded-xl p-4 text-white outline-none transition-colors"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-white font-semibold text-sm">Email</label>
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full bg-[#111111] border border-zinc-800 focus:border-[#0BB671] rounded-xl p-4 text-white outline-none transition-colors"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label className="text-white font-semibold text-sm">Message</label>
              <textarea 
                placeholder="Tell us about your project" 
                rows={6}
                className="w-full bg-[#111111] border border-zinc-800 focus:border-[#0BB671] rounded-xl p-4 text-white outline-none transition-colors resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button className="w-full flex items-center justify-center space-x-2 bg-[#0BB671] text-black font-bold text-lg py-4 rounded-xl hover:bg-[#16d98a] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
              <span>Send Message</span>
            </button>
            
          </form>
        </div>

      </div>
    </section>
  );
}