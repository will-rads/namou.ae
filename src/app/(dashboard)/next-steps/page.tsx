"use client";

import { useState, useEffect } from "react";
import ContentCard from "@/components/ContentCard";
import { useArea } from "@/context/AreaContext";
import { formatNumber } from "@/data/mock";

export default function NextStepsPage() {
  const {
    selectedPlot,
    roiOutputs,
    roiGfa,
    offerAmount,
    setOfferAmount,
  } = useArea();

  /* Local editing state for the offer amount */
  const calculatedAmount = roiOutputs.maximumLandPrice;
  const [editingAmount, setEditingAmount] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  /* Sync from context on mount / when calculated amount changes */
  useEffect(() => {
    const display = offerAmount ?? calculatedAmount;
    setEditingAmount(display > 0 ? display.toString() : "");
    setSubmitted(false);
  }, [calculatedAmount, offerAmount]);

  const currentOffer = offerAmount ?? calculatedAmount;
  const hasPlot = !!selectedPlot;
  const hasROI = calculatedAmount > 0;

  const handleAmountChange = (raw: string) => {
    const cleaned = raw.replace(/[^0-9]/g, "");
    setEditingAmount(cleaned);
    const num = parseInt(cleaned, 10);
    if (!isNaN(num) && num > 0) {
      setOfferAmount(num);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-forest font-heading">Next Steps</h1>
        <p className="text-sm text-muted mt-1">
          {hasROI
            ? "Review your offer or choose an alternative next step."
            : "Choose how you'd like to proceed."}
        </p>
      </div>

      {/* Offer section — only if we have ROI data */}
      {hasPlot && hasROI && !submitted && (
        <ContentCard className="bg-forest text-white border-forest mb-6">
          <div className="space-y-5">
            {/* Hero number — editable */}
            <div>
              <p className="text-xs opacity-70 mb-1">Your Offer — Maximum Land Price</p>
              <div className="flex items-baseline gap-2">
                <span className="text-lg opacity-70">$</span>
                <input
                  type="text"
                  value={editingAmount ? formatNumber(parseInt(editingAmount, 10) || 0) : ""}
                  onChange={(e) => handleAmountChange(e.target.value.replace(/,/g, ""))}
                  className="bg-transparent text-4xl font-bold text-mint border-b border-white/30 focus:border-mint outline-none w-full py-1"
                />
              </div>
              {offerAmount && offerAmount !== calculatedAmount && (
                <p className="text-xs opacity-60 mt-1">
                  Adjusted from calculated ${formatNumber(calculatedAmount)}
                </p>
              )}
            </div>

            {/* Supporting metrics */}
            <div className="grid grid-cols-3 gap-4 pt-3 border-t border-white/20">
              <div>
                <p className="text-xs opacity-60">ROI</p>
                <p className="text-xl font-bold">{roiOutputs.roi}%</p>
              </div>
              <div>
                <p className="text-xs opacity-60">GFA Price</p>
                <p className="text-xl font-bold">${roiOutputs.gfaPrice.toFixed(2)}/sqft</p>
              </div>
              <div>
                <p className="text-xs opacity-60">Dev Value</p>
                <p className="text-xl font-bold">${formatNumber(roiOutputs.totalDevelopmentValue)}</p>
              </div>
            </div>

            {/* Plot context */}
            <div className="text-sm opacity-70 pt-2 border-t border-white/10">
              {selectedPlot!.name} · {formatNumber(Math.round(roiGfa))} sq ft GFA · {selectedPlot!.location}
            </div>
          </div>
        </ContentCard>
      )}

      {/* Submitted state */}
      {submitted && (
        <ContentCard className="border-mint bg-mint-white mb-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-forest flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div>
              <h2 className="text-base font-semibold text-forest">Offer Submitted</h2>
              <p className="text-sm text-muted mt-1">
                Your offer of <strong className="text-forest">${formatNumber(currentOffer)}</strong> for
                plot <strong>{selectedPlot?.name}</strong> has been recorded.
              </p>
              <p className="text-sm text-muted mt-2">
                Your specialist will follow up with next steps and documentation.
              </p>
              <div className="mt-3 p-2 bg-white rounded-lg border border-mint-light text-xs text-muted font-mono">
                Deal ref: NAMOU-{selectedPlot?.name}-{Date.now().toString(36).toUpperCase()}
              </div>
            </div>
          </div>
        </ContentCard>
      )}

      {/* Action buttons */}
      {!submitted && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Submit offer — primary */}
          {hasPlot && hasROI && (
            <ContentCard
              className="border-forest/20 hover:border-forest/40 cursor-pointer transition-all"
              onClick={handleSubmit}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-forest">Submit Offer</h3>
                  <p className="text-sm text-muted">Lock in your land price and start documentation.</p>
                </div>
              </div>
            </ContentCard>
          )}

          {/* Schedule site visit */}
          <ContentCard className="border-mint-light hover:border-forest/30 cursor-pointer transition-all">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-mint flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-deep-forest">Schedule a Site Visit</h3>
                <p className="text-sm text-muted">Tour Al Marjan Island and see plots in person.</p>
              </div>
            </div>
          </ContentCard>

          {/* Book a follow-up call */}
          <ContentCard className="border-mint-light hover:border-forest/30 cursor-pointer transition-all">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-mint flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-deep-forest">Book a Follow-Up Call</h3>
                <p className="text-sm text-muted">Continue the conversation with your specialist.</p>
              </div>
            </div>
          </ContentCard>

          {/* Schedule video meeting */}
          <ContentCard className="border-mint-light hover:border-forest/30 cursor-pointer transition-all">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-mint flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <polygon points="23 7 16 12 23 17 23 7" />
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-deep-forest">Schedule a Video Meeting</h3>
                <p className="text-sm text-muted">Remote walkthrough of plots and ROI analysis.</p>
              </div>
            </div>
          </ContentCard>
        </div>
      )}

      {/* Adjust link */}
      {hasPlot && !submitted && (
        <div className="text-center">
          <a
            href="/roi/calculator"
            className="text-sm text-forest underline underline-offset-2 hover:text-deep-forest transition-colors"
          >
            Adjust ROI assumptions
          </a>
        </div>
      )}

      {/* No plot selected guidance */}
      {!hasPlot && (
        <ContentCard>
          <p className="text-sm text-muted text-center py-4">
            Select a plot and run the ROI tool first to generate an offer.
            You can still schedule a site visit or call above.
          </p>
        </ContentCard>
      )}
    </div>
  );
}
