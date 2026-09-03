import { projects } from "../data/content";

export default function MemeMarquee() {
  // Collection of imagery: project previews and telemetry artifacts
  const images = [
    "/gallery/telemetry.jpg",
    "/gallery/code.jpg",
    "/gallery/chess.jpg",
    "/gallery/drone.jpg",
    "/gallery/rubiks.jpg",
    "/gallery/nightcity.jpg",
    "/gallery/discipline.jpg",
    "/projects/one.jpg",
    "/projects/two.jpg",
    "/projects/three.jpg",
  ];

  return (
    <div className="meme-marquee relative z-10 w-full overflow-hidden pt-28 pb-12">
      <div className="meme-marquee-track">
        {images.concat(images).map((src, i) => (
          <div
            key={i}
            className="relative shrink-0 overflow-hidden mx-2 border-hairline-dim"
            style={{
              width: "clamp(140px, 22vw, 240px)",
              height: "clamp(140px, 22vw, 240px)",
            }}
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
