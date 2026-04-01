import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import fullstack from '../../assets/icons/circle.avif'
import creative from '../../assets/icons/setting.avif'
import web from '../../assets/icons/rocket.avif'
import uiux from '../../assets/icons/cursor.avif'


const skills = [
  { left: "Full-Stack", right: "Development", icon: fullstack, color: "#E8541A" },
  { left: "Creative", right: "Coding", icon: creative, color: "#E8541A" },
  { left: "Web", right: "Engineering", icon: web, color: "#E8541A" },
  { left: "UI / UX", right: "Design", icon: uiux, color: "#E8541A" },
];

function SkillRow({ left, right, icon, color, index }) {
  const rowRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    // Reveal animation
    gsap.fromTo(
      rowRef.current,
      { opacity: 0, x: index % 2 === 0 ? -60 : 60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rowRef.current,
          start: "top 85%",
        },
      }
    );

    // Infinite 90-degree back and forth rotation for the icons
    gsap.to(imgRef.current, {
      rotation: 90,
      duration: 3, 
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, [index]);

  return (
    <div ref={rowRef} className="opacity-0">
      <div
        className="flex items-center justify-center gap-4 md:gap-8 py-4 md:py-6"
        style={{ borderBottom: "1px solid #1f1f1f" }}
      >
        {/* Left text */}
        <span
          className="text-white font-bold tracking-tight leading-none select-none"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(2.5rem, 7vw, 7rem)",
            letterSpacing: "-0.01em",
          }}
        >
          {left}
        </span>

        {/* Icon box */}
        <div
          className="flex-shrink-0 flex items-center justify-center rounded-2xl app-icon"
          style={{
            width: "clamp(60px, 8vw, 110px)",
            height: "clamp(60px, 8vw, 110px)",
            fontSize: "clamp(1.5rem, 3.5vw, 3rem)",
            border: `1px solid ${color}55`,
            boxShadow: `0 0 20px ${color}22`,
          }}
        >
         <img ref={imgRef} src={icon} alt={`${left} icon`} className="w-1/2 h-1/2 md:w-3/5 md:h-3/5 object-contain" />
        </div>

        {/* Right text */}
        <span
          className="text-white font-bold tracking-tight leading-none select-none"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(2.5rem, 7vw, 7rem)",
            letterSpacing: "-0.01em",
          }}
        >
          {right}
        </span>
      </div>
    </div>
  );
}

export default function Skills() {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: titleRef.current, start: "top 85%" },
      }
    );
  }, []);

  return (
    <section className="bg-[#0a0a0a] px-4 md:px-8 py-20">
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

      <div ref={titleRef} className="flex flex-col items-center mb-16 opacity-0">
        <h2 className="font-['Bebas_Neue'] text-5xl md:text-7xl lg:text-8xl tracking-widest text-3d uppercase ">
          My Skills
        </h2>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* First divider */}
        <div style={{ borderTop: "1px solid #1f1f1f" }} />
        {skills.map((s, i) => (
          <SkillRow key={i} {...s} index={i} />
        ))}
      </div>
    </section>
  );
}