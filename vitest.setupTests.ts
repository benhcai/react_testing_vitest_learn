import matchers from "@testing-library/jest-dom/matchers"
import { expect, beforeEach, beforeAll } from "vitest"
import { configure } from "@testing-library/react"

beforeAll(() => {
  console.clear()
})

expect.extend(matchers)
// configure({ showOriginalStackTrace: false })
