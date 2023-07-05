import NavBar from "./components/NavBar"
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
      </div>
    </Router>
  )
}

export default App
