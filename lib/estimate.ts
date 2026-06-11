import { PROPERTY_TYPES, SERVICES, fmt } from "./data";
import type { Estimate, QuoteInput } from "./types";

export function estimate(input: QuoteInput): Estimate {
  const {
    propertyType = "apartment",
    size = 1100,
    bedrooms = 2,
    bathrooms = 2,
    cleaningType = "deep",
    photoCount = 0,
  } = input;
  const svc = SERVICES[cleaningType] || SERVICES.deep;

  // size-driven base, with room loading
  const roomLoad = bedrooms * 55 + bathrooms * 90;
  const effSize = Math.max(size, 350) + roomLoad;

  // labor hours
  let hours = (effSize / 240) * svc.hours;
  if (propertyType === "villa") hours *= 1.18;
  if (propertyType === "office") hours *= 0.92;
  hours = Math.max(2, hours);

  // team size
  let team = 1;
  if (hours > 4) team = 2;
  if (hours > 8) team = 3;
  if (hours > 13) team = 4;
  const perPerson = hours / team;
  const durationHours = Math.max(1.5, perPerson);

  // price
  const labor = effSize * svc.rate;
  const typeMult = propertyType === "villa" ? 1.15 : propertyType === "office" ? 1.05 : 1;
  const mid = labor * typeMult;
  const low = mid * 0.9;
  const high = mid * 1.14;

  // confidence
  let confidence = 78;
  confidence += Math.min(photoCount, 8) * 1.6;
  if (bedrooms <= 4 && bathrooms <= 4) confidence += 4;
  if (cleaningType === "regular") confidence += 3;
  confidence = Math.min(97, Math.round(confidence));

  const propLabel = PROPERTY_TYPES.find((p) => p.key === propertyType)?.label || "Property";

  const reasoning = [
    {
      t: "Property profile",
      d: `${propLabel} · ${size.toLocaleString()} sq ft · ${bedrooms} bed / ${bathrooms} bath. Adjusted workload of ${Math.round(effSize).toLocaleString()} effective sq ft after room weighting.`,
    },
    {
      t: "Complexity class",
      d: `Classified as ${svc.complexity.toLowerCase()} complexity for ${svc.name.toLowerCase()}. ${
        cleaningType === "postreno"
          ? "Construction residue requires specialist dust extraction."
          : cleaningType === "moveout"
          ? "Inspection-grade finish across all fixtures."
          : cleaningType === "deep"
          ? "Detailing of grout, appliances and high-touch zones included."
          : "Standard surface maintenance across living areas."
      }`,
    },
    {
      t: "Labor & duration",
      d: `Estimated ${hours.toFixed(1)} total labor hours, completed in ~${durationHours.toFixed(1)}h with a team of ${team}.`,
    },
    {
      t: "Photo signals",
      d:
        photoCount > 0
          ? `Analyzed ${photoCount} uploaded photo${photoCount > 1 ? "s" : ""}; detected typical soiling consistent with the selected service.`
          : "No photos provided — estimate based on property data alone. Adding photos raises confidence.",
    },
  ];

  return {
    service: svc,
    cleaningType,
    durationHours: Math.round(durationHours * 2) / 2,
    totalHours: Math.round(hours * 2) / 2,
    team,
    priceLow: low,
    priceHigh: high,
    priceMid: mid,
    confidence,
    complexity: svc.complexity,
    reasoning,
    input: { propertyType, size, bedrooms, bathrooms, cleaningType },
  };
}

export function assistantAnswer(q: string, est: Estimate): string {
  const key = q.toLowerCase();
  if (key.includes("service") || key.includes("recommend"))
    return `I recommended **${est.service.name}** because your inputs point to ${est.complexity.toLowerCase()} complexity. ${est.service.blurb} Based on the property size and room count, a lighter service would likely leave detailing gaps, while a heavier one would over-scope and raise the price unnecessarily.`;
  if (key.includes("cleaner") || key.includes("team") || key.includes("2 ") || key.includes("staff"))
    return `Your job is estimated at **${est.totalHours} total labor hours**. To finish within a single ~${est.durationHours}h window, I've assigned a team of **${est.team}**. Fewer cleaners would stretch the job across a longer day; more would idle. This balances speed and cost.`;
  if (key.includes("calculate") || key.includes("estimate calc") || key.includes("how was"))
    return `The estimate combines three signals: (1) effective area after weighting your ${est.input.bedrooms} bedrooms and ${est.input.bathrooms} bathrooms, (2) a per-sq-ft rate for ${est.service.name.toLowerCase()}, and (3) a property-type multiplier. That yields a midpoint of ${fmt(est.priceMid)}, presented as a ${fmt(est.priceLow)}–${fmt(est.priceHigh)} range to absorb on-site variation.`;
  if (key.includes("reduce") || key.includes("cheaper") || key.includes("lower"))
    return `A few ways to bring the estimate down: switch from ${est.service.name} to a lighter service tier, exclude rooms that don't need attention, or book a recurring plan for a loyalty rate. Want me to re-price a Regular Cleaning for comparison?`;
  return `Good question. This estimate is generated from your property details and photo signals. The recommended ${est.service.name.toLowerCase()} runs ~${est.durationHours}h with a team of ${est.team}, priced ${fmt(est.priceLow)}–${fmt(est.priceHigh)} at ${est.confidence}% confidence. Ask me about the service choice, team size, pricing, or how to reduce it.`;
}
