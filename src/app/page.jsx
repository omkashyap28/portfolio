import { Footer, Hero, Projects, About, Other, Cta } from "./ui";
import { Blur } from "./components";

export default function Home() {
  return (
    <>
      <Hero />
      <Blur />
      <Projects />
      <About />
      <Other />
      <Cta />
    </>
  )
}