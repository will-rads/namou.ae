"use client";

import { useRouter } from "next/navigation";
import { useArea } from "@/context/AreaContext";
import { areas } from "@/data/mock";

export default function AreaPickerPage() {
  const router = useRouter();
  const { setSelectedArea } = useArea();

  const handleSelect = (area: string) => {
    setSelectedArea(area);
    router.push("/rak-landscape");
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-mint-white overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-mint-white via-mint-bg/30 to-mint-white" />

      {/* Top bar */}
      <header className="absolute top-0 left-0 right-0 flex items-center justify-between px-10 py-6 z-10">
        <span className="text-sm tracking-[0.25em] uppercase text-deep-forest/70 font-heading">
          Real Estate Done Right
        </span>
        <div className="flex items-center gap-2 bg-white rounded-full px-4 py-1.5 shadow-sm border border-mint-light/50">
          <div className="w-6 h-6 rounded-full bg-forest flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <span className="text-sm font-medium text-forest">Specialist</span>
        </div>
      </header>

      {/* Center content — area picker */}
      <main className="relative z-10 flex flex-col items-center gap-8 text-center max-w-2xl px-6">
        <div>
          <h1 className="font-heading text-5xl md:text-6xl leading-none font-bold tracking-wider text-forest">
            NAMOU
          </h1>
          <p className="text-sm tracking-[0.3em] uppercase text-deep-forest/60 mt-2">
            Properties
          </p>
        </div>

        <div className="w-full max-w-lg">
          <p className="text-base text-muted mb-2">Select your area</p>
          <div className="inline-flex items-center gap-1 text-forest mb-5">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {areas.map((area) => (
              <button
                key={area}
                onClick={() => handleSelect(area)}
                className="px-5 py-4 bg-white border border-mint-light/60 rounded-xl text-base text-deep-forest hover:border-forest/40 hover:shadow-md transition-all text-center font-medium"
              >
                {area}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
