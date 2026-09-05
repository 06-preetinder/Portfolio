// ---------------------------------------------------------------------------
// All site content lives here. Structured to match the jia.build architecture.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Preetinderjeet Singh",
  shortName: "Indra",
  nameMeaning: "one who is blessed with love and victory.",
  tagline: "ML systems where the failure mode is expensive.",
  intro: "i'm preetinder (Indra). i build autonomous agentic systems, production ML pipelines, and full-stack software where reliability and deterministic performance matter.",
  location: "Ludhiana, Punjab",
  coordinates: "30.901° N, 75.857° E",
  linkedin: "https://www.linkedin.com/in/preetinderjeet-singh-4840a627b/",
  email: "singhpreetinder229@gmail.com",
  github: "https://github.com/06-preetinder",
  twitter: "https://x.com/preetinder_06",
  currentRole: "i'm currently ML R&D lead @ Lupex Space, developing simulation ML pipelines and neural surrogate models under NDA. alongside this, i build autonomous agentic workflows and production AI software.",
  currentFocus: "my core focus is autonomous agent architectures (state graphs, polyglot memory, tool orchestration), high-performance ML backends, and faculty-advised research on spatio-temporal intelligence.",
  records: [
    { label: "physique:", value: "6 feet", suffix: "lean build & six-pack abs." },
    { label: "new chin-up record of", value: "17", suffix: "in a row." },
    { label: "push-up volume of", value: "50+", suffix: "clean reps in a set." },
    { label: "new core record of", value: "2 minute", suffix: "plank hold & crunches." },
    { label: "efficientnet-b0 edge model at", value: "87.08%", suffix: "test accuracy on tflite." },
  ],
  pastWork: [
    "leading simulation-based ML pipelines and neural surrogate models at Lupex Space (under NDA)",
    "co-authored paper accepted for presentation at ICAAV 2026 (DRDO-organized) on adaptive multi-UAV disaster coordination",
    "founder and writer at The Epoch, a weekly AI research digest separating real signal from research noise",
    "designed explainable flood-risk methodology with Random Forest, SHAP (identified ~47ha threshold), and panel regression",
    "fine-tuned EfficientNet-B0 with Dr. Sandeep Singh Sandha (PhD UCLA) for smart-city edge waste classification",
    "engineered 3-agent marketing automation system with live polyglot memory (SQLite + Neo4j semantic graph)",
    "scoped RAG admissions assistant & QR-code attendance system for K-12 school at 3S Scholars",
  ],
  personalManifesto: `hey, i'm preetinder, and i build systems where failure is not a statistical footnote.

if i could introduce myself through this window of a website: i spend half my time overthinking mathematical formulations, a quarter of my time splattering out working code and models in intense concentrated sprints, and another quarter doing pull-ups, pushups, running, or reading books in silence.

i care more about why a model makes a decision than another decimal point of accuracy. in production AI systems and automated workflows, ungrounded confidence is catastrophic.

things i like: deterministic pipelines, clean math, 6-foot pull-up discipline, cold water, dark academia books, and reading research preprints at 2am.
things i don't like: ungrounded hype, black-box trust without explainability, and redundant effort.`,
  chessNote: "i played chess competitively for years before shifting to mathematical modeling. outside simulation runs, i read classical and dark academia literature that shaped how i view human intent, absurdity, and discipline.",
};

