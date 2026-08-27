// ---------------------------------------------------------------------------
// All editable site content lives here. Swap text, links, and image paths
// without touching any component/layout code.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Preetinderjeet Singh",
  shortName: "Indra",
  tagline: "ML systems where the failure mode is expensive.",
  location: "Ludhiana, Punjab",
  linkedin: "https://www.linkedin.com/in/preetinderjeet-singh-4840a627b/",
  email: "singhpreetinder229@gmail.com",
  github: "https://github.com/06-preetinder", // placeholder — swap in your handle
};

// CAT. NO. mirrors a record label's catalog numbering — each release gets one.
export const projects = [
  {
    cat: "PS-001",
    title: "AI Offer Letter Agent",
    blurb: "A RAG-based offer letter generator that grounds every letter in real company policy — retrieval-augmented generation, deterministic salary computation, and a summarization agent, deployed end to end.",
    image:  "/projects/one.png", // drop an image path here, e.g. "/projects/one.jpg"
    github: "https://github.com/06-preetinder/Ai-OfferLetter-Gen",
    loom: "https://drive.google.com/file/d/1_6LSDqEExGGYjsikuZ7hJ5JY8ul7uG9K/view?usp=drive_link",
    LInk: "https://ai-offerletter-gen.onrender.com",
    tag: "Gen Ai, Rag",
  },
  {
    cat: "PS-002",
    title: "Marketing Multi-Agent System",
    blurb: "A 3-agent marketing automation system with a live, visible polyglot memory architecture — short-term, long-term, and episodic memory in SQLite, semantic knowledge graph in Neo4j.",
    image: "/assets/projects/two.png",
    github: "https://github.com/06-preetinder/Multi-Agent-Marketing-System",
    loom: "https://drive.google.com/file/d/1XIinjIxNPPX6-mzfqDa0ByLi_2cju8gb/view?usp=drive_link",
    Link:"https://multi-agent-marketing-system.onrender.com",
    tag: "Agentic-Ai, Multi memory, multi agent",
  },
  {
    cat: "PS-003",
    title: "Project Title Three",
    blurb: "One or two line description of what this project is and why it exists — placeholder, edit me.",
    image: null,
    github: "",
    loom: "#",
    Link:"#",
    tag: "systems",
  },
  {
    cat: "PS-004",
    title: "Project Title Four",
    blurb: "One or two line description of what this project is and why it exists — placeholder, edit me.",
    image: null,
    github: "#",
    loom: "#",
    Link: "#",
    tag: "ml",
  },
  {
    cat: "PS-005",
    title: "This Portfolio",
    blurb: "Designed and built end-to-end through directed AI collaboration — architecture, content, and interaction decisions were mine; execution was accelerated by working with AI as a build partner, not a crutch.",
    image: "/projects/five.png",
    github: "https://github.com/06-preetinder/Portfolio",
    Loom:"#",
    Link: "https://portfolio-three-ebon-uqi92omx1z.vercel.app/",
    tag: "meta, Ai, Prompt Engg.",
    featured: true,
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
  },
  {
    cat: "RES-02",
    title: "Adaptive Multi-UAV Coordination for Efficient Disaster Response under Uncertainty",
    subtitle: "",
    status: "Preprint — coming soon",
  },
];

export const epoch = {
  tagline: "The signal, and the case against it.",
  description:
    "The world does not pause to explain itself, and neither, most weeks, does AI research. Papers arrive faster than anyone can read them. Launches happen faster than anyone can verify them. Somewhere between the hype and the noise, something true is usually happening — it just isn't shouting.\n\n\"The Epoch\" is a weekly attempt to find that thing anyway. Every Friday, one dispatch: the research, launches, and shifts in AI that actually matter this week, for founders, researchers, and the people deciding what to build next — not a summary of everything, but a judgment about what was worth your attention.\n\nWe are not interested in being first. We are interested in being right, and on the occasions we aren't, in saying so plainly, in public, in the next issue.\n\nEach issue carries its own counter-argument. If we tell you why something matters, we also tell you why it might not.",
  linkedinUrl: "https://www.linkedin.com/company/the-epoch/ ",
  issues: [
    {
      id: 4,
      date: "Aug 08, 2026",
      type: "news",
      headline: "Issue 04 — This week in AI",
      summary: "Weekly roundup placeholder — swap in the real issue summary.",
      link: "#",
    },
    {
      id: 3,
      date: "Aug 01, 2026",
      type: "paper",
      headline: "Issue 03 — Paper spotlight",
      summary: "Research spotlight placeholder — includes the public correction on a prior issue's launch-date claim.",
      link: "#",
    },
    {
      id: 2,
      date: "Jul 25, 2026",
      type: "news",
      headline: "Issue 02 — This week in AI",
      summary: "Weekly roundup placeholder — swap in the real issue summary.",
      link: "#",
    },
    {
      id: 1,
      date: "Jul 18, 2026",
      type: "news",
      headline: "Issue 01 — This week in AI",
      summary: "The first dispatch — placeholder summary.",
      link: "#",
    },
  ],
};
