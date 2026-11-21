import { cn } from "cn"
import { ReactNode } from "react"

type Props = {
  children: ReactNode
  className?: string
}

export const Container = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        "relative container mx-auto w-full max-w-lg max-sm:px-4",
        className
      )}
    >
      {children}
    </div>
  )
}
