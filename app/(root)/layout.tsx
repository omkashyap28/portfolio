import { Container } from "@/components/layout/container"
import { Fade } from "@/components/layout/fade"
import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"
import { Particles } from "@/components/layout/particles"
import { Quotes } from "@/components/layout/quotes"
import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

const PublicLayout = ({ children }: Props) => {
  return (
    <Container>
      <Navbar />
      <main className="pointer-events-auto h-auto w-full bg-background/5 pt-26 backdrop-blur-xs">
        {children}
        <Quotes />
        <Footer />
      </main>
      <Fade />
      <Particles />
    </Container>
  )
}

export default PublicLayout
