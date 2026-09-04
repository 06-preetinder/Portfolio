# Indra / Preetinderjeet Singh

<p align="center">
  <em>"one who is blessed with love and victory."</em>
</p>

<p align="center">
  <a href="https://portfolio-preets-projects-fdbe4ff9.vercel.app"><strong>Live Site →</strong></a> · 
  <a href="https://github.com/06-preetinder/Portfolio"><strong>GitHub Repository</strong></a> · 
  <a href="https://www.linkedin.com/company/the-epoch/"><strong>The Epoch</strong></a>
</p>

---

## Overview

A bespoke personal portfolio and digital salon inspired by the minimal, honest aesthetic of **`jia.build`**, fused with **dark academia**, classical literature, and rigorous aerospace engineering telemetry.

Built for **Preetinderjeet Singh (Indra)** · AI & Agentic Engineer, Aerospace Researcher at Lupex Space, and Founder of *The Epoch* weekly research digest.

---

## Key Features & Architecture

### 1. Celestial Canvas & Atmospheric Hero (`Hero.jsx`)
- **Procedural Starlight**: Canvas background rendering realistic night-sky starfields and three authentic constellations:
  - **Ursa Major** (The Big Dipper)
  - **Virgo** (The Virgin)
  - **Cassiopeia** (The Celestial Queen)
- **Indra's Divine Lightning**: Natural, randomized atmospheric lightning forks branching across the heavens with subtle screen flash.
- **Minimalist Identity**: Clean serif typography (`Indra`) with ethereal white subtitle.

### 2. High-Fidelity Studio Audio Engine (`ambientAudio.js`)
- **HTML5 Web Audio**: Studio-quality playback with crossfades, volume ramping, and loop control.
- **Autoplay on Load**: Automatically begins playback on site visit, equipped with a universal first-gesture listener (`click`, `touch`, `scroll`, `keydown`) to seamlessly satisfy modern browser autoplay policies.
- **5-Track Curated Lineup**:
  1. **`golden brown`** : The Stranglers *(Lead Track / Baroque Harpsichord)*
  2. **`stan`** : Eminem
  3. **`babydoll`** : Dominic Fike
  4. **`far from any road`** : The Handsome Family *(True Detective Theme)*
  5. **`music to watch boys to`** : Lana Del Rey

### 3. Curated Grayscale Marquee (`MemeMarquee.jsx`)
- **18 Curated Frames**: Infinite-scroll marquee featuring authentic classical art, historical figures (Julius Caesar, Alexander the Great, Machiavelli), dark academia photography, and cinematic stills.

### 4. ASCII Art Portrait Reveal (`AsciiPortrait.jsx`)
- **Scroll-Linked Fade**: A mid-page monochromatic SVG ASCII art portrait (`/ascii-portrait.svg`) that gracefully fades into view as you scroll.
- **Minimalist Telemetry**: Subtitled with the quiet maxim `signals under uncertainty`.

### 5. Literary Grounding & Philosophy Collage (`AuthorsCollage.jsx`)
- **Dark Academia Heritage**: Handcrafted literary cards highlighting core philosophical foundations:
  - **Fyodor Dostoevsky** (*The Brothers Karamazov*, *Notes from Underground*)
  - **Franz Kafka** (*The Trial*, *The Metamorphosis*)
  - **Albert Camus** (*The Myth of Sisyphus*, *The Stranger*)
  - **Friedrich Nietzsche** (*Beyond Good and Evil*)
  - **Jane Austen** (*Pride and Prejudice*)
- Paired with authentic candid photography (wooden chessboards with teacups, gothic vaulted library corridors).

### 6. The Epoch AI Digest (`EpochSection.jsx` & `Epoch.jsx`)
- **Dual Friday Cadence**: Covers the two weekly releases—the morning 5-story briefing and the evening 3-paper research breakdown across all 7 published issues (14 releases total).
- **Interactive Release Filtering**: Seamlessly toggle between All Releases, Weekly Issues, and Research Paper editions.
- **Dual-Perspective Analysis**: Every entry documents **The Signal** alongside the signature **Case Against It** (counter-argument), complete with direct PDF slide downloads and LinkedIn dispatch links.

