import { getPdfWritingEntries, type WritingEntry } from "@/content/pdfWriting";

interface EssayEntry extends WritingEntry {
  body: string[];
  source: "essay";
}

export const site = {
  name: "Jon Cristinziano",
  title: "Writing | Jon Cristinziano",
  description:
    "Essays on trust infrastructure, marketplaces, product safety, AI, and company building.",
  url: "https://joncristinziano.com",
  email: "joncristinziano@gmail.com",
  photo: "/jon-cristinziano.jpg",
  bio:
    "I write about technology, markets, AI, and whatever else I'm trying to understand. My work has mostly sat where product, operations, and customer trust meet.",
  links: {
    linkedin: "https://www.linkedin.com/in/jonathan-cristinziano/",
    github: "https://github.com/jcristinziano1",
    twitter: "https://x.com/jcristinziano"
  }
};

export const essays: EssayEntry[] = [
  {
    title: "AI Companies May Have the World's First Real-Time Map of Startup Formation",
    date: "2026-06-05",
    description:
      "AI systems may be creating a longitudinal record of how founders think, learn, react, and make decisions while building companies.",
    readingTime: "5 min read",
    href: "/posts/ai-companies-real-time-map-startup-formation",
    featured: true,
    source: "essay",
    body: [
      "For decades, venture capital has operated on remarkably thin data.",
      "Investors evaluate early-stage founders through a series of static snapshots: a polished resume, a warm introduction, a pitch deck, and a handful of meetings. From those brief interactions, they try to predict a difficult question: can this team build a defining company?",
      "The problem is that startups aren't built in snapshots. They are built through thousands of micro-decisions made in isolation over months and years as new information is received, assumptions are challenged, and strategies evolve. Until recently, that messy, iterative process was almost completely invisible to the outside world.",
      "Artificial intelligence may be changing that.",
      "Every day, founders spend hours interacting with large language models. They use these systems to pressure-test strategy, explore product decisions, debug technical challenges, prepare customer conversations, and evaluate tradeoffs. In doing so, they are leaving behind an unprecedented digital artifact: a longitudinal record of how they think, learn, react, and make decisions while building a company.",
      "Consider three founder trajectories.",
      "The Executor. This founder spends months hashing out marketplace liquidity, enterprise procurement workflows, pricing strategy, and technical architecture. Their conversations build sequentially. Early assumptions are ruthlessly discarded based on customer feedback and market evidence. Each new discussion incorporates information gathered from the last. The trajectory shows clear, compounding momentum.",
      "The Loop. This founder asks equally sophisticated questions. The technical architecture sounds impressive. The market analysis is thoughtful. Yet the conversation repeatedly returns to the same unresolved strategic questions. New frameworks are explored, but little evidence accumulates. Progress appears substantial until viewed across a longer timeline.",
      "The Dark Horse. This founder begins with a scattered and unconventional premise. To a traditional investor, the initial pitch might sound chaotic. But over time, a distinct pattern emerges. Customer feedback narrows the scope. New information systematically replaces old assumptions. What initially appeared random gradually becomes coherent.",
      "To a venture capitalist sitting in a partner meeting, all three founders might look nearly identical. They may have the same credentials, the same pedigree, and the same polished deck.",
      "But an AI system observing millions of such trajectories continuously doesn't see a snapshot. It sees a sequence.",
      "The value isn't necessarily contained within any individual conversation. It's embedded in the progression itself.",
      "A founder asks about pricing.",
      "Two weeks later they return with customer feedback.",
      "A month later they've narrowed their target market.",
      "Six weeks later they're wrestling with implementation constraints created by earlier decisions.",
      "Over time, those decisions form a trajectory.",
      "For the first time, it may be possible to observe company formation itself rather than simply its outcomes.",
      "Historically, no institution had access to this kind of longitudinal data. Venture firms saw founders when they needed capital. Accelerators reviewed applications. Recruiters evaluated resumes. Everyone operated from isolated snapshots.",
      "AI systems sit much closer to the process.",
      "They observe founders wrestling with customer problems before a product exists. They see strategy evolve before a company has revenue. They observe uncertainty before it becomes conviction.",
      "This raises an interesting possibility.",
      "Imagine training a model not on founders versus non-founders, but on founders who all appeared promising at the outset.",
      "Some eventually built meaningful companies.",
      "Most did not.",
      "Could an AI system identify patterns that correlate with future outcomes? Could it detect signals that are invisible in a pitch deck? Could it recognize trajectories rather than credentials?",
      "The answers remain unclear.",
      "But unlike previous eras, the underlying data may finally exist.",
      "We've seen this shift in information advantage before.",
      "LinkedIn mapped professional identity.",
      "GitHub mapped software creation.",
      "For the first time, AI companies may possess enough longitudinal behavioral data to observe company formation itself.",
      "There is, however, an important counterargument.",
      "Venture-scale outcomes are driven by outliers. The founders who create extraordinary companies rarely resemble the average successful founder in the beginning. Many of history's most important businesses looked unconventional, confusing, or outright irrational in their earliest stages.",
      "If models are trained on historical behavioral patterns, they may become exceptionally good at identifying founders who resemble past winners while systematically overlooking those who don't.",
      "In other words, the same system that improves prediction could also suppress non-consensus thinking.",
      "The most interesting question, then, is not whether behavioral data can be monetized. It almost certainly can.",
      "The more interesting question is whether behavioral data eventually becomes a better predictor of entrepreneurial outcomes than the proxies we've relied on for decades.",
      "For generations, investors have searched for signals in schools, resumes, prior employers, and personal networks.",
      "AI systems may be revealing a different source of signal entirely: not who founders are, but how they build.",
      "The strongest signal may have been hidden in the work all along."
    ]
  }
];

