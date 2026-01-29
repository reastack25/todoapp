import { useState } from 'react'
import NavBar from "./Components/NavBar/NavBar"

function App() {
  const [view, setView] = useState("home")
  return (
    <div className='app'>
      <NavBar setView={setView}/>

      {view === "home" && (
        <div className='container'>
          <h1>To-Do App</h1>
          <p></p>
        </div>
      )}

      {view === "todo" && (
        <div className='container'>
        </div>
      )}

      {view === "about" && (
        <div className='container'>
          <h2>About</h2>
          <p></p>
        </div>
      )}
    </div>
  )
}

export default App
