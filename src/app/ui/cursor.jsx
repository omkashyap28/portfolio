"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Cursor() {
  useGSAP(() => {
    const handleMouseMove = (e) => {
      console.log(e.target.classList.contains("social-links"))
      const { clientX, clientY } = e;
      gsap.to("#cursor", {
        x: clientX,
        y: clientY,
        duration: 0.2,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    // window.addEventListener("touchmove", handleMouseMove)
    // Cleanup on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      // window.removeEventListener("touchmove", handleMouseMove);

    };
  }, []);

  return (
    <div id="cursor" className="rounded-full shadow-lg h-2 w-2 bg-white fixed z-999 mix-blend-difference pointer-events-none top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
  )
}