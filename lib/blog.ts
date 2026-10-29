// Blog posts. Inline links use [text](/path) and are rendered by components/prose.tsx.
export type Block =
  | { type: "p" | "h2" | "callout"; text: string }
  | { type: "ul" | "ol"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  category: string;
  published: string;
  updated?: string;
  cover: string;
  coverAlt: string;
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "creative-testing-process-for-ecommerce-ads",
    title: "How to build a creative testing process for your ecommerce ads",
    shortTitle: "A creative testing process",
    description:
      "A practical, step-by-step creative testing process for ecommerce brands: what to test first, how to structure tests, and how to turn results into better ads.",
    category: "Ad creative",
    published: "2026-10-29",
    cover: "/creatives/campaigns/solv/cover.avif",
    coverAlt: "Solv focus mints tin encased in a clear block of ice",
    body: [
      { type: "p", text: "Most ecommerce brands don’t have a creative problem. They have a learning problem. New ads go live, some do well, some don’t, and nobody can say why. The next batch is a guess, so results stay random. A creative testing process fixes that. Each ad becomes a small experiment, and each experiment makes the next round of creative better." },
      { type: "p", text: "Here is the process we use, simplified so you can run it with or without an agency." },
      { type: "h2", text: "1. Start with one clear question per test" },
      { type: "p", text: "Every test should answer a single question. “Does a problem-first hook beat a product-first hook for this audience?” is a good question. “Will these five new ads work?” isn’t, because when one wins you won’t know which difference made it win." },
      { type: "p", text: "Write the question down before you brief the creative. It keeps the team honest and makes the results much easier to read." },
      { type: "h2", text: "2. Test the big levers before the small ones" },
      { type: "p", text: "Not every variable is worth testing. Button colours and small copy tweaks rarely change results on their own. Test the elements that change how someone *feels* about the offer first:" },
      { type: "ul", items: [
        "**The angle:** the reason someone should care, such as saving time, looking good, or feeling in control.",
        "**The hook:** the first second of a video or the headline on a static ad.",
        "**The format:** a founder talking to camera, a product demo, user-generated content, or a designed static.",
        "**The offer:** a bundle, a free gift, or a guarantee versus a straight price.",
      ] },
      { type: "p", text: "Once you’ve found an angle and format that work, test smaller variations inside them: new hooks, different first frames, alternative calls to action." },
      { type: "h2", text: "3. Keep everything else the same" },
      { type: "p", text: "If you change the audience, the budget, and the creative at the same time, you can’t learn anything from the result. Run creative tests with a stable setup: same campaign objective, similar audiences, and enough budget per ad for each one to get a fair read." },
      { type: "callout", text: "A simple rule: change one variable at a time, and give each version enough spend to reach a decision before you judge it." },
      { type: "h2", text: "4. Decide what “winning” means before launch" },
      { type: "p", text: "Pick the metric that answers your question and agree on it up front. For a hook test, thumb-stop rate or hook rate (3-second views divided by impressions) tells you whether people stopped scrolling. For an offer test, look further down the funnel: cost per purchase or return on ad spend." },
      { type: "p", text: "Agreeing in advance stops anyone from choosing the metric that flatters their favourite ad after the fact." },
      { type: "h2", text: "5. Log every test, especially the losers" },
      { type: "p", text: "Keep a simple test log with the date, the question, the variants, the result, and one sentence on what you learned. After a few months it becomes your most valuable creative asset. It shows what your customers respond to, and it stops you from re-testing ideas that already failed." },
      { type: "h2", text: "6. Turn learnings into the next brief" },
      { type: "p", text: "This is where most testing processes break. Results get reported, but they never reach the people making the next ads. Close the loop: every new creative brief should reference what the last tests taught you. That’s why we keep creative production and media buying in [one team](/about). The people reading the numbers are the same people making the next round of ads." },
      { type: "h2", text: "A testing rhythm that works" },
      { type: "ol", items: [
        "Review last cycle’s results and update the test log.",
        "Choose one or two questions for the next cycle.",
        "Brief and produce the variants.",
        "Launch with a stable setup and agreed success metric.",
        "Read the results, document the learning, and repeat.",
      ] },
      { type: "p", text: "Want to see how this fits into a full engagement? Our [process page](/process) walks through each stage, or you can [book a free call](/contact) and we’ll look at your current ads together." },
    ],
  },
  {
    slug: "ad-creative-and-media-buying-one-team",
    title: "Why ad creative and media buying work better under one team",
    shortTitle: "Creative + media in one team",
    description:
      "Splitting ad creative and media buying across agencies slows learning and blurs accountability. Here’s why one team gets better results, and what to look for.",
    category: "Media buying",
    published: "2026-10-29",
    cover: "/creatives/campaigns/cruncho/cover.avif",
    coverAlt: "A green Cruncho crisp packet surrounded by crisps",
    body: [
      { type: "p", text: "Many growing brands end up with a split setup. One agency or freelancer makes the ads, and another runs the campaigns. On paper, each specialist does what they do best. In practice, the gap between them is often where performance gets lost." },
      { type: "h2", text: "The hand-off problem" },
      { type: "p", text: "Paid social platforms now do much of the targeting themselves. That makes the creative the biggest lever you control. Your ads decide who stops, who clicks, and who buys. When the people buying media can’t shape the creative, and the people making creative can’t see the data, every improvement has to cross a hand-off." },
      { type: "p", text: "Hand-offs are slow. Insights get compressed into a monthly report, briefs lose context, and by the time new creative arrives the original question is weeks old." },
      { type: "h2", text: "Blurry accountability" },
      { type: "p", text: "When results dip in a split setup, the conversation often turns into finger-pointing. The media buyer says the creative is tired. The creative team says the targeting is wrong. You end up managing the relationship between your partners instead of growing your business." },
      { type: "callout", text: "One team means one owner for the outcome. If an ad isn’t working, the people who made it are the people who need to fix it." },
      { type: "h2", text: "What one team does differently" },
      { type: "ul", items: [
        "**Faster feedback loops.** The team reading the results writes the next brief, often the same week.",
        "**Creative made for the account.** Ads are produced with the campaign structure, placements, and test plan already in mind.",
        "**Clearer reporting.** Numbers come with a creative explanation and a plan for what to change next.",
        "**Less management for you.** One set of check-ins, one point of contact, and focused feedback rounds.",
      ] },
      { type: "h2", text: "When a split setup still makes sense" },
      { type: "p", text: "If you have a strong in-house creative team, a separate media buyer can work well, as long as both share one test plan and meet regularly. Likewise, a brand with excellent in-house media buying might only need extra creative capacity. The key is a shared feedback loop, not who sends the invoice." },
      { type: "h2", text: "What to look for in a combined partner" },
      { type: "ol", items: [
        "They ask about your business, margins, and customers before talking about ads.",
        "They can explain a creative testing process in plain language.",
        "Their reports end with decisions, not just charts.",
        "They tell you what they *won’t* do, and when they’re not the right fit.",
      ] },
      { type: "p", text: "That’s the model we built Gecko Media around: [ad creative and media buying](/#services) in one team, with a [clear process](/process) from the first call. If you’re weighing up your options, [book a free 30-minute call](/contact) and we’ll give you an honest view." },
    ],
  },
  {
    slug: "how-to-brief-an-ad-creative-agency",
    title: "How to brief an ad creative agency (and get better ads back)",
    shortTitle: "How to brief a creative agency",
    description:
      "A good creative brief saves rounds of revisions. Use this checklist to brief an ad creative agency on your product, customer, offer, and goals.",
    category: "Branding",
    published: "2026-10-29",
    cover: "/creatives/campaigns/lume/cover.avif",
    coverAlt: "Purple Lume deodorant beside exercise accessories in soft sunlight",
    body: [
      { type: "p", text: "The quality of the ads you get back depends heavily on the brief you give. A vague brief leads to safe, generic creative and several rounds of “not quite”. A clear brief gives the creative team room to take smart risks. Here’s what to include." },
      { type: "h2", text: "1. The business goal, in numbers if possible" },
      { type: "p", text: "Start with what success looks like for the business, not just for the ad. “Launch the new bundle and make it 20% of orders this quarter” gives far more direction than “make some ads for the bundle”. If you have target costs per purchase or a return-on-ad-spend floor, share them." },
      { type: "h2", text: "2. Who you’re talking to" },
      { type: "p", text: "Describe your best customers as people, not demographics. What were they doing just before they found you? What almost stopped them from buying? Customer reviews, support emails, and post-purchase surveys are gold here. Paste the best quotes straight into the brief." },
      { type: "h2", text: "3. The product truth" },
      { type: "p", text: "What does the product actually do, and why is it better than the alternative, including doing nothing? List the proof you have, such as ingredients, materials, guarantees, press, or awards, and anything legally sensitive that the ads must avoid claiming." },
      { type: "h2", text: "4. The offer and where people land" },
      { type: "p", text: "Spell out the exact offer, how long it runs, and the landing page. The ad and the page should feel like one continuous experience. If the page isn’t ready, say so. It changes what the creative can promise." },
      { type: "h2", text: "5. Brand guardrails, without over-constraining" },
      { type: "p", text: "Share your logo files, colours, fonts, and tone of voice, plus a few ads you love and a few you’d never run. Then leave room to experiment. The best-performing ads often look less polished than brand campaigns, and that’s fine." },
      { type: "callout", text: "Tip: tell the agency which rules are fixed (logo use, claims) and which are flexible (layout, style, pacing). It speeds up approvals enormously." },
      { type: "h2", text: "6. What you’ve already learned" },
      { type: "p", text: "Share your past winners and losers, with numbers if you have them. Even a rough “this UGC video did well, these studio shots didn’t” saves weeks. If you don’t have this yet, a [creative testing process](/blog/creative-testing-process-for-ecommerce-ads) will build it for you." },
      { type: "h2", text: "7. Practicalities" },
      { type: "ul", items: [
        "Formats and placements needed (for example 9:16 video, 4:5 static, 1:1 carousel).",
        "Product samples, existing footage, and photography the team can use.",
        "Who gives feedback, and how many review rounds are planned.",
        "Deadlines for first drafts and launch.",
      ] },
      { type: "h2", text: "A one-page brief template" },
      { type: "ol", items: [
        "Goal and success metric",
        "Customer and their main objection",
        "Product truth and proof points",
        "Offer and landing page",
        "Brand guardrails (fixed vs. flexible)",
        "Past learnings",
        "Formats, assets, feedback, and deadlines",
      ] },
      { type: "p", text: "When you work with us, we build this brief together during the [audit and planning stage](/process), so you don’t start from a blank page. [Book a call](/contact) to get started." },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const readingMinutes = (post: Post) => {
  const words = post.body
    .flatMap((b) => ("text" in b ? [b.text] : b.items))
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
};
