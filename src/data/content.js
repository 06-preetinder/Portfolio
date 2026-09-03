// ---------------------------------------------------------------------------
// All site content lives here. Structured to match the jia.build architecture.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Preetinderjeet Singh",
  shortName: "indra",
  tagline: "ML systems where the failure mode is expensive.",
  intro: "i'm preetinder (indra), and i'm 20. building ML systems where the failure mode is expensive: aerospace simulation, hypersonic trajectory prediction, and explainable flood risk.",
  location: "Ludhiana, Punjab",
  linkedin: "https://www.linkedin.com/in/preetinderjeet-singh-4840a627b/",
  email: "singhpreetinder229@gmail.com",
  github: "https://github.com/06-preetinder",
  twitter: "https://x.com/preetinder_06",
  currentRole: "i'm currently ML R&D lead @ Lupex Space. coordinating simulation-based ML pipelines in the aerospace and defense domain (missile classification and hypersonic trajectory prediction under NDA).",
  currentFocus: "alongside aerospace work, i conduct faculty-advised research on spatio-temporal flood risk intelligence and adaptive multi-UAV disaster response coordination.",
  records: [
    { label: "new chin-up record of", value: "17", suffix: "in a row." },
    { label: "rubik's cube pr of", value: "17.12", suffix: "seconds (cfop)." },
    { label: "efficientnet-b0 edge model at", value: "87.08%", suffix: "test accuracy on tflite." },
  ],
  pastWork: [
    "leading simulation-based ML pipelines for missile classification and hypersonic trajectory prediction at Lupex Space",
    "founder & writer of The Epoch — weekly AI research digest dissecting signal vs noise for founders and researchers",
    "faculty-advised research in explainable flood-risk modeling (Spatio-Temporal GNNs) and multi-UAV coordination",
    "built from-scratch backpropagation neural network in pure NumPy (84% MNIST accuracy without autograd libraries)",
    "fine-tuned EfficientNet-B0 with Dr. Sandeep Singh Sandha (PhD UCLA) for smart-city edge waste classification",
    "engineered 3-agent marketing automation system with live polyglot memory (SQLite + Neo4j semantic graph)",
  ],
  personalManifesto: `hey, i'm preetinder, and i build systems where failure is not a statistical footnote.

if i could introduce myself through this window of a website: i spend half my time overthinking mathematical formulations, a quarter of my time splattering out working code and models in intense concentrated sprints, and another quarter doing pull-ups, running, or reading papers in silence.

i care more about why a model makes a decision than another decimal point of accuracy. in aerospace and disaster response, ungrounded confidence is catastrophic.

things i like: deterministic pipelines, clean math, pull-ups, cold showers, and reading research preprints at 2am.
things i don't like: ungrounded hype, black-box trust without explainability, and redundant effort.`,
};

export const featuredProject = {
  announcement: "new! (2026) AI Offer Letter Agent & Marketing Multi-Agent Architecture",
  title: "AI Offer Letter Agent",
  link: "https://ai-offerletter-gen.onrender.com",
  previewImage: "/projects/one.jpg",
  description: "RAG-based offer letter generation grounding every output in verified company policy — deterministic compensation calculation, summarization agent, and audit trail deployed end to end.",
};

