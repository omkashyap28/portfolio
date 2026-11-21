"use client"

import { memo, useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

type ParticlesJSConfig = {
  particles: {
    number: {
      value: number
      density: {
        enable: boolean
        value_area: number
      }
    }
    color: { value: string }
    shape: {
      type: string
      stroke: { width: number; color: string }
    }
    opacity: {
      value: number
      random: boolean
      anim: {
        enable: boolean
        speed: number
        opacity_min: number
        sync: boolean
      }
    }
    size: {
      value: number
      random: boolean
      anim: {
        enable: boolean
        speed: number
        size_min: number
        sync: boolean
      }
    }
    line_linked: {
      enable: boolean
      distance: number
      color: string
      opacity: number
      width: number
    }
    move: {
      enable: boolean
      speed: number
      direction: string
      random: boolean
      straight: boolean
      out_mode: string
      bounce: boolean
    }
  }
  interactivity: {
    detect_on: string
    events: {
      onhover: { enable: boolean; mode: string }
      onclick: { enable: boolean; mode: string }
      resize: boolean
    }
    modes: {
      grab: {
        distance: number
        line_linked: { opacity: number }
      }
      push: { particles_nb: number }
    }
  }
  retina_detect: boolean
}

declare global {
  interface Window {
    particlesJS?: (id: string, config: ParticlesJSConfig) => void
    pJSDom?: Array<{
      pJS: {
        fn: {
          vendors: {
            destroypJS: () => void
          }
        }
      }
    }>
  }
}

const ParticlesBackground = () => {
  const { resolvedTheme } = useTheme()
  const containerRef = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let mounted = true

    ;(() => setReady(false))()

    const initParticles = async () => {
      // @ts-expect-error particles.js does not provide TypeScript declarations
      const particlesModule = await import("particles.js")

      if (!mounted || !containerRef.current) return

      const particlesJS =
        window.particlesJS ??
        (
          particlesModule as unknown as {
            default?: typeof window.particlesJS
          }
        ).default

      if (!particlesJS) return

      // Destroy previous instance
      window.pJSDom?.forEach((instance) => {
        instance.pJS.fn.vendors.destroypJS()
      })

      window.pJSDom = []

      if (!mounted) return

      const color = resolvedTheme === "light" ? "#000000" : "#ffffff"

      particlesJS("particles-js", {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 1400,
            },
          },
          color: { value: color },
          shape: {
            type: "circle",
            stroke: { width: 0, color },
          },
          opacity: {
            value: 0.8,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color,
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: { opacity: 0.8 },
            },
            push: { particles_nb: 4 },
          },
        },
        retina_detect: true,
      })

      if (mounted) {
        // Allow the canvas to render before fading in
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (mounted) setReady(true)
          })
        })
      }
    }

    initParticles()

    return () => {
      mounted = false

      window.pJSDom?.forEach((instance) => {
        instance.pJS.fn.vendors.destroypJS()
      })

      window.pJSDom = []
    }
  }, [resolvedTheme])

  return (
    <div
      id="particles-js"
      ref={containerRef}
      aria-hidden="true"
      className={`fixed inset-0 -z-10 overflow-hidden transition-[opacity,transform] duration-1200 ease-out motion-reduce:transition-none ${
        ready ? "scale-100 opacity-100" : "scale-[1.02] opacity-0"
      } `}
    />
  )
}

export const Particles = memo(ParticlesBackground)
