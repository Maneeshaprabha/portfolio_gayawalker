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

  // WhatsApp වෙත යොමු කිරීමේ ක්‍රියාවලිය
  const handleWhatsAppClick = (pkgName, pkgPrice) => {
    const phoneNumber = "+94753518586"; // ඔබගේ WhatsApp අංකය
    
    // යැවිය යුතු පණිවිඩය (තෝරාගත් පැකේජයේ නම සහ මිල සමඟ)
    const message = `Hello Gaya Walker!%0A%0AI'm interested in your *${pkgName} Package* (LKR ${pkgPrice}).%0A%0ALet's discuss!`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

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
              onClick={() => handleWhatsAppClick(pkg.name, pkg.price)}
              className={`w-full flex items-center justify-center space-x-2 py-4 rounded-xl font-bold transition-all duration-300 ${
                pkg.isPopular 
                  ? 'bg-[#0BB671] text-black hover:bg-[#16d98a]' 
                  : 'bg-zinc-900 border border-zinc-700 text-white hover:border-[#0BB671] hover:text-[#0BB671]'
              }`}
            >
              {/* WhatsApp Icon (කුඩාවට එකතු කර ඇත) */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>Get Started</span>
            </button>
            
          </motion.div>
        ))}

      </div>
    </section>
  );
}