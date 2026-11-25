import { Heading1 } from "@/components/layout/heading-1"
import { AnimatedSection } from "@/components/layout/section"
import { Metadata } from "next"
import { projectData } from "@/constants"
import { ProjectCard } from "@/components/layout/project-card"

export const metadata: Metadata = {
  title: "Projects",
}

const ProjectPage = () => {
  return (
    <AnimatedSection>
      <Heading1>Projects</Heading1>
      <p className="mb-8 max-w-xl text-sm text-muted-foreground">
        Explore the collection of my recent works
      </p>
      <div className="mt-8 space-y-4 gap-x-2 sm:columns-2">
        {projectData.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </AnimatedSection>
  )
}

export default ProjectPage
