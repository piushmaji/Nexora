import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import storex from "../../assets/Projects/storex.png"
import notebook from "../../assets/Projects/Notebook1.png"
import k72 from "../../assets/Projects/k72.png"
import miranda from "../../assets/Projects/miranda.png"
import weather from "../../assets/Projects/weather.png"

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    num: "01 / 05",
    name: "StoreX",
    desc: "A fully-featured e-commerce platform with product management, cart, real-time inventory updates and a smooth checkout flow. Built with a focus on scalable architecture and clean UX.",
    tags: ["React", "Tailwind","Supabase",],
    image:storex ,
    liveLink: "https://storexpi.vercel.app/",
    accent: "#E8541A",
  },
  {
    num: "02 / 05",
    name: "Notebook",
    desc: "A real-time notes application powered by Supabase for seamless data sync. Create, organise, and access notes from anywhere with instant persistence and markdown support.",
    tags: ["React", "Supabase", "Tailwind"],
    image: notebook,
    liveLink: "https://notebookpi.netlify.app/",
    accent: "#E8541A",
  },
  {
    num: "03 / 05",
    name: "Weather App",
    desc: "A live weather dashboard with location-based forecasts, dynamic backgrounds, and real-time API integration. Delivers accurate data with a visually expressive responsive interface.",
    tags: ["JavaScript", "REST API", "CSS"],
    image: weather,
    liveLink: "https://weather-application-cyan-three.vercel.app/",
    accent: "#E8541A",
  },
  {
    num: "04 / 05",
    name: "Miranda",
    desc: "A polished web project with a strong visual identity, fluid animations, and a highly interactive user experience. Built to push creative boundaries while maintaining performance.",
    tags: ["React", "CSS", "Animation"],
    image: miranda,
    liveLink: "https://github.com/piushmaji/Miranda",
    accent: "#E8541A",
  },
  {
    num: "05 / 05",
    name: "K72 Animated Site",
    desc: "A high-fidelity animated website built in React with immersive page transitions, scroll-driven motion, and layered visual storytelling. Creative development at its finest.",
    tags: ["React", "GSAP", "Tailwind"],
    image: k72,
    liveLink: "https://accuil-k72.vercel.app/",
    accent: "#E8541A",
  },
];

function ProjectCard({ project, index }) {
  return (
    <div
      className="rounded-[2rem] overflow-hidden relative shadow-2xl flex flex-col md:flex-row flex-shrink-0 md:mr-20 mb-8 md:mb-0 transition-all duration-300 hover:shadow-[0_0_30px_rgba(232,84,26,0.15)] max-w-full"
      style={{
        width: "clamp(300px, 90vw, 950px)",
        background: "#0c0c0c",
        border: "1px solid rgba(232,84,26,0.3)",
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
              textShadow: "2px 2px 0px rgba(0,0,0,0.5)"
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

      {/* Right Callout Visual (Image Preview & Live Link) */}
      <div
        className="w-full md:w-[350px] lg:w-[420px] relative flex flex-col items-center justify-center p-8 md:p-0 border-t md:border-t-0 md:border-l border-[rgba(232,84,26,0.2)]"
        style={{ background: "#080808" }}
      >
        
        {/* Device Wrapper */}
        <div className="relative w-full max-w-[280px] h-[340px] md:h-[80%] rounded-[1.5rem] overflow-hidden border border-[#222] shadow-[0_15px_30px_rgba(0,0,0,0.5)] group">
          
          {/* Mock Screenshot Image */}
          <img 
            src={project.image} 
            alt={`${project.name} preview`}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Floating Live Link Arrow Button */}
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 w-12 h-12 bg-[#111] hover:bg-[#E8541A] rounded-xl flex items-center justify-center transition-colors duration-300 z-10 border border-[#333] shadow-lg group/btn"
            aria-label={`View ${project.name} live demo`}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-5 h-5 text-white transition-transform duration-300 group-hover/btn:scale-110 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
            >
              /* Stylized 4-dot / expanding arrow mimicking reference */
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
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
    // General Fade for Title
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

    let mm = gsap.matchMedia();

    // HORIZONTAL PINNING LOGIC - ONLY for Desktop / Tablets
    mm.add("(min-width: 768px)", () => {
      const pinWrap = containerRef.current;
      
      const getScrollAmount = () => {
        let pinWrapWidth = pinWrap.scrollWidth;
        return -(pinWrapWidth - window.innerWidth + 100); 
      };

      gsap.to(pinWrap, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,           // Locks the entire section
          scrub: 1,            // Ties horizontal movement to vertical scroll
          end: () => `+=${getScrollAmount() * -1}`, 
          invalidateOnRefresh: true, 
        }
      });
    });

    return () => {
      mm.revert(); // Automatically kills triggers and restores state for breakpoints
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

      {/* Main Title - Native scroll relative on mobile, sticky/pinned on desktop */}
      <div ref={titleRef} className="md:absolute md:top-24 mt-12 md:mt-0 w-full flex flex-col items-center opacity-0 z-10 md:pointer-events-none relative mb-12 md:mb-0">
        <h2 className="font-['Bebas_Neue'] text-6xl md:text-7xl lg:text-9xl tracking-widest text-3d uppercase text-center drop-shadow-2xl">
          My Projects
        </h2>
      </div>

      {/* The Horizontal Slide Track */}
      {/* Starting heavily margined to avoid the title, pushing it downwards natively */}
      <div className="relative w-full h-full md:mt-64 lg:mt-72">
        {/* On mobile: standard vertical stack. On desktop: horizontal row sliding left */}
        <div ref={containerRef} className="flex flex-col items-center md:items-start md:flex-row md:w-max md:pl-[5vw] lg:pl-[10vw]">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} total={projects.length} />
          ))}
        </div>
      </div>
    </section>
  );
}