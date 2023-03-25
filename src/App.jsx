import { useState } from 'react'
import './App.css'
import { Alert } from './components/Alert'

import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom"
import Navbar  from './components/Navbar'
import { Home } from './components/Home'
import { About } from './components/About'
import NoteState from './context/Notes/NoteState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NoteState>
        {/* <Home /> */}
        <Router>
          <Navbar />
          <Alert message={"This is amazing react Course"} />
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  )
}

export default App
