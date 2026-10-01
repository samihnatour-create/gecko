import type { Project } from "./content";

export const workNiches = [
  "Health & wellness", "Beauty & personal care", "Sports & fitness",
  "Fashion & apparel", "Home & lifestyle", "Food & beverage",
];

// Add approved credits and measured results when the campaign details arrive.
export const workProjects: Project[] = [
  {
    id: "health", niche: workNiches[0], client: "SHEKO", title: "Make the benefit impossible to miss.",
    category: "Static ads", year: "Creative preview", art: "morrow",
    image: "/creatives/sheko.webp", imageAlt: "SHEKO yellow banana shake ad highlighting 27 vitamins and minerals",
    brief: "A bold numerical hook puts a specific product benefit first. The product-led layout makes the offer easy to spot. This supplied example illustrates a creative approach; campaign performance and authorship credits are not published here.",
    objective: "Not documented for this preview", contribution: "Supplied example; authorship credits not published",
    deliverables: ["Static creative preview"], sample: false, placeholder: false, results: [],
  },
  {
    id: "beauty", niche: workNiches[1], client: "Ornevia", title: "Start with a moment they recognize.",
    category: "Static ads", year: "Creative preview", art: "hush",
    image: "/creatives/ornevia.webp", imageAlt: "Ornevia French lifestyle ad with a mirror scene and Super Calm products",
    brief: "An everyday mirror moment gives the message a familiar starting point. A conversational hook connects that moment to the products. This supplied example illustrates a creative approach; campaign performance and authorship credits are not published here.",
    objective: "Not documented for this preview", contribution: "Supplied example; authorship credits not published",
    deliverables: ["Static creative preview"], sample: false, placeholder: false, results: [],
  },
  {
    id: "sports", niche: workNiches[2], client: "Sports & fitness", title: "Built for the next personal best.",
    category: "Campaign preview", year: "Placeholder", art: "form", image: "",
    imageAlt: "Abstract monochrome placeholder artwork for a sports and fitness campaign",
    brief: "A concept placeholder for sports and fitness creative. It suggests a visual direction around movement and personal progress. It is not a live campaign or client case study.",
    objective: "Explore a creative direction", contribution: "Concept placeholder; no client engagement",
    deliverables: ["Concept artwork"], sample: true, placeholder: true, results: [],
  },
  {
    id: "apparel", niche: workNiches[3], client: "Fashion & apparel", title: "From first impression to everyday favorite.",
    category: "Campaign preview", year: "Placeholder", art: "mono", image: "",
    imageAlt: "Yellow typographic placeholder artwork for a fashion and apparel campaign",
    brief: "A concept placeholder for fashion and apparel creative. Bold type and contrast suggest a direction for putting a clear message first. It is not a live campaign or client case study.",
    objective: "Explore a creative direction", contribution: "Concept placeholder; no client engagement",
    deliverables: ["Concept artwork"], sample: true, placeholder: true, results: [],
  },
  {
    id: "home", niche: workNiches[4], client: "Moments & Candles", title: "Make everyday moments feel worth keeping.",
    category: "Static ads", year: "Creative preview", art: "rove",
    image: "/creatives/moments-candles.webp", imageAlt: "Moments and Candles Spanish testimonial ad with three candles in a warm interior",
    brief: "Warm product styling places the candles in an everyday setting. The text-led layout gives the image a personal tone. This supplied example illustrates a creative approach; campaign performance and authorship credits are not published here.",
    objective: "Not documented for this preview", contribution: "Supplied example; authorship credits not published",
    deliverables: ["Static creative preview"], sample: false, placeholder: false, results: [],
  },
  {
    id: "food", niche: workNiches[5], client: "Food & beverage", title: "Give good taste a reason to stop scrolling.",
    category: "Campaign preview", year: "Placeholder", art: "sumi", image: "",
    imageAlt: "Orange citrus placeholder artwork for a food and beverage campaign",
    brief: "A concept placeholder for food and beverage creative. Citrus color and graphic shapes suggest a bright, product-focused direction. It is not a live campaign or client case study.",
    objective: "Explore a creative direction", contribution: "Concept placeholder; no client engagement",
    deliverables: ["Concept artwork"], sample: true, placeholder: true, results: [],
  },
];
