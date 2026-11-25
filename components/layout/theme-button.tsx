"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Button } from "../ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons"

const META_THEME = {
  light: "#FFFFFF",
  dark: "#090b0c",
}

export const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme()

  const [resolved, setResolved] = useState<boolean>(false)

  useEffect(() => {
    ;(() => setResolved(true))()
  }, [])

  useEffect(() => {
    if (!resolvedTheme) return
    const theme = META_THEME[resolvedTheme as "light" | "dark"]

    let meta = document.querySelector("meta[name='theme-color']")

    if (!meta) {
      meta = document.createElement("meta")
      meta.setAttribute("name", "theme-color")
      document.head.append(meta)
    }

    meta.setAttribute("content", theme)
  }, [resolvedTheme])

  if (!resolved) return

  const changeTheme = () => {
    if (resolvedTheme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  return (
    <Button size="icon-sm" variant="ghost" onClick={changeTheme}>
      <HugeiconsIcon
        icon={resolvedTheme === "dark" ? Sun03Icon : Moon02Icon}
        size={24}
        color="currentColor"
        strokeWidth={1.5}
      />
    </Button>
  )
}
