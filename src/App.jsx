import NotFound from "./components/NotFound"
import Footer from "./components/Footer"
import NewBlog from "./components/NewBlog"
import Blogs from "./components/Blogs"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <Router>
      <div className="w-full min-h-screen relative dark:bg-slate-950 bg-white">
        <NavBar />
        <main className="max-w-[1024px] px-4 py-8 mx-auto">
          <Routes>
            <Route index element={<Home />} />
            <Route path='/blogs/:id' element={<Blogs />} />
            <Route path='/create' element={<NewBlog />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App