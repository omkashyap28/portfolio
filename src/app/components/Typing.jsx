"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { tagLines } from '../../../constants'


export default function Typing() {

  const animateBoxRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(
      animateBoxRef.current, {
      strings: tagLines,
      typeSpeed: 30,
      backDelay: 1000,
      loop: true,
      loopCount: Infinity,
      showCursor: false,
      backSpeed: 5,
    }
    );
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <span
      ref={animateBoxRef}
      className="overflow-hidden h-19 rounded-md bg-neutral-900/90 backdrop-blur-lg ring-1 ring-black/40 shadow-lg shadow-neutral-400 min-w-44 text-neutral-100 px-4 py-2 transition-all duration-400"
    ></span>
  );
}