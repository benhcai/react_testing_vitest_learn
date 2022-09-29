import matchers from "@testing-library/jest-dom/matchers"
import { expect } from "vitest"
import { configure } from "@testing-library/react"

expect.extend(matchers)
configure({ showOriginalStackTrace: false })
