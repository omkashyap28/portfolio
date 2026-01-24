"use client"

import gsap from 'gsap'
import { ReactLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'
import { Hero, Projects, About, Other, Cta } from "./ui";


export default function Home() {
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
      <Hero />
      <Projects />
      <About />
      <Other />
      <Cta />
    </>
  )
}