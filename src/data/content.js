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
    { label: "physique:", value: "6 feet", suffix: "lean build & six-pack abs." },
    { label: "new chin-up record of", value: "17", suffix: "in a row." },
    { label: "push-up volume of", value: "50+", suffix: "clean reps in a set." },
    { label: "new core record of", value: "2 minute", suffix: "plank hold & crunches." },
    { label: "efficientnet-b0 edge model at", value: "87.08%", suffix: "test accuracy on tflite." },
  ],
  pastWork: [
    "leading simulation-based ML pipelines for missile classification and hypersonic trajectory prediction at Lupex Space",
    "co-authored paper accepted for presentation at ICAAV 2026 (DRDO-organized) on adaptive multi-UAV disaster coordination",
    "founder & writer of The Epoch — weekly AI research digest dissecting signal vs noise for founders and researchers",
    "designed explainable flood-risk methodology with Random Forest, SHAP (identified ~47ha threshold), and panel regression",
    "fine-tuned EfficientNet-B0 with Dr. Sandeep Singh Sandha (PhD UCLA) for smart-city edge waste classification",
    "engineered 3-agent marketing automation system with live polyglot memory (SQLite + Neo4j semantic graph)",
    "scoped RAG admissions assistant & QR-code attendance system for K-12 school at 3S Scholars",
  ],
  personalManifesto: `hey, i'm preetinder, and i build systems where failure is not a statistical footnote.

if i could introduce myself through this window of a website: i spend half my time overthinking mathematical formulations, a quarter of my time splattering out working code and models in intense concentrated sprints, and another quarter doing pull-ups, pushups, running, or reading books in silence.

i care more about why a model makes a decision than another decimal point of accuracy. in aerospace and disaster response, ungrounded confidence is catastrophic.

things i like: deterministic pipelines, clean math, 6-foot pull-up discipline, cold water, dark academia books, and reading research preprints at 2am.
things i don't like: ungrounded hype, black-box trust without explainability, and redundant effort.`,
  books: {
    intro: "i played chess competitively for years before shifting focus to mathematical modeling and ML. alongside chess, i spend hours immersed in books — dark academia literature that shaped how i view human intent, absurdity, and discipline: dostoevsky, jane austen, kafka, camus, and friedrich nietzsche.",
    authors: [
      { name: "Fyodor Dostoevsky", note: "Crime and Punishment, Notes from Underground" },
      { name: "Franz Kafka", note: "The Trial, Metamorphosis" },
      { name: "Albert Camus", note: "The Myth of Sisyphus, The Stranger" },
      { name: "Jane Austen", note: "Pride and Prejudice, Persuasion" },
      { name: "Friedrich Nietzsche", note: "Beyond Good and Evil, Thus Spoke Zarathustra" },
    ],
  },
};

export const publication = {
  title: "Adaptive Multi-UAV Coordination for Efficient Disaster Response Under Uncertainty",
  paperId: "Paper 090",
  conference: "ICAAV 2026 (DRDO-organized conference, presented Aug 2026)",
  statusBadge: "Accepted for presentation",
  authors: "Co-author — GNDEC Ludhiana × NIT Delhi",
  summary: "Co-authored and presented a paper on coordination strategies for multiple autonomous agents (UAVs) operating under uncertainty and degraded RF communication in disaster response. Extended abstract accepted for the conference's Book of Abstracts; full paper under further review for Springer proceedings.",
};