### 7. Interactive Q&A Section (`QuestionsSection.jsx`)
- **Instant Email Delivery**: Connects to `formsubmit.co/ajax/singhpreetinder229@gmail.com` to dispatch questions directly to Preetinder's inbox.
- **Live Visible Feed**: Submitted questions immediately append to the visible log with a glowing `[ sent to inbox · pending reply ]` badge and persist across sessions via `localStorage`.

### 8. Targeted Resume Center (`ResumeSection.jsx`)
Three role-tailored PDF resumes downloadable directly from the site:
1. **AI / Agentic Engineer Resume** (`Preetinderjeet_Singh_AI_Agentic_Resume.pdf`)
2. **Machine Learning / Aerospace Resume** (`Preetinderjeet_Singh_ML_Engineer_Resume.pdf`)
3. **Data Science & Analytics Resume** (`Preetinderjeet_Singh_Data_Science_Resume.pdf`)

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [React 19](https://react.dev/) + [Vite](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) (Custom `@theme` with hairline borders, glow-text) |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) |
| **Audio** | HTML5 Audio Container (`.m4a` AAC) + Custom `AudioEngine` |
| **Canvas** | HTML5 2D Canvas with Retina `devicePixelRatio` scaling |
| **Form Backend** | FormSubmit AJAX Webhooks |
| **Deployment** | [Vercel](https://vercel.com) (Automated Git CI/CD) |

---

## Project Structure

```
Portfolio/
├── public/
│   ├── audio/          # 5 Studio audio tracks (.m4a)
│   ├── candid/         # High-res photography (chess flatlay, vaulted library)
│   ├── marquee/        # 18 curated historical & aesthetic frames
│   ├── projects/       # Jacques-Louis David Napoleon & project visuals
│   └── resumes/        # 3 role-targeted engineering PDF resumes
├── src/
│   ├── components/
│   │   ├── AppreciationSection.jsx   # Tilted guest appreciation cards
│   │   ├── AuthorsCollage.jsx        # Literary grounding & philosophy
│   │   ├── BioSection.jsx            # Founder profile & key metrics
│   │   ├── EpochSection.jsx          # The Epoch digest home preview
│   │   ├── FeaturedProject.jsx       # 4 aerospace & AI projects showcase
│   │   ├── FloatingCursorQuote.jsx   # Mouse-following quote
│   │   ├── Footer.jsx                # Contact links & coordinates
│   │   ├── Hero.jsx                  # Celestial canvas, lightning & audio bar
│   │   ├── MemeMarquee.jsx           # Infinite 18-image ribbon
│   │   ├── Nav.jsx                   # Minimalist top navigation
│   │   ├── PersonalStory.jsx         # August candid photos & personal narrative
│   │   ├── AsciiPortrait.jsx         # Monochromatic ASCII portrait reveal
│   │   ├── QuestionsSection.jsx      # Live Q&A and email dispatch
│   │   ├── ResumeSection.jsx         # Targeted resume download center
│   │   └── ThoughtsSection.jsx       # Micro-journal updates
│   ├── data/
│   │   └── content.js                # Single source of truth for all content
│   ├── pages/
│   │   ├── Epoch.jsx                 # Full Epoch archive
│   │   ├── Experience.jsx            # Career credits
│   │   ├── Home.jsx                  # Main home page assembly
│   │   ├── Projects.jsx              # Project releases
│   │   └── Research.jsx              # Preprint releases
│   ├── utils/
│   │   ├── ambientAudio.js           # Studio audio engine class
│   │   └── linkedinFetcher.js        # LinkedIn post parser
│   ├── App.jsx                       # Routing & root layout
│   └── main.jsx                      # Entry mount
└── package.json
```

---

## Development

```bash
# Clone the repository
git clone https://github.com/06-preetinder/Portfolio.git

# Install dependencies
npm install

# Start local dev server
npm run dev

# Build for production
npm run build
```

---

## License

Personal portfolio of **Preetinderjeet Singh**. All rights reserved.
