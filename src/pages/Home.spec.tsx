import { fireEvent, render, screen } from "@testing-library/react"
import Home from "./Home"

describe("Counter", () => {
  describe("initialized with initalCount=0 and description='My Counter'", () => {
    const renderHome = () =>
      render(<Home defaultCount={0} descrpiton="My Counter" />)

    it("renders current count=0 ", () => {
      renderHome()
      expect(screen.getByText("Count: 0")).toBeInTheDocument()
    })

    it("renders a title my counter", () => {
      renderHome()
      const el = screen.getByText(/my counter/i)
      expect(el).toBeInTheDocument()
    })

    describe("when + button is clicked", () => {
      it("defaultCount=0, and + clicked the counter = 1", () => {
        renderHome()
        const incrementButton = screen.getByRole("button", {
          name: /increment counter button/i,
          hidden: true,
        })
        fireEvent.click(incrementButton)
        expect(screen.getByText("Count: 1")).toBeInTheDocument()
        expect(incrementButton).toBeInTheDocument()
      })
    })

    it("defaultCount=0, and - clicked the counter = -1", () => {
      renderHome()
      fireEvent.click(screen.getByRole("button", { name: "-" }))
      expect(screen.getByText("Count: -1")).toBeInTheDocument()
    })
  })
})
