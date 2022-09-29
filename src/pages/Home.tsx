import { useState } from "react"

function Home() {
  const [count, setCount] = useState(0)
  return (
    <div>
      My Counter
      <h1>Count: {count}</h1>
      <button type="button" onClick={() => setCount((prev) => prev - 1)}>
        -
      </button>
      <button
        aria-label="increment counter button"
        type="button"
        onClick={() => setCount((prev) => prev + 1)}
      >
        +
      </button>
    </div>
  )
}

export default Home
