"use client"

import { motion, type Variants } from "motion/react"
import { SocialLinks } from "../layout/social-links"
import { TechStack } from "./components/tech-stack"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const Hero = () => {
  return (
    <section className="mx-auto flex flex-col justify-center pt-10 sm:pt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        <motion.h3
          variants={itemVariants}
          className="text-sm font-medium tracking-wide sm:text-base"
        >
          Hey, I am Hariom Kashyap - Frontend Engineer
        </motion.h3>

        <motion.h1
          variants={itemVariants}
          className="text-6xl font-bold tracking-tight text-primary"
        >
          Start Shipping{" "}
          <span
            className="mx-1 inline-block h-1.5 w-6 origin-left rounded-full bg-foreground align-middle sm:w-8"
            aria-hidden="true"
          />{" "}
          <span className="bg-linear-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent">
            Web Experiences
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-xl text-base text-muted-foreground sm:text-lg"
        >
          Always looking for designs to transform into scalable frontends using
          React, Next.js, and TypeScript. Love to build beautiful and functional
          web applications that provide seamless user experiences.
        </motion.p>

        <motion.div variants={itemVariants}>
          <SocialLinks />
        </motion.div>
        <motion.div variants={itemVariants}>
          <TechStack />
        </motion.div>
      </motion.div>
    </section>
  )
}
