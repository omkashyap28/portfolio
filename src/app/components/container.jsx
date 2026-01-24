"use client"

import gsap from 'gsap'
import { ReactLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'

export default function Container({ children }) {
  const lenisRef = useRef();
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }
    gsap.ticker.add(update)
    return () => gsap.ticker.remove(update);
  }, []);
  return (
    <>
      <ReactLenis
        options={{
          smoothWheel: true,
          duration: 1,
          easing: "easeOutExpo",
          autoRef: false
        }}
        ref={lenisRef} root />
      <div className="w-full max-w-2xl mx-auto px-5">
        {children}
      </div>
    </>
  );
}