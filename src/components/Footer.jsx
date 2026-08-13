import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer id="contact" className="hairline mt-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 flex flex-col md:flex-row justify-between gap-10">
        <div>
          <p className="font-display text-3xl md:text-4xl leading-none">
            Working on something
            <br />
            <span className="text-brass">consequential?</span>
          </p>
          <p className="mt-4 text-paper-dim max-w-md">
            If it's a problem where getting it wrong actually costs something,
            I'd like to talk.
          </p>
        </div>
        <div className="flex flex-col gap-2 font-mono text-sm uppercase tracking-wider">
          <a href={`mailto:${profile.email}`} className="text-paper hover:text-brass transition-colors">
            Email
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-paper hover:text-brass transition-colors">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-paper hover:text-brass transition-colors">
            GitHub
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 md:px-10 pb-10 flex justify-between text-xs font-mono text-paper-dim/60">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>{profile.location}</span>
      </div>
    </footer>
  );
}
