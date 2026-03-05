"use client";

import { useState } from "react";
import Link from "next/link";
import { areas } from "@/data/mock";

export default function LandingPage() {
  const [pickerOpen, setPickerOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-mint-white via-mint-bg to-mint-light/30 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-mint-light/20 blur-3xl" />
      <div className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] rounded-full bg-mint/10 blur-3xl" />

      {/* Top bar */}
      <header className="absolute top-0 left-0 right-0 flex items-center justify-between px-10 py-6 z-10">
        <span className="text-sm tracking-[0.25em] uppercase text-deep-forest/70 font-heading">
          Real Estate Done Right
        </span>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-1.5 shadow-sm border border-mint-light/50">
            <div className="w-6 h-6 rounded-full bg-forest flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <span className="text-sm font-medium text-forest">Specialist</span>
          </div>
          <button className="w-8 h-8 flex items-center justify-center text-forest">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>
      </header>

      {/* Center content */}
      <main className="relative z-10 flex flex-col items-center gap-4 text-center">
        {/* Large brand name */}
        <h1 className="font-heading text-[120px] leading-none font-bold tracking-wider text-forest/90 select-none">
          NAMOU
        </h1>
        <p className="text-sm tracking-[0.3em] uppercase text-deep-forest/60 mb-8">
          Properties
        </p>

        {/* Area picker */}
        <div className="flex flex-col items-center">
          <button
            onClick={() => setPickerOpen(!pickerOpen)}
            className="flex items-center gap-2 text-sm text-deep-forest font-medium hover:text-forest transition-colors"
          >
            Select your area
            <svg
              className={`w-4 h-4 transition-transform ${pickerOpen ? "rotate-180" : ""}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {/* Area chips */}
          {pickerOpen && (
            <div className="mt-4 flex flex-wrap justify-center gap-2 max-w-lg">
              {areas.map((area) => (
                <Link
                  key={area}
                  href="/rak-landscape"
                  className="px-4 py-2 bg-white/70 backdrop-blur-sm border border-mint-light rounded-lg text-sm text-deep-forest hover:bg-white hover:border-forest/30 transition-colors"
                >
                  {area}
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
