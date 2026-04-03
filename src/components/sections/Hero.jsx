import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import heroImg from "../../assets/Images/Avatar1.png";
import resumeFile from "../../assets/Resume/Resume CV.pdf"; // Import the resume file

export default function Hero() {
  const sectionRef = useRef(null);
  
  // Refs for animations
  const bgTextRef = useRef(null);
  const archRef = useRef(null);
  const leftBlockRef = useRef(null);
  const rightBlockRef = useRef(null);
  const nameRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hidden defaults
      gsap.set(navRef.current, { y: -20, autoAlpha: 0 });
      gsap.set(bgTextRef.current, { scale: 0.9, autoAlpha: 0 });
      gsap.set(archRef.current, { y: 100, autoAlpha: 0 });
      gsap.set(leftBlockRef.current, { x: -50, autoAlpha: 0 });
      gsap.set(rightBlockRef.current, { x: 50, autoAlpha: 0 });
      gsap.set(nameRef.current, { y: 50, autoAlpha: 0 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(navRef.current, { y: 0, autoAlpha: 1, duration: 0.8 })
        .to(bgTextRef.current, { scale: 1, autoAlpha: 1, duration: 1.5 }, "-=0.6")
        .to(archRef.current, { y: 0, autoAlpha: 1, duration: 1, ease: "back.out(1.2)" }, "-=1.2")
        .to([leftBlockRef.current, rightBlockRef.current], { 
          x: 0, autoAlpha: 1, duration: 0.8, stagger: 0.1 
        }, "-=0.6")
        .to(nameRef.current, { y: 0, autoAlpha: 1, duration: 0.8, ease: "back.out(1.5)" }, "-=0.4");
        
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-[100svh] bg-[#0c0c0c] overflow-hidden flex flex-col justify-center items-center font-sans"
    >
      {/* Top Navbar */}
      <nav ref={navRef} className="absolute top-0 w-full flex items-center justify-between px-6 md:px-16 py-8 z-50">
        <span className="font-['Bebas_Neue'] text-2xl tracking-widest text-[#e0e0e0] uppercase">
          Nexora.
        </span>
        <span className="font-['Bebas_Neue'] text-2xl tracking-widest text-[#e0e0e0] uppercase">
          Portfolio.
        </span>
      </nav>

      {/* Massive Background Watermark Text - Heavy Solid Industrial block */}
      <div 
        ref={bgTextRef}
        className="absolute top-[40%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] md:text-[25vw] font-['Bebas_Neue'] font-black whitespace-nowrap pointer-events-none select-none z-0"
        style={{ 
          letterSpacing: "0.02em",
          color: "#1a1a1a", /* Dark enough to sit brilliantly in the background without ghostly transparency */
          lineHeight: 0.8
        }}
      >
        PORTFOLIO
      </div>

      <div className="relative z-20 w-full max-w-[1400px] flex flex-col md:flex-row items-center justify-center h-full px-6 gap-10 md:gap-0 mt-28 md:mt-10">
        
        {/* Left Floating Content */}
        <div ref={leftBlockRef} className="md:absolute left-6 lg:left-16 flex flex-col items-center md:items-start gap-2 z-30">
          <p className="text-[#e0e0e0] text-xl font-light tracking-wide">I'm a</p>
          <div className="bg-[#E8541A] px-6 py-2 rounded-[4px] shadow-[4px_4px_0px_#222] my-1">
            <span className="font-['Bebas_Neue'] text-4xl text-black uppercase tracking-wide">UI Architect</span>
          </div>
          <p className="text-[#e0e0e0] text-xl font-light tracking-wide mt-1">Based in India.</p>
        </div>

        {/* Center Arch Container & Avatar */}
        <div ref={archRef} className="relative z-10 mx-auto flex justify-center items-end mt-4 md:mt-0">
          <div className="relative bg-[#E8541A] w-[280px] h-[360px] md:w-[400px] md:h-[480px] rounded-t-[140px] md:rounded-t-[200px] rounded-b-[20px] md:rounded-b-[30px] flex justify-center items-end overflow-visible">
            {/* Grayscale Avatar with subtle drop shadow internally */}
            <div className="absolute inset-x-0 bottom-0 top-[10%] drop-shadow-2xl z-10 flex justify-center pointer-events-none">
              <img 
                src={heroImg} 
                alt="Piush Maji" 
                className="w-auto h-[105%] max-w-none object-contain relative bottom-0 pointer-events-auto filter grayscale hover:grayscale-0 transition-all duration-700 ease-in-out cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Right Floating Content */}
        <div ref={rightBlockRef} className="md:absolute right-6 lg:right-16 flex flex-col items-center md:items-start gap-4 max-w-[300px] z-30 text-center md:text-left mt-8 mb-40 md:mb-0 md:mt-0">
          <p className="text-[#a0a0a0] text-base leading-relaxed font-light">
            Code in one hand, architecture in the other – I build UI experiences that bridge both worlds.
          </p>
          <a href={resumeFile} download="Piush_Maji_Resume.pdf" className="bg-[#E8541A] px-8 py-4 rounded-[4px] shadow-[6px_6px_0px_rgba(255,255,255,0.15)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all cursor-pointer inline-block mt-2">
            <span className="font-['Bebas_Neue'] text-3xl text-[#050505] uppercase tracking-wide"> Download Resume</span>
          </a>
        </div>
      </div>

      {/* Massive Overlapping Foreground Name - Perfect Solid 3D Extrusion */}
      <div 
        ref={nameRef}
        className="absolute bottom-6 md:bottom-12 w-full flex justify-center pointer-events-none z-40 px-4"
      >
        <h1 
          className="font-['Bebas_Neue'] uppercase text-[15vw] md:text-[14.5vw] leading-[0.8] select-none text-center w-full whitespace-nowrap text-white"
          style={{
            letterSpacing: "0.01em",
            textShadow: `
              1px 1px 0 #E8541A,
              2px 2px 0 #E8541A,
              3px 3px 0 #E8541A,
              4px 4px 0 #E8541A,
              5px 5px 0 #E8541A,
              6px 6px 0 #E8541A,
              7px 7px 0 #E8541A,
              8px 8px 0 #E8541A,
              9px 9px 0 #E8541A,
              10px 10px 0 #E8541A,
              20px 20px 30px rgba(0,0,0,0.7)
            `
          }}
        >
          Piush Maji
        </h1>
      </div>

    </section>
  );
}