import dynamic from "next/dynamic"
import { Hero } from "@/components/home/hero"
import { RecentWorksSection } from "@/components/home/recent-works"
import { Spinner } from "@/components/ui/spinner"

const AboutSection = dynamic(
  () => import("@/components/home/about").then((comp) => comp.AboutSection),
  {
    loading: () => <Spinner />,
  }
)

const DevlopementSection = dynamic(
  () =>
    import("@/components/home/development").then(
      (comp) => comp.DevlopementSection
    ),
  {
    loading: () => <Spinner />,
  }
)

const Page = () => {
  return (
    <div className="pointer-events-auto w-full">
      <Hero />
      <RecentWorksSection />
      <AboutSection />
      <DevlopementSection />
    </div>
  )
}

export default Page