export const projects = [
  {
    cat: "PS-001",
    title: "AI Offer Letter Agent",
    blurb: "A RAG-based offer letter generator that grounds every letter in real company policy — retrieval-augmented generation, deterministic salary computation, and a summarization agent, deployed end to end.",
    image: "/projects/one.jpg",
    github: "https://github.com/06-preetinder/Ai-OfferLetter-Gen",
    loom: "https://drive.google.com/file/d/1_6LSDqEExGGYjsikuZ7hJ5JY8ul7uG9K/view?usp=drive_link",
    Link: "https://ai-offerletter-gen.onrender.com",
    tag: "rag",
    featured: true,
  },
  {
    cat: "PS-002",
    title: "Marketing Multi-Agent System",
    blurb: "A 3-agent marketing automation system with a live, visible polyglot memory architecture — short-term, long-term, and episodic memory in SQLite, semantic knowledge graph in Neo4j.",
    image: "/projects/two.jpg",
    github: "https://github.com/06-preetinder/Multi-Agent-Marketing-System",
    loom: "https://drive.google.com/file/d/1XIinjIxNPPX6-mzfqDa0ByLi_2cju8gb/view?usp=drive_link",
    Link: "https://multi-agent-marketing-system.onrender.com",
    tag: "agentic-ai",
    featured: true,
  },
  {
    cat: "PS-003",
    title: "Napoléon — Intelligent Web Crawler",
    blurb: "An AI-powered web crawler that understands intent — semantic relevance scoring, entity extraction, keyword extraction, and security scanning, with interactive graph visualization of what it finds.",
    image: "/projects/three.jpg",
    github: "https://github.com/06-preetinder/napolean-web",
    loom: "#",
    Link: "#",
    tag: "nlp",
  },
  {
    cat: "PS-004",
    title: "This Portfolio",
    blurb: "Ethereal, dark-matter personal site inspired by jia.build. Custom Web Audio ambient synthesizer, infinite marquee, scroll animations, and live LinkedIn-synced Epoch digest.",
    image: "/projects/five.jpg",
    github: "https://github.com/06-preetinder/Portfolio",
    loom: "#",
    Link: "https://portfolio-three-ebon-uqi92omx1z.vercel.app/",
    tag: "meta",
  },
];

export const experience = [
  {
    cat: "EXP-01",
    role: "Machine Learning Research and Development Engineer",
    org: "Lupex Space",
    period: "Jun 2026 — Present",
    description:
      "Leading a team of ML R&D interns, coordinating directly with the co-founder on simulation-based ML pipelines in the aerospace/defense domain — focused on missile classification and hypersonic trajectory prediction research.",
    bullets: [
      "Overseeing technical direction and work of the intern team, reporting directly to the co-founder",
      "Building data pipelines and modeling workflows supporting simulation-driven research (methodology and results confidential under NDA)",
    ],
  },
  {
    cat: "EXP-02",
    role: "Founder & Writer",
    org: "The Epoch",
    period: "Jul 2026 — Present",
    description:
      "Every Friday, regardless of whether the week deserved it, an issue goes out. That's the whole discipline — not brilliance, not certainty about what matters, just the refusal to skip the week.",
    bullets: [
      "Write, source, and design a weekly AI research digest for founders and researchers, end to end",
      "Corrections run in the open, in the next issue, not quietly fixed and forgotten",
    ],
  },
  {
    cat: "EXP-03",
    role: "Data Science Intern",
    org: "Punjab AI Excellence",
    period: "Jun 2025 — Jul 2025",
    description:
      "Built an AI-based waste classification system for smart city applications, under the guidance of Dr. Sandeep Singh Sandha (PhD, UCLA).",
    bullets: [
      "Trained a baseline CNN, then fine-tuned EfficientNet-B0 via transfer learning — 87.08% test accuracy across 5 waste categories",
      "Curated and combined TrashNet with 3,000+ manually collected images to address class imbalance",
      "Optimized the model for edge deployment via TensorFlow Lite",
    ],
  },
  {
    cat: "EXP-04",
    role: "AI Trainee",
    org: "Apptechies",
    period: "Jun 2025 — Aug 2025",
    description:
      "Implemented a neural network from scratch using only NumPy — forward propagation, backpropagation, and gradient descent, without relying on high-level ML frameworks.",
    bullets: [
      "Trained the from-scratch network on MNIST, reaching ~84% accuracy using hand-derived backpropagation — no autograd, no optimizer libraries",
      "Built a first-principles understanding of the math underlying neural networks before working with abstracted frameworks",
    ],
  },
];

