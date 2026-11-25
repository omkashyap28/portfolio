import { Container } from "./container"

export const Fade = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none fixed inset-x-0 bottom-0 z-2 h-22 w-full"
  >
    <Container className="h-full">
      <div className="h-full w-full bg-linear-to-t from-background to-transparent" />
    </Container>
  </div>
)
