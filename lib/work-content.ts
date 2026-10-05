import type { Project } from "./content";

export const workNiches = [
  "Health & wellness", "Beauty & personal care", "Sports & fitness",
  "Food & beverage",
];

// Creative readings of the supplied assets; credits and results remain unconfirmed.
export const workProjects: Project[] = [
  {
    id: "health", niche: workNiches[0], client: "Solv", title: "A clear head. A pocket-sized ritual.",
    category: "Product-led creative", art: "morrow",
    image: "/creatives/campaigns/solv/cover.avif",
    imageAlt: "Solv focus mints tin encased in a clear block of ice",
    video: "/creatives/campaigns/solv/campaign.mp4",
    gallery: [
      { src: "/creatives/campaigns/solv/cover.avif", alt: "Solv focus mints tin encased in ice", width: 1080, height: 1609 },
      { src: "/creatives/campaigns/solv/image-1.avif", alt: "A woman holding a Solv focus mints tin", width: 1080, height: 1443 },
      { src: "/creatives/campaigns/solv/image-2.avif", alt: "Solv product creative with an open focus mints tin", width: 1080, height: 1446 },
    ],
    brief: "The silver tin, blue focal point, and block of ice give Solv a crisp, composed visual identity. The ice suggests freshness and clarity, while the portrait puts the pocket-sized product in a human context. A clean product breakdown then explains the format and ingredients, moving from a striking first impression to something easy to understand.",
    message: "A small, considered ritual for the moments that call for focus.",
    takeaway: "Use a distinctive visual metaphor to attract attention, then make the product and its place in daily life clear.",
    deliverables: ["Video", "3 images"], sample: false, results: [],
  },
  {
    id: "beauty", niche: workNiches[1], client: "Lume", title: "Freshness that fits your rhythm.",
    category: "Lifestyle creative", art: "hush",
    image: "/creatives/campaigns/lume/cover.avif",
    imageAlt: "Purple Lume deodorant beside exercise accessories in soft sunlight",
    video: "/creatives/campaigns/lume/campaign.mp4",
    gallery: [
      { src: "/creatives/campaigns/lume/cover.avif", alt: "Lume deodorant beside exercise accessories", width: 1080, height: 1609 },
      { src: "/creatives/campaigns/lume/image-1.avif", alt: "A woman in workout clothing carrying Lume deodorant", width: 1080, height: 1443 },
    ],
    brief: "Soft sunlight, pastel exercise equipment, and the lilac pack make Lume feel approachable and part of an active day. The styled product scene establishes its visual character; the outdoor image places it in someone's hand, alongside workout clothing and a tote. Together, they connect personal care with the everyday rhythm around movement.",
    message: "Personal care that belongs in your everyday routine, wherever the day takes you.",
    takeaway: "Pair a recognizable pack with a relatable setting so people can picture the product in their own day.",
    deliverables: ["Video", "2 images"], sample: false, results: [],
  },
  {
    id: "sports", niche: workNiches[2], client: "Morf", title: "Part of the kit. Part of the routine.",
    category: "Product-led creative", art: "form", image: "/creatives/campaigns/morf/cover.avif",
    imageAlt: "Morf creatine container wrapped in climbing rope with a pink carabiner",
    video: "/creatives/campaigns/morf/campaign.mp4",
    gallery: [
      { src: "/creatives/campaigns/morf/cover.avif", alt: "Morf creatine container with climbing rope and a carabiner", width: 1080, height: 1340 },
      { src: "/creatives/campaigns/morf/image-1.avif", alt: "Morf creatine container being packed into a gym bag", width: 1080, height: 1340 },
    ],
    brief: "Bold black-and-white packaging gives Morf a direct, practical presence. Climbing rope and a bright carabiner bring the language of training equipment into the product shot. The gym-bag scene carries that idea into daily life, placing the tub beside a towel, bottle, and shoes. The emphasis is on preparation and consistency, without relying on transformation imagery.",
    message: "Make preparation part of the routine, with Morf alongside the rest of your training kit.",
    takeaway: "Connect a product to familiar tools and habits to make its role immediately recognizable.",
    deliverables: ["Video", "2 images"], sample: false, results: [],
  },
  {
    id: "food", niche: workNiches[3], client: "Cruncho", title: "Make the crunch feel close.",
    category: "Product-led creative", art: "sumi", image: "/creatives/campaigns/cruncho/cover.avif",
    imageAlt: "A green Cruncho sour cream and onion crisp packet surrounded by crisps",
    video: "/creatives/campaigns/cruncho/campaign.mp4",
    gallery: [
      { src: "/creatives/campaigns/cruncho/cover.avif", alt: "Cruncho sour cream and onion crisps creative", width: 1080, height: 1340 },
    ],
    brief: "A sea of golden crisps makes texture the first thing you notice. The deep green pack and oversized lime lettering create a strong focal point, while the sour cream and onion label identifies the flavour. The close, abundant composition makes the product feel tangible and appetizing, letting the pack and the food carry the message together.",
    message: "Bold flavour, unmistakable crunch, and a pack you can spot at a glance.",
    takeaway: "Let texture create appetite and distinctive packaging build recognition in the same frame.",
    deliverables: ["Video", "1 image"], sample: false, results: [],
  },
];
