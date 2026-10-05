// Replace copy and media here; layout and motion live separately.
import { workNiches, workProjects } from "./work-content";
export type Project = {
  niche: string;
  takeaway: string;
  message?: string;
  // Publish this field only after the team's actual contribution is confirmed.
  contribution?: string;
  results: { label: string; value: string; context: string }[];
  id: string;
  client: string;
  title: string;
  category: string;
  art: "morrow" | "sumi" | "form" | "rove" | "mono" | "hush";
  image: string;
  imageAlt: string;
  video?: string;
  gallery?: { src: string; alt: string; width: number; height: number }[];
  brief: string;
  deliverables: string[];
  sample: boolean;
};
export const site = {
  brand: {
    name: "gecko media",
    logo: "/gecko-logo.png",
    description: "Ad creative, media buying, and branding for ecommerce brands and growing businesses. One team to test, learn, and improve your ads with less back-and-forth.",
    title: "Gecko Media — Ad Creative & Media Buying for Growing Brands",
  },
  nav: [
    { label: "Our work", href: "#work" },
    { label: "What we do", href: "#services" },
    { label: "Our approach", href: "#reviews" },
  ],
  labels: {
    project: "Let’s talk growth",
    work: "Explore our creative",
    close: "Close project",
    menu: "Menu",
    previous: "Previous commitment",
    next: "Next commitment",
    top: "Back to top",
    sample: "Concept project",
    details: "The creative approach",
    deliverables: "Creative format",
    emptyWork: "More work is on its way.",
    allWork: "All work",
    skip: "Skip to content",
    filter: "Filter work by niche",
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation",
    featured: "01 — CREATIVE MEETS STRATEGY ↘",
    signature: "BUILT TO KEEP IMPROVING. ↗",
  },
  hero: {
    creatives: {
      left: "/creatives/sheko.webp",
      right: "/creatives/ornevia.webp",
      bottom: "/creatives/moments-candles.webp",
    },
    eyebrow: "Ad creative & media buying for growing brands",
    headline: ["Better creative.", "Smarter ads."],
    posterTitle: "Creative meets strategy.",
    posterSubtitle: "gecko media",
    description: "Ad creative and media buying for ecommerce brands and growing businesses. One team. Clear next steps. Less back-and-forth.",
    note: "More time for your business. A clear plan for your ads.",
    reelLabel: "How we approach your growth",
    previewLabel: "Concept reel / placeholder artwork",
    scrollLabel: "Explore our experience and creative",
    sticker: "gecko",
    stickerNote: "your growth partner.",
    reelFooter: "GM® / CREATIVE & MEDIA BUYING",
    video: {
      src: "",
      poster: "",
      label: "Meet Gecko Media",
      pending: "Our introduction is coming soon. Explore our creative below.",
      unavailable: "The video couldn’t load. Explore our creative below.",
    },
    chapters: [
      {
        title: "Start with your business.",
        subtitle: "01 / Understand the goal",
        word: "think.",
      },
      {
        title: "Give every ad a purpose.",
        subtitle: "02 / Create and test",
        word: "make.",
      },
      {
        title: "Learn. Improve. Repeat.",
        subtitle: "03 / Follow the performance",
        word: "move.",
      },
    ],
  },
  manifesto: {
    eyebrow: "A partner for the long run",
    before: "Your growth shouldn’t mean",
    accent: "more overhead.",
    after: "Let’s make the next step clearer.",
    description:
      "We bring creative strategy and media buying together, so your ads and your budget work toward the same goal. We handle execution, keep feedback focused, and use performance data to decide what to improve next.",
  },
  workIntro: {
    eyebrow: "Explore the creative approach",
    title: "A clear message.",
    accent: "A reason to click.",
    note: "Four creative approaches across ecommerce categories.",
    detailLabel: "Project preview",
  },
  workNiches,
  work: workProjects,
  servicesIntro: {
    eyebrow: "Creative, campaigns, and brand foundations",
    title: "One team.",
    accent: "Less overhead.",
    description:
      "For founders and lean marketing teams who need a partner to handle the work, explain the performance, and keep improving.",
  },
  services: [
    {
      title: "Ad creative",
      description:
        "Turn your offer into image and video ads with clear hooks and a reason to act. We use performance insights to guide new concepts and variations.",
      tags: ["Creative strategy", "Image & video ads", "Creative testing"],
    },
    {
      title: "Media buying",
      description:
        "Put your budget behind a clear plan. We manage campaigns, analyze what’s working, and explain what we’ll test or change next.",
      tags: ["Campaign management", "Optimization", "Performance reporting"],
    },
    {
      title: "Branding",
      description:
        "Make your value easier to understand and your brand easier to recognize. Clear positioning, messaging, and visual identity give your marketing a consistent foundation.",
      tags: ["Positioning", "Brand messaging", "Visual identity"],
    },
  ],
  impact: {
    label: "Our founders’ experience",
    stats: [
      { value: "1k+", label: "Image & video assets created" },
      { value: "20+", label: "Businesses supported with creative strategy" },
      { value: "2", label: "Founders with industry experience" },
    ],
  },
  reviewsIntro: {
    eyebrow: "How we work with you",
    title: "Your business.",
    accent: "Our commitment.",
    sampleLabel: "Our founders’ commitments — client feedback coming soon",
  },
  reviews: [
    {
      quote:
        "You shouldn’t have to manage your agency to keep things moving. We keep feedback focused, next steps clear, and the day-to-day work with us.",
      name: "Gecko Media",
      role: "Our commitment to less overhead",
      initials: "GM",
    },
    {
      quote:
        "Every test should teach us something. We look at what’s working, what isn’t, and what that means for your next creative or campaign decision.",
      name: "Gecko Media",
      role: "Our commitment to clear decisions",
      initials: "GM",
    },
    {
      quote:
        "We want to understand your business well enough to keep making better decisions together. Your goals guide the work, from the first brief to the next stage of growth.",
      name: "Gecko Media",
      role: "Our commitment to a lasting partnership",
      initials: "GM",
    },
  ],
  contact: {
    eyebrow: "Let’s find your next step",
    title: "Ready for",
    accent: "better ads?",
    description:
      "Tell us what you sell, how you’re advertising, and where you’re getting stuck. We’ll discuss how creative, media buying, or branding could help—and whether we’re the right fit.",
    cta: "Let’s talk growth",
    calendarUrl: process.env.NEXT_PUBLIC_CALENDLY_URL || "",
    preview: "Booking details coming soon",
    previewNote:
      "Online booking is coming soon. This calendar is a preview.",
    meetingTitle: "Let’s talk growth.",
    duration: "30 minutes",
    meetingType: "Video call",
    meetingDescription: "A conversation about your goals, current ads, and where you need support.",
    selectDate: "Select a date & time",
    calendarTitle: "Book a call with Gecko Media",
  },
  footer: {
    note: "Creative strategy. Media buying. A partner for the long run.",
    copyright: "Gecko Media. All rights reserved.",
    links: [] as { label: string; href: string }[],
  },
};
