export default function MemeMarquee() {
  // Pure atmospheric, dark academia, telemetry, chess, and discipline photos
  // Zero project screenshots included per user requirement
  const images = [
    "/gallery/telemetry.jpg",
    "/gallery/code.jpg",
    "/gallery/chess.jpg",
    "/candid/chess-books.jpg",
    "/gallery/drone.jpg",
    "/candid/vintage-study.jpg",
    "/gallery/nightcity.jpg",
    "/gallery/discipline.jpg",
    "/candid/dark-academia-books.jpg",
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
