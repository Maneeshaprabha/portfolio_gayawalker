"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// පරීක්ෂා කිරීම සඳහා සැබෑ පින්තූර (Thumbnails) සහිත දත්ත
const allWorks = [
  // YouTube Videos
  {
    id: 1,
    title: "Girithale Hotel Promo",
    desc: "A promotional video for a luxury hotel in Sri Lanka",
    category: "YouTube",
    img: "https://images.unsplash.com/photo-1542314831-c6a4d27ce66b?w=800&q=80", // Sample Hotel Image
  },
  {
    id: 2,
    title: "Havana Hues",
    desc: "Cuban Theme Villa promotional video",
    category: "YouTube",
    img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80", // Sample Villa Image
  },
  {
    id: 3,
    title: "Dream cottage Nuwaraeliya",
    desc: "A Budget friendly cottage promotional video",
    category: "YouTube",
    img: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80", // Sample Cottage Image
  },
  
  // Reels Videos
  {
    id: 4,
    title: "Ella Train Journey",
    desc: "Short cinematic reel of the famous Ella train ride.",
    category: "Reels",
    img: "https://images.unsplash.com/photo-1555797303-34e8574ac3d1?w=600&h=800&fit=crop", // Vertical Train Image
  },
  {
    id: 5,
    title: "Luxury Dining Experience",
    desc: "Quick glimpse of a 5-star dining setup.",
    category: "Reels",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=800&fit=crop", // Vertical Food Image
  },
  {
    id: 6,
    title: "Beach Sunset Vibes",
    desc: "A relaxing aesthetic reel at Mirissa beach.",
    category: "Reels",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=800&fit=crop", // Vertical Beach Image
  }
];

export default function VideoGrid() {
  const [activeTab, setActiveTab] = useState('YouTube');
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef(null);

  // Active Tab එකට අදාළ වීඩියෝ පමණක් වෙන් කර ගැනීම
  const filteredWorks = allWorks.filter(work => work.category === activeTab);

  // Tab එක මාරු කරන විට Scroll එක මුලට ගෙන ඒම
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [activeTab]);

  // Auto Scroll ක්‍රියාවලිය
  useEffect(() => {
    let interval;
    if (!isHovered && filteredWorks.length > 1) {
      interval = setInterval(() => {
        if (scrollRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
          
          // දෝෂය නිවැරදි කර ඇත (scrollWidth - 10)
          if (scrollLeft + clientWidth >= scrollWidth - 10) {
            scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            scrollRef.current.scrollBy({ left: 380, behavior: 'smooth' });
          }
        }
      }, 3000); 
    }
    return () => clearInterval(interval);
  }, [isHovered, filteredWorks.length]);

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -380, behavior: 'smooth' });
  };
  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 380, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-[#111111] border-t border-zinc-900/50 flex flex-col items-center overflow-hidden">
      
      {/* Title & Subtitle */}
      <div className="text-center mb-10 px-6">
        <h2 className="text-4xl font-bold text-white mb-4">Featured Work</h2>
        <p className="text-gray-400">
          Discover how we bring destinations to life through compelling visual storytelling
        </p>
      </div>

      {/* Filter Tabs (YouTube / Reels) */}
      <div className="flex space-x-2 bg-zinc-900 p-1 rounded-lg mb-10">
        <button 
          onClick={() => setActiveTab('YouTube')}
          className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
            activeTab === 'YouTube' ? 'bg-[#0BB671] text-black shadow-lg' : 'text-gray-400 hover:text-white'
          }`}
        >
          YouTube
        </button>
        <button 
          onClick={() => setActiveTab('Reels')}
          className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
            activeTab === 'Reels' ? 'bg-[#0BB671] text-black shadow-lg' : 'text-gray-400 hover:text-white'
          }`}
        >
          Reels
        </button>
      </div>

      {/* Navigation Arrows */}
      <div className="w-full max-w-7xl px-6 flex justify-end mb-4 space-x-3">
        <button onClick={scrollLeft} className="p-3 bg-zinc-900 rounded-lg hover:bg-[#0BB671] hover:text-black text-white transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button onClick={scrollRight} className="p-3 bg-zinc-900 rounded-lg hover:bg-[#0BB671] hover:text-black text-white transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      {/* Scrollable Cards Container */}
      <div 
        className="w-full pl-6 md:pl-12 lg:pl-24 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          ref={scrollRef}
          layout 
          className="flex space-x-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work) => (
              <motion.div 
                key={work.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -5 }}
                className="min-w-[320px] md:min-w-[380px] bg-[#1a1a1a] rounded-2xl overflow-hidden snap-start border border-zinc-800 hover:border-[#0BB671]/50 transition-colors flex flex-col group cursor-pointer"
              >
                {/* Image Section */}
                <div className={`w-full overflow-hidden relative ${activeTab === 'Reels' ? 'h-96' : 'h-56'}`}>
                  {/* සැබෑ පින්තූරය (<img> tag එක) */}
                  <img 
                    src={work.img} 
                    alt={work.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 bg-[#0BB671] rounded-full flex items-center justify-center pl-1 shadow-lg">
                      <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#0BB671] transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 flex-grow">
                    {work.desc}
                  </p>
                  
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-zinc-800">
                    <span className="text-zinc-500 text-sm font-semibold">{work.category}</span>
                    <button className="flex items-center space-x-2 bg-[#0BB671]/10 text-[#0BB671] hover:bg-[#0BB671] hover:text-black px-4 py-2 rounded-lg font-bold text-sm transition-colors">
                      <span>Watch</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />

    </section>
  );
}