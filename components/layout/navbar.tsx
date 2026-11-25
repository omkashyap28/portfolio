import Link from "next/link"
import { Container } from "./container"
import { ThemeButton } from "./theme-button"

const NAVIGATION_LINKS = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Resume",
    href: "/resume",
  },
]

export const Navbar = () => {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-9 h-14 w-full bg-transparent sm:top-3 sm:h-12">
      <Container className="pointer-events-auto flex h-full items-center justify-between bg-background/70 backdrop-blur-sm sm:rounded-lg sm:border sm:px-2! sm:shadow">
        <nav className="flex scroll-fade-r scrollbar-none items-center gap-x-3 overflow-x-auto pl-2 font-semibold sm:gap-x-4">
          {NAVIGATION_LINKS.map(({ href, title }) => (
            <Link
              href={href}
              className="text-sm text-muted-foreground transition-all duration-150 hover:text-foreground"
              key={title}
            >
              {title}
            </Link>
          ))}
        </nav>
        <ThemeButton />
      </Container>
    </header>
  )
}
