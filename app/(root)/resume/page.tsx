import { Heading1 } from "@/components/layout/heading-1"
import { Metadata } from "next"
import { AnimatedSection } from "@/components/layout/section"
import { PdfViewer } from "@/components/resume/pdf-viewer"

export const metadata: Metadata = {
  title: "View | Download my resume",
}

const ResumePage = () => {
  return (
    <AnimatedSection>
      <Heading1>Resume</Heading1>
      <p className="mb-8 max-w-xl text-sm text-muted-foreground">
        View | Download my professional Resume/CV
      </p>
      <PdfViewer />
    </AnimatedSection>
  )
}

export default ResumePage
