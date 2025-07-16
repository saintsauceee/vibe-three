'use client'

import React from "react";
import Navbar from "@/components/layout/Navbar";
import BuildTextarea from "@/components/ui/BuildTextarea";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col" style={{ background: "radial-gradient(ellipse at 70% 10%, #38bdf888 0%, transparent 60%), radial-gradient(ellipse at 20% 90%, #f9a8d488 0%, transparent 70%), radial-gradient(ellipse at center, #000 0%, #111827 100%)" }}>
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-center text-white mb-4">
          Vibe in Three-D
        </h1>
        <p className="text-lg text-center text-gray-300 mb-6 max-w-2xl">
          Create 3D scenes and experiences. Describe what you want, bring it to life.
        </p>
        <BuildTextarea />
      </main>
    </div>
  );
}
