import { Contact, Footer, Hero, Projects } from "./ui";
import { Blur } from "./components";

export default function Home() {
  return (
    <>
      <Hero />
      <Blur />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}