export const research = [
  {
    cat: "RES-01",
    title: "An Explainable AI-Based Spatio-Temporal Flood Risk Intelligence System",
    subtitle: "Using Hydrological and Ecological Factors",
    status: "Preprint — coming soon",
    summary: "Graph neural network model incorporating hydrological elevation, precipitation grids, and soil moisture telemetry to deliver interpretable inundation predictions with attention attribution maps.",
  },
  {
    cat: "RES-02",
    title: "Adaptive Multi-UAV Coordination for Efficient Disaster Response under Uncertainty",
    subtitle: "Decentralized Reinforcement Learning in Degraded RF Environments",
    status: "Preprint — coming soon",
    summary: "Multi-agent swarm coordination protocol maintaining search-and-rescue coverage when GPS and high-bandwidth telemetry are intermittently severed.",
  },
];

export const epoch = {
  tagline: "The signal, and the case against it.",
  description:
    "The world does not pause to explain itself, and neither, most weeks, does AI research. Papers arrive faster than anyone can read them. Launches happen faster than anyone can verify them. Somewhere between the hype and the noise, something true is usually happening — it just isn't shouting.\n\n\"The Epoch\" is a weekly attempt to find that thing anyway. Every Friday, one dispatch: the research, launches, and shifts in AI that actually matter this week, for founders, researchers, and the people deciding what to build next — not a summary of everything, but a judgment about what was worth your attention.\n\nWe are not interested in being first. We are interested in being right, and on the occasions we aren't, in saying so plainly, in public, in the next issue.\n\nEach issue carries its own counter-argument. If we tell you why something matters, we also tell you why it might not.",
  linkedinUrl: "https://www.linkedin.com/company/the-epoch/",
  dispatches: [
    {
      id: "epoch-08",
      issueNumber: "Issue 08",
      title: "Reasoning Tokens vs Latent Search: What Test-Time Compute Actually Buys",
      date: "August 28th, 2026",
      readTime: "4 min read",
      signal: "Scaling inference compute via chain-of-thought verification offers steep returns on mathematical proofs and formal code verification.",
      caseAgainstIt: "For open-ended subjective reasoning, test-time rollouts often amplify hallucinations and degenerate into circular self-justification loops.",
      linkedinPostUrl: "https://www.linkedin.com/company/the-epoch/",
      tag: "research",
    },
    {
      id: "epoch-07",
      issueNumber: "Issue 07",
      title: "State Space Models at Billion-Token Context: Architecture Over Brute Force",
      date: "August 21st, 2026",
      readTime: "5 min read",
      signal: "Hybrid Mamba-Transformer models provide sub-quadratic complexity while matching needle-in-a-haystack retrieval on long-horizon telemetry.",
      caseAgainstIt: "Associative recall degradation remains evident when state compression discards rare out-of-distribution associative tokens.",
      linkedinPostUrl: "https://www.linkedin.com/company/the-epoch/",
      tag: "architecture",
    },
    {
      id: "epoch-06",
      issueNumber: "Issue 06",
      title: "Small Models on the Edge: The Distillation Ceiling",
      date: "August 14th, 2026",
      readTime: "3 min read",
      signal: "Quantized 1.5B edge models can perform dedicated deterministic routing and JSON generation with <5ms latency on Apple Silicon & mobile chips.",
      caseAgainstIt: "Edge models fail abruptly on unprompted multi-step reasoning where teacher-student distillation masks epistemic uncertainty.",
      linkedinPostUrl: "https://www.linkedin.com/company/the-epoch/",
      tag: "edge-ml",
    },
  ],
};

