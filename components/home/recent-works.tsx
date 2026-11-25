import { Heading2 } from "../layout/heading-2"
import { ProjectCard } from "../layout/project-card"
import { AnimatedSection } from "../layout/section"
import { projectData } from "@/constants"

export const RecentWorksSection = () => {
  return (
    <AnimatedSection
      className="pointer-events-auto mt-16"
      aria-labelledby="works-heading"
    >
      <Heading2 id="works-heading">Recent Works</Heading2>
      <div className="mt-4 space-y-4 gap-x-2 sm:columns-2">
        {projectData.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </AnimatedSection>
  )
}
