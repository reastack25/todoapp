import React from 'react'

function NavBar({ setView }) {
  return (
    <div className='navbar'>
      <button onClick={() => setView("home")}>Home</button>
      <button onClick={() => setView("about")}>About</button>
      <button onClick={() => setView("todo")}>ToDo</button>
    </div>
  )
}

export default NavBar
