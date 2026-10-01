// Replace copy and media here; layout and motion live separately.
export type Project = {
  id: string;
  client: string;
  title: string;
  category: string;
  year: string;
  art: "morrow" | "sumi" | "form" | "rove" | "mono" | "hush";
  image: string;
  imageAlt: string;
  brief: string;
  deliverables: string[];
  sample: boolean;
};
export const site = {
  brand: {
    name: "gecko media",
    logo: "/gecko-logo.png",
    description: "Independent minds. Unforgettable creative.",
    title: "Gecko Media — A little different. A lot more memorable.",
  },
  nav: [
    { label: "Our work", href: "#work" },
    { label: "What we do", href: "#services" },
    { label: "Kind words", href: "#reviews" },
  ],
  labels: {
    project: "Start a project",
    work: "Explore the work",
    close: "Close project",
    menu: "Menu",
    previous: "Previous review",
    next: "Next review",
    top: "Back to top",
    sample: "Concept project",
    details: "The idea",
    deliverables: "What went into it",
    emptyWork: "More work is on its way.",
    allWork: "All work",
    skip: "Skip to content",
    filter: "Filter projects",
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation",
    featured: "01 — A FRESH PERSPECTIVE ↘",
    signature: "MADE TO STICK. ↗",
  },
  hero: {
    creatives: {
      left: "/creatives/sheko.webp",
      right: "/creatives/ornevia.webp",
      bottom: "/creatives/moments-candles.webp",
    },
    eyebrow: "Independent creative & advertising studio",
    headline: ["Made to", "stand out."],
    posterTitle: "Creative that moves.",
    posterSubtitle: "gecko media",
    description: "Ads worth watching. Creative worth remembering.",
    note: "Good people. Bold ideas. Real impact.",
    reelLabel: "Inside the gecko mind",
    previewLabel: "Concept reel / placeholder artwork",
    scrollLabel: "Scroll to get a little curious",
    sticker: "gecko",
    stickerNote: "state of mind.",
    reelFooter: "GM® / CREATIVE IN MOTION",
    video: {
      src: "",
      poster: "",
      label: "Watch our VSL",
      pending: "Your VSL will play here once the video is added.",
      unavailable: "The reel couldn’t load. Explore our work below.",
    },
    chapters: [
      {
        title: "Different by design.",
        subtitle: "01 / Find the unexpected",
        word: "think.",
      },
      {
        title: "Make a little noise.",
        subtitle: "02 / Turn heads",
        word: "make.",
      },
      {
        title: "Leave a lasting mark.",
        subtitle: "03 / Move things forward",
        word: "move.",
      },
    ],
  },
  manifesto: {
    eyebrow: "Small studio. Big gecko energy.",
    before: "The world has enough",
    accent: "ordinary.",
    after: "Let’s make something that sticks.",
    description:
      "We’re an independent creative crew bringing fresh eyes, sharp strategy, and a healthy disregard for the expected. From first idea to final frame, we make every impression count.",
  },
  workIntro: {
    eyebrow: "A few things from our world",
    title: "Less expected.",
    accent: "More remembered.",
    note: "Selected concept work",
    detailLabel: "Project preview",
  },
  work: [
    {
      id: "morrow",
      client: "MORROW",
      title: "A brighter kind of everyday.",
      category: "Brand & strategy",
      year: "2026",
      art: "morrow",
      image: "",
      imageAlt: "Morrow concept: bright green botanical packaging",
      brief:
        "A fresh identity for an everyday essentials concept. Optimistic color, unapologetic type, and a little unexpected energy turn a daily ritual into something worth noticing.",
      deliverables: [
        "Creative direction",
        "Visual identity",
        "Packaging concept",
      ],
      sample: true,
    },
    {
      id: "sumi",
      client: "sumi",
      title: "Good taste. Great timing.",
      category: "Content & social",
      year: "2026",
      art: "sumi",
      image: "",
      imageAlt: "Sumi concept: graphic citrus orange food campaign",
      brief:
        "A social-first food concept with a generous helping of personality. A modular visual world designed to move from the feed to the street.",
      deliverables: ["Campaign concept", "Social content", "Art direction"],
      sample: true,
    },
    {
      id: "form",
      client: "FORM",
      title: "Find your own rhythm.",
      category: "Film & motion",
      year: "2026",
      art: "form",
      image: "",
      imageAlt: "Form concept: monochrome sculptural movement poster",
      brief:
        "An expressive motion identity exploring the space between structure and spontaneity. Simple forms become a flexible language for a culture-led brand.",
      deliverables: ["Motion direction", "Film treatment", "Campaign identity"],
      sample: true,
    },
    {
      id: "rove",
      client: "rove®",
      title: "Anywhere but ordinary.",
      category: "Brand & strategy",
      year: "2026",
      art: "rove",
      image: "",
      imageAlt: "Rove concept: cyan travel identity with a bold yellow sun",
      brief:
        "A travel concept built for the curious. A bright, open identity celebrates taking the long way and finding something new.",
      deliverables: [
        "Brand positioning",
        "Visual identity",
        "Digital campaign",
      ],
      sample: true,
    },
    {
      id: "mono",
      client: "MONO",
      title: "Turn the everyday up.",
      category: "Content & social",
      year: "2026",
      art: "mono",
      image: "",
      imageAlt: "Mono concept: electric yellow typographic campaign",
      brief:
        "A punchy campaign system that gives everyday objects main-character energy. Built to be bold, adaptable, and instantly recognizable on a small screen.",
      deliverables: ["Paid social concept", "Copywriting", "Content system"],
      sample: true,
    },
    {
      id: "hush",
      client: "hush.",
      title: "A moment to feel something.",
      category: "Film & motion",
      year: "2026",
      art: "hush",
      image: "",
      imageAlt: "Hush concept: soft blue abstract waves",
      brief:
        "A slower, more considered creative concept. Flowing forms and quiet typography create space for a brand story to breathe.",
      deliverables: ["Film concept", "Storyboarding", "Motion system"],
      sample: true,
    },
  ] satisfies Project[],
  servicesIntro: {
    eyebrow: "From the spark to the scroll",
    title: "Good ideas.",
    accent: "Everywhere.",
    description:
      "One curious crew. Many ways to make your brand impossible to ignore.",
  },
  services: [
    {
      title: "Brand & strategy",
      description:
        "Find your point of difference. Give it a voice, a look, and a world of its own.",
      tags: ["Positioning", "Identity", "Creative direction"],
    },
    {
      title: "Content & social",
      description:
        "Made for the feed. Remembered beyond it. Content with a reason to stop scrolling.",
      tags: ["Paid social", "UGC", "Campaigns"],
    },
    {
      title: "Film & motion",
      description:
        "Stories that move. From the first frame to the feeling that stays with you.",
      tags: ["Production", "Animation", "Editing"],
    },
  ],
  impact: {
    label: "Room for your real results",
    disclaimer: "Illustrative figures — not client performance claims",
    stats: [
      { value: "38M+", label: "Impressions made" },
      { value: "4.8×", label: "Creative lift" },
      { value: "19+", label: "Brands in motion" },
    ],
  },
  reviewsIntro: {
    eyebrow: "Good work. Better company.",
    title: "The feeling",
    accent: "is mutual.",
    sampleLabel: "Sample testimonials",
  },
  reviews: [
    {
      quote:
        "They found the sharpest version of our story. Then made it impossible to ignore.",
      name: "Amelia Sharp",
      role: "Founder, Morrow",
      initials: "AS",
    },
    {
      quote:
        "Fresh thinking, real care, and creative that makes you stop mid-scroll. Exactly what we needed.",
      name: "Tori Bell",
      role: "Growth Lead, Sumi",
      initials: "TB",
    },
    {
      quote:
        "The kind of creative partner that makes you excited to see what happens next.",
      name: "Ravi Sol",
      role: "CMO, Rove",
      initials: "RS",
    },
  ],
  contact: {
    eyebrow: "Have a wonderfully wild idea?",
    title: "Let’s make",
    accent: "some noise.",
    description:
      "Bring the brief, the big ambition, or the scribble on a napkin. We’ll bring the curiosity.",
    cta: "Let’s talk",
    calendarUrl: process.env.NEXT_PUBLIC_CALENDLY_URL || "",
    preview: "Booking details coming soon",
    previewNote:
      "Calendar preview — connect your Calendly link to enable booking.",
    meetingTitle: "Let’s talk creative.",
    duration: "30 minutes",
    meetingType: "Video call",
    meetingDescription: "Tell us about your brand and what you want to create.",
    selectDate: "Select a date & time",
    calendarTitle: "Book a call with Gecko Media",
  },
  footer: {
    note: "Independent by nature. Creative by instinct.",
    copyright: "Gecko Media. All rights reserved.",
    links: [] as { label: string; href: string }[],
  },
};
