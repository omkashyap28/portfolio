"use client"

import { useState, useEffect } from "react"
import { AnimatedSection } from "./section"
import { quotes } from "@/constants/quotes"
import { Button } from "../ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { Refresh01Icon } from "@hugeicons/core-free-icons"

export const Quotes = () => {
  const [currentQuote, setCurrentQuote] = useState(0)

  const updateQuote = () => {
    setCurrentQuote(Math.floor(Math.random() * quotes.length))
  }

  useEffect(() => {
    ;(() => updateQuote())()
  }, [])

  const quote = quotes[currentQuote]

  return (
    <AnimatedSection className="mt-18 border-t pt-18">
      <div className="group relative w-full overflow-hidden rounded-lg border border-dashed bg-card px-6 py-8 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-border hover:shadow">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 top-0 left-10 bg-top-left bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url(/quotes.png)",
          }}
        />

        <Button
          size="icon-sm"
          variant="outline"
          className="absolute top-4 right-4 z-11"
          onClick={updateQuote}
        >
          <HugeiconsIcon icon={Refresh01Icon} />
        </Button>

        <div className="relative z-10">
          <span className="font-serif text-[15px] leading-relaxed font-semibold text-muted-foreground italic">
            # {quote.category}
          </span>

          <p
            key={quote.id}
            className="mt-3 font-serif text-lg leading-relaxed text-muted-foreground italic"
          >
            {quote.content}
          </p>

          <div className="mt-6 flex items-center justify-end gap-4">
            <span className="text-sm font-medium text-foreground">
              — {quote.author}
            </span>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
