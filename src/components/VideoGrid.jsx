"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const allWorks = [
  // YouTube Videos
  {
    id: 1,
    title: "Andriyala Boutique Hotel Diyatalawa",
    desc: "සීතල උඩරට නිවාඩුවකට හොඳම නවාතැන - A complete walkthrough.",
    category: "YouTube",
    img: "https://images.unsplash.com/photo-1542314831-c6a4d27ce66b?w=800&q=80", 
    link: "https://youtu.be/eJU2qAz7zc8?si=TjHSzfg5jKeOFViA",
  },
  {
    id: 2,
    title: "Must-Visit Places in Ambewela",
    desc: "අඹේවෙල ගියොත් මේ තැන්වලට යන්න අමතක කරන්න එපා ",
    category: "YouTube",
    img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
    link: "https://www.youtube.com/watch?v=PczV17NaQX0", 
  },
  {
    id: 3,
    title: "Boralanda to Horton Plains",
    desc: "බොරලන්ද සිට ඔහිය හරහා හෝටන්තැන්නට",
    category: "YouTube",
    img: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80",
    link: "https://youtu.be/0wbwAciF3IM?si=WDakcWdHA2oxZthv", 
  },
  
  // Facebook / TikTok Reels Videos
  {
    id: 4,
    title: "Exploring Welimada Beauty",
    desc: "සුද්දොත් ආදරේ කරන අපේ වැලිමඩ සොඳුරු ඉසව් ❤️🥰 මේ ඉරිදා Elite Auto Solutions EV & Hybrid Motorshow එකෙන් මුණගැහෙමු friends 🥰❤️",
    category: "Reels",
    img: "https://images.unsplash.com/photo-1555797303-34e8574ac3d1?w=600&h=800&fit=crop",
    link: "https://www.facebook.com/share/v/1ESa4QeJZL/?mibextid=wwXIfr",
  },
  {
    id: 5,
    title: "Haputale to Haldummulla Scenic Route",
    desc: "හපුතලේ සිට ඉදල්ගස්හින්න හරහා හල්දුම්මුල්ල දක්වා දිවෙන අතිසුන්දර මාර්ගයේ කතාන්දරය 🥰🥰මේ රූට් එක යන ඔයාලට බොරලන්දෙ Tea Sprig Villa එක highly recommend කරන්න පුළුවන් ❤️. Tea Sprig Villa 075 180 6504",
    category: "Reels",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=800&fit=crop",
    link: "https://www.facebook.com/share/v/1K9i8tqBVm/?mibextid=wwXIfr",
  },
  {
    id: 6,
    title: "Tea Sprig Villa - Boralanda",
    desc: "කොළඹ පැත්තෙ ඉඳන් හපුතලේ ඇවිත් Lipton seat,Addisom bangalow ඇතුලු හපුතලේ සුන්දරත්වය බලල, බොරලන්දට ඇවිත් හපුතලේ - ඔහිය අතරමැද පිහිටල තියන බොරලන්ද නගරයේ නතරවෙලා පහුවදා ඔහිය හරහා හෝටන් තැන්න ගිහින් හෝටන් තැන්නත් බලල එහෙම්ම නුවර එළියට ගිහින් නුවරඑළියත් බලල ආපහු කොළඹ යනවනම්, බොරලන්ද නගරයේදි නතරවෙන්න හොඳම තැනක් මේක.❤️ 5 out of 5 google reviews තියන විශ්වාසදායක තැනක් මේක. Contact number -: 075 180 6504",
    category: "Reels",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=800&fit=crop",
    link: "https://www.facebook.com/share/v/19umBvpa5J/?mibextid=wwXIfr",
  },
  {
    id: 7,
    title: "Bluefield Tea Factory Adventure",
    desc: "මෙච්චර කාලෙකට නුවරඑළියට එන සංචාරකයන්ට අත්විඳින්න නොලැබුන වෙනස්ම විදියෙ සුපිරි අත්දැකීම් ගොඩක් දැං Bluefield tea factory එකේදි අත්විඳින්න පුලුවන්. Safari tours, Zip Line experience, Tea factory visit, Tea plucking experience,High Rope Adventure ඇතුලු Adventure/Travel lovers ලට ගැලපෙන Activities ගොඩක් මෙයාල හඳුන්වලදීල තියෙනව. ඉතිං මේ නිවාඩුවට නුවරඑළියට එන වෙනස්ම අත්දැකීමක් ගන්න කැමති අය මේ Zip Line එක try කරල බලන්න.තේ වතු මැද්දෙන් කුරුල්ලෙක් වෙලා පියාඹනව වගේ feeling එකක් ගන්න පුලුවන් ",
    category: "Reels",
    img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&h=800&fit=crop",
    link: "https://www.facebook.com/share/v/1CBp4Kujda/?mibextid=wwXIfr",
  },
  {
    id: 8,
    title: "Nuwara Eliya Travel Experience",
    desc: "නුවරඑළියෙ එන අයට මෙන්න සුපිරි experience එකක් 🥰🥰.",
    category: "Reels",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop",
    link: "https://www.facebook.com/share/v/1d8eAzq3g1/?mibextid=wwXIfr",
  }
];

