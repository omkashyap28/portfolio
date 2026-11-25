"use server"

import { ChevronDownIcon, ExternalLink } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Image from "next/image"
import Link from "next/link"

type GithubRepoData = {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  updated_at: string
  language: string | null
  languages_url: string
  contributors_url: string
}

type GithubLanguage = Record<string, number>

type GithubContributor = {
  id: number
  login: string
  avatar_url: string
  html_url: string
  contributions: number
}

type GithubRepository = GithubRepoData & {
  languages: GithubLanguage
  contributors: GithubContributor[]
}

const GITHUB_USERNAME = "omkashyap28"

const githubHeaders: HeadersInit = {
  Accept: "application/vnd.github+json",
  ...(process.env.GITHUB_TOKEN && {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  }),
}

async function fetchGithub<T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(url, {
      headers: githubHeaders,
      next: {
        revalidate: 3600,
      },
    })

    if (!response.ok) {
      console.error(`GitHub API error: ${response.status} - ${url}`)
      return null
    }

    return (await response.json()) as T
  } catch (error) {
    console.error("GitHub fetch error:", error)
    return null
  }
}

const formatDate = (date: string) => {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date))
}

const getGithubRepositories = async (): Promise<GithubRepository[]> => {
  const repos = await fetchGithub<GithubRepoData[]>(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc&per_page=100&type=owner`
  )

  if (!repos) return []

  const repositories = await Promise.all(
    repos.map(async (repo) => {
      const [languages, contributors] = await Promise.all([
        fetchGithub<GithubLanguage>(repo.languages_url),
        fetchGithub<GithubContributor[]>(`${repo.contributors_url}?per_page=5`),
      ])

      return {
        ...repo,
        languages: languages ?? {},
        contributors: contributors ?? [],
      }
    })
  )

  return repositories
}

export const GithubRepo = async () => {
  const repositories = await getGithubRepositories()

  if (!repositories.length) {
    return (
      <div className="rounded-xl border p-6 text-center">
        <p className="text-sm text-muted-foreground">
          Unable to load GitHub repositories.
        </p>
      </div>
    )
  }

  return (
    <section className="w-full space-y-4">
      <div className="space-y-2">
        {repositories.map((repo) => {
          const languageEntries = Object.entries(repo.languages)

          const totalBytes = languageEntries.reduce(
            (total, [, bytes]) => total + bytes,
            0
          )

          return (
            <details
              key={repo.id}
              className="peer group rounded-lg border bg-linear-to-t from-card/50 to-card/80 backdrop-blur-sm transition-all duration-200 hover:border-primary/40 focus:ring-2 focus:ring-ring/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-4 py-2 [&::-webkit-details-marker]:hidden">
                <div className="min-w-0 space-y-px">
                  <h3 className="truncate font-medium">{repo.name}</h3>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <span>Updated {formatDate(repo.updated_at)}</span>

                    {repo.language && (
                      <span className="flex items-center gap-1.5">
                        <span className="size-2 rounded-full bg-primary" />
                        {repo.language}
                      </span>
                    )}
                  </div>
                </div>

                <HugeiconsIcon
                  icon={ChevronDownIcon}
                  className="text-muted-foreground transition-transform duration-300 group-open:-rotate-180"
                  size={16}
                />
              </summary>

              <div className="space-y-5 border-t px-4 py-5">
                <div className="space-y-1.5">
                  <h4 className="text-sm font-medium">About</h4>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {repo.description || "No description available."}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="flex items-center gap-1 text-sm font-medium">
                    Languages
                  </h4>

                  {languageEntries.length > 0 ? (
                    <>
                      <div className="flex h-2 overflow-hidden rounded-full bg-muted">
                        {languageEntries.map(([language, bytes]) => (
                          <div
                            key={language}
                            title={language}
                            className="h-full bg-primary"
                            style={{
                              width: `${(bytes / totalBytes) * 100}%`,
                              opacity: 0.4 + (bytes / totalBytes) * 0.6,
                            }}
                          />
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-x-4 gap-y-2">
                        {languageEntries.map(([language, bytes]) => (
                          <div
                            key={language}
                            className="flex items-center gap-1.5 text-xs text-muted-foreground"
                          >
                            <span className="size-2 rounded-full bg-primary" />
                            <span>{language}</span>
                            <span>
                              {Math.round((bytes / totalBytes) * 100)}%
                            </span>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <p className="text-xs text-muted-foreground">
                      No language information available.
                    </p>
                  )}
                </div>

                <div className="space-y-3">
                  <h4 className="flex items-center gap-1 text-sm font-medium">
                    Contributors
                  </h4>

                  {repo.contributors.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {repo.contributors.map((contributor) => (
                        <Link
                          key={contributor.id}
                          href={contributor.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`${contributor.login} - ${contributor.contributions} contributions`}
                          className="flex items-center gap-2 rounded-full border py-1 pr-3 pl-1 transition-colors hover:bg-muted"
                        >
                          <Image
                            src={contributor.avatar_url || ""}
                            alt={contributor.login}
                            width={28}
                            height={28}
                            className="size-7 rounded-full"
                          />

                          <span className="text-sm font-medium">
                            {contributor.login}
                          </span>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-muted-foreground">
                      No contributor information available.
                    </p>
                  )}
                </div>

                <div className="border-t border-dashed border-border pt-4">
                  <Link
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-opacity hover:opacity-80"
                  >
                    View repository on GitHub
                    <HugeiconsIcon
                      icon={ExternalLink}
                      size={18}
                      strokeWidth={1}
                    />
                  </Link>
                </div>
              </div>
            </details>
          )
        })}
      </div>
    </section>
  )
}
