import Link from "next/link"
import { Heading2 } from "../layout/heading-2"
import { AnimatedSection } from "../layout/section"
import { techItems } from "@/constants"
import Image from "next/image"
import { GithubCard } from "./components/github-card"
import { Suspense } from "react"
import { GithubRepo } from "./components/github-repo"
import { Spinner } from "../ui/spinner"

export const AboutSection = () => {
  return (
    <AnimatedSection
      className="pointer-events-auto mt-16"
      aria-labelledby="about-heading"
    >
      <Heading2 id="about-heading">About Me</Heading2>
      <div className="mt-4 space-y-5">
        <article className="rounded-xl border border-border p-5">
          <div>
            <h3 className="text-xl font-bold">Hariom Kashyap</h3>
            <h4 className="text-sm font-medium text-muted-foreground">
              Frontend Developer
            </h4>
            <p className="mt-2 text-sm text-muted-foreground">
              I’m building robust web apps. Always learning something new to
              enhance my skills and knowledge. Passionate about creating
              seamless user experiences and writing clean, efficient code.
            </p>
          </div>
          <div className="mt-4">
            <h4 className="text-[16px] font-semibold tracking-wider text-muted-foreground">
              Skills
            </h4>
            <div className="mt-5 flex flex-wrap gap-3">
              {techItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="size-7 rounded-md brightness-75 transition-all hover:brightness-100 focus:brightness-100 focus-visible:outline-2 focus-visible:outline-ring/40"
                  title={item.name}
                >
                  <Image
                    unoptimized
                    src={item.icon}
                    alt=""
                    width={28}
                    height={28}
                    className="size-7 object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>
          <GithubCard />
          <div className="mt-3 space-y-2">
            <Suspense fallback={<Spinner />}>
              <GithubRepo />
            </Suspense>
          </div>
        </article>
      </div>
    </AnimatedSection>
  )
}
