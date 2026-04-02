import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function DotGrid() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 6px)", gap: "5px" }}>
      {Array(9).fill(0).map((_, i) => (
        <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(255,255,255,0.4)" }} />
      ))}
    </div>
  );
}

const socials = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "clamp(2rem,4vw,3.5rem)", height: "clamp(2rem,4vw,3.5rem)" }}>
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    label: "Github",
    url: "github.com/piushmaji",
    href: "https://github.com/piushmaji",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "clamp(2rem,4vw,3.5rem)", height: "clamp(2rem,4vw,3.5rem)" }}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: "LinkedIn",
    url: "linkedin.com/in/piushmaji",
    href: " https://www.linkedin.com/in/piush-maji-4aa2a72b9",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "clamp(2rem,4vw,3.5rem)", height: "clamp(2rem,4vw,3.5rem)" }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email",
    url: "piushmajibtech@gmail.com",
    href: "mailto:piushmajibtech@gmail.com",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "clamp(2rem,4vw,3.5rem)", height: "clamp(2rem,4vw,3.5rem)" }}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    label: "TWITTER",
    url: "x.com/piushmaji",
    href: "https://x.com/piushmaji",
  },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const rowsRef = useRef([]);

  useEffect(() => {
    rowsRef.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, x: -40 },
        {
          opacity: 1, x: 0,
          duration: 0.7,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0a0a0a] pt-8 pb-0">
      <div className="max-w-7xl mx-auto">
        {socials.map((s, i) => (
          <a
            key={i}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            ref={(el) => (rowsRef.current[i] = el)}
            className="social-row flex items-center justify-between px-6 md:px-12 py-6 md:py-8 no-underline text-white opacity-0 group"
            style={{ textDecoration: "none" }}
          >
            {/* Left: icon + label */}
            <div className="flex items-center gap-4 md:gap-8">
              <span className="text-white">{s.icon}</span>
              <span
                className="text-white font-bold"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(2rem, 5vw, 5rem)",
                  letterSpacing: "0.01em",
                  lineHeight: 1,
                }}
              >
                {s.label}
              </span>
            </div>

            {/* Right: url + dots */}
            <div className="flex items-center gap-6">
              <span
                className="hidden md:block font-mono transition-colors group-hover:text-[#E8541A]"
                style={{
                  color: "#E8541A",
                  fontSize: "clamp(0.7rem, 1.2vw, 1rem)",
                  fontStyle: "italic",
                  letterSpacing: "0.04em",
                }}
              >
                {s.url}
              </span>
              <DotGrid />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}