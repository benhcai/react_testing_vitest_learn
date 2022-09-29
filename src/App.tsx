import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <div id="App">
      <Routes>
        <Route
          path="/"
          element={<Home defaultCount={0} description="My Counter" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

function RoutedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

export { App, RoutedApp }
