import React, {useState, useEffect} from 'react'
import './navBar.css'
import {Link} from 'react-scroll'

import Resume from "../../assets/resume.pdf"
const NavBar = () => {
  const [navigateTo, setNavigateTo] = useState(null);
  const [downloadResume, setDownloadResume] = useState(false);
  
  useEffect(() =>{
    if (navigateTo){
      window.location.href = navigateTo;
    }
  }, [navigateTo]);

  useEffect(() => {
    if (downloadResume) {
      const link = document.createElement('a');
      link.href = Resume; 
      link.download = 'ArushiGarhwal.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloadResume(false); 
    }
  }, [downloadResume]);
  return (
    <div>
      <nav className='navbar'>
        <div className='nav'>
          <Link className='items' onClick={() => setNavigateTo('/')}>Home</Link>
          <Link className='items' onClick={() => setNavigateTo('/aboutme')}>About Me</Link>
          <Link className='items' onClick={() => setNavigateTo('/projects')}>Projects</Link>
        </div>
        <button className='resume' onClick={() => setDownloadResume(true)}>Resume</button>
        </nav>
    </div>
  )
}

export default NavBar