export const appreciation = [
  {
    quote: "your website is top level! love the atmosphere and how personal it feels.",
    date: "july 30th, 2026, 12:30pm",
    author: "anonymous",
    country: "US",
    rot: "-3deg",
  },
  {
    quote: "really love your website! i love how personal it is and how you talk about yourself rather than just putting every tech stack known to mankind.",
    date: "july 28th, 2026, 7:31am",
    author: "anonymous",
    country: "IN",
    rot: "5deg",
  },
  {
    quote: "hi indra, this is one of the coolest portfolio websites i have come across. love the aerospace R&D work and the chin-up discipline.",
    date: "july 26th, 2026, 4:57pm",
    author: "anonymous",
    country: "IN",
    rot: "-6deg",
  },
  {
    quote: "the epoch digests are fantastic. one of the few newsletters that actually gives the counter-argument.",
    date: "august 2nd, 2026, 8:55am",
    author: "thao",
    country: "VN",
    rot: "4deg",
  },
  {
    quote: "wow this is one of the coolest websites i’ve seen. the ambient sound and aesthetics are immaculate.",
    date: "july 24th, 2026, 12:24pm",
    author: "anonymous",
    country: "IN",
    rot: "-4deg",
  },
  {
    quote: "i really enjoy the bgm around your website.",
    date: "august 5th, 2026, 7:49am",
    author: "anonymous",
    country: "US",
    rot: "6deg",
  },
];

export const thoughts = [
  {
    date: "aug 30th, 2026, 11pm",
    text: "missile simulation batch 41 finished. 0.94 F1 on hypersonic re-entry profile. day 1 of godly c++ optimizations.",
  },
  {
    date: "aug 29th, 2026, 9pm",
    text: "solved rubik's cube in 22 seconds officially in competition! 4.5 months in. disciplined repetition pays.",
  },
  {
    date: "aug 27th, 2026, 8pm",
    text: "day 621 of chin-ups and pull-ups (40). pushed ourselves today. excited for tomorrow's Lupex telemetry test.",
  },
  {
    date: "aug 26th, 2026, 9:43pm",
    text: "day 620 of chin-ups and pull-ups (40). 20 leg lifts. today was quite cool and crazy. never give up guys.",
  },
  {
    date: "aug 24th, 2026, 8:15pm",
    text: "drafted Issue 08 of The Epoch. reasoning tokens vs latent search. writing the counter-argument is always where the truth lives.",
  },
  {
    date: "aug 20th, 2026, 6:18pm",
    text: "day 618 of chin-ups and pull-ups (40). 20 leg lifts. old friend called from university. appreciative of how far we've journeyed.",
  },
  {
    date: "aug 16th, 2026, 11pm",
    text: "woke up 7:30am, 2 mile run. black tea, roasted almonds. all home-cooked. pushed crucial safety pipeline to staging in one day.",
  },
  {
    date: "aug 11th, 2026, 8:55am",
    text: "612 of chin-ups and pull-ups (40). 20 leg lifts. 6am to 9pm workday, deeply rewarding.",
  },
  {
    date: "aug 7th, 2026, 9:19pm",
    text: "140 wpm monkeytype, day 65. building clean keyboard habits for long coding sessions.",
  },
  {
    date: "may 22nd, 2026, 8:50pm",
    text: "day 581 of chin-ups and pull-ups (40). new chin-up record of 17 in a row.",
  },
  {
    date: "may 20th, 2026, 12:07am",
    text: "new rubik's cube pr of 17.12 sec on day 39. solved with cfop (2 look oll, pll skip, bottom cross).",
  },
];

export const resumeData = {
  downloadUrl: "/resume.pdf",
  lastUpdated: "August 2026",
  headline: "Machine Learning Research Engineer & Systems Architect",
  highlights: [
    { title: "Lupex Space", role: "ML R&D Engineer (Lead)", span: "2026 — Present" },
    { title: "The Epoch", role: "Founder & Technical Writer", span: "2026 — Present" },
    { title: "Punjab AI Excellence", role: "Data Science Researcher", span: "2025" },
    { title: "Apptechies", role: "AI Research Trainee", span: "2025" },
  ],
  education: {
    institution: "Bachelor of Technology, Computer Science & Engineering",
    focus: "Machine Learning, Numerical Optimization & Distributed Systems",
  },
  skills: [
    "PyTorch", "Python", "NumPy (From-scratch Neural Nets)", "TensorFlow Lite",
    "RAG & Agentic Workflows", "Neo4j Knowledge Graphs", "SQLite Polyglot Memory",
    "Hypersonic Simulation Telemetry", "Explainable AI (GNN / Attribution)", "C++"
  ],
};

