"use client"

import { useTheme } from "next-themes"
import "react-activity-calendar/tooltips.css"
import { GitHubCalendar } from "react-github-calendar"
import { useState, useEffect } from "react"

export const GithubCard = () => {
  const { resolvedTheme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ;(() => setMounted(true))()
  }, [])

  return (
    <article className="mt-9">
      <h3 className="mb-5 font-heading text-lg font-semibold tracking-widest">
        Github Activity
      </h3>
      {mounted && (
        <GitHubCalendar
          username="omkashyap28"
          blockSize={9}
          blockMargin={3}
          colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
          tooltips={{
            activity: {
              text: ({ level, date }) =>
                `${level} activities on ${new Date(date).toLocaleDateString("en-GB")}`,
            },
            colorLegend: {
              text: (level) => `Activity level ${level + 1}`,
            },
          }}
        />
      )}
    </article>
  )
}
