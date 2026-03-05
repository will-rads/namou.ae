/* ── Mock data for the baseline UI (v1, no backend) ── */

export interface Plot {
  id: string;
  name: string;
  area: string; // e.g. "Al Marjan Beach District"
  plotArea: number; // sq ft
  askingPrice: number; // AED
  pricePerSqFt: number; // AED
  landUse: string;
  location: string;
  plotType: string;
  airportEta: string;
  casinoEta: string;
  maxHeight?: string;
  far?: number;
  gfa?: number;
  zoning?: string;
  infrastructure?: string;
  dimensions?: { width: number; depth: number };
}

export interface Landmark {
  id: string;
  name: string;
  lat: number;
  lng: number;
  images: string[];
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "image" | "video";
}

export interface ItineraryItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

/* ── Areas ── */
export const areas = [
  "Al Hamra (Freehold Plots)",
  "Al Marjan Beach District",
  "RAK Central",
  "Al Qadisiyyah",
  "Sajna",
];

/* ── Plots ── */
export const plots: Plot[] = [
  {
    id: "plot-1",
    name: "MBD-R-01",
    area: "Al Marjan Beach District",
    plotArea: 660744,
    askingPrice: 73718880,
    pricePerSqFt: 500,
    landUse: "Retail & Convention Hospitality",
    location: "Al Marjan Beach District, Ras Al Khaimah",
    plotType: "Dual / Combined",
    airportEta: "~30 min",
    casinoEta: "~10 min",
    maxHeight: "G+40",
    far: 3.5,
    gfa: 2312604,
    zoning: "Mixed-use Hospitality",
    infrastructure: "Full road + utilities",
    dimensions: { width: 663, depth: 996 },
  },
  {
    id: "plot-2",
    name: "MBD-R-02",
    area: "Al Marjan Beach District",
    plotArea: 426364,
    askingPrice: 48_000_000,
    pricePerSqFt: 450,
    landUse: "Residential",
    location: "Al Marjan Beach District, Ras Al Khaimah",
    plotType: "Single",
    airportEta: "~30 min",
    casinoEta: "~10 min",
    maxHeight: "G+30",
    far: 3.0,
    gfa: 1279092,
    zoning: "Residential",
    infrastructure: "Full road + utilities",
    dimensions: { width: 500, depth: 852 },
  },
  {
    id: "plot-3",
    name: "MBD-H-01",
    area: "Al Marjan Beach District",
    plotArea: 665174,
    askingPrice: 82_000_000,
    pricePerSqFt: 520,
    landUse: "Hospitality",
    location: "Al Marjan Beach District, Ras Al Khaimah",
    plotType: "Single",
    airportEta: "~30 min",
    casinoEta: "~8 min",
    maxHeight: "G+45",
    far: 4.0,
    gfa: 2660696,
    zoning: "Hospitality",
    infrastructure: "Full road + utilities",
    dimensions: { width: 710, depth: 937 },
  },
  {
    id: "plot-4",
    name: "MBD-CC-01",
    area: "Al Marjan Beach District",
    plotArea: 436_017,
    askingPrice: 55_000_000,
    pricePerSqFt: 480,
    landUse: "Convention Center & Hotel",
    location: "Al Marjan Beach District, Ras Al Khaimah",
    plotType: "Combined",
    airportEta: "~30 min",
    casinoEta: "~12 min",
    maxHeight: "G+35",
    far: 3.2,
    gfa: 1_395_254,
    zoning: "Convention Center & Hotel",
    infrastructure: "Full road + utilities",
    dimensions: { width: 580, depth: 752 },
  },
  {
    id: "plot-5",
    name: "MBD-RM-01",
    area: "Al Marjan Beach District",
    plotArea: 518_000,
    askingPrice: 62_000_000,
    pricePerSqFt: 470,
    landUse: "Residential / Mixed-use",
    location: "Al Marjan Beach District, Ras Al Khaimah",
    plotType: "Combined",
    airportEta: "~30 min",
    casinoEta: "~10 min",
    maxHeight: "G+38",
    far: 3.4,
    gfa: 1_761_200,
    zoning: "Residential / Mixed-use",
    infrastructure: "Full road + utilities",
    dimensions: { width: 620, depth: 835 },
  },
];

/* ── Filter categories for Master Plan ── */
export const masterPlanFilters = [
  "Master Plan",
  "Residential",
  "Hospitality",
  "Convention Center & Hotel",
  "Residential / Mixed-use",
];

/* ── Landmarks ── */
export const landmarks: Landmark[] = [
  {
    id: "mina-al-arab",
    name: "Mina Al Arab",
    lat: 25.805,
    lng: 55.965,
    images: [
      "/images/landmarks/mina-al-arab-1.jpg",
      "/images/landmarks/mina-al-arab-2.jpg",
      "/images/landmarks/mina-al-arab-3.jpg",
    ],
  },
  {
    id: "al-hamra",
    name: "Al Hamra",
    lat: 25.725,
    lng: 55.788,
    images: [
      "/images/landmarks/al-hamra-1.jpg",
      "/images/landmarks/al-hamra-2.jpg",
      "/images/landmarks/al-hamra-3.jpg",
    ],
  },
];

/* ── Gallery ── */
export const galleryImages: GalleryImage[] = [
  { id: "g1", src: "/images/gallery/rak-1.jpg", alt: "RAK waterfront aerial", category: "image" },
  { id: "g2", src: "/images/gallery/rak-2.jpg", alt: "RAK modern architecture", category: "image" },
  { id: "g3", src: "/images/gallery/rak-3.jpg", alt: "RAK beachfront", category: "image" },
  { id: "g4", src: "/images/gallery/rak-4.jpg", alt: "RAK marina", category: "image" },
  { id: "g5", src: "/images/gallery/rak-5.jpg", alt: "RAK skyline", category: "image" },
  { id: "g6", src: "/images/gallery/rak-6.jpg", alt: "RAK landscape", category: "image" },
];

/* ── Itinerary ── */
export const itineraryItems: ItineraryItem[] = [
  {
    id: "it-1",
    title: "Founder Meeting",
    description: "Meet NAMOU's Founder in person",
    icon: "user",
  },
  {
    id: "it-2",
    title: "Contractor Meeting",
    description: "Meet on-site to confirm build readiness.",
    icon: "hard-hat",
  },
  {
    id: "it-3",
    title: "Al Marjan Island Site Visit",
    description: "Private guided tour of the Al Marjan project.",
    icon: "map-pin",
  },
  {
    id: "it-4",
    title: "Senior COC Member Meeting",
    description: "Discuss Compliance and regulatory clearance.",
    icon: "briefcase",
  },
  {
    id: "it-5",
    title: "Meet a member of RAK Municipality",
    description: "Verify local zoning and government protocols.",
    icon: "building",
  },
  {
    id: "it-6",
    title: "Meet the Master Plan Developer",
    description: "Deep dive into the comprehensive project blueprint.",
    icon: "layout",
  },
];

/* ── Helper to format numbers ── */
export function formatNumber(n: number): string {
  return n.toLocaleString("en-US");
}

export function formatAED(n: number): string {
  return `AED ${n.toLocaleString("en-US")}`;
}
