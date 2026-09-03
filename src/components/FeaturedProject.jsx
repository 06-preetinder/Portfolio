import { featuredProject } from "../data/content";

export default function FeaturedProject() {
  return (
    <div id="work" className="relative z-10 flex items-center justify-center px-4 pt-4 md:px-16 lg:px-24 pb-8">
      <div className="vignette-pod max-w-5xl w-full p-4 md:p-12 rounded-3xl">
        <p className="text-white text-sm md:text-base leading-relaxed mb-3 px-4 md:px-0 font-serif lowercase">
          {featuredProject.announcement}{" "}
          <a
            href={featuredProject.link}
            target="_blank"
            rel="noreferrer"
            className="underline hover:opacity-80"
          >
            {featuredProject.link.replace("https://", "")}
          </a>
        </p>

        <a
          href={featuredProject.link}
          target="_blank"
          rel="noreferrer"
          className="block mb-8 mx-4 md:mx-0 max-w-2xl hover:opacity-90 transition-opacity border-hairline overflow-hidden"
        >
          <img
            src={featuredProject.previewImage}
            alt={featuredProject.title}
            className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </a>

        <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-2xl px-4 md:px-0 font-serif lowercase">
          {featuredProject.description}
        </p>
      </div>
    </div>
  );
}
