"use client";

import { useArea } from "@/context/AreaContext";
import { formatNumber } from "@/data/mock";

export default function TopBar() {
  const { selectedArea, selectedPlot, roiGfa } = useArea();

  return (
    <header className="flex items-center justify-between gap-4 px-8 py-4">
      {/* Left: area + plot context */}
      <div className="flex items-center gap-3 min-w-0">
        {selectedArea && (
          <span className="text-sm text-muted truncate">{selectedArea}</span>
        )}
        {selectedPlot && (
          <>
            <span className="text-muted/40">|</span>
            <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1 shadow-sm border border-mint-light/50">
              <div className="w-2 h-2 rounded-full bg-mint shrink-0" />
              <span className="text-sm font-medium text-forest truncate">
                {selectedPlot.name}
              </span>
              {roiGfa > 0 && (
                <span className="text-xs text-muted">
                  {formatNumber(Math.round(roiGfa))} sq ft
                </span>
              )}
            </div>
          </>
        )}
      </div>

      {/* Right: specialist badge */}
      <div className="flex items-center gap-4 shrink-0">
        <div className="flex items-center gap-2 bg-white rounded-full px-4 py-1.5 shadow-sm border border-mint-light/50">
          <div className="w-6 h-6 rounded-full bg-forest flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <span className="text-sm font-medium text-forest">Specialist</span>
        </div>
      </div>
    </header>
  );
}
