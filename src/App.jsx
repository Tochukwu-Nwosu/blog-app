import NotFound from "./components/NotFound"
import NewBlog from "./components/NewBlog"
import Blogs from "./components/Blogs"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from "react"

const App = () => {
  const [ darkMode, setdarkMode ] = useState(false)

  return (
    <Router>
      <div className={ darkMode ? `dark bg-slate-950` : undefined }>
        <NavBar darkMode={darkMode} setdarkMode={setdarkMode} />
        <main className="max-w-[1024px] px-4 py-8 mx-auto">
          <Routes>
            <Route index element={<Home />} />
            <Route path='/blogs/:id' element={<Blogs />} />
            <Route path='/create' element={<NewBlog />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        {/* footer */}
      </div>
    </Router>
  )
}

export default App
