import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "../ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

const contactTypes = [
  {
    label: "Who you are",
    value: null,
  },
  {
    label: "HR",
    value: "hr",
  },
  {
    label: "Freelancer",
    value: "freelancer",
  },
  {
    label: "Collaborator",
    value: "collaborator",
  },
  {
    label: "Other",
    value: "other",
  },
]

export const ContactForm = () => {
  return (
    <form className="pointer-events-auto mt-7 rounded-lg border bg-card/50 p-4 shadow-sm sm:p-6">
      <FieldSet>
        <FieldLegend className="mb-1 text-xl">Send a message</FieldLegend>
        <FieldDescription>
          All fields are required except for your phone number.
        </FieldDescription>
        <FieldGroup className="gap-5">
          <Field>
            <FieldLabel htmlFor="contact-type">Who are you?</FieldLabel>
            <Select items={contactTypes}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {contactTypes.map(({ label, value }) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>

          <Field>
            <FieldLabel htmlFor="contact-name">Name</FieldLabel>
            <Input
              id="contact-name"
              name="name"
              placeholder="Your name"
              autoComplete="name"
              required
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="contact-email">Email</FieldLabel>
            <Input
              id="contact-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="contact-phone">
              Phone number{" "}
              <span className="font-normal text-muted-foreground">
                (optional)
              </span>
            </FieldLabel>
            <InputGroup>
              <InputGroupInput
                id="contact-phone"
                name="phone"
                type="tel"
                placeholder="1234567890"
                autoComplete="tel"
              />
              <InputGroupAddon>+91</InputGroupAddon>
            </InputGroup>
          </Field>

          <Field className="sm:col-span-2">
            <FieldLabel htmlFor="contact-message">Message</FieldLabel>
            <Textarea
              id="contact-message"
              name="message"
              placeholder="Tell me a little about what you have in mind..."
              rows={6}
              required
            />
          </Field>
        </FieldGroup>
        <div className="mt-7">
          <Button type="submit" className="pointer-events-auto w-full!">
            Send message
          </Button>
        </div>
      </FieldSet>
    </form>
  )
}
