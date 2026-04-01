import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Statement() {
  const sectionRef = useRef(null);
  const altRef = useRef(null);
  const textRefs = useRef([]);
  const badgeRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    // Mouse movement for ambient glow effect
    const handleMouseMove = (e) => {
      if (!sectionRef.current || !glowRef.current) return;
      const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      gsap.to(glowRef.current, {
        x: (x - 0.5) * 150, // move glow organically
        y: (y - 0.5) * 150,
        duration: 2,
        ease: "power2.out"
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Fade-in / slight slide for top header
    gsap.fromTo(
      altRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1, 
        y: 0, 
        duration: 1.2, 
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      }
    );

    // Staggered text lines with 3D rotation
    textRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 80, rotateX: -30 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1.4,
          ease: "expo.out",
          delay: index * 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
        }
      );
    });

    // Badge zoom-in & rotate
    gsap.fromTo(
      badgeRef.current,
      { opacity: 0, scale: 0.8, rotation: -90 },
      {
        opacity: 1, 
        scale: 1, 
        rotation: 0,
        duration: 1.5, 
        ease: "back.out(1.5)",
        scrollTrigger: { trigger: badgeRef.current, start: "top 85%" },
      }
    );

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative bg-[#050505] py-32 overflow-hidden flex flex-col items-center justify-center min-h-screen"
    >
      {/* Background ambient lighting */}
      <div 
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] rounded-full pointer-events-none blur-[120px] opacity-20"
        style={{
          background: "radial-gradient(circle, #E8541A 0%, rgba(232,84,26,0) 70%)"
        }}
      />
      
      {/* Grid overlay for texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Container */}
      <div className="relative z-10 w-full max-w-7xl px-4 md:px-8 flex flex-col items-center">
        
        {/* Decorative Top Line */}
        <div ref={altRef} className="flex flex-col items-center mb-16 opacity-0">
          <div className="flex items-center gap-4 text-[#A0A0A0] font-['Space_Grotesk'] text-sm md:text-base tracking-[0.3em] uppercase mb-6">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8541A]" />
            System Statement
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8541A]" />
          </div>
          <h2 className="font-['Bebas_Neue'] text-5xl md:text-7xl lg:text-8xl tracking-wide text-white flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
            <span>ALT<span className="text-[#E8541A] drop-shadow-[0_0_15px_rgba(232,84,26,0.8)]">★</span>DEVELOPER</span>
            <span className="text-outline hidden md:inline">|</span>
            <span className="text-outline">OF THE FUTURE</span>
          </h2>
        </div>

        {/* Main Manifesto */}
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-1 md:gap-2 text-center mt-4 md:mt-8" style={{ perspective: "1000px" }}>
          {[
            "I engineer logic and build",
            "interfaces that work.",
            "Code that scales, for users",
            "who won't settle for less."
          ].map((line, i) => (
            <div key={i} className="overflow-hidden py-1 md:py-2">
              <h3 
                ref={(el) => (textRefs.current[i] = el)}
                className="font-['Bebas_Neue'] text-[3.5rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[8rem] leading-[0.85] text-white opacity-0 transform-gpu"
                style={{
                  color: i === 1 ? '#E8541A' : 'white',
                  textShadow: i === 1 ? '0 0 40px rgba(232,84,26,0.4)' : 'none'
                }}
              >
                {line.toUpperCase()}
              </h3>
            </div>
          ))}
        </div>

        {/* Floating Glassmorphism Info / Badge area */}
        <div 
          ref={badgeRef}
          className="mt-24 relative p-8 md:p-10 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.6)] flex items-center justify-center opacity-0 group hover:border-[#E8541A]/40 transition-all duration-700 ease-out cursor-none"
        >
          {/* Subtle inner glow */}
          <div className="absolute inset-0 rounded-full bg-[#E8541A]/[0.02] group-hover:bg-[#E8541A]/10 transition-colors duration-700" />
          
          {/* Spinning text inside the badge */}
          <div className="relative flex items-center justify-center" style={{ width: 140, height: 140 }}>
            <svg
              className="animate-[spin_12s_linear_infinite] absolute inset-0 text-[#E8541A] drop-shadow-[0_0_8px_rgba(232,84,26,0.5)] group-hover:text-white transition-colors duration-500"
              viewBox="0 0 120 120"
              style={{ width: '100%', height: '100%' }}
            >
              <defs>
                <path
                  id="circ"
                  d="M 60,60 m -46,0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0"
                />
              </defs>
              <text
                fill="currentColor"
                fontSize="10"
                fontFamily="'Inter', sans-serif"
                letterSpacing="3.5"
                fontWeight="500"
              >
                <textPath href="#circ">
                  BUILD · DEPLOY · SCALE · CODE ·{" "}
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-4xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] group-hover:scale-125 transition-transform duration-500 ease-out">
              ✦
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}