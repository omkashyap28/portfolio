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
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <span
      ref={animateBoxRef}
      className="flex items-center overflow-hidden h-17 sm:h-19 rounded-md bg-neutral-900 backdrop-blur-lg ring-1 ring-black/40 shadow-lg shadow-neutral-400 text-neutral-100 px-3 sm:px- py-1.5 transition-all duration-600"
    ></span>
  );
}