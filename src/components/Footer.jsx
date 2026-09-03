import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/20 py-12 px-6 md:px-16 lg:px-24 text-white font-serif">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-sm">
        <div>
          <p className="glow-text text-base lowercase">{profile.shortName}</p>
          <p className="text-white/50 text-xs font-mono mt-1">
            © {new Date().getFullYear()} {profile.name} • {profile.location}
          </p>
        </div>

        <div className="flex items-center gap-6 font-mono text-xs lowercase">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-70 underline"
          >
            github
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-70 underline"
          >
            linkedin
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hover:opacity-70 underline"
          >
            email
          </a>
          <a
            href="/resume.pdf"
            download
            className="hover:opacity-70 underline text-[#c4a7e7]"
          >
            resume
          </a>
        </div>
      </div>
    </footer>
  );
}