export const writingEntries = [...essays, ...getPdfWritingEntries()].sort(
  (a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title)
);

export const projects = [
  {
    title: "Trust Infrastructure Research",
    status: "Exploring",
    description:
      "Ongoing thinking on how testing, certification, and compliance data can become more useful to software-mediated markets.",
    imageAlt: "Abstract research notes placeholder"
  }
];

export const timeline = [
  {
    title: "NC State Chemical Engineering",
    period: "Foundation",
    description:
      "Built a technical base in chemical engineering, systems thinking, and applied problem solving."
  },
  {
    title: "Amazon",
    period: "Product Safety",
    description:
      "Led work at the intersection of product safety, marketplace trust, compliance operations, and scalable customer protection."
  },
  {
    title: "UVA Darden MBA",
    period: "Business Formation",
    description:
      "Expanded from technical and operational leadership into company strategy, finance, and entrepreneurship."
  },
  {
    title: "Independent Work",
    period: "Current",
    description:
      "Researching trust infrastructure, AI-enabled company building, product safety, and software-mediated assurance."
  }
];

export const experience = [
  {
    company: "Amazon",
    location: "San Francisco, CA",
    role: "Senior Product Manager, Technical, Customer & Partner Trust",
    period: "2025 - Present",
    summary:
      "Led product strategy for AI/ML-based customer safety and risk assessment systems for Amazon's third-party seller business.",
    details: [
      "Authored and drove adoption of a three-year product vision to transform Amazon's reactive safety operations from a manual, linear-cost investigation model into an integrated, five-system AI architecture, spanning incident detection, unsupervised risk clustering, a continuously enriched knowledge graph, agentic investigation and enforcement, and expert-in-the-loop governance.",
      "Led development and launch of a global, two-stage AI classification pipeline that labeled safety incidents from 90M+ weekly customer feedback; the design effectively filtered 98% of feedback volume, saving ~$13M annually in LLM inference costs while reducing false negatives by 22% and false positives by 77% versus the legacy solution.",
      "Spearheaded an unsupervised ML clustering system for proactive product risk assessment that identified 592 risk clusters across 24 high-risk categories with 87% coverage of products tied to 2025 liability claims; built an LLM prototype to semantically map clusters to product safety categories for data-driven launch prioritization.",
      "Designed an agentic AI investigation engine that automates structured, multi-step product safety investigations, projected to eliminate ~$1.4M in annual cost-to-serve, improve decision consistency, and reduce time-to-remediation from days to minutes.",
      "Leveraged Claude and AWS (Lambda, S3, Bedrock, Step Functions) to rapidly prototype an LLM classifier that labeled 400K+ historical feedback entries, saving three months of operations labeling time and four weeks of engineering and applied science effort."
    ]
  },
  {
    company: "Amazon",
    location: "San Francisco, CA",
    role: "Senior Product Manager, Technical, People eXperience & Technology",
    period: "2023 - 2025",
    summary:
      "Contributed to the strategy and development of Amazon A to Z, the company's employee mobile and web experiences.",
    details: [
      "Developed product strategy and feature roadmaps for the internal mobile and web apps that enable Amazonians to manage all aspects of their employment: Scheduling, Pay, Benefits, Time-Off, and more, serving over 1.4M daily active users.",
      "Executed a comprehensive three-year strategy for a self-service product analytics platform that reduced undifferentiated data engineering and business intelligence efforts by 75%, with estimated three-year savings of $3.4M.",
      "Launched a unified client-side telemetry platform for 40+ web tenants that consolidated user behavioral and operational monitoring into a single solution, eliminating duplicative data collection systems and enabling near-real-time error detection and alarming via CloudWatch, reducing time-to-resolution for client-side issues by over 40%.",
      "Led a team of engineers in the delivery of a no-code customer journey analytics tool that enabled product managers to optimize employee experiences, reducing employee workflow completion times by 20%, with estimated year-one savings of $0.5M."
    ]
  },
  {
    company: "Uber",
    location: "Washington, DC",
    role: "Sr. Strategic Operations Manager, US Rideshare",
    period: "2022",
    summary:
      "Acted as Operations Lead for California taxi partnerships, coordinating across Product, Engineering, and BizDev teams.",
    details: [
      "Crafted the end-to-end driver and rider experience for a new taxi product offering in San Francisco that produced over $50M in annual gross bookings by 2024.",
      "Developed financial models that incorporated insurance costs, driver earnings, and local taxes/fees to inform partnership negotiations with third-party taxi service providers, including Curb.",
      "Calculated the minimum take rates needed to maintain parity with UberX financials and engineered creative cost-reduction solutions to maximize both Uber per-trip profitability and driver earnings.",
      "Coordinated a multi-week, phased product launch that included employee testing and an incremental ramp-up dependent on the successful accomplishment of key driver and rider side performance indicators."
    ]
  },
  {
    company: "Uber",
    location: "Washington, DC",
    role: "Strategic Operations Manager, US Rideshare",
    period: "2021 - 2022",
    summary:
      "Managed South US Ops ($150M in weekly bookings) on initiatives ranging from product launches to regulatory reporting.",
    details: [
      "Automated driver background check adjudication by consolidating third-party and internal data sources and deploying a cloud-based Python application, reducing daily manual effort by over 90%.",
      "Quantified the business impact of key regulator rulemakings and partnered with Legal and Policy stakeholders to develop data-driven, strategic responses to influence regulator decision making.",
      "Collaborated with cross-functional stakeholder groups on a product pilot that enabled taxi drivers to earn on the Uber platform in Washington, DC, increasing the city's potential driver pool by over 5,000."
    ]
  },
  {
    company: "Deloitte Consulting",
    location: "Washington, DC",
    role: "Consultant, Analytics & Cognitive Practice",
    period: "2020 - 2021",
    summary:
      "Led a team of three consultants and acted as principal client liaison in the analysis of Homeland Security revenue data.",
    details: [
      "Utilized multivariable econometric regression techniques to forecast user fee collections, informing FY21 financial plans at the onset of the COVID-19 pandemic and leading to an $800M+ congressional stimulus package.",
      "Developed dynamic data visualizations to transform data into business intelligence solutions and presented results to a multitude of client audiences, including cross-agency budget analysts and C-suite leadership.",
      "Applied Python data cleansing techniques to automate the transformation and consolidation of 20+ incomplete or incorrect datasets into model-ready formats for recurring analyses."
    ]
  },
  {
    company: "Deloitte Consulting",
    location: "Washington, DC",
    role: "Business Technology Analyst",
    period: "2018 - 2020",
    summary:
      "Led a team of analysts in requirements gathering and system architecture initiatives for a $7.7B Homeland Security client.",
    details: [
      "Developed a Model-Based Systems Engineering (MBSE) requirements management methodology that was piloted on 400+ hardware-software system requirements; created a tactical strategy for scaling the capability to eight government programs.",
      "Facilitated a workshop with over 40 high-ranking government and industry representatives, which led to the stand-up of three cross-industry working groups to develop future homeland security capabilities.",
      "Developed systems engineering market assets and prototypes for external business development in the Defense, Security, and Justice space, which led to three sold projects with an ROI of over 6000% to date."
    ]
  }
];

export const education = [
  {
    institution: "University of Virginia Darden School of Business",
    location: "Charlottesville, VA",
    period: "2024",
    credential: "Master of Business Administration - Full-time MBA Program",
    details: [
      "Lee R. Johnston Scholar - Awarded to one second-year student who displays exceptional entrepreneurial qualities.",
      "Vice President, Entrepreneurship & Venture Capital Club."
    ]
  },
  {
    institution: "North Carolina State University",
    location: "Raleigh, NC",
    period: "2018",
    credential:
      "Bachelor of Science, Chemical Engineering (Minor in Economics); Summa Cum Laude",
    details: [
      "Completed engineering and supply chain focused summer internships at Novartis, CSL Seqirus, and Biogen."
    ]
  }
];

export const resumeSkills = [
  "Full proficiency in SQL, Python, Jupyter, Microsoft and Google Suites, Cursor, Kiro, Claude Code, and Amazon Web Services.",
  "Basic proficiency in Power BI, Tableau, Jira, Zapier, Google Cloud Platform, and GitHub.",
  "Enjoy reading investigative non-fiction, road cycling, surf fishing, traveling, and exploring the SF restaurant scene."
];
