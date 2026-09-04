import Hero from "../components/Hero";
import MemeMarquee from "../components/MemeMarquee";
import BioSection from "../components/BioSection";
import FeaturedProject from "../components/FeaturedProject";
import ExperienceSection from "../components/ExperienceSection";
import ResumeSection from "../components/ResumeSection";
import AppreciationSection from "../components/AppreciationSection";
import PersonalStory from "../components/PersonalStory";
import AuthorsCollage from "../components/AuthorsCollage";
import AsciiPortrait from "../components/AsciiPortrait";
import PhilosophyScrambler from "../components/PhilosophyScrambler";
import FloatingCursorQuote from "../components/FloatingCursorQuote";
import ThoughtsSection from "../components/ThoughtsSection";
import EpochSection from "../components/EpochSection";
import QuestionsSection from "../components/QuestionsSection";

export default function Home() {
  return (
    <div className="relative bg-black text-white selection:bg-[#c4a7e7]/30 min-h-screen">
      {/* Mouse-following quote */}
      <FloatingCursorQuote />

      {/* Hero with celestial constellations & divine lightning */}
      <Hero />

      {/* Subtle organic margin coordinate in Jia's style */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 flex justify-between font-mono text-[10px] text-white/30 pt-4">
        <span>[ 30.901° N, 75.857° E ]</span>
        <span>// audio: generative web audio pads</span>
      </div>

      {/* Infinite Grayscale Marquee */}
      <MemeMarquee />

      {/* Founder Bio Pod */}
      <BioSection />

      {/* 4 Projects Showcase & Publication */}
      <FeaturedProject />

      {/* Career Dossier & 3-Pillar Value Thesis */}
      <ExperienceSection />

      {/* Targeted Resume Center */}
      <ResumeSection />

      {/* Tilted Appreciation Index Cards */}
      <AppreciationSection />

      {/* Personal Manifesto & Candid Photos */}
      <PersonalStory />

      {/* ASCII Art Portrait Reveal */}
      <AsciiPortrait />

      {/* Philosophy Monospace Scrambler Cipher */}
      <PhilosophyScrambler />

      {/* Pinterest-style Authors & Quotes Collage right above Epoch */}
      <AuthorsCollage />

      {/* The Epoch Weekly AI Digest with LinkedIn Live Sync */}
      <EpochSection />

      {/* Thoughts micro-journal & Interactive AMA */}
      <ThoughtsSection />
      <QuestionsSection />
    </div>
  );
}
