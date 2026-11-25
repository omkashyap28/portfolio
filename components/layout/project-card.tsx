"use client"

import Image from "next/image"
import { projectData } from "@/constants"
import { motion } from "motion/react"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { ExternalLinkIcon, Github } from "@hugeicons/core-free-icons"
import { cn } from "cn"
import { buttonVariants } from "../ui/button"

export const ProjectCard = ({
  project,
}: {
  project: (typeof projectData)[number]
}) => {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 20,
        filter: "blur(10px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.15 }}
      className="group h-fit overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg"
    >
      <div className="relative aspect-16/10 overflow-hidden border-b border-border/30">
        <Image
          unoptimized
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          sizes="(max-width: 640px) 100vw, 616px"
          className="object-cover transition-all duration-500 group-hover:scale-105"
        />
      </div>
      <div className="relative p-4">
        <div className="mb-4 flex items-center justify-end">
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "size-3 text-muted-foreground",
              buttonVariants({ size: "icon-sm", variant: "ghost" })
            )}
          >
            <HugeiconsIcon icon={Github} size={16} strokeWidth={1.5} />
          </Link>
          {project.live !== "#" && (
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "size-3 text-muted-foreground",
                buttonVariants({ size: "icon-sm", variant: "ghost" })
              )}
            >
              <HugeiconsIcon
                icon={ExternalLinkIcon}
                size={16}
                strokeWidth={1.5}
              />
            </Link>
          )}
        </div>
        <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
        <p className="mt-2 min-h-12 text-sm leading-6 text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-5 flex items-center justify-between gap-3">
          <div className="flex min-w-0 flex-wrap gap-2">
            {project.tools.map((tool) => (
              <Image
                unoptimized
                key={tool}
                src={`https://omkashyap.vercel.app/images/${tool}.svg`}
                alt=""
                width={20}
                height={20}
                className="size-5 object-contain"
              />
            ))}
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <span
            className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${project.status === "Active" ? "bg-emerald-500/12 text-emerald-600 dark:text-emerald-400" : "bg-amber-500/12 text-amber-600 dark:text-amber-400"}`}
          >
            {project.status}
          </span>
        </div>
      </div>
    </motion.article>
  )
}
