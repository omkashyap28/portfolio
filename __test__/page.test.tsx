import { render, screen } from "@testing-library/react"
import Page from "@/app/(root)/page"

describe("Page", () => {
  it("renders a heading", () => {
    render(<Page />)

    expect(screen.getByRole("heading")).toBeInTheDocument()
  })
})
