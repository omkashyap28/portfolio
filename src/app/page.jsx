import { Container } from "./components";
import { Hero, Projects, About, Other, Cta } from "./ui";
export default function Home() {
  return (
    <Container>
      <Hero />
      <Projects />
      <About />
      <Other />
      <Cta />
    </Container>
  )
}