import { cn } from "cn"

type Props = React.ComponentProps<"div"> & {
  className?: string
}
export const Container = ({ className, ...props }: Props) => (
  <div
    className={cn(
      "relative container mx-auto w-full max-w-xl max-sm:px-4",
      className
    )}
    {...props}
  />
)
