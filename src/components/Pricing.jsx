"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Pricing() {
  const packages = [
    {
      id: 1,
      name: "Basic",
      price: "25,000",
      note: "CAAA charges are excluded",
      isPopular: false,
      features: [
        "1 Viral-Style Reel",
        "Complete Content Planning",
        "Professional Scriptwriting",
        "Videography & Video Editing",
        "4 Social Media Stories across FB, IG & TikTok"
      ]
    },
    {
      id: 2,
      name: "Silver",
      price: "45,000",
      note: "CAAA charges are excluded",
      isPopular: true,
      features: [
        "Everything in the Basic Package",
        "1 Full YouTube Vlog (Hotel, Destination, etc.)",
        "4 Social Media Stories across FB, IG & TikTok"
      ]
    },
    {
      id: 3,
      name: "Gold",
      price: "65,000",
      note: "CAAA charges are excluded",
      isPopular: false,
      features: [
        "1 Viral-Style Reel",
        "1 YouTube Video showcasing your brand",
        "1 Cinematic Video (Premium visuals)",
        "Complimentary Raw Drone Footage",
        "4 Social Media Stories across FB, IG & TikTok"
      ]
    }
  ];

  return (
    <section id="Packages" className="py-24 bg-[#111111] px-6 lg:px-20 border-t border-zinc-900/50">
      
      {/* Title & Subtitle */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Promotion Packages
        </h2>
        <p className="text-[#0BB671] text-lg font-semibold mb-2">
          GAYA WALKER | SOCIAL MEDIA PROMOTION
        </p>
        <p className="text-gray-400 text-sm md:text-base">
          Let’s Showcase Your Brand with Gaya Walker! Choose the perfect package.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
        
        {packages.map((pkg) => (
          <motion.div 
            key={pkg.id}
            whileHover={{ y: -10 }}
            className={`relative bg-[#1a1a1a] rounded-2xl p-8 border ${
              pkg.isPopular ? 'border-[#0BB671] shadow-[0_0_40px_rgba(11,182,113,0.15)]' : 'border-zinc-800'
            } flex flex-col h-full`}
          >
            {/* Most Popular Badge */}
            {pkg.isPopular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-sm font-bold shadow-md">
                Most Popular
              </div>
            )}

            {/* Package Header */}
            <div className="text-center mb-8 pt-4">
              <h3 className="text-2xl font-bold text-white font-serif mb-4">{pkg.name}</h3>
              <div className="flex items-end justify-center mb-2">
                <span className="text-4xl lg:text-5xl font-extrabold text-white">{pkg.price}</span>
                <span className="text-xl text-white ml-2">LKR</span>
              </div>
              <p className="text-gray-500 text-sm">( Note: {pkg.note} )</p>
            </div>

            {/* Features List */}
            <ul className="flex-grow space-y-4 mb-8">
              {pkg.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-[#0BB671] mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm md:text-base">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Action Button */}
            <button 
              className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                pkg.isPopular 
                  ? 'bg-[#0BB671] text-black hover:bg-[#16d98a]' 
                  : 'bg-zinc-900 border border-zinc-700 text-white hover:border-[#0BB671] hover:text-[#0BB671]'
              }`}
            >
              Get Started
            </button>
            
          </motion.div>
        ))}

      </div>
    </section>
  );
}