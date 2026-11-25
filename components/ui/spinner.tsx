import { cn } from "cn"
import { HugeiconsIcon } from "@hugeicons/react"
import { Loading03Icon } from "@hugeicons/core-free-icons"

function Spinner({
  className,
  ...props
}: Omit<React.ComponentProps<"svg">, "strokeWidth"> & {
  strokeWidth?: number
}) {
  return (
    <div className="flex h-76 w-full items-center justify-center">
      <HugeiconsIcon
        icon={Loading03Icon}
        strokeWidth={2}
        data-slot="spinner"
        role="status"
        aria-label="Loading"
        className={cn("size-4 animate-spin", className)}
        {...props}
      />
    </div>
  )
}

export { Spinner }
