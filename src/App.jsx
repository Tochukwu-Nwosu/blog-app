import NotFound from "./components/NotFound"
import Footer from "./components/Footer"
import NewBlog from "./components/NewBlog"
import Blogs from "./components/Blogs"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from "react"


const App = () => {
  
  const [ theme, setTheme ] = useState(() => {
    /* This function assigns the value of 'theme' in the localstorage to the theme variable if 'theme' key exist, 
       if not it assigns 'light' to the theme variable.
       This makes the theme persistent even when refreshed.
    */
    let initialTheme = localStorage.getItem('theme')
    initialTheme = initialTheme ? initialTheme : 'light'
    return initialTheme
  })
  
  const toggleTheme = () => {
    /* This function sets the localstorage 'theme' to the opposite value of the current theme variable and updates the theme variable.  */
    setTheme((prevTheme) => {
      let newTheme = prevTheme === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', newTheme)
      return newTheme
    })  
  }
  
  console.log(theme)
  // console.log(document.documentElement)

  return (
    <Router>
      <div className={ `w-full min-h-screen relative ${ theme === 'dark' ? ` dark bg-slate-950` : ` bg-white` }` }>
        <NavBar theme={theme} toggleTheme={toggleTheme} />
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
