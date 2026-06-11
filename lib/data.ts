import type {
  CleaningType,
  CleaningTypeMeta,
  CustomerRequest,
  PhotoRoom,
  PropertyTypeMeta,
  RequestStatus,
  Service,
} from "./types";

export const CURRENCY = "AED";
export const fmt = (n: number): string =>
  CURRENCY + " " + Math.round(n).toLocaleString("en-US");

export const SERVICES: Record<CleaningType, Service> = {
  regular: { key: "regular", name: "Regular Cleaning", blurb: "Routine upkeep of living spaces and surfaces.", rate: 0.85, hours: 1.0, complexity: "Standard" },
  deep: { key: "deep", name: "Deep Cleaning", blurb: "Detailed top-to-bottom clean incl. build-up and grime.", rate: 1.55, hours: 1.7, complexity: "Elevated" },
  moveout: { key: "moveout", name: "Move-Out Cleaning", blurb: "Handover-ready clean for tenancy and inspections.", rate: 1.85, hours: 2.0, complexity: "High" },
  postreno: { key: "postreno", name: "Post-Renovation Cleaning", blurb: "Dust, debris and residue removal after construction.", rate: 2.35, hours: 2.5, complexity: "Intensive" },
};

export const PROPERTY_TYPES: PropertyTypeMeta[] = [
  { key: "apartment", label: "Apartment", icon: "building" },
  { key: "villa", label: "Villa", icon: "home" },
  { key: "townhouse", label: "Townhouse", icon: "townhouse" },
  { key: "office", label: "Office", icon: "briefcase" },
];

export const CLEANING_TYPES: CleaningTypeMeta[] = [
  { key: "regular", label: "Regular Cleaning", desc: "Maintenance clean for lived-in homes" },
  { key: "deep", label: "Deep Cleaning", desc: "Thorough detail clean, every surface" },
  { key: "moveout", label: "Move-Out Cleaning", desc: "Inspection-ready handover clean" },
  { key: "postreno", label: "Post-Renovation Cleaning", desc: "Dust & debris removal after works" },
];

export const PHOTO_ROOMS: PhotoRoom[] = [
  { key: "living", label: "Living Room", hint: "Sofas, floors, surfaces" },
  { key: "kitchen", label: "Kitchen", hint: "Counters, appliances, sink" },
  { key: "bathroom", label: "Bathroom", hint: "Tiles, fixtures, grout" },
  { key: "bedroom", label: "Bedroom", hint: "Floors, wardrobes, dust" },
  { key: "extra", label: "Additional", hint: "Balcony, hallway, other" },
];

export const REQUESTS: CustomerRequest[] = [
  { id: "RQ-4821", name: "Layla Haddad", prop: "Apartment", area: "Marina Heights, Dubai", svc: "Deep Cleaning", price: 1180, conf: 92, status: "pending", when: "12 min ago", beds: 2, baths: 2, size: 1150 },
  { id: "RQ-4820", name: "Omar Farouk", prop: "Villa", area: "Al Barsha, Dubai", svc: "Move-Out Cleaning", price: 2640, conf: 88, status: "pending", when: "38 min ago", beds: 4, baths: 4, size: 3200 },
  { id: "RQ-4819", name: "Sara Mansoor", prop: "Townhouse", area: "Jumeirah, Dubai", svc: "Regular Cleaning", price: 620, conf: 95, status: "confirmed", when: "1 hr ago", beds: 3, baths: 2, size: 1800 },
  { id: "RQ-4818", name: "Daniel Reyes", prop: "Office", area: "Business Bay, Dubai", svc: "Deep Cleaning", price: 1950, conf: 84, status: "review", when: "2 hr ago", beds: 0, baths: 3, size: 2600 },
  { id: "RQ-4817", name: "Aisha Karimi", prop: "Apartment", area: "Downtown, Dubai", svc: "Post-Renovation Cleaning", price: 2210, conf: 79, status: "pending", when: "3 hr ago", beds: 2, baths: 2, size: 1340 },
  { id: "RQ-4816", name: "Marcus Bauer", prop: "Villa", area: "Arabian Ranches, Dubai", svc: "Deep Cleaning", price: 2480, conf: 90, status: "confirmed", when: "5 hr ago", beds: 5, baths: 5, size: 4100 },
  { id: "RQ-4815", name: "Priya Nair", prop: "Apartment", area: "JLT, Dubai", svc: "Regular Cleaning", price: 540, conf: 96, status: "confirmed", when: "6 hr ago", beds: 1, baths: 1, size: 780 },
  { id: "RQ-4814", name: "Hassan Ali", prop: "Townhouse", area: "Mirdif, Dubai", svc: "Move-Out Cleaning", price: 1760, conf: 86, status: "rejected", when: "Yesterday", beds: 3, baths: 3, size: 2200 },
];

export const STATUS_META: Record<RequestStatus, { label: string; cls: string }> = {
  pending: { label: "Pending", cls: "badge-amber" },
  confirmed: { label: "Confirmed", cls: "badge-green" },
  review: { label: "In review", cls: "badge-blue" },
  rejected: { label: "Rejected", cls: "badge-red" },
};

export const KPIS = {
  totalQuotes: 1284,
  pending: 47,
  confirmed: 612,
  avgValue: 1490,
  topService: "Deep Cleaning",
};

export const SERVICE_MIX = [
  { name: "Deep Cleaning", pct: 41, color: "var(--blue-600)" },
  { name: "Regular Cleaning", pct: 28, color: "var(--blue-400)" },
  { name: "Move-Out Cleaning", pct: 19, color: "var(--ai-500)" },
  { name: "Post-Renovation Cleaning", pct: 12, color: "#9DB0E8" },
];

export const TREND = [38, 44, 41, 52, 49, 61, 58, 67, 72, 69, 81, 88];

export const INSIGHTS = [
  { tone: "blue" as const, title: "Deep Cleaning demand is climbing", body: "Deep Cleaning requests rose 18% over the last 30 days and now drive 41% of all quotes — the strongest contributor to average quote value." },
  { tone: "green" as const, title: "High-confidence quotes convert better", body: "Quotes generated at 90%+ confidence convert to confirmed bookings 2.3× more often. Encouraging photo uploads is the biggest confidence lever." },
  { tone: "amber" as const, title: "Villas are under-quoted on labor", body: "Villa jobs run 12% longer than estimated on average. Consider raising the villa labor multiplier from 1.15 to 1.22 to protect margin." },
];

export const SVC_TO_KEY: Record<string, CleaningType> = {
  "Regular Cleaning": "regular",
  "Deep Cleaning": "deep",
  "Move-Out Cleaning": "moveout",
  "Post-Renovation Cleaning": "postreno",
};

export const PROP_TO_KEY: Record<string, import("./types").PropertyType> = {
  Apartment: "apartment",
  Villa: "villa",
  Townhouse: "townhouse",
  Office: "office",
};
