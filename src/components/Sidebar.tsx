"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/* 6-step guided call flow */
const navSteps = [
  { step: 1, href: "/rak-landscape", label: "Landscape", icon: MapIcon },
  { step: 2, href: "/master-plan", label: "Explore", icon: PlanIcon },
  { step: 3, href: "/asset-specs", label: "Plot Details", icon: SpecsIcon },
  { step: 4, href: "/roi/calculator", label: "Returns", icon: TrendIcon },
  { step: 5, href: "/gallery", label: "Gallery", icon: GalleryIcon },
  { step: 6, href: "/next-steps", label: "Next Steps", icon: CheckIcon },
];

/* Match route → step index (0-based) */
function getActiveStepIndex(pathname: string): number {
  // ROI sub-routes (explain, example) also map to step 4
  if (pathname.startsWith("/roi")) return 3;
  const idx = navSteps.findIndex((s) => pathname.startsWith(s.href));
  return idx >= 0 ? idx : -1;
}

export default function Sidebar() {
  const pathname = usePathname();
  const activeIdx = getActiveStepIndex(pathname);

  return (
    <aside className="flex flex-col w-[200px] min-h-screen bg-forest text-white py-8 px-5 shrink-0">
      {/* Logo */}
      <Link href="/" className="mb-10">
        <span className="font-heading text-2xl font-bold tracking-wider text-white">
          NAMOU
        </span>
      </Link>

      {/* Nav steps */}
      <nav className="flex flex-col gap-0.5">
        {navSteps.map((item, idx) => {
          const isActive = idx === activeIdx;
          const isVisited = idx < activeIdx;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                isActive
                  ? "bg-white/15 text-white font-medium"
                  : "text-white/60 hover:bg-white/10 hover:text-white"
              }`}
            >
              {/* Step indicator: number or checkmark */}
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                  isActive
                    ? "bg-mint text-forest"
                    : isVisited
                      ? "bg-white/25 text-white"
                      : "bg-white/10 text-white/50"
                }`}
              >
                {isVisited ? (
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  item.step
                )}
              </span>

              <item.icon className="w-4 h-4 shrink-0 opacity-70" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Spacer + change area link */}
      <div className="mt-auto pt-6 border-t border-white/10">
        <Link
          href="/"
          className="flex items-center gap-2 text-xs text-white/50 hover:text-white/80 transition-colors px-3 py-2"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Change area
        </Link>
      </div>
    </aside>
  );
}

/* ── Inline SVG icons ── */

function MapIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PlanIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  );
}

function SpecsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

function TrendIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

function GalleryIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
