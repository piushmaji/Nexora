import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Using high-quality SVG original logos from Devicon CDN to match the image perfectly
const tools = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "Canva", icon: "https://static.vecteezy.com/system/resources/previews/032/329/171/non_2x/canva-icon-logo-symbol-free-png.png" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
  { name: "AI Tools", icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
];

function ToolCard({ name, icon }) {
  return (
    <div 
      className="relative group flex-shrink-0 flex items-center justify-center w-[75px] h-[75px] md:w-[90px] md:h-[90px] rounded-[1.2rem] border border-white/10 bg-[#0d0d0d] transition-all duration-300 hover:-translate-y-2 mx-3 md:mx-4 cursor-pointer"
      style={{
        // Combines outer orange glow, inner bottom orange glow, and new general inner bevel/depth shadows
        boxShadow: "0 10px 20px -5px rgba(232,84,26, 0.15), inset 0 -2px 10px -3px rgba(232,84,26, 0.15), inset 0 4px 10px rgba(0,0,0,0.5), inset 0 1px 3px rgba(255,255,255,0.1)"
      }}
      title={name} // Tooltip since text is removed for the minimal look
    >
      <img 
        src={icon} 
        alt={name} 
        className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-110 transition-transform duration-300" 
        style={{ filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.5))" }}
      />
    </div>
  );
}

export default function Arsenal() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 30, scale: 0.95 },
      {
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 1.2, 
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      }
    );
  }, []);

  const doubledTools = [...tools, ...tools, ...tools, ...tools];

  return (
    <section ref={sectionRef} className="relative bg-[#050505] min-h-[80vh] py-32 md:py-48 overflow-hidden flex flex-col items-center justify-center">
      
      <style>
        {`
          @keyframes marquee-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); } 
          }
          .animate-marquee {
            width: max-content;
            animation: marquee-scroll 45s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
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

      {/* Title Area matching the metallic 3D look */}
      <div ref={titleRef} className="flex flex-col items-center mb-16 opacity-0">
        <h2 className="font-['Bebas_Neue'] text-5xl md:text-7xl lg:text-8xl tracking-widest text-3d uppercase">
          My Arsenal
        </h2>
      </div>

      {/* Scrolling Container */}
      <div className="relative w-full overflow-hidden flex py-4 md:py-8">
        
        {/* Left / Right Fade to Background Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-20 pointer-events-none bg-gradient-to-r from-[#050505] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-20 pointer-events-none bg-gradient-to-l from-[#050505] to-transparent" />

        {/* Marquee Track */}
        <div className="animate-marquee flex flex-row items-center">
          {doubledTools.map((tool, i) => (
            <ToolCard key={i} name={tool.name} icon={tool.icon} />
          ))}
        </div>
        
      </div>
    </section>
  );
}