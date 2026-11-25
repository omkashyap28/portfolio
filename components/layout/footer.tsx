import { SocialLinks } from "@/components/layout/social-links"

export const Footer = () => {
  return (
    <footer className="relative mt-10 flex flex-col items-center justify-center gap-y-10 border-t py-10 text-sm sm:mt-20">
      <SocialLinks />
      <p className="mb-10 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Design & Develop by Hariom Kashyap.
      </p>
    </footer>
  )
}
