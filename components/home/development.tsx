import Link from "next/link"
import type { ComponentProps } from "react"
import { Heading2 } from "../layout/heading-2"
import { AnimatedSection } from "../layout/section"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight02Icon } from "@hugeicons/core-free-icons"
import { resources } from "@/constants"

const LinkTab = ({
  icon,
  title,
  description,
  href,
}: {
  icon: ComponentProps<typeof HugeiconsIcon>["icon"]
  title: string
  description: string
  href: string
}) => (
  <Link
    href={href}
    className="group flex items-center justify-between rounded-lg border bg-linear-to-t from-card/50 to-card/80 px-4 py-2 backdrop-blur-sm transition-all duration-100 ease-linear hover:border-primary/40"
  >
    <div className="flex items-center gap-x-3">
      <HugeiconsIcon
        icon={icon}
        className="size-5.5 text-muted-foreground brightness-80 transition-all duration-100 ease-linear group-hover:brightness-100"
        strokeWidth={1.2}
      />
      <div>
        {title}
        <p className="text-ellispis text-sm text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
    <HugeiconsIcon
      icon={ArrowRight02Icon}
      className="size-4.5 text-muted-foreground transition-all duration-100 ease-linear md:-translate-x-3 md:opacity-0 md:group-hover:translate-x-0 md:group-hover:opacity-100"
    />
  </Link>
)

export const DevlopementSection = () => {
  return (
    <AnimatedSection>
      <Heading2>Setup, Roadmaps & Study Resources</Heading2>
      <div className="mt-4 w-full items-center space-y-3">
        {resources.map(({ icon, title, description, href }) => (
          <LinkTab
            icon={icon}
            title={title}
            description={description}
            href={href}
            key={title}
          />
        ))}
      </div>
    </AnimatedSection>
  )
}
