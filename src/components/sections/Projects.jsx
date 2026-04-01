import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import bag from "../../assets/icons/bag.png"
import notebook from "../../assets/icons/notebook.png"
import weather from "../../assets/icons/weather.png"
import miranda from "../../assets/icons/miranda.png"
import k72 from "../../assets/icons/k72.png"

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    num: "01 / 05",
    name: "StoreX",
    desc: "A fully-featured e-commerce platform with product management, cart, real-time inventory updates and a smooth checkout flow. Built with a focus on scalable architecture and clean UX.",
    tags: ["React", "Tailwind", "Node.js", "MongoDB"],
    emoji: bag,
    accent: "#E8541A",
  },
  {
    num: "02 / 05",
    name: "Notebook",
    desc: "A real-time notes application powered by Supabase for seamless data sync. Create, organise, and access notes from anywhere with instant persistence and markdown support.",
    tags: ["React", "Supabase", "Tailwind"],
    emoji: notebook,
    accent: "#E8541A",
  },
  {
    num: "03 / 05",
    name: "Weather App",
    desc: "A live weather dashboard with location-based forecasts, dynamic backgrounds, and real-time API integration. Delivers accurate data with a visually expressive responsive interface.",
    tags: ["JavaScript", "REST API", "CSS"],
    emoji: weather,
    accent: "#E8541A",
  },
  {
    num: "04 / 05",
    name: "Miranda",
    desc: "A polished web project with a strong visual identity, fluid animations, and a highly interactive user experience. Built to push creative boundaries while maintaining performance.",
    tags: ["React", "CSS", "Animation"],
    emoji: miranda,
    accent: "#E8541A",
  },
  {
    num: "05 / 05",
    name: "K72 Animated Site",
    desc: "A high-fidelity animated website built in React with immersive page transitions, scroll-driven motion, and layered visual storytelling. Creative development at its finest.",
    tags: ["React", "GSAP", "Tailwind"],
    emoji: k72,
    accent: "#E8541A",
  },
];

function DotGrid() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 5px)", gap: "4px" }}>
      {Array(9).fill(0).map((_, i) => (
        <div key={i} style={{ width: 5, height: 5, borderRadius: "50%", background: "white" }} />
      ))}
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <div
      className="glow-border rounded-3xl overflow-hidden relative shadow-2xl flex flex-col md:flex-row flex-shrink-0 mr-8 md:mr-20"
      style={{
        width: "clamp(320px, 85vw, 950px)",
        background: "#0c0c0c",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 20px 40px -10px rgba(0,0,0,0.8)",
        minHeight: "450px",
      }}
    >
      {/* Vertical tracking number */}
      <div
        className="absolute left-[2px] top-1/2 hidden md:flex items-center z-10 opacity-30"
        style={{ transform: "translateY(-50%) rotate(180deg)" }}
      >
        <span
          className="text-[#666] tracking-widest"
          style={{
            fontFamily: "'Inter',sans-serif",
            fontSize: "0.8rem",
            writingMode: "vertical-rl",
            letterSpacing: "0.2em",
            paddingBottom: "1.5rem",
          }}
        >
           {project.num} 
        </span>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8 md:p-14 md:pl-20 flex flex-col justify-center">
        <div>
          <h3
            className="text-white font-bold mb-4 md:mb-6 leading-none"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              letterSpacing: "0.02em",
            }}
          >
            {project.name}
          </h3>
          <p
            className="leading-relaxed"
            style={{ color: "#aaa", fontSize: "clamp(0.9rem, 1.2vw, 1rem)", fontFamily: "'Inter',sans-serif", fontWeight: 300, maxWidth: "600px" }}
          >
            {project.desc}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mt-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full text-white"
              style={{
                fontFamily: "'Inter',sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                background: "rgba(232,84,26, 0.1)",
                border: "1px solid rgba(232,84,26, 0.4)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Right Callout Visual */}
      <div
        className="w-full md:w-[320px] lg:w-[400px] relative flex flex-col items-center justify-center py-12 md:py-0 border-t md:border-t-0 md:border-l border-[rgba(232,84,26,0.2)]"
        style={{
          background: "#111111",
        }}
      >
        <div className="absolute top-6 right-6 opacity-30">
          <DotGrid />
        </div>

        {/* Emoji Badge / Mockup Icon */}
        <div
          className="flex items-center justify-center rounded-2xl group transition-transform duration-300 hover:scale-105 cursor-pointer"
          style={{
            width: "clamp(120px, 15vw, 180px)",
            height: "clamp(160px, 20vw, 220px)",
            background: "linear-gradient(135deg, #1f1f1f, #111)",
            fontSize: "clamp(3.5rem, 5vw, 5rem)",
            border: "1px solid #333",
            boxShadow: "0 10px 20px rgba(0,0,0,0.5), inset 0 2px 5px rgba(255,255,255,0.05)",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <span className="group-hover:-translate-y-2 transition-transform duration-300 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
            <img src={project.emoji} alt={project.name} className="w-full h-full object-contain" />
          </span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ fontSize: "0.6rem", color: "#E8541A", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'Inter',sans-serif" }}>
            Preview App
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef(null); // The wrapper that gets pinned
  const containerRef = useRef(null); // The inner wide container that slides left
  const titleRef = useRef(null);

  useEffect(() => {
    // Reveal the title when reaching the section
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, scale: 0.9, y: 50 },
      {
        opacity: 1, 
        scale: 1, 
        y: 0, 
        duration: 1.2, 
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      }
    );

    // HORIZONTAL PINNING LOGIC
    const pinWrap = containerRef.current;
    
    // Calculate exactly how far left the container needs to travel so the last card aligns perfectly
    const getScrollAmount = () => {
      let pinWrapWidth = pinWrap.scrollWidth;
      return -(pinWrapWidth - window.innerWidth + 100); 
    };

    const tween = gsap.to(pinWrap, {
      x: getScrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,           // Locks the entire section to the viewport
        scrub: 1,            // Ties horizontal movement smoothly to vertical scroll wheel
        end: () => `+=${getScrollAmount() * -1}`, // The horizontal distance dictates how long the vertical pin lasts
        invalidateOnRefresh: true, // Recalculate widths if user resizes window
      }
    });

    return () => {
      // Cleanup
      if (tween.scrollTrigger) tween.scrollTrigger.kill();
      tween.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#050505] min-h-screen relative overflow-hidden flex flex-col justify-center py-20">
      {/* Shared 3D Title Styling */}
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

      {/* Main Title - It will stay planted since the section is pinned */}
      <div ref={titleRef} className="absolute top-12 md:top-24 w-full flex flex-col items-center opacity-0 z-10 pointer-events-none">
        <h2 className="font-['Bebas_Neue'] text-5xl md:text-7xl lg:text-9xl tracking-widest text-3d uppercase text-center drop-shadow-2xl">
          My Projects
        </h2>
      </div>

      {/* The Horizontal Slide Track */}
      {/* Starting heavily margined to avoid the title, pushing it downwards natively */}
      <div className="relative w-full h-full mt-24 md:mt-32">
        {/* The w-max forces this div to be wider than the screen based on children widths */}
        <div ref={containerRef} className="flex flex-row w-max pl-[5vw] lg:pl-[10vw] pt-10">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} total={projects.length} />
          ))}
        </div>
      </div>
    </section>
  );
}