export const projects = [
  {
    cat: "PRJ-01",
    title: "Multi-Agent Marketing System",
    subtitle: "3-agent automation with polyglot memory",
    blurb: "A 3-agent marketing automation system with a live, visible polyglot memory architecture — short-term, long-term, and episodic memory in SQLite, semantic knowledge graph in Neo4j, with real-time WebSocket telemetry.",
    image: "/projects/two.jpg",
    github: "https://github.com/06-preetinder/Multi-Agent-Marketing-System",
    loom: "https://drive.google.com/file/d/1XIinjIxNPPX6-mzfqDa0ByLi_2cju8gb/view?usp=drive_link",
    Link: "https://multi-agent-marketing-system.onrender.com",
    tag: "LangChain · Flask · Socket.IO · SQLite · Neo4j · Docker",
    featured: true,
  },
  {
    cat: "PRJ-02",
    title: "AI Offer Letter Agent",
    subtitle: "RAG-based document generation system",
    blurb: "A RAG-based offer letter generator that grounds every letter in real company policy — retrieval-augmented generation, deterministic non-LLM salary computation, and an independent summarization agent deployed end-to-end.",
    image: "/projects/one.jpg",
    github: "https://github.com/06-preetinder/Ai-OfferLetter-Gen",
    loom: "https://drive.google.com/file/d/1_6LSDqEExGGYjsikuZ7hJ5JY8ul7uG9K/view?usp=drive_link",
    Link: "https://ai-offerletter-gen.onrender.com",
    tag: "FastAPI · React · LangChain · Pinecone · Docker · Render",
    featured: true,
  },
  {
    cat: "PRJ-03",
    title: "Explainable Flood Risk Intelligence",
    subtitle: "Research preprint — lead author & methodology",
    blurb: "Trained Random Forest on 640 spatio-temporal observations (73.4% accuracy, 0.859 ROC-AUC). Integrated SHAP attribution to identify a nonlinear deforestation threshold (~47 ha) driving flood risk, with panel regression and ARIMA forecasting.",
    image: "/gallery/telemetry.jpg",
    github: "https://github.com/06-preetinder",
    loom: "#",
    Link: "#",
    tag: "Random Forest · SHAP · ARIMA · Panel Regression · Geo-Spatial",
    featured: true,
  },
  {
    cat: "PRJ-04",
    title: "Napoléon — Intent-Aware AI Web Crawler",
    subtitle: "Semantic crawler with knowledge graph visualization",
    blurb: "An AI-powered web crawler that scores crawled pages by semantic relevance using sentence-transformer embeddings, combined with spaCy entity extraction, KeyBERT keyword extraction, and Pyvis/NetworkX graph visualization.",
    image: "/projects/three.jpg",
    github: "https://github.com/06-preetinder/napolean-web",
    loom: "#",
    Link: "#",
    tag: "Python · Sentence-Transformers · spaCy · KeyBERT · NetworkX",
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
      "Extended and hardened internal RAG/agent systems in production",
      "Overseeing technical direction and work of the intern team, reporting directly to the co-founder",
      "Designing LSTM, PINN, and Transformer models for hypersonic simulation telemetry (under NDA)",
    ],
  },
  {
    cat: "EXP-02",
    role: "Contractual Developer",
    org: "3S Scholars",
    period: "Aug 2026 — Present",
    description:
      "Scoped a RAG-based admissions/curriculum AI assistant alongside a deployment-grade QR-code attendance system for a K-12 school, reporting directly to the CEO.",
    bullets: [
      "Designing SQL schema, CSV data pipelines, and role-based access control",
      "Building automated backup pipelines to keep records analysis-ready",
    ],
  },
  {
    cat: "EXP-03",
    role: "Founder & Technical Writer",
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
    cat: "EXP-04",
    role: "Data Science Intern / Research Fellow",
    org: "Punjab AI Excellence (PAI)",
    period: "Jun 2025 — Jul 2025",
    description:
      "Built an AI-based waste classification system for smart city applications, under the guidance of Dr. Sandeep Singh Sandha (PhD, UCLA).",
    bullets: [
      "Fine-tuned EfficientNet-B0 via transfer learning — 87.08% test accuracy across 5 categories",
      "Curated and cleaned a 3,000+ image dataset, correcting class imbalance across five categories",
      "Optimized and deployed model with TensorFlow Lite for real-time edge inference",
    ],
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
    quote: "hi indra, this is one of the coolest portfolio websites i have come across. love the aerospace R&D work and the 6ft physical discipline.",
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
    quote: "wow this is one of the coolest websites i’ve seen. the ambient sound and dark academia aesthetics are immaculate.",
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
    text: "missile simulation batch 41 finished. 0.94 F1 on hypersonic re-entry profile. 50 pushups and 2 minute plank before bed.",
  },
  {
    date: "aug 29th, 2026, 9pm",
    text: "reading Dostoevsky's Notes from Underground. the psychology of spite versus cold mathematical logic. fascinating parallels to objective functions.",
  },
  {
    date: "aug 27th, 2026, 8pm",
    text: "day 621 of chin-ups and pull-ups (40). pushed ourselves today. excited for tomorrow's Lupex telemetry test.",
  },
  {
    date: "aug 26th, 2026, 9:43pm",
    text: "day 620 of chin-ups and pull-ups (40). 60 crunches. today was quite cool and crazy. never give up guys.",
  },
  {
    date: "aug 24th, 2026, 8:15pm",
    text: "drafted Issue 08 of The Epoch. reasoning tokens vs latent search. writing the counter-argument is always where the truth lives.",
  },
  {
    date: "aug 20th, 2026, 6:18pm",
    text: "reading Camus between pipeline runs. 'one must imagine Sisyphus happy' — feels like debugging convergence on sparse gradients.",
  },
  {
    date: "aug 16th, 2026, 11pm",
    text: "woke up 7:30am, 2 mile run. black tea, roasted almonds. pushed 3S Scholars attendance schema to staging.",
  },
  {
    date: "aug 11th, 2026, 8:55am",
    text: "612 of chin-ups and pull-ups (40). 50 pushups. 6am to 9pm workday, deeply rewarding.",
  },
  {
    date: "may 22nd, 2026, 8:50pm",
    text: "new chin-up record of 17 in a row. 6 feet lean build paying off in upper body leverage.",
  },
];

export const resumeVersions = [
  {
    id: "agentic",
    label: "AI / Agentic Engineer Resume",
    shortLabel: "AI Agentic",
    downloadUrl: "/resumes/Preetinderjeet_Singh_AI_Agentic_Resume.pdf",
    focus: "RAG Pipelines, Multi-Agent Orchestration, Polyglot Memory (SQLite + Neo4j), MCP & Google ADK",
    primary: true,
  },
  {
    id: "ml",
    label: "Machine Learning / Deep Learning Resume",
    shortLabel: "ML & Aerospace",
    downloadUrl: "/resumes/Preetinderjeet_Singh_ML_Engineer_Resume.pdf",
    focus: "PyTorch, PINN, LSTM, Transformers, Hypersonic Trajectory Prediction, Edge TFLite",
  },
  {
    id: "data",
    label: "Data Science & Analytics Resume",
    shortLabel: "Data Science",
    downloadUrl: "/resumes/Preetinderjeet_Singh_Data_Science_Resume.pdf",
    focus: "Statistical Modeling, Explainable AI (SHAP), ARIMA Forecasting, Panel Regression",
  },
];
