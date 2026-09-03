import Hero from "../components/Hero";
import MemeMarquee from "../components/MemeMarquee";
import BioSection from "../components/BioSection";
import FeaturedProject from "../components/FeaturedProject";
import ResumeSection from "../components/ResumeSection";
import AppreciationSection from "../components/AppreciationSection";
import PersonalStory from "../components/PersonalStory";
import AsciiPortrait from "../components/AsciiPortrait";
import FloatingCursorQuote from "../components/FloatingCursorQuote";
import EpochSection from "../components/EpochSection";
import ThoughtsSection from "../components/ThoughtsSection";
import QuestionsSection from "../components/QuestionsSection";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white cursor-default">
      <FloatingCursorQuote />
      <Hero />
      <MemeMarquee />
      <BioSection />
      <FeaturedProject />
      <ResumeSection />
      <AppreciationSection />
      <PersonalStory />
      <AsciiPortrait />
      <EpochSection />
      <ThoughtsSection />
      <QuestionsSection />
    </div>
  );
}
