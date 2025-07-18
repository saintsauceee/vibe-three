'use client'

import React from "react";
import Navbar from "@/components/layout/Navbar";
import BuildTextarea from "@/components/ui/BuildTextarea";
import HeroSection from "@/components/ui/HeroSection";

export default function Home() {
  return (
    <div
      className="flex flex-col w-screen h-screen"
      style={{
        background: `
          radial-gradient(ellipse at 70% 10%, #38bdf888 0%, transparent 60%), 
          radial-gradient(ellipse at 20% 90%, #f9a8d488 0%, transparent 70%), 
          radial-gradient(ellipse at center, #000 0%, #111827 100%)
        `
      }}
    >
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center">
        <HeroSection />
        <BuildTextarea />
      </main>
    </div>
  );
}
