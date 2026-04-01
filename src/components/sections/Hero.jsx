import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import heroImg from "../../assets/Images/me.png";

export default function Hero() {
  const nameRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const photoRef = useRef(null);
  const wmarkRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Elegant entrance animation
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    
    tl.fromTo(wmarkRef.current, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 2 })
      .fromTo(photoRef.current, { opacity: 0, y: 100, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "expo.out" }, "-=1.5")
      .fromTo(leftRef.current.children, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 1, stagger: 0.1 }, "-=1.0")
      .fromTo(rightRef.current.children, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 1, stagger: 0.1 }, "-=0.9")
      .fromTo(nameRef.current, { opacity: 0, y: 80, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }, { opacity: 1, y: 0, clipPath: "polygon(0 -20%, 100% -20%, 100% 120%, 0 120%)", duration: 1.8 }, "-=1.2");

    // Subtle parallax on mousemove
    const handleMove = (e) => {
      const { clientX, clientY } = e;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (clientX - cx) / cx;
      const dy = (clientY - cy) / cy;

      gsap.to(wmarkRef.current, { x: dx * -30, y: dy * -15, duration: 2, ease: "power2.out" });
      gsap.to(photoRef.current, { x: dx * 10, y: dy * 10, duration: 2, ease: "power2.out" });
      gsap.to(nameRef.current, { x: dx * 20, y: dy * 10, duration: 2, ease: "power2.out" });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-[#030303] overflow-hidden flex flex-col items-center justify-center font-sans tracking-tight">
      
      {/* Cinematic Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-30">
        <div className="w-[80vw] h-[80vh] bg-[radial-gradient(ellipse_at_center,_#ff4b00_0%,_transparent_60%)] blur-[120px] opacity-20"></div>
      </div>

      {/* Top Navbar */}
      <nav className="absolute top-0 w-full flex items-center justify-between px-8 md:px-16 py-10 z-20">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 bg-[#ff4b00] rounded-full animate-pulse shadow-[0_0_8px_#ff4b00]"></div>
          <span className="font-mono text-xs tracking-[0.2em] text-[#888] uppercase hover:text-white transition-colors cursor-pointer">
            Nexora By Piush
          </span>
        </div>
        <span className="font-mono text-xs tracking-[0.2em] text-[#888] uppercase">
          [ Portfolio ]
        </span>
      </nav>

      {/* Giant "PORTFOLIO" Watermark */}
      <div
        ref={wmarkRef}
        className="absolute top-[12%] lg:top-[5%] left-1/2 -translate-x-1/2 pointer-events-none select-none z-0"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(12rem, 30vw, 28rem)",
          WebkitTextStroke: "1px rgba(255, 75, 0, 0.08)",
          color: "transparent",
          letterSpacing: "0.05em",
          lineHeight: 0.8,
        }}
      >
        PORTFOLIO
      </div>

      <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 z-10 relative mt-20 lg:mt-10 pb-32 lg:pb-0">
        
        {/* LEFT COMPONENT */}
        <div ref={leftRef} className="flex flex-col gap-4 w-full lg:w-1/3 order-2 lg:order-1 items-center lg:items-start text-center lg:text-left mt-12 lg:mt-0">
          <span className="text-[#666] font-mono text-xs tracking-[0.3em] uppercase lg:-ml-1 opacity-70">
            Current Status
          </span>
          <div className="group relative rounded-full overflow-hidden p-[1px] cursor-pointer">
            <span className="absolute inset-0 bg-gradient-to-r from-[#ff4b00] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></span>
            <div className="bg-[#050505] rounded-full px-8 py-3 flex items-center justify-center relative">
              <span 
                className="text-white font-medium tracking-[0.05em] uppercase text-sm"
              >
                System Architect
              </span>
            </div>
          </div>
          <p className="text-[#777] font-light text-sm max-w-[200px] mt-2 leading-relaxed">
            Based in India. <br/> Engineering scalable systems.
          </p>
        </div>

        {/* CENTER AVATAR ARCH */}
        <div ref={photoRef} className="w-full lg:w-1/3 flex justify-center z-10 relative order-1 lg:order-2">
          {/* Subtle Outer Glow */}
          <div className="absolute inset-0 bg-[#ff4b00] blur-[80px] opacity-10 rounded-t-full scale-110"></div>
          
          <div 
            className="w-[260px] h-[340px] md:w-[320px] md:h-[420px] relative overflow-hidden flex items-end justify-center shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
            style={{ 
              background: "linear-gradient(180deg, #ff4b00 0%, #a63100 100%)",
              borderTopLeftRadius: "200px", 
              borderTopRightRadius: "200px", 
              borderBottomLeftRadius: "24px", 
              borderBottomRightRadius: "24px",
              boxShadow: "inset 0 2px 20px rgba(255,255,255,0.3), inset 0 -40px 60px rgba(0,0,0,0.8)"
            }}
          >
             <img 
               src={""} 
               alt="Piush Maji" 
               className="w-full h-full object-cover object-bottom -z-0 pointer-events-none drop-shadow-2xl" 
             />

            {/* Premium Vignette Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#030303] via-[#030303]/40 to-transparent pointer-events-none z-10"></div>
          </div>
        </div>

        {/* RIGHT COMPONENT */}
        <div ref={rightRef} className="flex flex-col gap-6 w-full lg:w-1/3 order-3 lg:order-3 items-center lg:items-end text-center lg:text-right mt-12 lg:mt-0">
          <p className="text-[#aaa] text-sm font-light leading-relaxed max-w-[260px]">
            Code in one hand, architecture in the other. I build experiences that bridge both worlds.
          </p>
          <a href="#contact" className="group relative flex items-center justify-between w-[200px] bg-white/5 border border-white/10 hover:border-[#ff4b00]/50 rounded-full p-2 pr-6 transition-all duration-500 overflow-hidden">
             <div className="w-10 h-10 rounded-full bg-[#ff4b00] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
               <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#000" className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
               </svg>
             </div>
             <span className="text-white text-xs font-mono tracking-[0.2em] uppercase">
               Dossier
             </span>
             {/* Hover highlight line */}
             <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#ff4b00] group-hover:w-full transition-all duration-700"></div>
          </a>
        </div>
      </div>

      {/* MASSIVE BOTTOM OVERLAPPING NAME */}
      <div
        ref={nameRef}
        className="absolute bottom-[2%] md:bottom-[5%] w-full text-center z-30 pointer-events-none px-4 flex justify-center"
      >
        <h1
          className="font-bold leading-[0.85] text-center w-full transform-gpu"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(6rem, 18vw, 16rem)",
            color: "#ffffff",
            letterSpacing: "0.02em",
            textShadow: "0px 20px 40px rgba(0,0,0,0.8), 0px 4px 20px rgba(255, 75, 0, 0.3)",
          }}
        >
          PIUSH <span className="opacity-40">MAJI</span>
        </h1>
      </div>
    </section>
  );
}