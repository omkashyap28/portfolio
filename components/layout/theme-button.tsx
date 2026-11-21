"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Button } from "../ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons"

export const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme()

  const [resolved, setResolved] = useState<boolean>(false)

  useEffect(() => {
    ;(() => setResolved(true))()
  }, [])

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
