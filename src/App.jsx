import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Tasks from './Pages/Tasks';


function App() {
  return (
     <BrowserRouter>
      <NavBar/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Tasks" element={<Tasks/>}
           />
        </Routes>
      </main>
      <footer className="footer">
        <p>DoIt! - Stay Productive</p>
      </footer>
    </BrowserRouter>

  )
}

export default App