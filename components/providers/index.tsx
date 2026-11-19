import { ReactNode } from "react"
import { ThemeProvider } from "./theme-provider"

export const RootProvider = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}
