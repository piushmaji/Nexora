export default function DiagonalBand({ 
  wordsTop = ["Pixel Perfect", "Clean Code", "High Performance"],
  wordsBottom = ["Creative Logic", "Seamless UX", "Future Proof"]
}) {
  // Duplicating the words so we can animate exactly 50% of the ultra-wide container to create a perfect seamless loop
  const doubledTop = [...wordsTop, ...wordsTop, ...wordsTop, ...wordsTop, ...wordsTop, ...wordsTop];
  const doubledBottom = [...wordsBottom, ...wordsBottom, ...wordsBottom, ...wordsBottom, ...wordsBottom, ...wordsBottom];

  return (
    <section className="py-24 md:py-36 overflow-hidden flex flex-col justify-center w-full">
      <div
        className="relative py-4 md:py-6 bg-[#0A0A0A] w-full shadow-2xl"
        style={{
          // Tilt the entire container
          transform: `rotate(-4deg) scale(1.1)`,
          transformOrigin: "center",
          zIndex: 5,
          // borderTop: "1px solid rgba(255,255,255,0.05)",
          // borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <style>
          {`
          @keyframes marquee-left {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marquee-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
          .animate-marquee-left {
            width: max-content;
            animation: marquee-left 35s linear infinite;
          }
          .animate-marquee-right {
            width: max-content;
            animation: marquee-right 35s linear infinite;
          }
        `}
      </style>

      {/* Top Line - Outlined, right-to-left */}
      <div className="flex flex-row items-center whitespace-nowrap animate-marquee-left mb-1">
        {doubledTop.map((w, i) => (
          <span
            key={"top-" + i}
            className="text-white font-bold mx-4 md:mx-6 flex items-center gap-4 md:gap-6"
            style={{
              fontFamily: "'Impact', 'Arial Narrow', sans-serif",
              fontSize: "clamp(3rem, 5vw, 5.5rem)",
              letterSpacing: "0.02em",
              lineHeight: 1,
              // Outlined text effect
              WebkitTextStroke: "1px rgba(255, 255, 255, 0.5)",
              color: "transparent",
            }}
          >
            {w}
            {/* Hollow Circle Separator */}
            <span
              className="inline-block rounded-full"
              style={{ width: 10, height: 10, border: "2px solid rgba(255,255,255,0.5)", flexShrink: 0 }}
            />
          </span>
        ))}
      </div>

      {/* Bottom Line - Solid, left-to-right */}
      <div className="flex flex-row items-center whitespace-nowrap animate-marquee-right">
        {doubledBottom.map((w, i) => (
          <span
            key={"bottom-" + i}
            className="text-white font-bold mx-4 md:mx-6 flex items-center gap-4 md:gap-6 drop-shadow-lg"
            style={{
              fontFamily: "'Impact', 'Arial Narrow', sans-serif",
              fontSize: "clamp(3rem, 5vw, 5.5rem)",
              letterSpacing: "0.02em",
              lineHeight: 1,
              color: "white",
            }}
          >
            {w}
            {/* Solid Dot Separator */}
            <span
              className="inline-block rounded-full"
              style={{ width: 12, height: 12, background: "white", flexShrink: 0 }}
            />
          </span>
        ))}
      </div>
    </div>
    </section>
  );
}