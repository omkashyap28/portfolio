import { Heading1 } from "@/components/layout/heading-1"
import { AnimatedSection } from "@/components/layout/section"
import { ContactForm } from "@/components/contact/contact-form"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Me",
}

const ContactPage = () => {
  return (
    <AnimatedSection className="pointer-events-auto">
      <Heading1>Contact Me</Heading1>
      <p className="mb-8 max-w-xl text-sm text-muted-foreground">
        Have a project, opportunity, or idea to discuss? Send me a message and
        I’ll get back to you.
      </p>
      <ContactForm />
    </AnimatedSection>
  )
}

export default ContactPage
