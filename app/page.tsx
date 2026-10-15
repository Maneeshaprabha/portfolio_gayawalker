"use client";

import Navbar from "@/src/components/Navbar";
import { motion } from "framer-motion";
import Hero from './../src/components/Hero';
import AboutMe from './../src/components/AboutMe';
import VideoGrid from './../src/components/VideoGrid';
import Pricing from './../src/components/Pricing';





export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111] overflow-hidden text-gray-300">
      
      <Navbar />
      

      <Hero /> 
      <AboutMe />
      <VideoGrid />
      <Pricing/>



      {/* ... අනිත් sections */}

    </main>
  );
}