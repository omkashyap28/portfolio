"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Repos() {
  const [repos, setRepos] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const displayedRepos = showAll ? repos : repos.slice(0, 5);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(
          "https://api.github.com/users/omkashyap28/repos"
        );
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("Failed to fetch repos:", error);
      }
    }

    fetchRepos();
  }, []);

  return (
    <div>
      {displayedRepos.map(
        ({ id, created_at, name, language, html_url }) => (
          <div key={id}>
            <Link
              href={html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col sm:flex-row sm:items-center justify-between p-2 my-2 rounded hover:bg-neutral-100 transition"
            >
              <div>
                <span className="font-medium text-neutral-800 underline">{name}</span>
                {language && (
                  <span className="ml-2 text-xs text-neutral-400">
                    {language}
                  </span>
                )}
              </div>
              <span className="text-xs text-neutral-500">
                {new Date(created_at).toLocaleDateString()}
              </span>
            </Link>
          </div>
        )
      )}

      <button
        className="mt-2 flex items-center gap-2 text-blue-600 hover:underline"
        onClick={() => setShowAll(showAll => !showAll)}
      >
        {repos.length > 5 ? "Show all" : "Show less"}
      </button>
    </div>
  );
}
