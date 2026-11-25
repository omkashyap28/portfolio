"use client"

import { motion, type Variants } from "motion/react"

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    blur: "20px",
  },
  visible: {
    opacity: 1,
    y: 0,
    blur: "0px",
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
} as Variants

export const AnimatedSection = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof motion.section>) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={sectionVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  )
}
