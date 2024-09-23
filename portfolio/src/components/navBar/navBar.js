import React from 'react'
import './navBar.css'
import {Link} from 'react-scroll'
const NavBar = () => {
  return (
    <div>
      <nav className='navbar'>
        <div className='nav'>
          <Link className='items'>Home</Link>
          <Link className='items'>About Me</Link>
          <Link className='items'>Projects</Link>
        </div>
        <button className='resume'>Resume</button>
      </nav>
    </div>
  )
}

export default NavBar
