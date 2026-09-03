export default function MemeMarquee() {
  // Curated dark academia, classical history & atmospheric images provided directly by user
  const images = [
    "/marquee/machiavelli.jpg",
    "/marquee/julius_caesar.jpg",
    "/marquee/alexander_the_great.jpg",
    "/marquee/kingdom_of_heaven.jpg",
    "/marquee/silent.jpg",
    "/marquee/eyes_never_lie.jpg",
    "/marquee/cool_dark_academia.jpg",
    "/marquee/scroll_01.jpg",
    "/marquee/scroll_02.jpg",
    "/marquee/scroll_03.jpg",
    "/marquee/scroll_04.jpg",
    "/marquee/scroll_05.jpg",
    "/marquee/scroll_06.jpg",
    "/marquee/scroll_07.jpg",
    "/marquee/scroll_08.jpg",
    "/marquee/scroll_09.jpg",
    "/marquee/scroll_10.jpg",
    "/marquee/scroll_extra_17.jpg",
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
