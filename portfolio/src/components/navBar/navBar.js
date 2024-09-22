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
        <button className='contactme'>Contact Me</button>
      </nav>
    </div>
  )
}

export default NavBar
