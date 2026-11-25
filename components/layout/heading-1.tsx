import { cn } from "cn"

export const Heading1 = ({
  className,
  ...props
}: React.ComponentProps<"h1"> & { className?: string }) => (
  <h1
    className={cn(
      "mb-1 font-heading text-4xl font-semibold tracking-tight",
      className
    )}
    {...props}
  />
)
