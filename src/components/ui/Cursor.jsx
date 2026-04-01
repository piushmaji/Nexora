import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let rx = window.innerWidth / 2, ry = window.innerHeight / 2;

    const move = (e) => {
      gsap.set(dotRef.current, { x: e.clientX, y: e.clientY });
      gsap.to(ringRef.current, { x: e.clientX, y: e.clientY, duration: 0.18, ease: "power2.out" });
    };

    const grow = () => {
      gsap.to(dotRef.current, { width: 20, height: 20, duration: 0.2 });
      gsap.to(ringRef.current, { scale: 1.5, duration: 0.2 });
    };
    const shrink = () => {
      gsap.to(dotRef.current, { width: 10, height: 10, duration: 0.2 });
      gsap.to(ringRef.current, { scale: 1, duration: 0.2 });
    };

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button, [role=button]").forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{ position: "fixed", zIndex: 9999, pointerEvents: "none", willChange: "transform" }} />
      <div ref={ringRef} className="cursor-ring" style={{ position: "fixed", zIndex: 9998, pointerEvents: "none", willChange: "transform" }} />
    </>
  );
}