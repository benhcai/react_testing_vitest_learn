import { fireEvent, render, screen } from "@testing-library/react"
import user from "@testing-library/user-event"
import { vi } from "vitest"
import Home from "./Home"

describe("Counter", () => {
  describe("initialized with initalCount=0 and description='My Counter'", () => {
    const renderHome = () =>
      render(<Home defaultCount={0} description="My Counter" />)

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

    describe("when the incrementor is changed to 15 and add button is clicked", () => {
      it("renders 'count: 15'", async () => {
        renderHome()
        const input = screen.getByRole("spinbutton")
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        await user.type(input, "{selectall}15")
        await user.click(screen.getByRole("button", { name: "Add to Counter" }))
        await user.tab()
        expect(screen.getByText("Count: 15")).toBeInTheDocument()
        // expect(screen.getByText("count: 15")).toBeInTheDocument()
      })
    })

    describe("when the incrementor is changed to 15 and subtract button is clicked", () => {
      it("renders 'count: 15'", async () => {
        renderHome()
        const input = screen.getByLabelText(/incrementor/i)
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        await user.type(input, "{selectall}15")
        await user.click(
          screen.getByRole("button", { name: "Subtract from Counter" })
        )
        // await user.tab()
        expect(screen.getByText("Count: -15")).toBeInTheDocument()
        // expect(screen.getByText("count: 15")).toBeInTheDocument()
      })
    })
  })
})

describe("Todo", () => {
  it("should accepts values for the new todo ", async () => {
    render(<Home defaultCount={0} description="" />)
    const Input = screen.getByLabelText(/add todo/i)
    await user.type(Input, "a new todo")
    expect(Input).toHaveValue("a new todo")
  })
})
