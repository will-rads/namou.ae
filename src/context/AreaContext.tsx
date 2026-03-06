"use client";

import { createContext, useContext, useState, useMemo, useCallback, type ReactNode } from "react";
import { plots, calculateROI, type Plot, type ROIInputs, type ROIOutputs } from "@/data/mock";

/* ── Default ROI assumptions ── */
const DEFAULT_ROI_INPUTS: ROIInputs = {
  constructionCostPerSqFt: 800,
  salePricePerSqFt: 1500,
  netSellableAreaPct: 75,
  targetProfitMarginPct: 20,
};

/* ── Context shape ── */
interface AreaContextValue {
  /* Area */
  selectedArea: string | null;
  setSelectedArea: (area: string) => void;

  /* Plot */
  selectedPlotId: string | null;
  setSelectedPlotId: (id: string) => void;
  selectedPlot: Plot | null;
  areaPlots: Plot[];

  /* ROI */
  roiInputs: ROIInputs;
  updateROIInput: (key: keyof ROIInputs, value: number) => void;
  resetROIInputs: () => void;
  roiOutputs: ROIOutputs;
  roiGfa: number;

  /* Offer */
  offerAmount: number | null;
  setOfferAmount: (amount: number | null) => void;
}

const AreaContext = createContext<AreaContextValue | null>(null);

export function AreaProvider({ children }: { children: ReactNode }) {
  const [selectedArea, setSelectedAreaRaw] = useState<string | null>(null);
  const [selectedPlotId, setSelectedPlotId] = useState<string | null>(null);
  const [roiInputs, setRoiInputs] = useState<ROIInputs>(DEFAULT_ROI_INPUTS);
  const [offerAmount, setOfferAmount] = useState<number | null>(null);

  /* When area changes, reset plot selection */
  const setSelectedArea = useCallback((area: string) => {
    setSelectedAreaRaw(area);
    setSelectedPlotId(null);
    setOfferAmount(null);
  }, []);

  /* Plots filtered to current area */
  const areaPlots = useMemo(
    () => (selectedArea ? plots.filter((p) => p.area === selectedArea) : plots),
    [selectedArea],
  );

  /* Resolved selected plot */
  const selectedPlot = useMemo(
    () => (selectedPlotId ? plots.find((p) => p.id === selectedPlotId) ?? null : null),
    [selectedPlotId],
  );

  /* GFA for ROI calc */
  const roiGfa = useMemo(() => {
    if (!selectedPlot) return 0;
    return selectedPlot.gfa || selectedPlot.plotArea * (selectedPlot.far || 3);
  }, [selectedPlot]);

  /* Live ROI outputs */
  const roiOutputs = useMemo(
    () => (roiGfa > 0 ? calculateROI(roiInputs, roiGfa) : { roi: 0, totalDevelopmentValue: 0, maximumLandPrice: 0, gfaPrice: 0 }),
    [roiInputs, roiGfa],
  );

  const updateROIInput = useCallback((key: keyof ROIInputs, value: number) => {
    setRoiInputs((prev) => ({ ...prev, [key]: value }));
    setOfferAmount(null); // clear manual override when inputs change
  }, []);

  const resetROIInputs = useCallback(() => {
    setRoiInputs(DEFAULT_ROI_INPUTS);
    setOfferAmount(null);
  }, []);

  const value: AreaContextValue = {
    selectedArea,
    setSelectedArea,
    selectedPlotId,
    setSelectedPlotId,
    selectedPlot,
    areaPlots,
    roiInputs,
    updateROIInput,
    resetROIInputs,
    roiOutputs,
    roiGfa,
    offerAmount,
    setOfferAmount,
  };

  return <AreaContext.Provider value={value}>{children}</AreaContext.Provider>;
}

export function useArea() {
  const ctx = useContext(AreaContext);
  if (!ctx) throw new Error("useArea must be used within an AreaProvider");
  return ctx;
}
