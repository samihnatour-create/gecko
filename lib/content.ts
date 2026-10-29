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
    url: "https://geckomedia.net",
    logo: "/gecko-logo.png",
    description: "Ad creative, media buying, and branding for ecommerce brands and growing businesses. One team to test, learn, and improve your ads with less back-and-forth.",
    title: "Gecko Media — Ad Creative & Media Buying for Growing Brands",
  },
  nav: [
    { label: "Work", href: "/#work" },
    { label: "Services", href: "/#services" },
    { label: "Process", href: "/process" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
  ],
  labels: {
    project: "Book a call",
    work: "Explore our creative",
    watch: "Watch our intro",
    close: "Close project",
    menu: "Menu",
    top: "Back to top",
    details: "The creative approach",
    deliverables: "Creative format",
    skip: "Skip to content",
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation",
  },
  hero: {
    eyebrow: "Ad creative & media buying",
    headline: ["Better creative.", "Smarter ads."],
    description: "Ad creative and media buying for ecommerce brands and growing businesses. One team. Clear next steps. Less back-and-forth.",
    note: "More time for your business. A clear plan for your ads.",
    // Hero collage: each creative is shown as a sponsored post in the ad jungle.
    ads: [
      { src: "/creatives/sheko.webp", brand: "SHEKO", cta: "Shop now", width: 1080, height: 1920 },
      { src: "/creatives/campaigns/cruncho/cover.avif", brand: "Cruncho", cta: "Order now", width: 1080, height: 1340 },
      { src: "/creatives/ornevia.webp", brand: "Ornevia", cta: "Learn more", width: 1080, height: 1920 },
      { src: "/creatives/campaigns/solv/cover.avif", brand: "Solv", cta: "Shop now", width: 1080, height: 1609 },
      { src: "/creatives/moments-candles.webp", brand: "Moments & Candles", cta: "Shop now", width: 1080, height: 1350 },
    ],
    video: {
      src: "",
      poster: "",
      label: "Meet Gecko Media",
      pending: "Our introduction video is coming soon. In the meantime, explore our work or book a call.",
      unavailable: "The video couldn’t load. Explore our work or book a call instead.",
    },
    chapters: [
      { title: "Start with your business.", subtitle: "01 / Understand the goal", description: "Before we make a single ad, we learn what you sell, who buys it, and what growth means for you." },
      { title: "Give every ad a purpose.", subtitle: "02 / Create and test", description: "Each concept carries a clear message and a hypothesis, so every test teaches us something." },
      { title: "Learn. Improve. Repeat.", subtitle: "03 / Follow the performance", description: "We read the results, explain them in plain language, and decide together what comes next." },
    ],
  },
  partners: ["Amazon", "PepsiCo", "Johnson’s", "Cruncho", "Lume", "Solv", "Morf"],
  manifesto: {
    eyebrow: "A partner for the long run",
    before: "Your growth shouldn’t mean",
    accent: "more overhead.",
    description:
      "We bring creative strategy and media buying together, so your ads and your budget work toward the same goal. We handle execution, keep feedback focused, and use performance data to decide what to improve next.",
  },
  workIntro: {
    eyebrow: "Our work",
    title: "Creative built",
    accent: "to stop the scroll.",
    note: "Four creative approaches across ecommerce categories. Open any project to see the full campaign.",
  },
  workNiches,
  work: workProjects,
  servicesIntro: {
    eyebrow: "Services",
    title: "Creative, media & brand.",
    accent: "All under one roof.",
    description:
      "For founders and lean marketing teams who need a partner to handle the work, explain the performance, and keep improving.",
  },
  services: [
    {
      title: "Ad creative",
      description:
        "Turn your offer into image and video ads with clear hooks and a reason to act. We use performance insights to guide new concepts and variations.",
      tags: ["Creative strategy", "Image & video ads", "Creative testing"],
      cta: "Get better creative",
    },
    {
      title: "Media buying",
      description:
        "Put your budget behind a clear plan. We manage campaigns, analyze what’s working, and explain what we’ll test or change next.",
      tags: ["Campaign management", "Optimization", "Performance reporting"],
      cta: "Spend smarter",
    },
    {
      title: "Branding",
      description:
        "Make your value easier to understand and your brand easier to recognize. Clear positioning, messaging, and visual identity give your marketing a consistent foundation.",
      tags: ["Positioning", "Brand messaging", "Visual identity"],
      cta: "Build your brand",
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
  commitments: [
    {
      quote:
        "You shouldn’t have to manage your agency to keep things moving. We keep feedback focused, next steps clear, and the day-to-day work with us.",
      title: "Less overhead",
    },
    {
      quote:
        "Every test should teach us something. We look at what’s working, what isn’t, and what that means for your next creative or campaign decision.",
      title: "Clear decisions",
    },
    {
      quote:
        "We want to understand your business well enough to keep making better decisions together. Your goals guide the work, from the first brief to the next stage of growth.",
      title: "A lasting partnership",
    },
  ],
  process: [
    {
      title: "Discovery call",
      summary: "A free 30-minute conversation about what you sell, how you advertise today, and where you’re getting stuck.",
      outcome: "An honest answer on whether we’re the right fit.",
    },
    {
      title: "Audit & plan",
      summary: "We review your current ads, offer, and landing pages, then decide what to fix first and what to test.",
      outcome: "A clear plan with priorities, test ideas, and budget direction.",
    },
    {
      title: "Creative production",
      summary: "Concepts, hooks, scripts, and finished image and video ads, made for the placements you run.",
      outcome: "Ready-to-launch ads, with one focused round of feedback.",
    },
    {
      title: "Launch & test",
      summary: "Campaigns structured to learn quickly. Every ad goes live with a hypothesis, not a hunch.",
      outcome: "Live campaigns and a test log you can follow.",
    },
    {
      title: "Report & improve",
      summary: "Plain-language reporting on what worked, what didn’t, and what we’ll change next. Then we repeat.",
      outcome: "Better ads every round, and fewer surprises.",
    },
  ],
  faq: [
    {
      q: "Who do you work with?",
      a: "Ecommerce brands and growing businesses, usually founders or lean marketing teams who want one partner to handle creative and media buying without adding more management overhead.",
    },
    {
      q: "Can we hire you for creative only, or media buying only?",
      a: "Yes. Ad creative, media buying, and branding work on their own. They tend to work best together, because the same team that reads the results makes the next round of ads.",
    },
    {
      q: "How involved do we need to be?",
      a: "We keep feedback focused and the day-to-day work with us. Expect a kickoff, clear review points for creative, and regular updates, not a stream of small requests.",
    },
    {
      q: "How do you report on performance?",
      a: "In plain language. Each report explains what we tested, what we learned, and what we plan to change next, so the numbers always come with a decision.",
    },
    {
      q: "What does the first call cost?",
      a: "Nothing. The 30-minute discovery call is free. If we’re not the right fit, we’ll tell you on the call.",
    },
    {
      q: "How is pricing set?",
      a: "It depends on scope: which services you need, how much creative you want each month, and the size of your ad accounts. We recommend an option after the discovery call.",
    },
  ],
  contact: {
    eyebrow: "Let’s find your next step",
    title: "Ready for",
    accent: "better ads?",
    description:
      "Tell us what you sell, how you’re advertising, and where you’re getting stuck. We’ll discuss how creative, media buying, or branding could help—and whether we’re the right fit.",
    cta: "Book a call",
    email: "hello@geckomedia.net",
    calendarUrl: process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/geckomedia/30min",
    meetingTitle: "Let’s talk growth.",
    duration: "30 minutes",
    meetingType: "Microsoft Teams",
    meetingDescription: "A conversation about your goals, current ads, and where you need support.",
    calendarTitle: "Book a call with Gecko Media",
  },
  footer: {
    note: "Creative strategy. Media buying. A partner for the long run.",
    copyright: "Gecko Media. All rights reserved.",
  },
};
