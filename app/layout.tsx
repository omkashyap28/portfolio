import { Geist_Mono, Nunito_Sans, IBM_Plex_Sans } from "next/font/google"

import "./globals.css"
import { cn } from "cn"
import { RootProvider } from "@/components/providers"
import { Metadata } from "next"
import { ReactNode } from "react"

const ibmPlexSansHeading = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
})

const nunitoSans = Nunito_Sans({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: {
    template: "%s - Hariom Kashyap",
    default: "Home - Hariom Kashyap",
  },
  description: "",
}

type Props = {
  children: Readonly<ReactNode>
}

const RootLayout = ({ children }: Props) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        nunitoSans.variable,
        ibmPlexSansHeading.variable
      )}
    >
      <body cz-shortcut-listen="false">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}

export default RootLayout
