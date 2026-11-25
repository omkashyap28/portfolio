import { HugeiconsIcon } from "@hugeicons/react"
import {
  FigmaIcon,
  GithubIcon,
  InstagramIcon,
  Linkedin01Icon,
  Mail01Icon,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons"
import Link from "next/link"

const links = [
  {
    icon: InstagramIcon,
    label: "Instagram",
    url: "https://www.instagram.com/omkashyap28",
  },
  {
    icon: Linkedin01Icon,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/omkashyap28",
  },
  {
    icon: NewTwitterIcon,
    label: "X",
    url: "https://x.com/om_kashyap28",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    url: "https://github.com/omkashyap28",
  },
  {
    icon: Mail01Icon,
    label: "Email",
    url: "mailto:omkashyap6870@gmail.com",
  },
  {
    icon: FigmaIcon,
    label: "Figma",
    url: "https://www.figma.com/@hariom7",
  },
] as const

export const SocialLinks = () => {
  return (
    <nav
      aria-label="Social profiles"
      className="pointer-events-auto mt-4 flex items-center gap-6 text-muted-foreground"
    >
      {links.map(({ icon, label, url }) => (
        <Link
          key={label}
          href={url}
          aria-label={label}
          target="_blank"
          rel={label === "Email" ? undefined : "noopener noreferrer"}
          className="grid size-4 place-items-center rounded-md transition-transform hover:text-foreground"
        >
          <HugeiconsIcon icon={icon} size={26} strokeWidth={1} />
        </Link>
      ))}
    </nav>
  )
}
