import React, { useState, useEffect } from 'react';
import './navBar.css';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';
import Resume from "../../assets/resume.pdf";

const NavBar = () => {
  const [navigateTo, setNavigateTo] = useState(null);
  const [downloadResume, setDownloadResume] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (navigateTo) {
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

  const handleMobileClick = (path) => {
    setNavigateTo(path);
    setShowMenu(false); 
  };

  return (
    //<div className='navDiv'>
      <nav className='navbar'>
        <div className='nav'>
          <Link className='items' onClick={() => setNavigateTo('/')}>Home</Link>
          <Link className='items' onClick={() => setNavigateTo('/aboutme')}>About Me</Link>
          <Link className='items' onClick={() => setNavigateTo('/projects')}>Projects</Link>
        </div>
        <Link className='items' id='logo' onClick={() => setNavigateTo('/')}>ArushiGarhwal</Link>
        <button className='resume' onClick={() => setDownloadResume(true)}>Resume</button>
        <img src={menu} alt='Menu' className='menu' onClick={() => setShowMenu(!showMenu)} />
        <div className='mobileNav' style={{ display: showMenu ? 'flex' : 'none' }}>
          <Link className='mobile-items' onClick={() => handleMobileClick('/')}>Home</Link>
          <Link className='mobile-items' onClick={() => handleMobileClick('/aboutme')}>About Me</Link>
          <Link className='mobile-items' onClick={() => handleMobileClick('/projects')}>Projects</Link>
          <Link className='mobile-items' onClick={() => { setDownloadResume(true); setShowMenu(false); }}>Resume</Link>
        </div>
      </nav>
 //   </div>
  );
};

export default NavBar;
