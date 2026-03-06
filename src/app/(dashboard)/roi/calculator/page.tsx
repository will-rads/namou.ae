"use client";

import ContentCard from "@/components/ContentCard";
import { useArea } from "@/context/AreaContext";
import { formatNumber } from "@/data/mock";

export default function ROICalculatorPage() {
  const {
    areaPlots,
    selectedPlotId,
    setSelectedPlotId,
    selectedPlot,
    roiInputs,
    updateROIInput,
    roiOutputs,
    roiGfa,
  } = useArea();

  const needsPlot = !selectedPlot;

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-forest font-heading">Interactive ROI Tool</h1>
        <p className="text-sm text-muted mt-1">
          Adjust variables live to reverse-engineer the land price you&apos;re willing to offer.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Inputs column */}
        <div className="lg:col-span-2 space-y-4">
          {/* Plot selector */}
          <ContentCard>
            <h2 className="text-sm font-semibold text-deep-forest mb-3">Select Plot</h2>
            <div className="flex gap-2 flex-wrap">
              {areaPlots.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedPlotId(p.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors border ${
                    selectedPlotId === p.id
                      ? "bg-forest text-white border-forest"
                      : "bg-mint-white text-deep-forest border-mint-light hover:border-forest/30"
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>
            {selectedPlot && (
              <p className="text-xs text-muted mt-2">
                GFA: {formatNumber(Math.round(roiGfa))} sq ft | Asking: AED {formatNumber(selectedPlot.askingPrice)}
              </p>
            )}
          </ContentCard>

          {/* Sliders — only show when a plot is selected */}
          {needsPlot ? (
            <ContentCard>
              <p className="text-sm text-muted py-4 text-center">Select a plot above to start modeling.</p>
            </ContentCard>
          ) : (
            <ContentCard>
              <h2 className="text-sm font-semibold text-deep-forest mb-4">Adjustable Variables</h2>
              <div className="space-y-5">
                <SliderInput
                  label="Construction Cost per sq ft"
                  value={roiInputs.constructionCostPerSqFt}
                  min={200}
                  max={1500}
                  step={10}
                  unit="$"
                  onChange={(v) => updateROIInput("constructionCostPerSqFt", v)}
                />
                <SliderInput
                  label="Expected Sale Price per sq ft"
                  value={roiInputs.salePricePerSqFt}
                  min={500}
                  max={3000}
                  step={10}
                  unit="$"
                  onChange={(v) => updateROIInput("salePricePerSqFt", v)}
                />
                <SliderInput
                  label="Net Sellable Area (NSA)"
                  value={roiInputs.netSellableAreaPct}
                  min={50}
                  max={90}
                  step={1}
                  unit="%"
                  onChange={(v) => updateROIInput("netSellableAreaPct", v)}
                />
                <SliderInput
                  label="Target Developer Profit Margin"
                  value={roiInputs.targetProfitMarginPct}
                  min={5}
                  max={40}
                  step={1}
                  unit="%"
                  onChange={(v) => updateROIInput("targetProfitMarginPct", v)}
                />
              </div>
            </ContentCard>
          )}
        </div>

        {/* Outputs column */}
        <div className="space-y-4">
          <ContentCard className="bg-forest text-white border-forest">
            <h2 className="text-sm font-medium opacity-80 mb-4">Calculated Results</h2>
            {needsPlot ? (
              <p className="text-sm opacity-60 py-4">Select a plot to see results.</p>
            ) : (
              <div className="space-y-4">
                <OutputMetric label="ROI" value={`${roiOutputs.roi}%`} />
                <OutputMetric label="Total Development Value" value={`$${formatNumber(roiOutputs.totalDevelopmentValue)}`} />
                <OutputMetric label="Maximum Land Price" value={`$${formatNumber(roiOutputs.maximumLandPrice)}`} highlight />
                <OutputMetric label="GFA Price" value={`$${roiOutputs.gfaPrice.toFixed(2)}/sq ft`} />
              </div>
            )}
          </ContentCard>

          {!needsPlot && (
            <a
              href="/next-steps"
              className="block w-full text-center px-6 py-3 bg-mint text-forest rounded-xl font-semibold text-sm hover:bg-mint-light transition-colors"
            >
              Proceed to Final Offer
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function SliderInput({
  label,
  value,
  min,
  max,
  step,
  unit,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  onChange: (value: number) => void;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label className="text-sm text-muted">{label}</label>
        <span className="text-sm font-semibold text-forest">
          {unit === "$" ? `$${formatNumber(value)}` : `${value}${unit}`}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-mint-light rounded-full appearance-none cursor-pointer accent-forest"
      />
      <div className="flex justify-between text-[10px] text-muted mt-0.5">
        <span>{unit === "$" ? `$${min}` : `${min}${unit}`}</span>
        <span>{unit === "$" ? `$${formatNumber(max)}` : `${max}${unit}`}</span>
      </div>
    </div>
  );
}

function OutputMetric({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div>
      <p className="text-xs opacity-70">{label}</p>
      <p className={`text-lg font-bold ${highlight ? "text-mint" : ""}`}>{value}</p>
    </div>
  );
}
