import type { WritingEntry } from "@/content/pdfWriting";

export interface EssayEntry extends WritingEntry {
  body: string[];
  source: "essay";
}

export const essays: EssayEntry[] = [
  {
    title: "AI Companies May Have the World's First Real-Time Map of Startup Formation",
    date: "2026-06-09",
    description:
      "Founders are leaving behind a real-time record of how they think, learn, and build. AI companies may be the first institutions able to see it.",
    readingTime: "5 min read",
    href: "/posts/ai-companies-real-time-map-startup-formation",
    featured: true,
    source: "essay",
    body: [
      "One of the more interesting things I've realized over the past few months is that AI companies may have visibility into startup formation that no investor has ever had.",
      "Venture capital has always been a prediction problem. Investors meet founders for a few hours and try to answer a deceptively difficult question: Is this person or team going to build something important? To make that prediction, they rely on a handful of proxies – a resume, an elite school, previous prominent employers, a warm introduction, a pitch deck, and a few high-level meetings.",
      "The problem is that startups aren't built in snapshots; they're built through thousands of small decisions made in isolation over months and years. Decisions about customers, pricing, product direction, technical architecture, distribution, fundraising, and strategy all happen when nobody is watching. Until recently, that messy, iterative process was largely invisible to the outside world.",
      "What's changed is that founders now spend an enormous amount of time talking to AI.",
      "Over the past several months, I've found myself using ChatGPT for everything from product strategy and technical architecture to customer discovery and fundraising preparation. It's become a way to rapidly learn new markets, pressure-test assumptions, and explore ideas before taking them into the real world. I’ve prompted it to act as my principal UX designer, general counsel, compliance officer, and target customer. I'm hardly unique – founders everywhere are doing some version of this.",
      "In the process, founders are leaving behind something that has never really existed before: a longitudinal record of how they think. Not just what they decided, but how they arrived there.",
      "This isn't what they say in a high-stakes pitch meeting or the polished story they tell after the fact; it is the actual process. It captures the dead ends, the pivots, the uncertainty, and the learning in real time.",
      "Consider three distinct founder trajectories.",
      "The first spends months working through marketplace dynamics, customer problems, pricing questions, technical tradeoffs, and distribution strategy. Early assumptions get discarded as new information arrives, customer feedback changes the roadmap, and new evidence replaces old beliefs. Their conversations build on one another as progress compounds.",
      "The second founder sounds equally impressive. The questions are thoughtful, the frameworks are sophisticated, and the market analysis is detailed. But six months later, they're still circling the same core issues. New ideas are constantly explored, but little evidence accumulates. From the outside it looks like progress, but over a longer timeline, it looks more like motion.",
      "The third founder starts with what appears to be a terrible idea. The initial thinking is scattered, the opportunity sounds strange, and the strategy lacks coherence. But over time, something interesting happens: customer conversations narrow the scope, bad assumptions get eliminated, and the idea becomes focused. What originally looked chaotic gradually becomes coherent.",
      "To an investor seeing each founder for the first time, all three might look remarkably similar. They may have comparable credentials, comparable resumes, and comparable pitch decks.",
      "But an AI system doesn't experience founders as snapshots; it experiences them as sequences. And the sequence may be where the signal lives.",
      "If you look at a single conversation, you probably learn very little. The interesting part is what happens across hundreds of interactions.",
      "A founder asks about pricing. Two weeks later they return with customer interviews. A month later they've narrowed the target market. Six weeks later they're dealing with implementation constraints created by earlier decisions.",
      "You aren't just observing answers anymore. You're observing learning. You're observing how someone updates their beliefs when confronted with new information, whether they make progress or remain stuck, and how quickly they move from theory to evidence.",
      "For the first time, it may be possible to observe company formation itself rather than simply its outcomes.",
      "Historically, nobody had access to this kind of data. Investors saw founders when they were raising money, accelerators reviewed applications, and recruiters evaluated resumes. Everyone operated from occasional snapshots.",
      "AI systems sit much closer to the actual work. They see founders wrestling with customer problems before a product exists, they see strategy evolve before revenue exists, and they see uncertainty before it becomes conviction. Unlike a conversation with a human advisor, much of that history is retained and incorporated into future interactions.",
      "That creates an interesting possibility. Imagine training a model not on founders versus non-founders, but on founders who all looked promising at the outset. Some eventually built meaningful companies; most didn't.",
      "Would patterns emerge? Could a model identify signals that are invisible inside a pitch deck, or recognize trajectories rather than credentials? We don't know yet, and there is a strong argument for skepticism.",
      "Venture-scale outcomes are driven by outliers. The founders who create extraordinary companies often look unusual at the beginning, and many of the most important businesses in history appeared confusing, irrational, or outright bad when viewed through the lens of conventional wisdom.",
      "A model trained on historical founder behavior might become very good at identifying people who resemble previous winners, but it might also become exceptionally good at missing the next category-defining founder.",
      "That's the paradox: the same system that improves prediction could also reinforce consensus.",
      "Still, the underlying shift feels important. We've seen versions of this structural advantage before. LinkedIn created a map of professional identity. GitHub created a map of software creation. AI companies may be building something entirely different: a map of how ambitious people think, learn, and build over time.",
      "For decades, investors have searched for signals in schools, resumes, former employers, and personal networks. Maybe those proxies only existed because we had no direct way to observe the work itself.",
      "AI changes that.",
      "For the first time, the work itself may be observable.",
      "The question isn't whether these systems will learn something useful from founder behavior. It's whether they're already learning what investors have been trying to figure out all along."
    ]
  }
];
