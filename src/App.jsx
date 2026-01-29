import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Tasks from './Pages/Tasks';


function App() {
  return (
     <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Tasks" element={<Tasks/>}
           />
        </Routes>
      </main>
    </BrowserRouter>

  )
}

export default App