import { cn } from "cn"

export const Heading2 = ({
  className,
  ...props
}: React.ComponentProps<"h2"> & {
  className?: string
}) => (
  <h2
    className={cn(
      "mt-17! font-heading text-[32px] font-bold tracking-tight text-foreground",
      className
    )}
    {...props}
  />
)
