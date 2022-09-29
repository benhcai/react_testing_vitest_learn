import { useState } from "react"

interface Props {
  defaultCount: number
  description: string
}

function Home({ defaultCount, description }: Props) {
  const [count, setCount] = useState(defaultCount)
  const [incrementor, setIncrementor] = useState(0)
  const [todoVal, setTodoVal] = useState("")

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
      <label htmlFor="incrementor">
        incrementor
        <input
          id="incrementor"
          type="number"
          value={incrementor.toString()}
          onChange={(e) => setIncrementor(parseInt(e.target.value, 10) || 0)}
        />
      </label>
      <button
        type="button"
        onClick={() => setCount((prev) => prev + incrementor)}
      >
        Add to Counter
      </button>
      <button
        type="button"
        onClick={() => setCount((prev) => prev - incrementor)}
      >
        Subtract from Counter
      </button>
      <input
        type="text"
        aria-label="Add Todo"
        required
        value={todoVal}
        onChange={(e) => setTodoVal(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </div>
  )
}

export default Home
