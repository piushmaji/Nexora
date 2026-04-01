import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import 3D assets
import circleImg from "../../assets/icons/circle.avif";
import cursorImg from "../../assets/icons/cursor.avif";
import rocketImg from "../../assets/icons/rocket.avif";
import settingImg from "../../assets/icons/setting.avif";

gsap.registerPlugin(ScrollTrigger);

export default function ContactCTA() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);

  // Refs for parallax elements
  const circleRef = useRef(null);
  const cursorRef = useRef(null);
  const rocketRef = useRef(null);
  const settingRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // 1. Text Entrance Animation (Standard reveal when reaching section)
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      }
    );

    gsap.fromTo(
      btnRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "back.out(1.7)",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      }
    );

    // 2. Continuous Parallax using scrub: true
    // circle goes up fast
    gsap.to(circleRef.current, {
      yPercent: -150,
      ease: "none",
      scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: 1 }
    });
    
    // setting goes up very slow and rotates
    gsap.to(settingRef.current, {
      yPercent: -50,
      rotation: 45,
      ease: "none",
      scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: 1.5 }
    });

    // cursor goes down slightly (negative parallax)
    gsap.to(cursorRef.current, {
      yPercent: 80,
      ease: "none",
      scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: 0.8 }
    });

    // rocket shoots up massively and drifts right
    gsap.to(rocketRef.current, {
      yPercent: -200,
      xPercent: 50,
      ease: "none",
      scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: 0.5 }
    });

  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="bg-[#050505] min-h-[90vh] relative overflow-hidden flex flex-col justify-center items-center py-24"
    >
      {/* Signature 3D Text Overrides */}
      <style>
        {`
          .text-3d {
            color: white;
            text-shadow: 
              1px 1px 0px #E8541A,
              2px 2px 0px #E8541A,
              3px 3px 0px #E8541A,
              4px 4px 0px #E8541A;
          }
        `}
      </style>

      {/* Floating 3D Elements */}
      {/* Top Left */}
      <div ref={circleRef} className="absolute top-[10%] left-[5%] md:left-[15%] w-[80px] md:w-[130px] opacity-80 z-0 pointer-events-none">
        <img src={circleImg} alt="3D Circle" className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(232,84,26,0.3)]" />
      </div>

      {/* Bottom Left */}
      <div ref={settingRef} className="absolute bottom-[20%] left-[8%] md:left-[20%] w-[100px] md:w-[160px] opacity-90 z-0 pointer-events-none">
        <img src={settingImg} alt="3D Setting" className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(255,255,255,0.1)]" />
      </div>

      {/* Top Right */}
      <div ref={cursorRef} className="absolute top-[15%] right-[5%] md:right-[15%] w-[70px] md:w-[120px] opacity-90 z-0 pointer-events-none">
        <img src={cursorImg} alt="3D Cursor" className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(255,255,255,0.1)]" />
      </div>

      {/* Bottom Right */}
      <div ref={rocketRef} className="absolute bottom-[10%] right-[10%] md:right-[20%] w-[110px] md:w-[180px] opacity-100 z-10 pointer-events-none">
        <img src={rocketImg} alt="3D Rocket" className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(232,84,26,0.4)]" />
      </div>

      {/* Central CTA Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <div ref={textRef}>
          <h2
            className="font-['Bebas_Neue'] uppercase leading-[0.9] mb-8 text-3d text-center"
            style={{
              fontSize: "clamp(4.5rem, 12vw, 12rem)",
              letterSpacing: "0.02em",
            }}
          >
            Craft.<br />
            Innovate.<br />
            Elevate.
          </h2>
          <p
            className="mb-14 mx-auto max-w-xl text-center"
            style={{
              color: "#aaa",
              fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              lineHeight: 1.6,
            }}
          >
            Let's collaborate to build something exceptional. My inbox is always open for new opportunities and creative challenges.
          </p>
        </div>

        {/* Hover Pill Button */}
        <a
          ref={btnRef}
          href="mailto:piushmajibtecg@gmail.com"
          className="relative inline-flex items-center justify-center group overflow-hidden"
          style={{
            background: "#0c0c0c",
            border: "1px solid rgba(232,84,26,0.5)",
            borderRadius: 999,
            padding: "clamp(1.2rem, 2vw, 1.5rem) clamp(3rem, 5vw, 4.5rem)",
            textDecoration: "none",
            color: "white",
            fontFamily: "'Bricolage Grotesque',sans-serif",
            fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
            fontWeight: 600,
            letterSpacing: "0.05em",
            boxShadow: "0 0 40px rgba(232,84,26,0.2), inset 0 0 20px rgba(232,84,26,0.1)",
            transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          }}
        >
          {/* Fill-up Hover Block */}
          <div className="absolute inset-0 bg-[#E8541A] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0 rounded-[999px]"></div>
          
          <span className="relative z-10 group-hover:text-[#050505] transition-colors duration-300">
            Get in Touch
          </span>
        </a>
      </div>

      {/* Minimal Footer Signature */}
      <div
        className="absolute bottom-6 w-full text-center z-20 opacity-50"
        style={{
          color: "#444",
          fontSize: "0.75rem",
          fontFamily: "'Inter',sans-serif",
          letterSpacing: "0.08em",
        }}
      >
        COPYRIGHT © PIUSH MAJI · 2026 · ROORKEE, UTTARAKHAND
      </div>
    </section>
  );
}