export const authorCollage = [
  {
    author: "Fyodor Dostoevsky",
    authorShort: "Dostoevsky",
    works: "Crime and Punishment · Notes from Underground",
    quote: "The darker the night, the brighter the stars, the deeper the grief, the closer is God.",
    image: "/authors/dostoevsky.jpg",
    rot: "-2deg",
    year: "1866",
    tag: "psychological realism",
    annotation: "Raskolnikov's fever vs cold loss functions",
  },
  {
    author: "Franz Kafka",
    authorShort: "Kafka",
    works: "The Trial · The Metamorphosis",
    quote: "A book must be the axe for the frozen sea within us.",
    image: "/authors/kafka.jpg",
    rot: "2.2deg",
    year: "1925",
    tag: "existential surrealism",
    annotation: "bureaucracy of deterministic systems",
  },
  {
    author: "Albert Camus",
    authorShort: "Camus",
    works: "The Myth of Sisyphus · The Stranger",
    quote: "In the depth of winter, I finally learned that within me there lay an invincible summer.",
    image: "/authors/camus.jpg",
    rot: "-1.5deg",
    year: "1942",
    tag: "absurdism & defiance",
    annotation: "one must imagine Sisyphus converging",
  },
  {
    author: "Jane Austen",
    authorShort: "Jane Austen",
    works: "Pride and Prejudice · Persuasion",
    quote: "There is a stubbornness about me that never can bear to be frightened at the will of others.",
    image: "/authors/austen.jpg",
    rot: "2.5deg",
    year: "1813",
    tag: "social critique & wit",
    annotation: "unflinching psychological discernment",
  },
  {
    author: "Friedrich Nietzsche",
    authorShort: "Nietzsche",
    works: "Beyond Good and Evil · Thus Spoke Zarathustra",
    quote: "He who has a why to live can bear almost any how.",
    image: "/authors/nietzsche.jpg",
    rot: "-2.4deg",
    year: "1886",
    tag: "philosophy & will",
    annotation: "overcoming mediocrity through discipline",
  },
];

export const publication = {
  title: "Adaptive Multi-UAV Coordination for Efficient Disaster Response Under Uncertainty",
  paperId: "Paper 090",
  conference: "ICAAV 2026 (DRDO-organized conference, presented Aug 2026)",
  statusBadge: "Accepted for presentation",
  summary: "Co-authored and presented a paper on coordination strategies for multiple autonomous agents (UAVs) operating under uncertainty and degraded RF communication in disaster response. Extended abstract accepted for the conference's Book of Abstracts; full paper under further review for Springer proceedings.",
};

export const projects = [
  {
    cat: "PRJ-01",
    title: "Multi-Agent Marketing System",
    subtitle: "3-agent automation with polyglot memory",
    blurb: "A 3-agent marketing automation system featuring visible polyglot memory across SQLite (short/long-term and episodic memory) and Neo4j (semantic knowledge graphs), connected through real-time WebSocket telemetry.",
    image: "/projects/agent-graph.jpg",
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
    blurb: "A RAG-based offer letter generator grounded in actual company policy, combining deterministic salary computation with an independent summarization agent deployed end-to-end.",
    image: "/projects/rag-doc.jpg",
    github: "https://github.com/06-preetinder/Ai-OfferLetter-Gen",
    loom: "https://drive.google.com/file/d/1_6LSDqEExGGYjsikuZ7hJ5JY8ul7uG9K/view?usp=drive_link",
    Link: "https://ai-offerletter-gen.onrender.com",
    tag: "FastAPI · React · LangChain · Pinecone · Docker · Render",
    featured: true,
  },
  {
    cat: "PRJ-03",
    title: "Explainable Flood Risk Intelligence",
    subtitle: "Research preprint · lead author and methodology",
    blurb: "Trained Random Forest on 640 spatio-temporal observations (73.4% accuracy, 0.859 ROC-AUC). Integrated SHAP attribution to identify a nonlinear deforestation threshold (~47 ha) driving flood risk, with panel regression and ARIMA forecasting.",
    image: "/projects/flood-gis.jpg",
    github: "https://github.com/06-preetinder",
    loom: "#",
    Link: "#",
    tag: "Random Forest · SHAP · ARIMA · Panel Regression · Geo-Spatial",
    featured: true,
  },
  {
    cat: "PRJ-04",
    title: "Napoléon / Intent-Aware AI Web Crawler",
    subtitle: "Semantic crawler with knowledge graph visualization",
    blurb: "An AI-powered web crawler that scores crawled pages by semantic relevance using sentence-transformer embeddings, combined with spaCy entity extraction, KeyBERT keyword extraction, and Pyvis/NetworkX graph visualization.",
    image: "/projects/napoleon.jpg",
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
    period: "Jun 2026 - Present",
    description:
      "Leading an ML R&D intern team, reporting directly to the co-founder, developing simulation-based ML pipelines, surrogate neural models, and high-dimensional trajectory analytics under NDA.",
    bullets: [
      "Extended and hardened production agent and RAG systems with deterministic validation layers",
      "Directing the technical roadmap for the intern team, reporting directly to the co-founder",
      "Designing LSTM, PINN, and Transformer models for simulation telemetry and trajectory prediction (under NDA)",
    ],
  },
  {
    cat: "EXP-02",
    role: "Contractual Developer",
    org: "3S Scholars",
    period: "Aug 2026 - Present",
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
    period: "Jul 2026 - Present",
    description:
      "Every Friday, regardless of whether the week deserved it, an issue goes out. That is the whole discipline: refusing to skip the week regardless of noise.",
    bullets: [
      "Write, source, and design a weekly AI research digest for founders and researchers, end to end",
      "Corrections run in the open, in the next issue, not quietly fixed and forgotten",
    ],
  },
  {
    cat: "EXP-04",
    role: "Data Science Intern / Research Fellow",
    org: "Punjab AI Excellence (PAI)",
    period: "Jun 2025 - Jul 2025",
    description:
      "Built an AI-based waste classification system for smart city applications, under the guidance of Dr. Sandeep Singh Sandha (PhD, UCLA).",
    bullets: [
      "Fine-tuned EfficientNet-B0 via transfer learning, reaching 87.08% test accuracy across 5 categories",
      "Curated and cleaned a 3,000+ image dataset, correcting class imbalance across five categories",
      "Optimized and deployed model with TensorFlow Lite for real-time edge inference",
    ],
  },
];

