import { Container } from "@/components/layout/container"
import { Navbar } from "@/components/layout/navbar"
import { Particles } from "@/components/layout/particles"
import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

const PublicLayout = ({ children }: Props) => {
  return (
    <Container>
      <Navbar />
      {children}
      <Particles />
    </Container>
  )
}

export default PublicLayout