export default function VideoGrid() {
  const [activeTab, setActiveTab] = useState('YouTube');
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef(null);

  const filteredWorks = allWorks.filter(work => work.category === activeTab);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [activeTab]);

  useEffect(() => {
    let interval;
    if (!isHovered && filteredWorks.length > 1) {
      interval = setInterval(() => {
        if (scrollRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
          
          if (scrollLeft + clientWidth >= scrollWidth - 10) {
            scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            scrollRef.current.scrollBy({ left: 380, behavior: 'smooth' });
          }
        }
      }, 3500); 
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
    <section className="py-24 bg-[#111111] flex flex-col items-center overflow-hidden relative">
      
      {/* Title & Subtitle */}
      <div className="text-center mb-12 px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight"
        >
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0BB671] to-[#089159]">Work</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 max-w-2xl mx-auto text-lg"
        >
          Discover how we bring destinations to life through compelling visual storytelling.
        </motion.p>
      </div>

      {/* Modern Animated Tabs */}
      <div className="flex space-x-2 bg-zinc-900/60 backdrop-blur-xl p-1.5 rounded-2xl mb-12 border border-zinc-800/50 shadow-2xl relative z-10">
        {['YouTube', 'Reels'].map((tab) => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="relative px-8 py-3 rounded-xl font-semibold text-sm transition-colors outline-none"
          >
            {activeTab === tab && (
              <motion.div 
                layoutId="active-pill"
                className="absolute inset-0 bg-[#0BB671] rounded-xl shadow-[0_0_15px_rgba(11,182,113,0.3)]"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
            <span className={`relative z-10 ${activeTab === tab ? 'text-black' : 'text-gray-400 hover:text-white'}`}>
              {tab}
            </span>
          </button>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="w-full max-w-7xl px-6 flex justify-end mb-6 space-x-3 relative z-10">
        <button onClick={scrollLeft} className="p-3 bg-zinc-900/80 backdrop-blur-md rounded-full border border-zinc-800 hover:bg-[#0BB671] hover:border-[#0BB671] hover:text-black text-white transition-all duration-300 shadow-lg">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button onClick={scrollRight} className="p-3 bg-zinc-900/80 backdrop-blur-md rounded-full border border-zinc-800 hover:bg-[#0BB671] hover:border-[#0BB671] hover:text-black text-white transition-all duration-300 shadow-lg">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      {/* Scrollable Cards Container */}
      <div 
        className="w-full relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Edge Fade Masks for modern look */}
        <div className="absolute top-0 left-0 w-8 md:w-24 h-full bg-gradient-to-r from-[#111111] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-8 md:w-24 h-full bg-gradient-to-l from-[#111111] to-transparent z-10 pointer-events-none"></div>

        <motion.div 
          ref={scrollRef}
          layout 
          className="flex space-x-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12 px-6 md:px-24"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work) => (
              <motion.div 
                key={work.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 20 }}
                onClick={() => window.open(work.link, '_blank')} // Video එක Open වීම
                className="min-w-[320px] md:min-w-[400px] bg-zinc-900/40 backdrop-blur-sm rounded-3xl overflow-hidden snap-center border border-zinc-800/50 hover:border-[#0BB671]/40 transition-all duration-500 flex flex-col group cursor-pointer shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
              >
                {/* Modern Image Section */}
                <div className={`w-full overflow-hidden relative ${activeTab === 'Reels' ? 'h-[420px]' : 'h-64'} m-2 rounded-2xl`}>
                  <img 
                    src={work.img} 
                    alt={work.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" 
                  />
                  
                  {/* Frosted Glass Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center backdrop-blur-[2px] opacity-0 group-hover:opacity-100">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center pl-1.5 shadow-[0_0_30px_rgba(11,182,113,0.3)] transform scale-50 group-hover:scale-100 transition-all duration-500 ease-out group-hover:bg-[#0BB671]">
                      <svg className="w-7 h-7 text-white group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/10">
                    {work.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#0BB671] transition-colors line-clamp-1">
                    {work.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-6 flex-grow leading-relaxed line-clamp-2">
                    {work.desc}
                  </p>
                  
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-zinc-800/50">
                    <button className="flex items-center space-x-2 text-white group-hover:text-[#0BB671] font-semibold text-sm transition-colors">
                      <span className="relative overflow-hidden">
                        Watch Now
                        <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#0BB671] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                      </span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
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