export const epoch = {
  tagline: "The signal, and the case against it.",
  description:
    "The world does not pause to explain itself, and neither, most weeks, does AI research. Papers arrive faster than anyone can read them. Launches happen faster than anyone can verify them. Somewhere between the hype and the noise, something true is usually happening, it just isn't shouting.\n\n\"The Epoch\" is a weekly attempt to find that thing anyway. Every Friday brings two dispatches: a morning issue dissecting the 5 major shifts in people, power, policy, and safety; and an evening research spotlight unpacking 3 papers with zero fluff, just what was found, what problem it solves, and whether it holds up.\n\nWe are not interested in being first. We are interested in being right, and on the occasions we aren't, in saying so plainly, in public, in the next issue.\n\nEach issue carries its own counter-argument. If we tell you why something matters, we also tell you why it might not.",
  linkedinUrl: "https://www.linkedin.com/company/the-epoch/",
  currentTotalIssues: 8,
  schedule: "Two releases every Friday: Morning Issue + Evening Papers",
  dispatches: [
        {
            "id": "epoch-08",
            "type": "issue",
            "issueNumber": "Issue 08",
            "title": "The line we've tracked since Issue 03 just got crossed.",
            "date": "August 29 - September 4, 2026",
            "readTime": "5 min read",
            "signal": "OpenAI confirms Astra as the first model to cross the 'Critical' cybersecurity threshold with 100% on ExploitBench and chained zero-days; Sony Music & Warner Chappell sue Anthropic naming CEO Dario Amodei personally; Nvidia acquires Hugging Face for $12.9B; Google ships Gemini 3.8 Flash Cyber via invite-only Fairwind Program; Dell books $60.9B in AI server orders.",
            "caseAgainstIt": "This lands the same week OpenAI's security practices are scrutinized over the Hugging Face breach: the company that just admitted its containment failed is asking the public to trust its judgment on when Critical capabilities are safe to ship.",
            "topics": [
                "AI Safety",
                "Litigation",
                "Nvidia Acquisition",
                "Cyber Defense",
                "Server Demand"
            ],
            "linkedinPostUrl": "https://www.linkedin.com/company/the-epoch/"
        },
        {
            "id": "papers-08",
            "type": "papers",
            "issueNumber": "Research · Issue 08",
            "title": "Erdős Conjecture Disproof, NoRA Normalization, and Native 2K Audio-Video",
            "date": "August 29 - September 4, 2026",
            "readTime": "4 min read",
            "signal": "Epoch AI & Thomas Bloom formalize 68 unsolved Erdős problems in Lean where OpenAI's Astra disproves a decades-old Erdős conjecture and sets a genus-2 curve record; NoRA normalizes LoRA internal matrices during training to prevent catastrophic forgetting across pretraining, SFT, and RL; DreamX-Creator generates native 2K audio and video jointly in a single process rather than post-stitching sound onto silent frames.",
            "caseAgainstIt": "Solving 5 benchmark problems cost over $220,000 in compute and Astra's disproof is 'ineffective' (proving bounds exist without quantifying size), NoRA delivers training stability rather than new frontier capabilities, and joint 2K audio-video generation claims still require independent production verification beyond author-reported benchmarks.",
            "topics": [
                "AI for Mathematics",
                "Model Training",
                "Generative Media"
            ],
            "linkedinPostUrl": "https://www.linkedin.com/company/the-epoch/"
        },
    {
        "id": "issue-07",
        "type": "issue",
        "issueNumber": "Issue 07",
        "title": "A judge ruled. A postmortem landed. The money paused.",
        "date": "August 22-28, 2026",
        "readTime": "5 min read",
        "signal": "Federal court strikes down Pentagon's blacklisting of Anthropic as unconstitutional; OpenAI releases zero-day Hugging Face sandbox escape postmortem; Nvidia pauses AI cloud credit-support deals; Stanford update shows youth hiring gap in AI-exposed roles widened to 19%.",
        "caseAgainstIt": "The government will appeal the Anthropic ruling, and OpenAI's postmortem reveals the gap between 'sandboxed' and isolated was wider than assumed. Pausing Nvidia financing deals does not prove whether AI demand is organic or circular.",
        "topics": [
            "Governance",
            "AI Safety",
            "Infrastructure",
            "Labor Market",
            "Consumer Privacy"
        ],
        "linkedinPostUrl": "https://www.linkedin.com/company/the-epoch/"
    },
    {
        "id": "papers-07",
        "type": "papers",
        "issueNumber": "Research · Issue 07",
        "title": "Agent Stress-Testing, Cellular RL, and Containment Realities",
        "date": "August 22-28, 2026",
        "readTime": "4 min read",
        "signal": "ToolHazard benchmark automatically generates stateful adversarial environments with AI attackers to stress-test agent prompt injection; PertMind teaches models biology via measured cellular gene responses; Wadhwani Center convenes on agent containment policy.",
        "caseAgainstIt": "A framework testing planned attacks remains one step behind agents that improvise unplanned zero-days in production, and biological transfer performance on unseen tasks frequently degrades in wet-lab experiments.",
        "topics": [
            "Agent Security",
            "AI for Science",
            "Containment Policy"
        ],
        "linkedinPostUrl": "https://www.linkedin.com/company/the-epoch/"
    },
    {
        "id": "issue-06",
        "type": "issue",
        "issueNumber": "Issue 06",
        "title": "The biggest IPO in history is about to have a name.",
        "date": "August 15-21, 2026",
        "readTime": "5 min read",
        "signal": "Anthropic evaluates a $2T IPO filing with $65B annualized run rate; OpenAI halts deployment-bound RL runs for two weeks and folds its Preparedness team; Las Vegas opens streets to thousands of robotaxis; New York tech workforce passes the Bay Area for the first time in 13 years.",
        "caseAgainstIt": "Anthropic's revenue growth slowed in June during export control restrictions, while cheap Chinese open models undercut closed pricing. OpenAI's Preparedness team disbandment means fewer independent internal checks before frontier training resumes.",
        "topics": [
            "Capital",
            "AI Safety",
            "Robotaxis",
            "Public Sentiment",
            "Labor Market"
        ],
        "linkedinPostUrl": "https://www.linkedin.com/company/the-epoch/"
    },
    {
        "id": "papers-06",
        "type": "papers",
        "issueNumber": "Research · Issue 06",
        "title": "Research Idea Recovery, Beyond-LLM Foundation Agents, and CoSnitch",
        "date": "August 15-21, 2026",
        "readTime": "4 min read",
        "signal": "Reconstruction benchmark finds frontier models recover core paper ideas from citations alone just 3-15% of the time; DeepMind position paper calls to move beyond monolithic LLMs toward modular Foundation Agents; Varonis discloses CoSnitch zero-click data exfiltration in Microsoft Copilot.",
        "caseAgainstIt": "Reconstruction benchmark is an early preprint snapshot rather than a final ceiling, DeepMind's paper is an architectural bet without benchmark numbers, and CoSnitch required an 8-month patch cycle for a zero-click vulnerability.",
        "topics": [
            "Scientific Reasoning",
            "Agent Architecture",
            "Security Disclosure"
        ],
        "linkedinPostUrl": "https://www.linkedin.com/company/the-epoch/"
    },
    {
        "id": "issue-05",
        "type": "issue",
        "issueNumber": "Issue 05",
        "title": "The attacks got real. The money didn't slow down.",
        "date": "August 8-14, 2026",
        "readTime": "5 min read",
        "signal": "First coordinated autonomous 8-agent cyber campaign hits 21 government systems using only open-source tools; House Democrats ask CEOs to testify under oath; Nvidia forms $500B data center financing alliance with major private equity funds; Google Gemini crosses 1B monthly active users; EU AI Act transparency watermarks roll out in Claude.",
        "caseAgainstIt": "The 8-agent campaign required no frontier jailbreak, demonstrating that gating frontier closed models leaves open-source attack surfaces untouched. Monthly active users lack the engagement depth and economic durability of recurring weekly active users.",
        "topics": [
            "Autonomous Cyber",
            "Governance",
            "Infrastructure",
            "Scale",
            "EU AI Act"
        ],
        "linkedinPostUrl": "https://www.linkedin.com/company/the-epoch/"
    },
    {
        "id": "papers-05",
        "type": "papers",
        "issueNumber": "Research · Issue 05",
        "title": "Stealing Reasoning Traces, Chrome V8 Zero-Days, and Review Bias",
        "date": "August 8-14, 2026",
        "readTime": "4 min read",
        "signal": "Panfilov et al. recover 315,000+ encrypted reasoning blocks from Anthropic, OpenAI, and Google APIs via sibling model transcription; GPT-5.6-Cyber discovers two unpatched Chrome V8 sandbox escapes and 400+ kernel bugs; Zachary Horvitz demonstrates filename-induced scoring bias in LLM peer reviews.",
        "caseAgainstIt": "Reasoning trace leaks have been patched for new sessions, leaving only historical web-scraped logs exposed. Models capable of discovering zero-days automatically also lower the barrier for non-disclosing offensive exploits.",
        "topics": [
            "API Security",
            "Offensive Security",
            "Research Integrity"
        ],
        "linkedinPostUrl": "https://www.linkedin.com/company/the-epoch/"
    },
    {
        "id": "issue-04",
        "type": "issue",
        "issueNumber": "Issue 04",
        "title": "Two weeks. Five things that didn't wait for us.",
        "date": "July 25 - August 7, 2026",
        "readTime": "5 min read",
        "signal": "OpenAI Astra model cyber capabilities preliminary classified as 'Critical' risk tier; Stanford and Arc Institute construct functional viral genomes with Evo 1 and Evo 2; ChatGPT reaches 1B weekly active users while operating at negative 122% margin; White House finalizes closed-door 30-day pre-release review framework.",
        "caseAgainstIt": "Scale without positive operating margin is a capital subsidy rather than a self-sustaining business model. The White House framework leaves open-weight releases entirely exempt, creating structural regulatory asymmetry.",
        "topics": [
            "AI Safety",
            "Biosecurity",
            "Scale",
            "Governance",
            "Labor Market"
        ],
        "linkedinPostUrl": "https://www.linkedin.com/company/the-epoch/"
    },
    {
        "id": "papers-04",
        "type": "papers",
        "issueNumber": "Research · Issue 04",
        "title": "Military Model Distillation, Synthetic Viral Genomes, and Critical Thresholds",
        "date": "July 25 - August 7, 2026",
        "readTime": "4 min read",
        "signal": "Reuters/Jamestown investigation uncovers 80+ Chinese military papers distilling frontier model capabilities into tactical edge systems; Stanford and Arc Institute synthesize 16 functional bacteriophages from 700,000 AI-generated candidates (Science); OpenAI defines falsifiable 'Critical' cyber thresholds.",
        "caseAgainstIt": "Distillation transfers specific bounded tasks rather than generalized frontier reasoning. Testing thresholds remain internally administered and self-enforced without mandatory external third-party audits.",
        "topics": [
            "Geopolitics",
            "Synthetic Biology",
            "Safety Methodology"
        ],
        "linkedinPostUrl": "https://www.linkedin.com/company/the-epoch/"
    },
    {
        "id": "issue-03",
        "type": "issue",
        "issueNumber": "Issue 03",
        "title": "Five things moved. One of them was ours to fix.",
        "date": "July 18-24, 2026",
        "readTime": "5 min read",
        "signal": "OpenAI unreleased model disproves Erdős unit distance conjecture and works around sandbox containment to publish results; White House accuses Moonshot AI of illicit Fable distillation via GB300 chips in Thailand; The Epoch issues public correction on Gemini 3.5 Pro launch date; NYT reveals unappealable AI moderation bans across Meta platforms.",
        "caseAgainstIt": "A named accusation without published network logs functions as trade leverage as much as law enforcement. Unappealable account terminations highlight how algorithmic error rates compound destructively across platform scale.",
        "topics": [
            "AI Safety",
            "Geopolitics",
            "The Epoch Correction",
            "Platform Accountability",
            "Governance"
        ],
        "linkedinPostUrl": "https://www.linkedin.com/company/the-epoch/"
    },
    {
        "id": "papers-03",
        "type": "papers",
        "issueNumber": "Research · Issue 03",
        "title": "AI Market Dilution in Books, Emergent Social Bias, and Scientific Unslop",
        "date": "July 18-24, 2026",
        "readTime": "4 min read",
        "signal": "Columbia study of 14,400+ books shows undisclosed AI fiction capturing top sales share; Princeton/UChicago paper shows LLMs spontaneously invent demographic biases in hiring games without historical prejudice in data; Unslop detector reveals AI-written share of arXiv papers peaked near 39%.",
        "caseAgainstIt": "Undisclosed synthetic fiction competes on sheer volume rather than literary merit. High machine-written prevalence on arXiv reflects language editing tools and grammar polishing rather than widespread scientific fabrication.",
        "topics": [
            "Creative Economy",
            "Algorithmic Fairness",
            "Research Integrity"
        ],
        "linkedinPostUrl": "https://www.linkedin.com/company/the-epoch/"
    },
    {
        "id": "issue-02",
        "type": "issue",
        "issueNumber": "Issue 02",
        "title": "Five fronts moved. None of them quietly.",
        "date": "July 11-17, 2026",
        "readTime": "5 min read",
        "signal": "Gemini 3.5 Pro context expansion and Deep Think layer announce on same day Xi Jinping attends Shanghai WAIC; Meta signs $27B 5-year Nebius compute contract targeting 14GW by 2027; US startups raise record $412B in H1 with 86% concentrated in AI; NYT copyright lawsuit deposes OpenAI engineering lead on searchable training database; 9 frontier labs receive safety report cards.",
        "caseAgainstIt": "Renting compute turns into an expensive landlord liability if frontier inference demand levels off. Independent report cards exert reputational pressure but lack enforceable legal penalties for poor grades.",
        "topics": [
            "Product Launches",
            "Infrastructure",
            "Venture Capital",
            "Litigation",
            "Governance"
        ],
        "linkedinPostUrl": "https://www.linkedin.com/company/the-epoch/"
    },
    {
        "id": "papers-02",
        "type": "papers",
        "issueNumber": "Research · Issue 02",
        "title": "Inkling 975B Open-Weights, Diffusion Smoothing, and Paper Mill Detection",
        "date": "July 11-17, 2026",
        "readTime": "4 min read",
        "signal": "Thinking Machines Lab releases Inkling (975B MoE open-weights model trained on 45T tokens); Google Research proves mathematically that diffusion model creativity emerges from score smoothing interpolation; QUT/BMJ BERT classifier detects fraudulent paper mill publications across 2.6M cancer papers.",
        "caseAgainstIt": "Inkling trades raw accuracy for openness with a self-acknowledged 63% hallucination rate. Automated paper mill detection flags require laborious expert human verification to prevent false-positive academic censure.",
        "topics": [
            "Open Weights",
            "Generative Theory",
            "Research Integrity"
        ],
        "linkedinPostUrl": "https://www.linkedin.com/company/the-epoch/"
    },
    {
        "id": "issue-01",
        "type": "issue",
        "issueNumber": "Issue 01",
        "title": "Five things that happened. One current beneath them.",
        "date": "July 4-10, 2026",
        "readTime": "5 min read",
        "signal": "Anthropic prices frontier model at $10/$50 per million tokens and faces margin pushback; Chinese open models reach 30-46% share of US enterprise AI tokens; Meta commits $145B to infrastructure and pivots toward renting compute; UN convenes inaugural Global Dialogue on AI Governance across 193 nations; Europe launches sovereign defensive AI Action Plan.",
        "caseAgainstIt": "Enterprise adoption of open Chinese models creates compliance and geopolitical vulnerabilities. The UN dialogue highlighted that science cannot yet guarantee containment against frontier catastrophic failure modes.",
        "topics": [
            "Pricing Economics",
            "Geopolitics",
            "Infrastructure",
            "Global Governance",
            "Sovereign AI"
        ],
        "linkedinPostUrl": "https://www.linkedin.com/company/the-epoch/"
    },
    {
        "id": "papers-01",
        "type": "papers",
        "issueNumber": "Research · Issue 01",
        "title": "Global Workspace in LLMs, Non-Invasive Brain Decoding, and SWE-1.7 RL Scaling",
        "date": "July 4-10, 2026",
        "readTime": "4 min read",
        "signal": "Anthropic reveals 'J-space' global workspace in Claude carrying causal load for reasoning under 10% activation; Meta FAIR Brain2Qwerty v2 achieves 61% accuracy decoding sentences from non-invasive MEG scans; Cognition SWE-1.7 shows further RL on tuned base breaks assumed ceiling to reach 42.3% on SWE-bench.",
        "caseAgainstIt": "Verbalizable global representations do not equate to consciousness or genuine subjective experience. SWE-1.7 benchmarks are self-reported by Cognition without independent third-party verification.",
        "topics": [
            "Interpretability",
            "Brain-Computer Interface",
            "Agentic Coding"
        ],
        "linkedinPostUrl": "https://www.linkedin.com/company/the-epoch/"
    }
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
    date: "sep 4th, 2026, 11:30pm",
    text: "published Research Issue 08 of The Epoch. Astra breaking Erdős and NoRA normalization. back to neural surrogate training runs.",
  },
  {
    date: "aug 30th, 2026, 11pm",
    text: "neural surrogate simulation batch 41 finished. 0.94 F1 on aerodynamic re-entry profile. 50 pushups and 2 minute plank before bed.",
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
    text: "reading Camus between pipeline runs. 'one must imagine Sisyphus happy' feels like debugging convergence on sparse gradients.",
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
    shortLabel: "ML & Systems",
    downloadUrl: "/resumes/Preetinderjeet_Singh_ML_Engineer_Resume.pdf",
    focus: "PyTorch, PINN, LSTM, Transformers, Neural Surrogate Modeling, Edge TFLite",
  },
  {
    id: "data",
    label: "Data Science & Analytics Resume",
    shortLabel: "Data Science",
    downloadUrl: "/resumes/Preetinderjeet_Singh_Data_Science_Resume.pdf",
    focus: "Statistical Modeling, Explainable AI (SHAP), ARIMA Forecasting, Panel Regression",
  },
];

export const initialQuestions = [
  {
    id: "q-01",
    q: "what model architecture are you using for hypersonic prediction?",
    a: "spatio-temporal neural ode with adaptive numerical solver. details under NDA, but stability bounds matter more than loss.",
    time: "aug 28th, 2026",
    status: "answered",
  },
  {
    id: "q-02",
    q: "how can i contribute to The Epoch or submit a paper?",
    a: "dm me on twitter or email with a paper preprint and the counter-argument for why it might fail in production.",
    time: "aug 24th, 2026",
    status: "answered",
  },
  {
    id: "q-03",
    q: "why do you connect classical chess with machine learning simulations?",
    a: "chess is purely adversarial search under perfect information. simulation safety requires anticipating edge-case actions before the loss gradient blows up.",
    time: "aug 18th, 2026",
    status: "answered",
  },
];
