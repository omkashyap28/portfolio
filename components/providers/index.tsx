import { ReactNode } from "react"
import { ThemeProvider } from "./theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"

export const RootProvider = ({ children }: { children: ReactNode }) => {
  return (
    <TooltipProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </TooltipProvider>
  )
}
