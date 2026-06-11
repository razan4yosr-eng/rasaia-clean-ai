export type CleaningType = "regular" | "deep" | "moveout" | "postreno";
export type PropertyType = "apartment" | "villa" | "townhouse" | "office";
export type RequestStatus = "pending" | "confirmed" | "review" | "rejected";

export interface Service {
  key: CleaningType;
  name: string;
  blurb: string;
  rate: number;
  hours: number;
  complexity: string;
}

export interface PropertyTypeMeta {
  key: PropertyType;
  label: string;
  icon: string;
}

export interface CleaningTypeMeta {
  key: CleaningType;
  label: string;
  desc: string;
}

export interface PhotoRoom {
  key: string;
  label: string;
  hint: string;
}

export interface QuoteInput {
  propertyType: PropertyType;
  size: number;
  bedrooms: number;
  bathrooms: number;
  cleaningType: CleaningType;
  photoCount?: number;
}

export interface ReasoningItem {
  t: string;
  d: string;
}

export interface Estimate {
  service: Service;
  cleaningType: CleaningType;
  durationHours: number;
  totalHours: number;
  team: number;
  priceLow: number;
  priceHigh: number;
  priceMid: number;
  confidence: number;
  complexity: string;
  reasoning: ReasoningItem[];
  input: {
    propertyType: PropertyType;
    size: number;
    bedrooms: number;
    bathrooms: number;
    cleaningType: CleaningType;
  };
}

export interface CustomerRequest {
  id: string;
  name: string;
  prop: string;
  area: string;
  svc: string;
  price: number;
  conf: number;
  status: RequestStatus;
  when: string;
  beds: number;
  baths: number;
  size: number;
}

export type Photos = Record<string, number>;
